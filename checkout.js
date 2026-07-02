/* ============================================================
   ALEJANDRA VERGEL · checkout.js
   Información de envío + envíos Barranquilla/Nacional + Wompi
   ------------------------------------------------------------
   Reglas de envío:
   · Compras ≥ $200.000 → envío GRATIS (todo el país)
   · Área metropolitana de Barranquilla → $8.000
   · Resto del país → $15.000
   ============================================================ */

const FUNCTIONS_BASE = "https://radiant-lamington-bd56f7.netlify.app"; // Wompi integration
const WOMPI_API = (FUNCTIONS_BASE || '') + '/.netlify/functions/wompi-pay';
const WOMPI_CHECKOUT_URL = 'https://checkout.wompi.co/p/';
const WA_NUMBER = (typeof CONFIG !== 'undefined' && CONFIG.whatsapp) ? CONFIG.whatsapp : '573228505472';

const FREE_SHIPPING_FROM = 200000;
const SHIP_METRO = 8000;
const SHIP_NACIONAL = 15000;
const METRO_DEPT = "Atlántico";
const METRO_CITIES = ["Barranquilla","Soledad","Malambo","Galapa","Puerto Colombia"];

let ck = {
  method: "metro",      // metro | nacional
  discount: 0,          // % de descuento Club validado
  couponCode: ""
};

/* ---------- helpers ---------- */
const norm = s => (s||"").trim().toLowerCase()
  .normalize("NFD").replace(/[\u0300-\u036f]/g,"");

function findDept(value){
  const v = norm(value);
  if(!v) return null;
  return Object.keys(COLOMBIA).find(d => norm(d) === v) || null;
}
function findMuni(dept, value){
  const v = norm(value);
  if(!v || !dept || !COLOMBIA[dept]) return null;
  return COLOMBIA[dept].find(m => norm(m) === v) || null;
}

/* ---------- costo de envío ---------- */
function isMetro(dept, muni){
  return dept === METRO_DEPT && !!muni && METRO_CITIES.some(c => norm(c) === norm(muni));
}
function shippingCost(subtotalConDescuento){
  if(subtotalConDescuento >= FREE_SHIPPING_FROM) return 0;
  const dept = findDept($("#departamento").value);
  const muni = findMuni(dept, $("#municipio").value);
  // La tarifa metro aplica si el método es metro O si la dirección está en el área metropolitana
  if(ck.method === "metro" || isMetro(dept, muni)) return SHIP_METRO;
  return SHIP_NACIONAL;
}

/* ---------- departamentos / municipios (DANE) ---------- */
function fillDeptList(){
  const dl = $("#deptList");
  dl.innerHTML = Object.keys(COLOMBIA).map(d => `<option value="${d}">`).join("");
}
function fillMuniList(dept, metroOnly){
  const dl = $("#muniList");
  const muniInput = $("#municipio");
  let list = (dept && COLOMBIA[dept]) ? COLOMBIA[dept] : [];
  if(metroOnly) list = list.filter(m => METRO_CITIES.some(c => norm(c)===norm(m)));
  dl.innerHTML = list.map(m => `<option value="${m}">`).join("");
  muniInput.disabled = !list.length;
  muniInput.placeholder = list.length ? "Escribe o selecciona..." : "Elige el departamento primero";
}
function onDeptChange(){
  const dept = findDept($("#departamento").value);
  const metroOnly = ck.method === "metro";
  if(dept) $("#departamento").value = dept; // normaliza mayúsculas/acentos
  $("#municipio").value = "";
  fillMuniList(dept, metroOnly && dept === METRO_DEPT);
  renderSummary();
}
function applyMethod(method){
  ck.method = method;
  $("#optMetro").classList.toggle("selected", method==="metro");
  $("#optNacional").classList.toggle("selected", method==="nacional");
  if(method === "metro"){
    // El área metropolitana pertenece al Atlántico
    $("#departamento").value = METRO_DEPT;
    $("#departamento").readOnly = true;
    fillMuniList(METRO_DEPT, true);
    if(!findMuni(METRO_DEPT, $("#municipio").value) || !isMetro(METRO_DEPT, $("#municipio").value)){
      $("#municipio").value = "Barranquilla";
    }
    $("#muniHint").textContent = "Barranquilla, Soledad, Malambo, Galapa o Puerto Colombia.";
  } else {
    $("#departamento").readOnly = false;
    $("#muniHint").textContent = "";
    fillMuniList(findDept($("#departamento").value), false);
  }
  renderSummary();
}

/* ---------- resumen del pedido ---------- */
function summaryMedia(i){
  const prod = (typeof PRODUCTS !== "undefined") ? PRODUCTS.find(x=>x.id===i.id) : null;
  const imgs = (prod && prod.images && prod.images.length) ? prod.images : (i.images || []);
  if(imgs.length) return `<img src="${imgs[0]}" alt="${i.name}">`;
  return jewelSVG({cat:i.cat, metal:i.metal, gem:i.gem, id:i.id});
}

function renderSummary(){
  const cart = getCart();
  const root = $("#checkoutRoot");
  if(!cart.length){
    root.innerHTML = `<div class="empty-cart" style="grid-column:1/-1">
      <h2>Tu carrito está vacío</h2>
      <p>Descubre nuestras joyas hechas a mano y encuentra la tuya.</p>
      <a href="index.html#catalogo">Ver la colección</a>
    </div>`;
    return;
  }

  const n = cart.reduce((s,i)=>s+i.qty,0);
  $("#sumCount").textContent = n === 1 ? "1 pieza" : `${n} piezas`;

  $("#sumItems").innerHTML = cart.map(i => `
    <div class="sum-item">
      <div class="thumb">${summaryMedia(i)}</div>
      <div class="inf">
        <div class="nm">${i.name}</div>
        <div class="vr">${i.color || ""}</div>
        <div class="pr">${money(i.price * i.qty)}</div>
        <div class="sum-qty">
          <button type="button" data-dec="${i.key}" aria-label="Restar">−</button>
          <span>${i.qty}</span>
          <button type="button" data-inc="${i.key}" aria-label="Sumar">+</button>
        </div>
      </div>
      <button type="button" class="rm" data-rm="${i.key}">Quitar</button>
    </div>`).join("");

  $$("#sumItems [data-inc]").forEach(b=>b.onclick=()=>{ updateQty(b.dataset.inc, 1); renderSummary(); });
  $$("#sumItems [data-dec]").forEach(b=>b.onclick=()=>{ updateQty(b.dataset.dec,-1); renderSummary(); });
  $$("#sumItems [data-rm]").forEach(b=>b.onclick=()=>{ removeItem(b.dataset.rm); renderSummary(); });

  const subtotal = cartTotal();
  const discountVal = Math.round(subtotal * ck.discount / 100);
  const subDesc = subtotal - discountVal;
  const ship = shippingCost(subDesc);

  $("#sumSubtotal").textContent = money(subtotal);
  const dRow = $("#sumDiscountRow");
  if(ck.discount > 0){
    dRow.style.display = "flex";
    $("#sumDiscount").textContent = "− " + money(discountVal);
  } else {
    dRow.style.display = "none";
  }
  $("#sumShipping").textContent = ship === 0 ? "Gratis" : money(ship);
  $("#sumTotal").textContent = money(subDesc + ship);

  // precios en las tarjetas de método
  $("#metroPrice").textContent = subDesc >= FREE_SHIPPING_FROM ? "Gratis" : money(SHIP_METRO);
  $("#nacionalPrice").textContent = subDesc >= FREE_SHIPPING_FROM ? "Gratis" : money(SHIP_NACIONAL);
}

/* ---------- validación ---------- */
const reMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function markInvalid(el, bad){ el.classList.toggle("invalid", bad); return !bad; }

function validateForm(){
  let ok = true, firstBad = null;
  const check = (id, badFn) => {
    const el = $("#"+id);
    const bad = badFn(el.value.trim());
    markInvalid(el, bad);
    if(bad && !firstBad) firstBad = el;
    ok = ok && !bad;
  };
  check("email",      v => !reMail.test(v));
  check("phone",      v => v.replace(/\D/g,"").length < 7);
  check("firstName",  v => v.length < 2);
  check("lastName",   v => v.length < 2);
  check("cedula",     v => v.replace(/\D/g,"").length < 5);
  check("address",    v => v.length < 5);
  check("departamento", v => !findDept(v));
  check("municipio",  v => !findMuni(findDept($("#departamento").value), v));
  if(!ok && firstBad){
    firstBad.scrollIntoView({behavior:"smooth", block:"center"});
    firstBad.focus({preventScroll:true});
    showToast("Revisa los campos marcados en rojo");
  }
  return ok;
}

/* ---------- WhatsApp de respaldo ---------- */
function checkoutViaWhatsApp(o){
  const cart = getCart();
  const lines = cart.map(i => `• ${i.qty}× ${i.name}${i.color ? ' ('+i.color+')' : ''} — ${money(i.price*i.qty)}`).join('%0A');
  const msg =
    `¡Hola Alejandra Vergel! Quiero finalizar mi compra:%0A%0A${lines}` +
    (o.discount ? `%0ADescuento Club: ${o.discount}%25` : '') +
    `%0AEnvío: ${o.shipping === 0 ? 'Gratis' : money(o.shipping)}` +
    `%0A*Total: ${money(o.total)}*` +
    `%0A%0AMis datos:%0ANombre: ${encodeURIComponent(o.firstName+' '+o.lastName)}` +
    `%0ACédula: ${encodeURIComponent(o.cedula)}` +
    `%0ACorreo: ${encodeURIComponent(o.email)}` +
    `%0ATeléfono: ${encodeURIComponent(o.phone)}` +
    `%0ADirección: ${encodeURIComponent(o.address + (o.address2 ? ', '+o.address2 : ''))}` +
    `%0A${encodeURIComponent(o.municipio + ', ' + o.departamento)}` +
    (o.postal ? `%0ACódigo postal: ${encodeURIComponent(o.postal)}` : '') +
    (o.notes ? `%0ANotas: ${encodeURIComponent(o.notes)}` : '') +
    (o.couponCode ? `%0ACódigo Club: ${encodeURIComponent(o.couponCode)}` : '');
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}

/* ---------- envío del formulario ---------- */
async function submitCheckout(){
  if(!validateForm()) return;
  const cart = getCart();
  if(!cart.length){ showToast("Tu carrito está vacío"); return; }

  const subtotal = cartTotal();
  const discountVal = Math.round(subtotal * ck.discount / 100);
  const subDesc = subtotal - discountVal;
  const ship = shippingCost(subDesc);
  const total = subDesc + ship;

  const order = {
    email: $("#email").value.trim(),
    phone: $("#phone").value.trim(),
    firstName: $("#firstName").value.trim(),
    lastName: $("#lastName").value.trim(),
    cedula: $("#cedula").value.trim(),
    address: $("#address").value.trim(),
    address2: $("#address2").value.trim(),
    departamento: findDept($("#departamento").value),
    municipio: findMuni(findDept($("#departamento").value), $("#municipio").value),
    postal: $("#postal").value.trim(),
    notes: $("#notes").value.trim(),
    waNotif: $("#waNotif").checked,
    newsOpt: $("#newsOpt").checked,
    method: ck.method,
    couponCode: ck.couponCode,
    discount: ck.discount,
    subtotal, shipping: ship, total
  };

  sessionStorage.setItem("av_email", order.email);
  sessionStorage.setItem("av_total", money(total));
  sessionStorage.setItem("av_discount", ck.discount);
  sessionStorage.setItem("av_order", JSON.stringify(order));

  // Si aceptó novedades, la sumamos al Club (sin bloquear el pago)
  if(order.newsOpt && typeof registerClub === "function"){
    try { registerClub(order.firstName, order.email); } catch(e){}
  }

  const btn = $("#payBtn");
  btn.disabled = true; btn.textContent = "Preparando el pago...";

  if(!FUNCTIONS_BASE){
    showToast("Te llevamos a WhatsApp para confirmar tu pedido…");
    checkoutViaWhatsApp(order);
    btn.disabled = false; btn.textContent = "Continuar al pago";
    return;
  }

  try {
    const response = await fetch(WOMPI_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: order.email,
        name: order.firstName + ' ' + order.lastName,
        phone: order.phone,
        total: order.total,
        items: cart,
        couponCode: order.couponCode,
        discount: order.discount,
        shipping: {
          cost: order.shipping,
          method: order.method,
          address: order.address,
          address2: order.address2,
          municipio: order.municipio,
          departamento: order.departamento,
          postal: order.postal,
          cedula: order.cedula,
          notes: order.notes
        }
      })
    });
    const result = await response.json();
    if(!result.success) throw new Error(result.error || 'pago no generado');

    sessionStorage.setItem('av_reference', result.reference);
    const wompiUrl = WOMPI_CHECKOUT_URL
      + '?public-key=' + encodeURIComponent(result.publicKey)
      + '&currency=COP'
      + '&amount-in-cents=' + result.amountInCents
      + '&reference=' + encodeURIComponent(result.reference)
      + '&redirect-url=' + encodeURIComponent(result.redirectUrl);
    window.location.href = wompiUrl;
  } catch (error) {
    console.error('[Checkout Error]', error);
    showToast("No pudimos abrir el pago en línea. Te llevamos a WhatsApp…");
    checkoutViaWhatsApp(order);
    btn.disabled = false; btn.textContent = "Continuar al pago";
  }
}

/* ---------- cupón Club ---------- */
function initCoupon(){
  const couponInput = $("#couponCode");
  if(!couponInput) return;
  couponInput.addEventListener("blur", async () => {
    const code = couponInput.value.trim();
    if(!code){ ck.discount = 0; ck.couponCode = ""; renderSummary(); return; }
    const result = await validateCoupon(code);
    if(result.valid){
      ck.discount = result.discount;
      ck.couponCode = code;
      $("#discountInfo").style.display = "block";
      $("#discountAmount").textContent = result.discount + "%";
      showToast("✓ Código válido: " + result.discount + "% de descuento");
    } else {
      ck.discount = 0; ck.couponCode = "";
      $("#discountInfo").style.display = "none";
      showToast("✗ " + (result.error || "Código no válido"));
      couponInput.value = "";
    }
    renderSummary();
  });
}

/* ---------- éxito (lo usa checkout-success.html) ---------- */
function handleCheckoutSuccess(reference){
  console.log('✓ Pago confirmado:', reference);
  localStorage.removeItem('av_cart');
  if(typeof updateCount === "function") updateCount();
  showToast("¡Compra completada! Gracias por tu orden.");
  setTimeout(() => { window.location.href = '/index.html'; }, 2000);
}

/* ---------- init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const yr = $("#year"); if(yr) yr.textContent = new Date().getFullYear();
  if(!$("#checkoutForm")) return;

  fillDeptList();
  applyMethod("metro");
  renderSummary();
  initCoupon();

  $("#departamento").addEventListener("change", onDeptChange);
  $("#departamento").addEventListener("blur", onDeptChange);
  $("#municipio").addEventListener("change", () => {
    const dept = findDept($("#departamento").value);
    const muni = findMuni(dept, $("#municipio").value);
    if(muni) $("#municipio").value = muni;
    renderSummary();
  });

  $$('input[name="shipMethod"]').forEach(r =>
    r.addEventListener("change", () => applyMethod(r.value))
  );

  $("#checkoutForm").addEventListener("submit", e => {
    e.preventDefault();
    submitCheckout();
  });
});
