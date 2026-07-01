/* ============================================================
   ALEJANDRA VERGEL · store.js
   ------------------------------------------------------------
   Módulo compartido entre index.html y product.html.
   Contiene: helpers, datos de marca, ilustración SVG de joyas,
   carrito (localStorage av_cart), drawer, checkout y toast.

   Requiere que la página incluya el markup con estos IDs
   (todos opcionales — cada función verifica su existencia):
     #cartCount  #cartBody  #cartFoot  #cartTotal
     #openCart   #closeCart #overlay   #drawer   #checkoutBtn
     #toast      #toastMsg
   ============================================================ */

/* ---------- Configuración de marca ---------- */
const CONFIG = {
  whatsapp: "573228505472",                 // número sin + ni espacios
  email: "Avjewelrydesign@gmail.com",
  brand: "Alejandra Vergel"
};

/* ---------- Selectores ---------- */
const $  = (s, c=document) => c.querySelector(s);
const $$ = (s, c=document) => [...c.querySelectorAll(s)];

/* ---------- Formato ---------- */
const money = n => "$ " + n.toLocaleString("es-CO");
const discountPct = p => (p.originalPrice && p.originalPrice > p.price)
  ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;

/* ---------- Categorías ---------- */
const CATS = {
  filigrana:  { label:"Filigrana" },
  color:      { label:"Piedras de Color" },
  compromiso: { label:"Compromiso" },
  sets:       { label:"Sets" },
  statement:  { label:"Aretes · Statement" },
  candongas:  { label:"Candongas" },
  studs:      { label:"Mini Studs" }
};

/* Categorías que pertenecen a anillos (para el filtro agrupado) */
const RING_CATS = ["filigrana","color","compromiso","sets"];
const EARRING_CATS = ["statement","candongas","studs"];

/* Navegación del catálogo en dos niveles (estilo Cartier / Tiffany):
   nivel 1 = tipo de joya · nivel 2 = colección / subcategoría */
const TYPES = [
  { key:"todos",   label:"Todo",    subs:[] },
  { key:"anillos", label:"Anillos", subs:[
      { key:"todos",      label:"Todas" },
      { key:"filigrana",  label:"Filigrana" },
      { key:"color",      label:"Piedras de color" },
      { key:"compromiso", label:"Compromiso" },
      { key:"sets",       label:"Sets" }
  ]},
  { key:"aretes",  label:"Aretes",  subs:[
      { key:"todos",     label:"Todos" },
      { key:"statement", label:"Statement" },
      { key:"candongas", label:"Candongas" },
      { key:"studs",     label:"Mini Studs" }
  ]}
];

/* ---------- URL del detalle (con anticaché) ---------- */
const productUrl = id => `product.html?id=${encodeURIComponent(id)}&t=${Date.now()}`;

/* ============================================================
   Ilustración SVG de joya (placeholder reemplazable por foto)
   ============================================================ */
const METALS = {
  gold:    ["#E7D3A1","#C9A24B"],
  silver:  ["#EDEFF1","#B9C0C7"],
  rose:    ["#F3D9CE","#D89A86"],
  platinum:["#F1F3F4","#C8CCD2"]
};
function jewelSVG(p){
  const [m1,m2] = METALS[p.metal] || METALS.gold;
  const gem = p.gem || "#0ABAB5";
  const uid = "g"+String(p.id).replace(/[^a-z0-9]/gi,"");
  const defs = `<defs>
    <linearGradient id="${uid}m" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${m1}"/><stop offset="1" stop-color="${m2}"/></linearGradient>
    <radialGradient id="${uid}g" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset="35%" stop-color="${gem}"/><stop offset="100%" stop-color="${gem}"/></radialGradient>
  </defs>`;
  // Anillo (todas las piezas son anillos en este catálogo)
  const body = `<path d="M30 70 a30 30 0 1 0 60 0 a30 30 0 1 0 -60 0" fill="none" stroke="url(#${uid}m)" stroke-width="7"/>
    <path d="M52 44 l8 -12 l8 12 l-8 9 z" fill="url(#${uid}g)" stroke="${m2}" stroke-width="1"/>
    <path d="M52 44 h16 M60 32 v21" stroke="#fff" stroke-width=".7" opacity=".6"/>`;
  return `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">${defs}${body}</svg>`;
}
function productMedia(p){
  if(p.images && p.images.length){
    const pos = p.imgPos || "center 50%";
    const zoom = p.imgZoom || 1;
    return `<img src="${p.images[0]}" alt="${p.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:${pos};transform:scale(${zoom});transform-origin:${pos}">`;
  }
  return jewelSVG(p);
}

/* ============================================================
   CARRITO  (localStorage: av_cart)
   ============================================================ */
const CART_KEY = "av_cart";
const getCart = () => { try{ return JSON.parse(localStorage.getItem(CART_KEY)) || []; }catch{ return []; } };
const saveCart = c => { localStorage.setItem(CART_KEY, JSON.stringify(c)); renderCart(); updateCount(); };

function addToCart(p, color, qty){
  const key = `${p.id}__${color}`;
  const cart = getCart();
  const ex = cart.find(i=>i.key===key);
  if(ex) ex.qty += qty;
  else cart.push({ key, id:p.id, name:p.name, color, qty, price:p.price, cat:p.cat, metal:p.metal, gem:p.gem, images:p.images, imgPos:p.imgPos, imgZoom:p.imgZoom });
  saveCart(cart);
  showToast(`${p.name} · agregado`);
}
function updateQty(key, delta){
  const cart = getCart();
  const it = cart.find(i=>i.key===key);
  if(!it) return;
  it.qty += delta;
  if(it.qty<=0) return removeItem(key);
  saveCart(cart);
}
function removeItem(key){ saveCart(getCart().filter(i=>i.key!==key)); }
function cartTotal(){ return getCart().reduce((s,i)=>s + i.price*i.qty, 0); }
function cartQty(){ return getCart().reduce((s,i)=>s + i.qty, 0); }

function updateCount(){
  const el = $("#cartCount");
  if(!el) return;
  const n = cartQty();
  el.textContent = n;
  el.classList.toggle("show", n>0);
}

function renderCart(){
  const body = $("#cartBody");
  const foot = $("#cartFoot");
  if(!body) return;
  const cart = getCart();
  if(!cart.length){
    body.innerHTML = `<div class="cart-empty">
      <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg>
      <p>Tu carrito está vacío.</p><p style="font-size:.82rem">Descubre nuestras piezas en el catálogo.</p>
    </div>`;
    if(foot) foot.style.display = "none";
    return;
  }
  body.innerHTML = cart.map(i => {
    const p = {cat:i.cat, metal:i.metal, gem:i.gem, id:i.id};
    return `<div class="cart-item">
      <div class="thumb">${i.images && i.images.length ? `<img src="${i.images[0]}" alt="${i.name}" style="width:100%;height:100%;object-fit:contain;padding:4px">` : jewelSVG(p)}</div>
      <div class="info">
        <div class="nm">${i.name}</div>
        <div class="vr">${i.color}</div>
        <div class="pr">${money(i.price)}</div>
        <div class="qty">
          <button data-dec="${i.key}" aria-label="Restar">−</button>
          <span>${i.qty}</span>
          <button data-inc="${i.key}" aria-label="Sumar">+</button>
        </div>
      </div>
      <button class="rm" data-rm="${i.key}">Quitar</button>
    </div>`;
  }).join("");
  const totalEl = $("#cartTotal");
  if(totalEl) totalEl.textContent = money(cartTotal());
  if(foot) foot.style.display = "block";

  $$("[data-inc]",body).forEach(b=>b.onclick=()=>updateQty(b.dataset.inc,1));
  $$("[data-dec]",body).forEach(b=>b.onclick=()=>updateQty(b.dataset.dec,-1));
  $$("[data-rm]",body).forEach(b=>b.onclick=()=>removeItem(b.dataset.rm));
}

/* ---- abrir/cerrar drawer ---- */
function openDrawer(){
  const ov=$("#overlay"), dr=$("#drawer");
  if(ov) ov.classList.add("open");
  if(dr) dr.classList.add("open");
  document.body.style.overflow="hidden";
}
function closeDrawer(){
  const ov=$("#overlay"), dr=$("#drawer");
  if(ov) ov.classList.remove("open");
  if(dr) dr.classList.remove("open");
  document.body.style.overflow="";
}

/* ---- checkout por Wompi ---- */
function checkout(){
  const cart = getCart();
  if(!cart.length) return;
  // Ir a la página de checkout con el carrito listo
  window.location.href = '/checkout.html';
}

/* ============================================================
   TOAST
   ============================================================ */
let toastTimer;
function showToast(msg){
  const t = $("#toast");
  if(!t) return;
  const m = $("#toastMsg");
  if(m) m.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove("show"), 2600);
}

/* ============================================================
   INIT del carrito (wiring común de drawer + teclas)
   ============================================================ */
function initStore(){
  renderCart();
  updateCount();
  const oc=$("#openCart");    if(oc) oc.onclick = openDrawer;
  const cl=$("#closeCart");   if(cl) cl.onclick = closeDrawer;
  const ov=$("#overlay");     if(ov) ov.onclick = closeDrawer;
  const cb=$("#checkoutBtn"); if(cb) cb.onclick = checkout;
  document.addEventListener("keydown", e=>{ if(e.key==="Escape") closeDrawer(); });
}
