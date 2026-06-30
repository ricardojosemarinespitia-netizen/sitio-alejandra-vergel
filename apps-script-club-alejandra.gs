// ============================================================
//  PAGINA WEB · Alejandra Vergel Alta Joyería
//  Maneja: Club de Suscriptores + Ventas + Códigos usados
// ============================================================

var CONFIG = {
  SECRETO_CLUB:   "circuloAlejandra2026",
  SECRETO_VENTAS: "alejandra-ventas-2026",
  HOJA_CLUB:      "Suscriptores",
  HOJA_VENTAS:    "Ventas",
  HOJA_USADOS:    "CodigosUsados"
};

// ── Setup inicial: crea las 3 hojas con encabezados correctos ──

function setup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // Suscriptores (primera hoja)
  var hc = ss.getSheetByName(CONFIG.HOJA_CLUB);
  if (!hc) hc = ss.insertSheet(CONFIG.HOJA_CLUB, 0);
  hc.clear();
  hc.appendRow(["Fecha", "Nombre", "Email", "Código", "Método"]);
  hc.getRange(1,1,1,5).setFontWeight("bold").setBackground("#A6192E").setFontColor("#FAF8F4");
  hc.setFrozenRows(1);

  // Ventas
  var hv = ss.getSheetByName(CONFIG.HOJA_VENTAS);
  if (!hv) hv = ss.insertSheet(CONFIG.HOJA_VENTAS);
  hv.clear();
  var cab = ["Fecha","Referencia","Cliente","Email","Teléfono",
             "Productos","Cantidad","Precio Unit.","Subtotal",
             "Descuento","Envío","Total","Método pago","Método entrega","Ciudad","Notas"];
  hv.appendRow(cab);
  hv.getRange(1,1,1,cab.length).setFontWeight("bold").setBackground("#A6192E").setFontColor("#FAF8F4");
  hv.setFrozenRows(1);

  // CodigosUsados
  var hu = ss.getSheetByName(CONFIG.HOJA_USADOS);
  if (!hu) hu = ss.insertSheet(CONFIG.HOJA_USADOS);
  hu.clear();
  hu.appendRow(["Fecha","Código","Referencia","Email"]);
  hu.getRange(1,1,1,4).setFontWeight("bold").setBackground("#14110F").setFontColor("#fff");
  hu.setFrozenRows(1);

  SpreadsheetApp.flush();
  Logger.log("Setup completo: Suscriptores, Ventas, CodigosUsados creadas.");
}

// ── Utilidades ────────────────────────────────────────────────

function _salida(data, cb) {
  var json = JSON.stringify(data);
  if (cb) return ContentService
    .createTextOutput(cb + "(" + json + ")")
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
  return ContentService
    .createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}

function _hojaVentas() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var h = ss.getSheetByName(CONFIG.HOJA_VENTAS);
  if (!h) {
    h = ss.insertSheet(CONFIG.HOJA_VENTAS);
    var cab = ["Fecha","Referencia","Cliente","Email","Teléfono",
               "Productos","Cantidad","Precio Unit.","Subtotal",
               "Descuento","Envío","Total","Método pago","Método entrega","Ciudad","Notas"];
    h.appendRow(cab);
    h.getRange(1,1,1,cab.length).setFontWeight("bold").setBackground("#A6192E").setFontColor("#FAF8F4");
    h.setFrozenRows(1);
  }
  return h;
}

function _hojaClub() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var h = ss.getSheetByName(CONFIG.HOJA_CLUB);
  if (!h) {
    h = ss.insertSheet(CONFIG.HOJA_CLUB, 0);
    h.appendRow(["Fecha", "Nombre", "Email", "Código", "Método"]);
    h.getRange(1,1,1,5).setFontWeight("bold").setBackground("#A6192E").setFontColor("#FAF8F4");
    h.setFrozenRows(1);
  }
  return h;
}

function _hojaUsados() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var h = ss.getSheetByName(CONFIG.HOJA_USADOS);
  if (!h) {
    h = ss.insertSheet(CONFIG.HOJA_USADOS);
    h.appendRow(["Fecha","Código","Referencia","Email"]);
    h.getRange(1,1,1,4).setFontWeight("bold").setBackground("#14110F").setFontColor("#fff");
    h.setFrozenRows(1);
  }
  return h;
}

function _codigoUsado(code) {
  var h = _hojaUsados();
  var data = h.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][1]).toUpperCase() === code.toUpperCase()) return true;
  }
  return false;
}

function fnv1a7(str) {
  var h = 0x811c9dc5;
  for (var i = 0; i < str.length; i++) {
    h = (Math.imul(h ^ str.charCodeAt(i), 0x01000193)) >>> 0;
  }
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var out = "";
  for (var j = 0; j < 7; j++) {
    out += chars[h % chars.length];
    h = (Math.imul(h, 16807) + 1013904223) >>> 0;
  }
  return out;
}

function _codigoValido(code) {
  if (!/^AV15-[A-Z0-9]{7}$/.test(code)) return false;
  var up = code.toUpperCase();
  var hash = code.slice(5);
  var hoja = _hojaClub();
  var datos = hoja.getDataRange().getValues();
  var rxEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  for (var r = 1; r < datos.length; r++) {
    for (var c = 0; c < datos[r].length; c++) {
      var raw = String(datos[r][c]).trim();
      if (raw.toUpperCase() === up) return true;
      var val = raw.toLowerCase();
      if (rxEmail.test(val) && fnv1a7(val) === hash) return true;
    }
  }
  return false;
}

// ── POST ──────────────────────────────────────────────────────

function doPost(e) {
  try {
    var body = {};
    try { body = JSON.parse(e.postData.contents); } catch(err) {}

    if (body.action === "markUsed" && body.code) {
      if (!_codigoUsado(body.code)) {
        _hojaUsados().appendRow([new Date(), body.code.toUpperCase(), body.ref||"", body.email||""]);
      }
      return _salida({ ok: true });
    }

    if (body.ref) {
      var h = _hojaVentas();
      h.appendRow([
        new Date(), body.ref||"", body.nombre||body.cliente||"—",
        body.email||"—", body.telefono||"—", body.productos||"—",
        body.cantidad||1, body.precioUnit||0, body.subtotal||0,
        body.descuento||0, body.envio||0, body.total||0,
        body.metodoPago||"—", body.metodoEntrega||"—", body.ciudad||"—", body.notas||""
      ]);
      return _salida({ ok: true, filas: h.getLastRow()-1 });
    }

    var email = String(body.email||"").trim().toLowerCase();
    if (!email) return _salida({ ok:false, error:"sin-email" });
    var hc = _hojaClub();
    var datos = hc.getDataRange().getValues();
    var rxEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    for (var r = 1; r < datos.length; r++) {
      for (var c = 0; c < datos[r].length; c++) {
        if (rxEmail.test(String(datos[r][c]).trim().toLowerCase()) &&
            String(datos[r][c]).trim().toLowerCase() === email) {
          return _salida({ ok:true, registered:true });
        }
      }
    }
    var nombre = body.nombre || "Suscriptor";
    var codigo = "AV15-" + fnv1a7(email);
    hc.appendRow([new Date(), nombre, email, codigo, body.metodo||"club"]);
    return _salida({ ok:true, registered:false, code: codigo });

  } catch(err) {
    return _salida({ ok:false, error:String(err) });
  }
}

// ── GET ───────────────────────────────────────────────────────

function doGet(e) {
  var p  = e.parameter || {};
  var cb = p.callback  || "";
  var action = (p.action || "count").toLowerCase();

  if (action === "registersubscriber") {
    var name = p.name || "Suscriptor";
    var email = String(p.email||"").trim().toLowerCase();
    if (!email) return _salida({ success:false, error:"sin-email" }, cb);
    var hc0 = _hojaClub();
    var datos0 = hc0.getDataRange().getValues();
    var rxE0 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var codigo0 = "AV15-" + fnv1a7(email);
    for (var r0=1;r0<datos0.length;r0++) {
      for (var c0=0;c0<datos0[r0].length;c0++) {
        if (rxE0.test(String(datos0[r0][c0]).trim().toLowerCase()) &&
            String(datos0[r0][c0]).trim().toLowerCase() === email) {
          return _salida({ success:false, error:"ya-registrado", code: codigo0 }, cb);
        }
      }
    }
    hc0.appendRow([new Date(), name, email, codigo0, "club"]);
    return _salida({ success:true, code: codigo0 }, cb);
  }

  if (action === "checkcode") {
    var code = String(p.code||"").trim().toUpperCase();
    if (!code) return _salida({ valid:false, used:false }, cb);
    if (_codigoUsado(code)) return _salida({ valid:false, used:true }, cb);
    if (_codigoValido(code)) return _salida({ valid:true, used:false, discount:15 }, cb);
    return _salida({ valid:false, used:false }, cb);
  }

  if (action === "count") {
    var datos = _hojaClub().getDataRange().getValues();
    return _salida({ count: Math.max(0, datos.length-1) }, cb);
  }

  if (action === "check") {
    var emailQ = String(p.email||"").trim().toLowerCase();
    var rxE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var hc2 = _hojaClub();
    var d2 = hc2.getDataRange().getValues();
    var found = false;
    for (var r2=1;r2<d2.length&&!found;r2++)
      for (var c2=0;c2<d2[r2].length&&!found;c2++)
        if (rxE.test(String(d2[r2][c2]).trim().toLowerCase()) && String(d2[r2][c2]).trim().toLowerCase()===emailQ) found=true;
    return _salida({ registered: found, count: Math.max(0,d2.length-1) }, cb);
  }

  if (action === "list") {
    if (p.key !== CONFIG.SECRETO_CLUB) return _salida({ error:"no-autorizado" }, cb);
    var d3 = _hojaClub().getDataRange().getValues().slice(1);
    var lista = d3.map(function(r){return{fecha:r[0],nombre:r[1],email:r[2],codigo:r[3]};});
    if (cb) return _salida({ count:lista.length, lista:lista }, cb);
    return _paginaClub(lista);
  }

  if (action === "panel") {
    if (p.key !== CONFIG.SECRETO_VENTAS) return _salida({ error:"no-autorizado" }, cb);
    return _panelVentasHTML();
  }

  if (action === "json") {
    if (p.key !== CONFIG.SECRETO_VENTAS) return _salida({ error:"no-autorizado" }, cb);
    var rows = _hojaVentas().getDataRange().getValues().slice(1).map(function(r){
      return {fecha:r[0],ref:r[1],cliente:r[2],email:r[3],productos:r[5],total:r[11],metodoPago:r[12],ciudad:r[14]};
    });
    return _salida({ count:rows.length, ventas:rows }, cb);
  }

  return _salida({ ok:true, msg:"API activa" }, cb);
}

// ── Panel Club HTML ───────────────────────────────────────────

function _paginaClub(lista) {
  var filas = lista.map(function(s,i){
    return '<tr><td>'+(i+1)+'</td><td>'+_esc(s.nombre)+'</td>'+
    '<td><a href="mailto:'+_esc(s.email)+'">'+_esc(s.email)+'</a></td>'+
    '<td>'+_esc(s.codigo)+'</td><td>'+_esc(String(s.fecha))+'</td></tr>';
  }).join("") || '<tr><td colspan="5" style="padding:24px;color:#B89A8E">Aún no hay suscriptores.</td></tr>';
  var html='<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Club · Suscriptores</title>'+
  '<style>body{margin:0;font-family:sans-serif;background:#14110F;color:#FAF8F4;padding:28px}'+
  '.card{max-width:900px;margin:0 auto;background:#2A2622;border-radius:18px;overflow:hidden}'+
  '.top{background:#A6192E;height:5px}.head{padding:28px 30px 10px}'+
  'h1{margin:8px 0 0;font-size:26px}.big{font-size:54px;font-weight:800;color:#E7D3A1;line-height:1;margin:14px 30px}'+
  '.big small{font-size:14px;color:#C9A24B;display:block;margin-top:6px}'+
  'table{width:100%;border-collapse:collapse;font-size:14px}'+
  'th,td{text-align:left;padding:12px 14px;border-bottom:1px solid rgba(231,211,161,.15)}'+
  'th{font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#C9A24B}'+
  'td a{color:#E7D3A1}.foot{padding:18px 30px;font-size:12px;color:#6E665E}</style></head><body>'+
  '<div class="card"><div class="top"></div><div class="head"><h1>Club de Alejandra</h1></div>'+
  '<div class="big">'+lista.length+'<small>personas en el Club</small></div>'+
  '<table><thead><tr><th>#</th><th>Nombre</th><th>Correo</th><th>Código</th><th>Fecha</th></tr></thead>'+
  '<tbody>'+filas+'</tbody></table>'+
  '<div class="foot">Panel privado · Alejandra Vergel Alta Joyería</div></div></body></html>';
  return HtmlService.createHtmlOutput(html).setTitle("Club · Suscriptores").addMetaTag("viewport","width=device-width,initial-scale=1");
}

// ── Panel Ventas HTML ─────────────────────────────────────────

function _fmt(n){return "$"+Number(n||0).toLocaleString("es-CO");}

function _panelVentasHTML() {
  var h = _hojaVentas();
  var rows = h.getDataRange().getValues().slice(1).reverse();
  var totalAcum = rows.reduce(function(s,r){return s+(Number(r[11])||0);},0);
  var filas = rows.slice(0,100).map(function(r,i){
    var fecha=r[0]?new Date(r[0]).toLocaleDateString("es-CO"):"—";
    return '<tr><td style="color:#6E665E">'+(i+1)+'</td>'+
    '<td style="font-weight:700;font-size:11px">'+_esc(String(r[1]))+'</td>'+
    '<td>'+_esc(String(r[2]))+'</td>'+
    '<td><a href="mailto:'+_esc(String(r[3]))+'" style="color:#0ABAB5">'+_esc(String(r[3]))+'</a></td>'+
    '<td style="font-weight:800;color:#FAF8F4;font-size:16px">'+_fmt(r[11])+'</td>'+
    '<td style="font-size:11px">'+_esc(String(r[12]))+'</td>'+
    '<td style="color:#6E665E;font-size:11px">'+fecha+'</td></tr>';
  }).join("") || '<tr><td colspan="7" style="padding:32px;color:#6E665E;text-align:center">Aún no hay ventas.</td></tr>';
  var html='<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Ventas · Alejandra Vergel</title>'+
  '<style>body{margin:0;font-family:sans-serif;background:#14110F;color:#FAF8F4;padding:24px}'+
  '.card{max-width:1000px;margin:0 auto 28px;background:#2A2622;border-radius:18px;overflow:hidden}'+
  '.top{height:5px;background:#A6192E}.head{padding:26px 30px 12px}h1{margin:8px 0 0;font-size:26px;font-weight:300}'+
  '.stats{display:flex;border-top:1px solid rgba(231,211,161,.12)}'+
  '.stat{flex:1;padding:22px 28px;border-right:1px solid rgba(231,211,161,.08)}'+
  '.stat:last-child{border-right:none}.stat-n{font-size:42px;font-weight:800;color:#E7D3A1;line-height:1}'+
  '.stat-l{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#6E665E;margin-top:6px}'+
  'table{width:100%;border-collapse:collapse;font-size:13px}'+
  'th,td{text-align:left;padding:11px 14px;border-bottom:1px solid rgba(231,211,161,.08);white-space:nowrap}'+
  'th{font-size:10px;letter-spacing:1px;text-transform:uppercase;color:#C9A24B}'+
  '.ov{overflow-x:auto}.foot{padding:16px 28px;font-size:11px;color:#6E665E}</style></head><body>'+
  '<div class="card"><div class="top"></div><div class="head"><h1>Panel de Ventas</h1></div>'+
  '<div class="stats"><div class="stat"><div class="stat-n">'+rows.length+'</div><div class="stat-l">Pedidos</div></div>'+
  '<div class="stat"><div class="stat-n">'+_fmt(totalAcum)+'</div><div class="stat-l">Ingresos</div></div></div></div>'+
  '<div class="card"><div class="top"></div><div class="ov"><table><thead><tr>'+
  '<th>#</th><th>Referencia</th><th>Cliente</th><th>Email</th><th>Total</th><th>Pago</th><th>Fecha</th>'+
  '</tr></thead><tbody>'+filas+'</tbody></table></div>'+
  '<div class="foot">Panel privado · Alejandra Vergel</div></div></body></html>';
  return HtmlService.createHtmlOutput(html).setTitle("Ventas · Alejandra Vergel").addMetaTag("viewport","width=device-width,initial-scale=1");
}

function _esc(s){
  return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
