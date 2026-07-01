// perfil.js — Sistema de cuentas personales · Alejandra Vergel Alta Joyería
(function(){
'use strict';
const SK='av_perfil', SH='av_historial_pedidos';
const get=()=>{try{return JSON.parse(localStorage.getItem(SK)||'null')}catch(e){return null}};
const set=d=>{try{localStorage.setItem(SK,JSON.stringify(d))}catch(e){}};
const getHist=()=>{try{return JSON.parse(localStorage.getItem(SH)||'[]')}catch(e){return[]}};
const fmt=n=>n!=null?new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(n):'—';
const fmtD=s=>{try{return new Date(s).toLocaleDateString('es-CO',{year:'numeric',month:'long',day:'numeric'})}catch(e){return s||''}};
function ini(n,e){if(n){const p=n.trim().split(/\s+/);return p.length>=2?(p[0][0]+p[1][0]).toUpperCase():p[0].slice(0,2).toUpperCase()}return(e||'?')[0].toUpperCase()}
function aBg(e){let h=0;for(let i=0;i<(e||'').length;i++)h=(h<<5)-h+e.charCodeAt(i)|0;return['#A6192E','#7E0E20','#C9A24B','#8A6D2F','#4A4038'][Math.abs(h)%5]}

// ── CSS ──────────────────────────────────────────────────────
function injectCSS(){
  if(document.getElementById('avPerfilCSS'))return;
  const s=document.createElement('style');
  s.id='avPerfilCSS';
  s.textContent=`
#avPerfilPanel{position:fixed;inset:0;z-index:400;pointer-events:none}
#avPerfilPanel.open{pointer-events:auto}
#avPOverlay{position:absolute;inset:0;background:rgba(20,17,15,.55);opacity:0;transition:opacity .3s;cursor:pointer}
#avPerfilPanel.open #avPOverlay{opacity:1}
#avPDrawer{position:absolute;top:0;right:0;bottom:0;width:min(392px,100%);background:var(--ivory,#F7F4EF);display:flex;flex-direction:column;transform:translateX(110%);transition:transform .38s cubic-bezier(.4,0,.2,1);box-shadow:-20px 0 60px -16px rgba(20,17,15,.28);z-index:1}
#avPerfilPanel.open #avPDrawer{transform:translateX(0)}
#avPHead{display:flex;align-items:center;justify-content:space-between;padding:20px 24px 18px;border-bottom:1px solid var(--line,#E6DFD4);flex-shrink:0}
#avPHead span{font-size:12px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--cartier,#A6192E)}
#avPClose{width:36px;height:36px;border-radius:50%;background:none;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--ink-soft,#6E665E);transition:background .2s;padding:0;flex-shrink:0}
#avPClose:hover{background:var(--line,#E6DFD4)}
#avPClose svg{width:18px;height:18px}
#avPBody{flex:1;overflow-y:auto;padding-bottom:28px;-webkit-overflow-scrolling:touch}
#avPBody::-webkit-scrollbar{width:5px}
#avPBody::-webkit-scrollbar-thumb{background:var(--line,#E6DFD4);border-radius:6px}
.avp-user{display:flex;gap:16px;padding:24px 24px 22px;border-bottom:1px solid var(--line,#E6DFD4);align-items:center}
.avp-ava{position:relative;flex-shrink:0}
.avp-ava img,.avp-ava-i{width:72px;height:72px;border-radius:50%;border:3px solid var(--gold-soft,#E7D3A1);object-fit:cover;display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:800;color:#fff}
.avp-gbadge{position:absolute;bottom:-3px;right:-3px;width:22px;height:22px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 6px rgba(0,0,0,.15);border:1.5px solid #eee}
.avp-info{flex:1;min-width:0}
.avp-name{font-size:16px;font-weight:700;color:var(--noir,#14110F);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.avp-email{font-size:12px;color:var(--ink-soft,#6E665E);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.avp-since{font-size:11px;color:var(--gold,#C9A24B);margin-top:6px;font-style:italic}
.avp-badge{display:inline-flex;align-items:center;gap:5px;margin-top:7px;padding:3px 10px;border-radius:999px;background:rgba(166,25,46,.08);border:1px solid rgba(166,25,46,.18);font-size:9px;letter-spacing:.16em;text-transform:uppercase;font-weight:700;color:var(--cartier,#A6192E)}
.avp-sec{padding:20px 24px;border-bottom:1px solid var(--line,#E6DFD4)}
.avp-sec-t{font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--ink-soft,#6E665E);font-weight:400;margin-bottom:14px}
.avp-code-row{display:flex;align-items:center;gap:10px}
.avp-code{flex:1;padding:12px 16px;border:2px dashed var(--gold-soft,#E7D3A1);border-radius:12px;font-weight:800;font-size:16px;letter-spacing:.1em;color:var(--noir,#14110F);background:rgba(201,162,75,.08);text-align:center}
.avp-copy{width:40px;height:40px;border-radius:50%;background:var(--cartier,#A6192E);color:#fff;display:flex;align-items:center;justify-content:center;border:none;cursor:pointer;flex-shrink:0;transition:all .2s;padding:0}
.avp-copy:hover{background:var(--cartier-deep,#7E0E20);transform:scale(1.06)}
.avp-copy svg{width:15px;height:15px;pointer-events:none}
.avp-code-note{font-size:11px;color:var(--ink-soft,#6E665E);margin:8px 0 0}
.avp-empty{font-size:13px;color:var(--ink-soft,#6E665E);line-height:1.65}
.avp-order{padding:12px 0;border-bottom:1px solid var(--line,#E6DFD4)}
.avp-order:last-child{border-bottom:none}
.avp-order-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:3px}
.avp-oref{font-size:11px;font-weight:700;letter-spacing:.06em;color:var(--cartier,#A6192E)}
.avp-ostate{font-size:9px;padding:3px 9px;border-radius:999px;font-weight:700;letter-spacing:.07em;text-transform:uppercase}
.avp-s-ap{background:rgba(34,197,94,.12);color:#15803d}
.avp-s-wa{background:rgba(37,211,102,.12);color:#166534}
.avp-s-pe{background:rgba(245,158,11,.12);color:#92400e}
.avp-odate{font-size:11px;color:var(--ink-soft,#6E665E);margin-bottom:4px}
.avp-oitems{font-size:12px;color:var(--ink,#2A2622);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.avp-ototal{font-size:13px;font-weight:700;color:var(--noir,#14110F);margin-top:5px}
.avp-logout-sec{padding:20px 24px 28px}
.avp-logout{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:13px 20px;border-radius:999px;border:1.5px solid var(--line,#E6DFD4);color:var(--ink-soft,#6E665E);font-size:11px;letter-spacing:.14em;text-transform:uppercase;font-weight:400;cursor:pointer;transition:all .2s;background:transparent}
.avp-logout:hover{border-color:var(--cartier,#A6192E);color:var(--cartier,#A6192E);background:rgba(166,25,46,.04)}
.avp-logout svg{width:15px;height:15px}
.avp-nologin{text-align:center;padding:48px 24px 36px}
.avp-nl-icon{width:84px;height:84px;border-radius:50%;background:linear-gradient(135deg,var(--gold-soft,#E7D3A1),var(--gold,#C9A24B));display:flex;align-items:center;justify-content:center;margin:0 auto 22px;color:#fff}
.avp-nl-icon svg{width:38px;height:38px}
.avp-nologin h4{font-weight:400;font-style:italic;font-size:22px;margin:0 0 12px;color:var(--noir,#14110F)}
.avp-nologin p{font-size:13px;color:var(--ink-soft,#6E665E);line-height:1.65;margin:0 0 22px}
.avp-nl-cta{display:inline-block;padding:13px 30px;border-radius:999px;background:var(--cartier,#A6192E);color:#fff;font-size:11px;letter-spacing:.16em;text-transform:uppercase;font-weight:700;text-decoration:none;transition:all .2s;border:none;cursor:pointer}
.avp-nl-cta:hover{background:var(--cartier-deep,#7E0E20)}
.avp-nl-note{font-size:11px;color:var(--ink-soft,#6E665E);margin-top:18px}
/* Nav button (avatar/inicial) — se apoya en .icon-btn del sitio */
#navProfile .avp-btn-i{display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;color:#fff;font-size:11px;font-weight:800}
  `;
  document.head.appendChild(s);
}

// ── Panel HTML ───────────────────────────────────────────────
function injectPanel(){
  if(document.getElementById('avPerfilPanel'))return;
  const d=document.createElement('div');
  d.id='avPerfilPanel';
  d.innerHTML=
    `<div id="avPOverlay"></div>`+
    `<div id="avPDrawer">`+
      `<div id="avPHead"><span>Mi Perfil</span><button id="avPClose" aria-label="Cerrar perfil"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>`+
      `<div id="avPBody"></div>`+
    `</div>`;
  document.body.appendChild(d);
  document.getElementById('avPOverlay').addEventListener('click',close);
  document.getElementById('avPClose').addEventListener('click',close);
}

// ── Open / Close ─────────────────────────────────────────────
function open(){
  const p=document.getElementById('avPerfilPanel');
  if(!p)return;
  p.classList.add('open');
  document.body.style.overflow='hidden';
  const perfil=get();
  document.getElementById('avPBody').innerHTML=perfil?buildIn(perfil):buildOut();
  if(perfil)wireIn();else wireOut();
}
function close(){
  const p=document.getElementById('avPerfilPanel');
  if(!p)return;
  p.classList.remove('open');
  document.body.style.overflow='';
}

// ── Build HTML: logged in ────────────────────────────────────
function buildIn(p){
  const in2=ini(p.nombre,p.email), bg=aBg(p.email);
  const ava=p.avatar
    ?`<img src="${p.avatar}" alt="${p.nombre||''}">`
    :`<div class="avp-ava-i" style="background:${bg}">${in2}</div>`;
  const gb=p.metodoLogin==='google'
    ?`<span class="avp-gbadge"><svg width="13" height="13" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6 8-11.3 8a12 12 0 1 1 0-24c3 0 5.8 1.1 8 3l5.7-5.7C33.6 5.7 29 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15 18.9 12 24 12c3 0 5.8 1.1 8 3l5.7-5.7C33.6 5.7 29 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5 0 9.5-1.9 13-5l-6-5c-2 1.4-4.4 2-7 2-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.3-4 5.7l6.1 5C42.1 35.9 44 30.4 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg></span>`
    :'';
  const hist=getHist().slice().reverse().slice(0,5);
  const estados={'APROBADO':'avp-s-ap','APPROVED':'avp-s-ap','WHATSAPP':'avp-s-wa','PENDIENTE':'avp-s-pe','PENDING':'avp-s-pe'};
  const ordersHTML=hist.length===0
    ?`<p class="avp-empty">Aún no tienes pedidos. <a href="index.html#catalogo" style="color:var(--cartier,#A6192E);text-decoration:underline">Explorar piezas</a></p>`
    :hist.map(o=>`<div class="avp-order"><div class="avp-order-top"><span class="avp-oref">${o.ref}</span><span class="avp-ostate ${estados[o.estado]||'avp-s-pe'}">${o.estado}</span></div><div class="avp-odate">${fmtD(o.fecha)}</div><div class="avp-oitems">${(o.items||[]).map(i=>`${i.qty}× ${i.name}`).join(', ')}</div><div class="avp-ototal">${fmt(o.total)}</div></div>`).join('');
  return `
  <div class="avp-user">
    <div class="avp-ava">${ava}${gb}</div>
    <div class="avp-info">
      <div class="avp-name">${p.nombre||'Suscriptora'}</div>
      <div class="avp-email">${p.email}</div>
      <div class="avp-since">Miembro desde ${fmtD(p.fechaRegistro)}</div>
      <div class="avp-badge">✦ Club Alejandra Vergel</div>
    </div>
  </div>
  <div class="avp-sec">
    <div class="avp-sec-t">Código de descuento</div>
    <div class="avp-code-row">
      <div class="avp-code" id="avPCode">${p.codigoDescuento||'—'}</div>
      <button class="avp-copy" id="avPCopy" title="Copiar código"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
    </div>
    <p class="avp-code-note">15% OFF en tu primera compra · válido una vez</p>
  </div>
  <div class="avp-sec">
    <div class="avp-sec-t">Mis pedidos</div>
    ${ordersHTML}
  </div>
  <div class="avp-logout-sec">
    <button class="avp-logout" id="avPLogout"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Cerrar sesión</button>
  </div>`;
}

// ── Build HTML: not logged in ────────────────────────────────
function buildOut(){
  const isIndex=!!document.getElementById('clubOverlay');
  return `
  <div class="avp-nologin">
    <div class="avp-nl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
    <h4>Únete al Club</h4>
    <p>Regístrate para obtener un <strong>15% de descuento</strong> en tu primera pieza, acceso anticipado a nuevas colecciones y seguimiento de tus pedidos.</p>
    ${isIndex
      ?`<button class="avp-nl-cta" id="avPOpenClub">Quiero mi descuento</button>`
      :`<a href="index.html" class="avp-nl-cta">Ir al inicio</a>`
    }
    <p class="avp-nl-note">¿Ya eres miembro? Tu código llegó a tu correo al registrarte.</p>
  </div>`;
}

// ── Wire events (logged in) ──────────────────────────────────
function wireIn(){
  const cb=document.getElementById('avPCopy');
  if(cb) cb.addEventListener('click',function(){
    const code=document.getElementById('avPCode').textContent;
    if(!code||code==='—')return;
    if(navigator.clipboard){
      navigator.clipboard.writeText(code).then(()=>{
        cb.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px"><polyline points="20 6 9 17 4 12"/></svg>';
        setTimeout(()=>{cb.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'},2200);
      }).catch(()=>{});
    }else{
      const ta=document.createElement('textarea');ta.value=code;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy')}catch(e){}document.body.removeChild(ta);
    }
  });
  const lb=document.getElementById('avPLogout');
  if(lb) lb.addEventListener('click',()=>{
    if(confirm('¿Cerrar sesión? Tu historial de pedidos se conservará en este dispositivo.')){
      try{localStorage.removeItem(SK)}catch(e){}
      close();
      renderBtn(null);
    }
  });
}
// ── Wire events (not logged in) ──────────────────────────────
function wireOut(){
  const oc=document.getElementById('avPOpenClub');
  if(oc) oc.addEventListener('click',()=>{
    close();
    const co=document.getElementById('clubOverlay');
    if(co){try{sessionStorage.removeItem('av_club_seen')}catch(e){}; setTimeout(()=>co.classList.add('open'),250);}
  });
}

// ── Nav button ───────────────────────────────────────────────
function renderBtn(perfil){
  const btn=document.getElementById('navProfile');
  if(!btn)return;
  if(perfil){
    const bg=aBg(perfil.email), in2=ini(perfil.nombre,perfil.email);
    btn.innerHTML=perfil.avatar
      ?`<img src="${perfil.avatar}" alt="${perfil.nombre||''}" style="width:30px;height:30px;border-radius:50%;object-fit:cover;display:block;border:2px solid var(--gold-soft,#E7D3A1)">`
      :`<span class="avp-btn-i" style="background:${bg}">${in2}</span>`;
    btn.title=perfil.nombre||perfil.email;
    btn.setAttribute('aria-label','Mi perfil — '+(perfil.nombre||perfil.email));
  }else{
    btn.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:22px;height:22px"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
    btn.title='Únete al Club';
    btn.setAttribute('aria-label','Únete al Club Alejandra Vergel');
  }
}

// ── Init ─────────────────────────────────────────────────────
function init(){
  injectCSS();
  injectPanel();
  renderBtn(get());
  const btn=document.getElementById('navProfile');
  if(btn) btn.addEventListener('click',()=>{
    const p=get();
    if(p){open();return;}
    const co=document.getElementById('clubOverlay');
    if(co){try{sessionStorage.removeItem('av_club_seen')}catch(e){}; co.classList.add('open');}
    else open();
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
}

// ── Public API ───────────────────────────────────────────────
window.AVPerfil={
  save(data){
    const ex=get();
    const m=Object.assign({},ex||{},data);
    if(!m.fechaRegistro)m.fechaRegistro=new Date().toISOString();
    if(m.email)m.email=m.email.toLowerCase().trim();
    if(!m.codigoDescuento){
      try{const c=localStorage.getItem('av_club_code');if(c)m.codigoDescuento=c;}catch(e){}
    }
    set(m);renderBtn(m);
  },
  get,
  addOrder(order){
    try{const h=getHist();h.push(order);localStorage.setItem(SH,JSON.stringify(h.slice(-20)));}catch(e){}
  },
  open,close
};

if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
else init();
})();
