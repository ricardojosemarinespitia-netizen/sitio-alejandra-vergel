/* ============================================================
   mantenimiento.js  ·  TIENDA CERRADA AL PUBLICO (TEMPORAL)
   ------------------------------------------------------------
   Mientras MANTENIMIENTO sea true, quien entre al sitio ve solo un
   aviso con el enlace de WhatsApp. Pasa por encima quien abrio el
   sitio una vez con  ?admin=<clave>  (se guarda en este navegador).

   El candado REAL esta en el servidor: wompi-pay rechaza cualquier
   pago que no traiga la clave, aunque alguien se salte este aviso.

   Para REABRIR la tienda hay que apagar los DOS candados:
     1) aqui:  MANTENIMIENTO = false
     2) av-functions/netlify/functions/wompi-pay.js: MANTENIMIENTO = false
   Para salir del modo admin en tu navegador:  ?admin=salir
   (checkout-success.html NO carga este archivo a proposito: asi una
   clienta que pago justo antes del cierre ve su confirmacion.)
   ============================================================ */
(function () {
  var MANTENIMIENTO = false;         // <- true para cerrar la tienda al publico
  var CLAVE = 'av_admin';

  try {
    var q = new URLSearchParams(location.search).get('admin') || '';
    if (q === 'salir') localStorage.removeItem(CLAVE);
    else if (q) localStorage.setItem(CLAVE, q);
  } catch (e) {}

  if (!MANTENIMIENTO) return;

  var admin = '';
  try { admin = localStorage.getItem(CLAVE) || ''; } catch (e) {}
  if (admin) return;                 // tu: ves la tienda normal

  // Oculta todo lo del sitio desde el primer instante (sin parpadeo).
  var st = document.createElement('style');
  st.textContent = 'body > *:not(#av-cierre){display:none!important}' +
                   'html,body{background:#f7f4ef!important}';
  document.head.appendChild(st);

  function mostrar() {
    if (document.getElementById('av-cierre')) return;
    document.title = 'Volvemos pronto \u00B7 Alejandra Vergel';
    var d = document.createElement('div');
    d.id = 'av-cierre';
    d.style.cssText = 'min-height:100vh;display:flex;align-items:center;' +
      'justify-content:center;padding:32px 24px;text-align:center;' +
      'font-family:Georgia,"Times New Roman",serif;color:#2b2420;';
    d.innerHTML =
      '<div style="max-width:440px">' +
        '<p style="margin:0 0 18px;font-size:12px;letter-spacing:.28em;' +
          'text-transform:uppercase;color:#8a7a6b">Alejandra Vergel \u00B7 Joyas de autor</p>' +
        '<h1 style="margin:0 0 16px;font-size:30px;font-weight:400;line-height:1.25">' +
          'Estamos haciendo ajustes en la tienda</h1>' +
        '<p style="margin:0 0 28px;font-size:17px;line-height:1.6;color:#5c4f44">' +
          'Volvemos muy pronto. Mientras tanto, escr\u00EDbenos por WhatsApp ' +
          'y con gusto te ayudamos con tu joya.</p>' +
        '<a href="https://wa.me/573228505472?text=%C2%A1Hola%20Alejandra%20Vergel!%20Me%20interesa%20una%20joya." ' +
          'style="display:inline-block;padding:14px 28px;background:#2b2420;color:#f7f4ef;' +
          'text-decoration:none;font-size:15px;letter-spacing:.06em">Escribir por WhatsApp</a>' +
      '</div>';
    document.body.appendChild(d);
  }
  if (document.body) mostrar();
  else document.addEventListener('DOMContentLoaded', mostrar);
})();
