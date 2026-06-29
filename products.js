/* ============================================================
   ALEJANDRA VERGEL · Catálogo de anillos
   ------------------------------------------------------------
   Joyería artesanal colombiana — filigrana y piedras naturales.
   Datos reales tomados de "Descripción de anillos".

   Cada producto:
     id            → identificador único (slug)
     sku           → código interno
     cat           → colección: "filigrana" | "color" | "compromiso" | "sets"
     name          → nombre visible
     price         → precio real en COP (entero)
     originalPrice → precio de referencia (tachado) para el descuento
     materials     → material + piedra (línea corta)
     gemName       → piedra principal
     colors        → acabados / variantes disponibles
     sizes         → tallas disponibles
     desc          → descripción de autor
     metal         → "gold" | "silver" | "rose"  (color del thumbnail SVG)
     gem           → color de la piedra en HEX (thumbnail SVG)
     images        → fotos reales (carpeta img/anillos/)
   ============================================================ */

const PRODUCTS = [
  /* ---------------- FILIGRANA ---------------- */
  {
    id:"aura", sku:"ANI-AURA", cat:"filigrana", name:"Aura",
    price:350000, originalPrice:490000,
    materials:"Plata ley 925 con baño de oro · Cuarzo ahumado natural",
    gemName:"Cuarzo ahumado", colors:["Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Pieza de autor tejida a mano en filigrana por maestros artesanos colombianos. En el centro, un elegante cuarzo ahumado de tonalidades profundas aporta carácter y un brillo sutil. Cada anillo se elabora bajo pedido, convirtiéndose en una pieza única.",
    metal:"gold", gem:"#8B6F5C",
    images:["img/anillos/aura-1.jpg","img/anillos/aura-2.jpg","img/anillos/aura-3.png"]
  },
  {
    id:"hebra", sku:"ANI-HEBRA", cat:"filigrana", name:"Hebra",
    price:250000, originalPrice:350000,
    materials:"Plata ley 925 con baño de oro · Filigrana",
    gemName:"Sin piedra", colors:["Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Celebra la esencia de la filigrana colombiana a través de un diseño limpio, atemporal y completamente tejido a mano. Sin piedras, Hebra destaca por la pureza de sus formas y el protagonismo del trabajo artesanal. Versátil para el día a día o para ocasiones especiales.",
    metal:"gold", gem:"#E7D3A1",
    images:["img/anillos/hebra-1.jpg","img/anillos/hebra-2.jpg"]
  },
  {
    id:"bruma", sku:"ANI-BRUMA", cat:"filigrana", name:"Bruma",
    price:300000, originalPrice:420000,
    materials:"Plata ley 925 · Aguamarina azul natural",
    gemName:"Aguamarina", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Tejida completamente a mano en filigrana, de diseño etéreo y ligero. En el centro, una aguamarina azul natural de corte redondo aporta frescura y un carácter sereno que evoca la suavidad de la bruma sobre el agua. Cada piedra es única.",
    metal:"silver", gem:"#7FBFD4",
    images:["img/anillos/bruma-1.png"]
  },
  {
    id:"savia", sku:"ANI-SAVIA", cat:"filigrana", name:"Savia",
    price:220000, originalPrice:310000,
    materials:"Plata ley 925 · Gema ovalada verde",
    gemName:"Gema verde", colors:["Plata 925","Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Tejida a mano en filigrana, resalta la belleza de una piedra ovalada verde de tamaño mediano. La combinación entre la filigrana tradicional y el color vibrante de la gema da vida a una pieza versátil, elegante y llena de personalidad.",
    metal:"silver", gem:"#5FA86F",
    images:["img/anillos/savia-1.png"]
  },
  {
    id:"alba", sku:"ANI-ALBA", cat:"filigrana", name:"Alba",
    price:350000, originalPrice:490000,
    materials:"Plata ley 925 · Alejandrita natural",
    gemName:"Alejandrita", colors:["Plata 925","Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Tejida a mano en filigrana, resalta la belleza de una alejandrita natural, gema excepcional reconocida por sus sutiles cambios de tonalidad según la luz. Una joya elegante, sofisticada y llena de significado para quienes valoran las piezas exclusivas.",
    metal:"silver", gem:"#6FA0C0",
    images:["img/anillos/alba-1.png"]
  },
  {
    id:"selva", sku:"ANI-SELVA", cat:"filigrana", name:"Selva",
    price:320000, originalPrice:450000,
    materials:"Plata ley 925 con baño de oro · Esmeralda natural",
    gemName:"Esmeralda", colors:["Plata con baño de oro","Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Elaborado en Colombia mediante la técnica de filigrana. Su protagonista es una esmeralda natural de corte ovalado, semi en bruto y semi pulida, que resalta la belleza orgánica y auténtica de la piedra, haciendo de cada pieza una joya irrepetible.",
    metal:"gold", gem:"#1F8A70",
    images:["img/anillos/selva-1.png","img/anillos/selva-2.png"]
  },

  /* ---------------- PIEDRAS DE COLOR ---------------- */
  {
    id:"orilla", sku:"ANI-ORILLA", cat:"color", name:"Orilla",
    price:290000, originalPrice:410000,
    materials:"Plata ley 925 con baño de oro · Amatistas y circón",
    gemName:"Amatista", colors:["Plata con baño de oro","Oro 14K","Oro 18K"], sizes:[5,6,7,8,9,10],
    desc:"Pieza de autor que celebra la belleza de las gemas naturales. Dos amatistas naturales enmarcan un delicado circón transparente, en equilibrio perfecto entre color, brillo y sofisticación. Personalizable con las piedras de tu elección; disponible también en oro de 14K y 18K.",
    metal:"gold", gem:"#9B6FB3",
    images:["img/anillos/orilla-1.jpg","img/anillos/orilla-2.jpg"]
  },
  {
    id:"orilla-plateado", sku:"ANI-ORILLAP", cat:"color", name:"Orilla Plateado",
    price:250000, originalPrice:350000,
    materials:"Plata ley 925 · Aguamarina y amatistas naturales",
    gemName:"Aguamarina", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Pieza delicada y luminosa que combina la belleza de las piedras naturales con la elegancia de la joyería artesanal. Resalta la armonía entre una suave aguamarina y amatistas naturales, creando una composición llena de color y equilibrio.",
    metal:"silver", gem:"#7FBFD4",
    images:["img/anillos/orilla-plateado-1.jpg","img/anillos/orilla-plateado-2.jpg"]
  },
  {
    id:"marquis", sku:"ANI-MARQUIS", cat:"color", name:"Marquis",
    price:320000, originalPrice:450000,
    materials:"Plata ley 925 con baño de oro · Amatista talla marquesa",
    gemName:"Amatista", colors:["Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Diseño entorchado en delicados hilos de plata que resalta el trabajo manual de la filigrana contemporánea. En el centro, una piedra talla marquesa aporta carácter y distinción, convirtiéndose en el punto focal del diseño. Personalizable con la piedra que desees.",
    metal:"gold", gem:"#9B6FB3",
    images:["img/anillos/marquis-1.png"]
  },
  {
    id:"aqua", sku:"ANI-AQUA", cat:"color", name:"Aqua",
    price:320000, originalPrice:450000,
    materials:"Plata ley 925 · Topacio azul natural y moisanitas",
    gemName:"Topacio azul", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Diseñada para resaltar la luminosidad de las piedras. Su gema central es un topacio azul natural, rodeado por delicadas moisanitas que aportan brillo y sofisticación, en una composición equilibrada, elegante y atemporal. Personalizable con la gema central de tu elección.",
    metal:"silver", gem:"#3FA9D4",
    images:["img/anillos/aqua-1.png"]
  },
  {
    id:"aquamarine", sku:"ANI-AQUAM", cat:"color", name:"Aquamarine",
    price:490000, originalPrice:690000,
    materials:"Plata ley 925 · Aquamarina y moisanitas",
    gemName:"Aquamarina", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Comparte el diseño estructural del anillo Aqua, centrado en una gema de aquamarina acompañada por delicadas moisanitas que aportan brillo y sofisticación. Una joya luminosa, fresca y atemporal, elaborada a mano por artesanos colombianos.",
    metal:"silver", gem:"#7FD4D0",
    images:["img/anillos/aquamarine-1.png"]
  },
  {
    id:"cora", sku:"ANI-CORA", cat:"color", name:"Cora",
    price:190000, originalPrice:270000,
    materials:"Plata ley 925 · Amatista en gota",
    gemName:"Amatista", colors:["Plata 925","Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Disponible en acabado plateado o con baño de oro. Su diseño destaca por una elegante amatista en forma de gota que aporta un toque de color profundo, femenino y sofisticado. Una pieza delicada, versátil y atemporal para el uso diario.",
    metal:"silver", gem:"#9B6FB3",
    images:["img/anillos/cora-1.jpg"]
  },
  {
    id:"lira", sku:"ANI-LIRA", cat:"color", name:"Lira",
    price:170000, originalPrice:240000,
    materials:"Plata ley 925 · Gema ovalada de laboratorio",
    gemName:"Gema personalizable", colors:["Plata 925","Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Diseño delicado que resalta una piedra ovalada disponible en una variedad de colores, personalizable según tu elección. Una pieza elegante, versátil y contemporánea que se adapta a diferentes estilos y ocasiones.",
    metal:"silver", gem:"#C56FA0",
    images:["img/anillos/lira-1.jpg","img/anillos/lira-2.jpg","img/anillos/lira-3.jpg"]
  },
  {
    id:"asura", sku:"ANI-ASURA", cat:"color", name:"Asura",
    price:390000, originalPrice:550000,
    materials:"Plata ley 925 con baño de oro · Topacio azul natural",
    gemName:"Topacio azul", colors:["Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Diseño elegante y contemporáneo que resalta una gema central de topacio azul natural, seleccionada para aportar luminosidad, profundidad y sofisticación. Combina tradición y diseño moderno; personalizable con la gema de tu elección.",
    metal:"gold", gem:"#3FA9D4",
    images:["img/anillos/asura-1.png","img/anillos/asura-2.png"]
  },
  {
    id:"cielo", sku:"ANI-CIELO", cat:"color", name:"Cielo",
    price:390000, originalPrice:550000,
    materials:"Plata ley 925 · Topacio azul de laboratorio",
    gemName:"Topacio azul", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Diseñada para capturar la esencia de la luz y la profundidad de los tonos azules. Su topacio azul, cuidadosamente engastado, resalta su brillo y claridad, evocando la serenidad del cielo en cada detalle. Personalizable con la gema de tu elección.",
    metal:"silver", gem:"#3FA9D4",
    images:["img/anillos/cielo-1.jpg","img/anillos/cielo-2.png"]
  },
  {
    id:"lady", sku:"ANI-LADY", cat:"color", name:"Lady",
    price:160000, originalPrice:230000,
    materials:"Plata ley 925 · Gema de laboratorio (color a elección)",
    gemName:"Gema personalizable", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Resalta la elegancia de las formas simples y la belleza del color. Sus gemas están disponibles en una amplia variedad de colores que puedes elegir. Una joya versátil, delicada y contemporánea, ideal para el uso diario o para complementar cualquier look.",
    metal:"silver", gem:"#C56FA0",
    images:["img/anillos/lady-1.jpg","img/anillos/lady-2.jpg"]
  },
  {
    id:"trenza", sku:"ANI-TRENZA", cat:"color", name:"Trenza",
    price:320000, originalPrice:450000,
    materials:"Plata ley 925 con baño de oro · Topacio azul y citrino",
    gemName:"Topacio azul y citrino", colors:["Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Aro entorchado hecho completamente a mano. Su diseño combina topacio azul cuadrado natural y citrino cuadrado natural, creando un contraste luminoso entre tonos fríos y cálidos. Personalizable con la elección de las gemas.",
    metal:"gold", gem:"#3FA9D4",
    images:["img/anillos/trenza-1.png"]
  },
  {
    id:"aire", sku:"ANI-AIRE", cat:"color", name:"Aire",
    price:250000, originalPrice:350000,
    materials:"Plata ley 925 con baño de oro · Aguamarina y citrino",
    gemName:"Aguamarina y citrino", colors:["Plata con baño de oro"], sizes:["Pequeño","Grande"],
    desc:"Diseño redondo de aro entorchado hecho a mano. Combina aguamarina natural y citrino natural, en un contraste armónico entre tonos frescos y cálidos. Disponible en tamaño pequeño ($250.000) y grande ($320.000). Personalizable con la gema de tu elección.",
    metal:"gold", gem:"#7FD4D0",
    images:["img/anillos/aire-1.png"]
  },
  {
    id:"marea", sku:"ANI-MAREA", cat:"color", name:"Marea",
    price:650000, originalPrice:920000,
    materials:"Plata ley 925 · Aguamarinas y moisanitas",
    gemName:"Aguamarina", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Inspirada en el movimiento orgánico de las olas del mar. Su diseño fluido tipo nudo evoca la suavidad y el poder del agua. Compuesto por aguamarinas naturales y moisanitas redondas, una joya escultural llena de carácter, naturaleza y sofisticación.",
    metal:"silver", gem:"#7FD4D0",
    images:["img/anillos/marea-1.png","img/anillos/marea-2.png"]
  },
  {
    id:"gota-imperial", sku:"ANI-GOTA", cat:"color", name:"Gota Imperial",
    price:370000, originalPrice:520000,
    materials:"Plata ley 925 · Topacio fucsia y moissanita",
    gemName:"Topacio fucsia", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Joya elegante y sofisticada de diseño en doble gota. Combina el vibrante color del topacio fucsia en corte pera con el brillo intenso de la moissanita, creando una pieza llamativa y delicada. Perfecta para ocasiones especiales.",
    metal:"silver", gem:"#E86FA0",
    images:["img/anillos/gota-imperial-1.png"]
  },
  {
    id:"prisma-rosa", sku:"ANI-PRISMA", cat:"color", name:"Prisma Rosa",
    price:290000, originalPrice:410000,
    materials:"Plata ley 925 · Topacio rosado rectangular",
    gemName:"Topacio rosado", colors:["Plata 925","Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Diseño elegante y minimalista, protagonizado por una piedra central rectangular de topacio rosado acompañada de delicados destellos tipo zirconia. Su corte geométrico le aporta un estilo moderno y refinado, sutil pero llamativo.",
    metal:"rose", gem:"#E86FA0",
    images:["img/anillos/prisma-rosa-1.png"]
  },
  {
    id:"jardin-rosado", sku:"ANI-JARDIN", cat:"color", name:"Jardín Rosado",
    price:390000, originalPrice:550000,
    materials:"Plata ley 925 con baño de oro · Topacio rosa",
    gemName:"Topacio rosa", colors:["Plata con baño de oro","Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Inspirado en la belleza de la naturaleza. Su delicado diseño de hojitas y ramitas envuelve una hermosa piedra central de topacio rosa, creando una pieza romántica, femenina y llena de encanto. Para quienes aman los diseños orgánicos con personalidad.",
    metal:"rose", gem:"#E86FA0",
    images:["img/anillos/jardin-rosado-1.png"]
  },
  {
    id:"cielo-cuadrado", sku:"ANI-CIELOC", cat:"color", name:"Cielo Cuadrado",
    price:390000, originalPrice:550000,
    materials:"Plata ley 925 con baño de oro · Topacio azul cuadrado",
    gemName:"Topacio azul", colors:["Plata con baño de oro","Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Pieza moderna protagonizada por una piedra central cuadrada de topacio azul creado en laboratorio. Su tono profundo y brillante evoca la calma del cielo y el mar. Diseño limpio y geométrico, ideal para el uso diario o looks más formales.",
    metal:"gold", gem:"#3FA9D4",
    images:["img/anillos/cielo-cuadrado-1.jpeg"]
  },

  /* ---------------- COMPROMISO / SOLITARIOS ---------------- */
  {
    id:"eterno", sku:"ANI-ETERNO", cat:"compromiso", name:"Eterno",
    price:340000, originalPrice:480000,
    materials:"Plata ley 925 · Moisanita central",
    gemName:"Moisanita", colors:["Plata 925","Personalizable en oro"], sizes:[5,6,7,8,9,10],
    desc:"Diseño clásico creado como opción elegante para compromiso o para celebrar vínculos significativos. Protagonizado por una moisanita central de brillo excepcional que aporta elegancia, pureza y durabilidad. Personalizable en gema y material.",
    metal:"silver", gem:"#FFFFFF",
    images:["img/anillos/eterno-1.png"]
  },
  {
    id:"luz", sku:"ANI-LUZ", cat:"compromiso", name:"Luz",
    price:340000, originalPrice:480000,
    materials:"Plata ley 925 · Moisanita corte ovalado",
    gemName:"Moisanita", colors:["Plata 925","Personalizable en oro"], sizes:[5,6,7,8,9,10],
    desc:"Diseño clásico y elegante, alternativa atemporal para compromiso. Se distingue por una moisanita central en corte ovalado, de brillo excepcional, que aporta pureza y una presencia sutil pero impactante. Personalizable en gema y material.",
    metal:"silver", gem:"#FFFFFF",
    images:["img/anillos/luz-ovalada-1.png"]
  },
  {
    id:"luz-eterna", sku:"ANI-LUZE", cat:"compromiso", name:"Luz Eterna",
    price:250000, originalPrice:350000,
    materials:"Plata ley 925 · Moisanita solitario",
    gemName:"Moisanita", colors:["Plata 925","Plata con baño de oro","Oro a solicitud"], sizes:[5,6,7,8,9,10],
    desc:"Colección de solitarios de diseño clásico, protagonizados por moisanitas de alta brillantez que capturan la luz de manera excepcional. Ideal como anillo de compromiso o joya delicada para uso diario. Desde $250.000 hasta $500.000 según piedra y diseño.",
    metal:"gold", gem:"#FFFFFF",
    images:["img/anillos/luz-eterna-1.png","img/anillos/luz-eterna-2.png"]
  },

  /* ---------------- SETS ---------------- */
  {
    id:"lazo", sku:"ANI-LAZO", cat:"sets", name:"Lazo · Set",
    price:450000, originalPrice:630000,
    materials:"Plata ley 925 · Esmeraldas de laboratorio y moisanitas",
    gemName:"Esmeralda", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Set de dos anillos pensado para el estilo stackable rings, para usarlos juntos o por separado. Sus esmeraldas de laboratorio van acompañadas de delicadas moisanitas que aportan brillo y contraste. Una composición elegante, versátil y contemporánea.",
    metal:"silver", gem:"#1F8A70",
    images:["img/anillos/lazo-1.jpg"]
  },
  {
    id:"olas-oceano", sku:"ANI-OLAS", cat:"sets", name:"Olas de Océano · Set",
    price:650000, originalPrice:920000,
    materials:"Plata ley 925 con baño de oro · Aguamarina natural",
    gemName:"Aguamarina", colors:["Plata con baño de oro","Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Set de dos anillos que combina elegancia y textura: una argolla texturizada junto a un anillo protagonista con aguamarina natural. La piedra evoca la calma del mar, mientras la argolla añade carácter y modernidad al conjunto.",
    metal:"gold", gem:"#7FD4D0",
    images:["img/anillos/olas-oceano-1.png"]
  },
  {
    id:"esencia-prisma", sku:"ANI-ESENCIA", cat:"sets", name:"Esencia Prisma · Set",
    price:350000, originalPrice:490000,
    materials:"Plata ley 925 con baño de oro · Aguamarina y amatista",
    gemName:"Aguamarina / Amatista", colors:["Plata con baño de oro","Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Colección de anillos de diseño contemporáneo con piedras naturales en corte rectangular. Incluye una versión con aguamarina natural y otra con amatista natural, en montajes minimalistas que resaltan la belleza de cada piedra. Precio por anillo.",
    metal:"gold", gem:"#7FBFD4",
    images:["img/anillos/esencia-prisma-1.png","img/anillos/esencia-prisma-2.png"]
  }
];

if (typeof window !== "undefined") { window.PRODUCTS = PRODUCTS; }
