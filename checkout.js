/* ============================================================
   ALEJANDRA VERGEL · checkout.js
   Maneja el flujo de pago con Wompi
   ============================================================ */

const WOMPI_API = '/.netlify/functions/wompi-pay';
const WOMPI_CHECKOUT_URL = 'https://checkout.wompi.co/p/';

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

  checkoutState = { email, name, phone, couponCode, total: cartTotal() };

  // Llamar a Netlify para generar transacción
  try {
    const response = await fetch(WOMPI_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: checkoutState.email,
        name: checkoutState.name,
        phone: checkoutState.phone,
        total: checkoutState.total,
        items: cart,
        couponCode: checkoutState.couponCode
      })
    });

    const result = await response.json();

    if (!result.success) {
      showToast("Error generando pago. Intenta de nuevo.");
      console.error(result.error);
      return;
    }

    // Guardar referencia en sessionStorage (para recuperar después de pago)
    sessionStorage.setItem('av_reference', result.reference);

    // Redirigir a Wompi Checkout
    window.location.href = `${WOMPI_CHECKOUT_URL}${result.reference}/?redirectUrl=${encodeURIComponent(result.redirectUrl)}`;

  } catch (error) {
    console.error('[Checkout Error]', error);
    showToast("Error al procesar el pago. Intenta de nuevo.");
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
