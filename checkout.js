/* ============================================================
   ALEJANDRA VERGEL · checkout.js
   Maneja el flujo de pago con Wompi
   ============================================================ */

/* ⬇️ URL base de las Netlify Functions (repo av-functions).
   · Si el sitio está en GitHub Pages (alejandravergel.com), aquí DEBE ir la URL
     ABSOLUTA de tu sitio de Netlify, p.ej: "https://av-functions.netlify.app"
   · Si algún día mueves TODO el sitio a Netlify, déjalo vacío ("").
   Mientras esté vacío o el backend no responda, el checkout usa WhatsApp como
   respaldo para que ningún pedido se pierda. */
const FUNCTIONS_BASE = "https://radiant-lamington-bd56f7.netlify.app"; // Wompi integration
const WOMPI_API = (FUNCTIONS_BASE || '') + '/.netlify/functions/wompi-pay';
const WOMPI_CHECKOUT_URL = 'https://checkout.wompi.co/p/';
const WA_NUMBER = (typeof CONFIG !== 'undefined' && CONFIG.whatsapp) ? CONFIG.whatsapp : '573228505472';

/* Respaldo: arma el pedido y abre WhatsApp con todo el detalle */
function checkoutViaWhatsApp(data){
  const cart = getCart();
  const lines = cart.map(i => `• ${i.qty}× ${i.name}${i.color ? ' ('+i.color+')' : ''} — ${money(i.price*i.qty)}`).join('%0A');
  const desc = (data.discount ? `%0ADescuento Club: ${data.discount}%25` : '');
  const msg =
    `¡Hola Alejandra Vergel! Quiero finalizar mi compra:%0A%0A${lines}${desc}` +
    `%0A%0A*Total: ${money(data.finalTotal)}*` +
    `%0A%0AMis datos:%0ANombre: ${encodeURIComponent(data.name)}` +
    `%0ACorreo: ${encodeURIComponent(data.email)}` +
    `%0ATeléfono: ${encodeURIComponent(data.phone)}` +
    (data.couponCode ? `%0ACódigo: ${encodeURIComponent(data.couponCode)}` : '');
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}

let checkoutState = {
  email: null,
  name: null,
  phone: null,
  couponCode: null,
  total: 0
};

function initCheckout() {
  const form = $("#checkoutForm");
  if (!form) return;

  form.onsubmit = async (e) => {
    e.preventDefault();
    await submitCheckout();
  };

  // Validar código de descuento en tiempo real
  const couponInput = $("#couponCode");
  if (couponInput) {
    couponInput.addEventListener("blur", async () => {
      const code = couponInput.value?.trim();
      if (code) {
        const result = await validateCoupon(code);
        if (result.valid) {
          $("#discountInfo").style.display = "block";
          $("#discountAmount").textContent = result.discount + "%";
          showToast("✓ Código válido: " + result.discount + "% descuento");
        } else {
          $("#discountInfo").style.display = "none";
          showToast("✗ " + (result.error || "Código no válido"));
          couponInput.value = "";
        }
      }
    });
  }
}

async function submitCheckout() {
  const email = $("#email")?.value?.trim();
  const name = $("#name")?.value?.trim();
  const phone = $("#phone")?.value?.trim();
  const couponCode = $("#couponCode")?.value?.trim();

  // Validar
  if (!email || !name || !phone) {
    showToast("Por favor completa todos los campos");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast("Email inválido");
    return;
  }

  if (!/^\d{7,}$/.test(phone.replace(/\D/g, ''))) {
    showToast("Teléfono debe tener al menos 7 dígitos");
    return;
  }

  const cart = getCart();
  if (!cart.length) {
    showToast("Tu carrito está vacío");
    return;
  }

  // Obtener descuento del Club (si existe código válido)
  const discount = getClubDiscount();
  const totalWithDiscount = checkoutState.total - (checkoutState.total * discount / 100);

  checkoutState = { email, name, phone, couponCode, total: checkoutState.total, discount: discount, finalTotal: totalWithDiscount };

  // Guardar en sessionStorage para checkout-success.html
  sessionStorage.setItem("av_email", email);
  sessionStorage.setItem("av_total", money(totalWithDiscount));
  sessionStorage.setItem("av_discount", discount);

  // Sin backend de pagos configurado → finalizar por WhatsApp (respaldo)
  if (!FUNCTIONS_BASE) {
    showToast("Te llevamos a WhatsApp para confirmar tu pedido…");
    checkoutViaWhatsApp(checkoutState);
    return;
  }

  // Llamar a Netlify para generar transacción con Wompi
  try {
    const response = await fetch(WOMPI_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: checkoutState.email,
        name: checkoutState.name,
        phone: checkoutState.phone,
        total: checkoutState.finalTotal,
        items: cart,
        couponCode: checkoutState.couponCode,
        discount: discount
      })
    });

    const result = await response.json();
    if (!result.success) throw new Error(result.error || 'pago no generado');

    // Guardar referencia en sessionStorage (para recuperar después de pago)
    sessionStorage.setItem('av_reference', result.reference);

    // Redirigir a Wompi Checkout
    window.location.href = `${WOMPI_CHECKOUT_URL}${result.reference}/?redirectUrl=${encodeURIComponent(result.redirectUrl)}`;

  } catch (error) {
    console.error('[Checkout Error]', error);
    showToast("No pudimos abrir el pago en línea. Te llevamos a WhatsApp…");
    checkoutViaWhatsApp(checkoutState);
  }
}

function handleCheckoutSuccess(reference) {
  // Este se llama desde checkout-success.html
  console.log('✓ Pago confirmado:', reference);

  // Limpiar carrito
  localStorage.removeItem('av_cart');
  updateCount();
  renderCart();

  showToast("¡Compra completada! Gracias por tu orden.");

  // Redirigir al catálogo después de 2 segundos
  setTimeout(() => {
    window.location.href = '/index.html';
  }, 2000);
}
