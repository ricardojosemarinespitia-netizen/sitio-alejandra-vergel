/* ============================================================
   ALEJANDRA VERGEL · Catálogo de joyas
   ------------------------------------------------------------
   Edita / agrega joyas aquí. Cada producto:
     id        → identificador único (sin espacios)
     sku       → código interno
     cat       → categoría: "anillos" | "collares" | "aretes" | "pulseras"
     name      → nombre visible
     price     → precio en COP (entero, sin puntos ni decimales)
     materials → material / técnica
     colors    → variantes (oro amarillo, oro blanco, oro rosa, platino...)
     desc      → descripción corta
     metal     → "gold" | "silver" | "rose" | "platinum"  (para el ilustrado SVG)
     gem       → color de la piedra en HEX (para el ilustrado SVG)
     images    → []  (vacío = usa ilustración SVG; agrega rutas para fotos reales)
   ============================================================ */

const PRODUCTS = [
  {
    id: "anillo-solitario-aurora", sku: "ANI-001", cat: "anillos",
    name: "Anillo Solitario Aurora", price: 4250000,
    materials: "Oro blanco 18k · Diamante 0.50ct",
    colors: ["Oro blanco", "Oro amarillo", "Platino"],
    desc: "Solitario clásico de talla brillante sobre engaste de seis garras.",
    metal: "silver", gem: "#9FE6E0", images: []
  },
  {
    id: "anillo-eternity-celeste", sku: "ANI-002", cat: "anillos",
    name: "Anillo Eternity Celeste", price: 3180000,
    materials: "Oro blanco 18k · Topacios azules",
    colors: ["Oro blanco", "Platino"],
    desc: "Banda completa de piedras engastadas, brillo continuo en 360°.",
    metal: "silver", gem: "#0ABAB5", images: []
  },
  {
    id: "anillo-sello-cartier-rojo", sku: "ANI-003", cat: "anillos",
    name: "Anillo Sello Rubí", price: 5600000,
    materials: "Oro amarillo 18k · Rubí natural",
    colors: ["Oro amarillo", "Oro rosa"],
    desc: "Pieza statement con rubí central en cojín y hombros pulidos.",
    metal: "gold", gem: "#A6192E", images: []
  },
  {
    id: "anillo-trinity-trenzado", sku: "ANI-004", cat: "anillos",
    name: "Anillo Trinity Trenzado", price: 2950000,
    materials: "Oro tricolor 18k",
    colors: ["Tricolor"],
    desc: "Tres bandas entrelazadas en oro amarillo, blanco y rosa.",
    metal: "rose", gem: "#E7D3A1", images: []
  },
  {
    id: "collar-rio-diamantes", sku: "COL-001", cat: "collares",
    name: "Collar Río de Diamantes", price: 8900000,
    materials: "Oro blanco 18k · Diamantes en degradé",
    colors: ["Oro blanco", "Platino"],
    desc: "Riviére de diamantes graduados, cierre invisible de seguridad.",
    metal: "silver", gem: "#FFFFFF", images: []
  },
  {
    id: "collar-corazon-tiffany", sku: "COL-002", cat: "collares",
    name: "Collar Corazón Celeste", price: 1850000,
    materials: "Plata de ley 925 · Esmalte azul",
    colors: ["Plata", "Oro amarillo"],
    desc: "Dije de corazón en esmalte azul firma sobre cadena fina.",
    metal: "silver", gem: "#0ABAB5", images: []
  },
  {
    id: "collar-perla-australiana", sku: "COL-003", cat: "collares",
    name: "Collar Perla Australiana", price: 3400000,
    materials: "Oro amarillo 18k · Perla cultivada",
    colors: ["Oro amarillo", "Oro rosa"],
    desc: "Perla South Sea suspendida en cadena veneciana delicada.",
    metal: "gold", gem: "#F4ECE0", images: []
  },
  {
    id: "collar-gargantilla-cartier", sku: "COL-004", cat: "collares",
    name: "Gargantilla Panther", price: 7200000,
    materials: "Oro amarillo 18k · Ojos de esmeralda",
    colors: ["Oro amarillo"],
    desc: "Eslabones articulados de inspiración felina, acabado espejo.",
    metal: "gold", gem: "#1F8A70", images: []
  },
  {
    id: "aretes-gota-zafiro", sku: "ARE-001", cat: "aretes",
    name: "Aretes Gota de Zafiro", price: 5100000,
    materials: "Oro blanco 18k · Zafiros azules",
    colors: ["Oro blanco", "Platino"],
    desc: "Zafiros en talla pera enmarcados por un halo de diamantes.",
    metal: "silver", gem: "#1E4FA3", images: []
  },
  {
    id: "aretes-argolla-eterna", sku: "ARE-002", cat: "aretes",
    name: "Aretes Argolla Eterna", price: 1650000,
    materials: "Oro amarillo 18k",
    colors: ["Oro amarillo", "Oro rosa", "Oro blanco"],
    desc: "Argollas de oro macizo con cierre clic seguro, uso diario.",
    metal: "gold", gem: "#E7D3A1", images: []
  },
  {
    id: "aretes-trepadores-luz", sku: "ARE-003", cat: "aretes",
    name: "Aretes Trepadores Luz", price: 2200000,
    materials: "Oro rosa 18k · Diamantes pavé",
    colors: ["Oro rosa", "Oro blanco"],
    desc: "Línea ascendente de diamantes que abraza el lóbulo.",
    metal: "rose", gem: "#FFFFFF", images: []
  },
  {
    id: "aretes-tope-perla", sku: "ARE-004", cat: "aretes",
    name: "Topos de Perla", price: 980000,
    materials: "Oro blanco 18k · Perla Akoya",
    colors: ["Oro blanco", "Oro amarillo"],
    desc: "El clásico atemporal: perla Akoya sobre tope minimalista.",
    metal: "silver", gem: "#F4ECE0", images: []
  },
  {
    id: "pulsera-tennis-diamante", sku: "PUL-001", cat: "pulseras",
    name: "Pulsera Tennis Diamante", price: 6750000,
    materials: "Oro blanco 18k · Diamantes",
    colors: ["Oro blanco", "Platino"],
    desc: "Línea continua de diamantes en engaste de cuatro garras.",
    metal: "silver", gem: "#FFFFFF", images: []
  },
  {
    id: "pulsera-love-cartier", sku: "PUL-002", cat: "pulseras",
    name: "Brazalete Love", price: 4990000,
    materials: "Oro amarillo 18k",
    colors: ["Oro amarillo", "Oro rosa", "Oro blanco"],
    desc: "Brazalete rígido atornillado, símbolo de unión inquebrantable.",
    metal: "gold", gem: "#E7D3A1", images: []
  },
  {
    id: "pulsera-charm-celeste", sku: "PUL-003", cat: "pulseras",
    name: "Pulsera Charm Celeste", price: 1450000,
    materials: "Plata de ley 925 · Esmalte azul",
    colors: ["Plata", "Oro rosa"],
    desc: "Cadena con dije corazón en azul firma, ajuste deslizante.",
    metal: "silver", gem: "#0ABAB5", images: []
  },
  {
    id: "pulsera-rigida-rosa", sku: "PUL-004", cat: "pulseras",
    name: "Brazalete Rígido Rosa", price: 2600000,
    materials: "Oro rosa 18k · Cuarzo rosa",
    colors: ["Oro rosa", "Oro amarillo"],
    desc: "Bangle pulido con cabujón de cuarzo rosa en el remate.",
    metal: "rose", gem: "#E8A0B0", images: []
  }
];

if (typeof window !== "undefined") { window.PRODUCTS = PRODUCTS; }
