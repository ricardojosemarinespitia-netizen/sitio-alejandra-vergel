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
    price:350000, originalPrice:473000,
    materials:"Plata ley 925 con baño de oro · Cuarzo ahumado natural",
    gemName:"Cuarzo ahumado", colors:["Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Pieza de autor tejida a mano en filigrana por maestros artesanos colombianos. En el centro, un elegante cuarzo ahumado de tonalidades profundas aporta carácter y un brillo sutil. Cada anillo se elabora bajo pedido, convirtiéndose en una pieza única.",
    metal:"gold", gem:"#8B6F5C",
    images:["img/anillos/aura-1.jpg","img/anillos/aura-2.jpg","img/anillos/aura-3.png"]
  },
  {
    id:"hebra", sku:"ANI-HEBRA", cat:"filigrana", name:"Hebra",
    price:250000, originalPrice:321000,
    materials:"Plata ley 925 con baño de oro · Filigrana",
    gemName:"Sin piedra", colors:["Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Celebra la esencia de la filigrana colombiana a través de un diseño limpio, atemporal y completamente tejido a mano. Sin piedras, Hebra destaca por la pureza de sus formas y el protagonismo del trabajo artesanal. Versátil para el día a día o para ocasiones especiales.",
    metal:"gold", gem:"#E7D3A1",
    images:["img/anillos/hebra-1.jpg","img/anillos/hebra-2.jpg"]
  },
  {
    id:"bruma", sku:"ANI-BRUMA", cat:"filigrana", name:"Bruma",
    price:300000, originalPrice:417000,
    materials:"Plata ley 925 · Aguamarina azul natural",
    gemName:"Aguamarina", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Tejida completamente a mano en filigrana, de diseño etéreo y ligero. En el centro, una aguamarina azul natural de corte redondo aporta frescura y un carácter sereno que evoca la suavidad de la bruma sobre el agua. Cada piedra es única.",
    metal:"silver", gem:"#7FBFD4",
    images:["img/anillos/bruma-1.png"]
  },
  {
    id:"savia", sku:"ANI-SAVIA", cat:"filigrana", name:"Savia",
    price:220000, originalPrice:275000,
    materials:"Plata ley 925 · Gema ovalada verde",
    gemName:"Gema verde", colors:["Plata 925","Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Tejida a mano en filigrana, resalta la belleza de una piedra ovalada verde de tamaño mediano. La combinación entre la filigrana tradicional y el color vibrante de la gema da vida a una pieza versátil, elegante y llena de personalidad.",
    metal:"silver", gem:"#5FA86F",
    images:["img/anillos/savia-1.png"]
  },
  {
    id:"alba", sku:"ANI-ALBA", cat:"filigrana", name:"Alba",
    price:350000, originalPrice:467000,
    materials:"Plata ley 925 · Alejandrita natural",
    gemName:"Alejandrita", colors:["Plata 925","Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Tejida a mano en filigrana, resalta la belleza de una alejandrita natural, gema excepcional reconocida por sus sutiles cambios de tonalidad según la luz. Una joya elegante, sofisticada y llena de significado para quienes valoran las piezas exclusivas.",
    metal:"silver", gem:"#6FA0C0",
    images:["img/anillos/alba-1.png"]
  },
  {
    id:"selva", sku:"ANI-SELVA", cat:"filigrana", name:"Selva",
    price:320000, originalPrice:421000,
    materials:"Plata ley 925 con baño de oro · Esmeralda natural",
    gemName:"Esmeralda", colors:["Plata con baño de oro","Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Elaborado en Colombia mediante la técnica de filigrana. Su protagonista es una esmeralda natural de corte ovalado, semi en bruto y semi pulida, que resalta la belleza orgánica y auténtica de la piedra, haciendo de cada pieza una joya irrepetible.",
    metal:"gold", gem:"#1F8A70",
    images:["img/anillos/selva-1.png","img/anillos/selva-2.png"]
  },

  /* ---------------- PIEDRAS DE COLOR ---------------- */
  {
    id:"orilla", sku:"ANI-ORILLA", cat:"color", name:"Orilla",
    price:290000, originalPrice:397000,
    materials:"Plata ley 925 con baño de oro · Amatistas y circón",
    gemName:"Amatista", colors:["Plata con baño de oro","Oro 14K","Oro 18K"], sizes:[5,6,7,8,9,10],
    desc:"Pieza de autor que celebra la belleza de las gemas naturales. Dos amatistas naturales enmarcan un delicado circón transparente, en equilibrio perfecto entre color, brillo y sofisticación. Personalizable con las piedras de tu elección; disponible también en oro de 14K y 18K.",
    metal:"gold", gem:"#9B6FB3",
    images:["img/anillos/orilla-1.jpg","img/anillos/orilla-2.jpg"]
  },
  {
    id:"orilla-plateado", sku:"ANI-ORILLAP", cat:"color", name:"Orilla Plateado",
    price:250000, originalPrice:316000,
    materials:"Plata ley 925 · Aguamarina y amatistas naturales",
    gemName:"Aguamarina", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Pieza delicada y luminosa que combina la belleza de las piedras naturales con la elegancia de la joyería artesanal. Resalta la armonía entre una suave aguamarina y amatistas naturales, creando una composición llena de color y equilibrio.",
    metal:"silver", gem:"#7FBFD4",
    images:["img/anillos/orilla-plateado-1.jpg","img/anillos/orilla-plateado-2.jpg"]
  },
  {
    id:"marquis", sku:"ANI-MARQUIS", cat:"color", name:"Marquis",
    price:320000, originalPrice:451000,
    materials:"Plata ley 925 con baño de oro · Amatista talla marquesa",
    gemName:"Amatista", colors:["Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Diseño entorchado en delicados hilos de plata que resalta el trabajo manual de la filigrana contemporánea. En el centro, una piedra talla marquesa aporta carácter y distinción, convirtiéndose en el punto focal del diseño. Personalizable con la piedra que desees.",
    metal:"gold", gem:"#9B6FB3",
    images:["img/anillos/marquis-1.png"]
  },
  {
    id:"aqua", sku:"ANI-AQUA", cat:"color", name:"Aqua",
    price:320000, originalPrice:416000,
    materials:"Plata ley 925 · Topacio azul natural y moisanitas",
    gemName:"Topacio azul", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Diseñada para resaltar la luminosidad de las piedras. Su gema central es un topacio azul natural, rodeado por delicadas moisanitas que aportan brillo y sofisticación, en una composición equilibrada, elegante y atemporal. Personalizable con la gema central de tu elección.",
    metal:"silver", gem:"#3FA9D4",
    images:["img/anillos/aqua-1.png"]
  },
  {
    id:"aquamarine", sku:"ANI-AQUAM", cat:"color", name:"Aquamarine",
    price:490000, originalPrice:662000,
    materials:"Plata ley 925 · Aquamarina y moisanitas",
    gemName:"Aquamarina", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Comparte el diseño estructural del anillo Aqua, centrado en una gema de aquamarina acompañada por delicadas moisanitas que aportan brillo y sofisticación. Una joya luminosa, fresca y atemporal, elaborada a mano por artesanos colombianos.",
    metal:"silver", gem:"#7FD4D0",
    images:["img/anillos/aquamarine-1.png"]
  },
  {
    id:"cora", sku:"ANI-CORA", cat:"color", name:"Cora",
    price:190000, originalPrice:244000,
    materials:"Plata ley 925 · Amatista en gota",
    gemName:"Amatista", colors:["Plata 925","Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Disponible en acabado plateado o con baño de oro. Su diseño destaca por una elegante amatista en forma de gota que aporta un toque de color profundo, femenino y sofisticado. Una pieza delicada, versátil y atemporal para el uso diario.",
    metal:"silver", gem:"#9B6FB3",
    images:["img/anillos/cora-1.jpg"]
  },
  {
    id:"lira", sku:"ANI-LIRA", cat:"color", name:"Lira",
    price:170000, originalPrice:236000,
    materials:"Plata ley 925 · Gema ovalada de laboratorio",
    gemName:"Gema personalizable", colors:["Plata 925","Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Diseño delicado que resalta una piedra ovalada disponible en una variedad de colores, personalizable según tu elección. Una pieza elegante, versátil y contemporánea que se adapta a diferentes estilos y ocasiones.",
    metal:"silver", gem:"#C56FA0",
    images:["img/anillos/lira-1.jpg","img/anillos/lira-2.jpg","img/anillos/lira-3.jpg"]
  },
  {
    id:"asura", sku:"ANI-ASURA", cat:"color", name:"Asura",
    price:390000, originalPrice:513000,
    materials:"Plata ley 925 con baño de oro · Topacio azul natural",
    gemName:"Topacio azul", colors:["Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Diseño elegante y contemporáneo que resalta una gema central de topacio azul natural, seleccionada para aportar luminosidad, profundidad y sofisticación. Combina tradición y diseño moderno; personalizable con la gema de tu elección.",
    metal:"gold", gem:"#3FA9D4",
    images:["img/anillos/asura-1.png","img/anillos/asura-2.png"]
  },
  {
    id:"cielo", sku:"ANI-CIELO", cat:"color", name:"Cielo",
    price:390000, originalPrice:534000,
    materials:"Plata ley 925 · Topacio azul de laboratorio",
    gemName:"Topacio azul", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Diseñada para capturar la esencia de la luz y la profundidad de los tonos azules. Su topacio azul, cuidadosamente engastado, resalta su brillo y claridad, evocando la serenidad del cielo en cada detalle. Personalizable con la gema de tu elección.",
    metal:"silver", gem:"#3FA9D4",
    images:["img/anillos/cielo-1.jpg","img/anillos/cielo-2.png"]
  },
  {
    id:"lady", sku:"ANI-LADY", cat:"color", name:"Lady",
    price:160000, originalPrice:200000,
    materials:"Plata ley 925 · Gema de laboratorio (color a elección)",
    gemName:"Gema personalizable", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Resalta la elegancia de las formas simples y la belleza del color. Sus gemas están disponibles en una amplia variedad de colores que puedes elegir. Una joya versátil, delicada y contemporánea, ideal para el uso diario o para complementar cualquier look.",
    metal:"silver", gem:"#C56FA0",
    images:["img/anillos/lady-1.jpg","img/anillos/lady-2.jpg"]
  },
  {
    id:"trenza", sku:"ANI-TRENZA", cat:"color", name:"Trenza",
    price:320000, originalPrice:427000,
    materials:"Plata ley 925 con baño de oro · Topacio azul y citrino",
    gemName:"Topacio azul y citrino", colors:["Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Aro entorchado hecho completamente a mano. Su diseño combina topacio azul cuadrado natural y citrino cuadrado natural, creando un contraste luminoso entre tonos fríos y cálidos. Personalizable con la elección de las gemas.",
    metal:"gold", gem:"#3FA9D4",
    images:["img/anillos/trenza-1.png"]
  },
  {
    id:"aire", sku:"ANI-AIRE", cat:"color", name:"Aire",
    price:250000, originalPrice:325000,
    materials:"Plata ley 925 con baño de oro · Aguamarina y citrino",
    gemName:"Aguamarina y citrino", colors:["Plata con baño de oro"], sizes:["Pequeño","Grande"],
    desc:"Diseño redondo de aro entorchado hecho a mano. Combina aguamarina natural y citrino natural, en un contraste armónico entre tonos frescos y cálidos. Disponible en tamaño pequeño ($250.000) y grande ($320.000). Personalizable con la gema de tu elección.",
    metal:"gold", gem:"#7FD4D0",
    images:["img/anillos/aire-1.png"]
  },
  {
    id:"marea", sku:"ANI-MAREA", cat:"color", name:"Marea",
    price:650000, originalPrice:916000,
    materials:"Plata ley 925 · Aguamarinas y moisanitas",
    gemName:"Aguamarina", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Inspirada en el movimiento orgánico de las olas del mar. Su diseño fluido tipo nudo evoca la suavidad y el poder del agua. Compuesto por aguamarinas naturales y moisanitas redondas, una joya escultural llena de carácter, naturaleza y sofisticación.",
    metal:"silver", gem:"#7FD4D0",
    images:["img/anillos/marea-1.png","img/anillos/marea-2.png"]
  },
  {
    id:"gota-imperial", sku:"ANI-GOTA", cat:"color", name:"Gota Imperial",
    price:370000, originalPrice:500000,
    materials:"Plata ley 925 · Topacio fucsia y moissanita",
    gemName:"Topacio fucsia", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Joya elegante y sofisticada de diseño en doble gota. Combina el vibrante color del topacio fucsia en corte pera con el brillo intenso de la moissanita, creando una pieza llamativa y delicada. Perfecta para ocasiones especiales.",
    metal:"silver", gem:"#E86FA0",
    images:["img/anillos/gota-imperial-1.png"]
  },
  {
    id:"prisma-rosa", sku:"ANI-PRISMA", cat:"color", name:"Prisma Rosa",
    price:290000, originalPrice:372000,
    materials:"Plata ley 925 · Topacio rosado rectangular",
    gemName:"Topacio rosado", colors:["Plata 925","Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Diseño elegante y minimalista, protagonizado por una piedra central rectangular de topacio rosado acompañada de delicados destellos tipo zirconia. Su corte geométrico le aporta un estilo moderno y refinado, sutil pero llamativo.",
    metal:"rose", gem:"#E86FA0",
    images:["img/anillos/prisma-rosa-1.png"]
  },
  {
    id:"jardin-rosado", sku:"ANI-JARDIN", cat:"color", name:"Jardín Rosado",
    price:390000, originalPrice:542000,
    materials:"Plata ley 925 con baño de oro · Topacio rosa",
    gemName:"Topacio rosa", colors:["Plata con baño de oro","Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Inspirado en la belleza de la naturaleza. Su delicado diseño de hojitas y ramitas envuelve una hermosa piedra central de topacio rosa, creando una pieza romántica, femenina y llena de encanto. Para quienes aman los diseños orgánicos con personalidad.",
    metal:"rose", gem:"#E86FA0",
    images:["img/anillos/jardin-rosado-1.png"]
  },
  {
    id:"cielo-cuadrado", sku:"ANI-CIELOC", cat:"color", name:"Cielo Cuadrado",
    price:390000, originalPrice:494000,
    materials:"Plata ley 925 con baño de oro · Topacio azul cuadrado",
    gemName:"Topacio azul", colors:["Plata con baño de oro","Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Pieza moderna protagonizada por una piedra central cuadrada de topacio azul creado en laboratorio. Su tono profundo y brillante evoca la calma del cielo y el mar. Diseño limpio y geométrico, ideal para el uso diario o looks más formales.",
    metal:"gold", gem:"#3FA9D4",
    images:["img/anillos/cielo-cuadrado-1.jpeg"]
  },

  /* ---------------- COMPROMISO / SOLITARIOS ---------------- */
  {
    id:"eterno", sku:"ANI-ETERNO", cat:"compromiso", name:"Eterno",
    price:340000, originalPrice:453000,
    materials:"Plata ley 925 · Moisanita central",
    gemName:"Moisanita", colors:["Plata 925","Personalizable en oro"], sizes:[5,6,7,8,9,10],
    desc:"Diseño clásico creado como opción elegante para compromiso o para celebrar vínculos significativos. Protagonizado por una moisanita central de brillo excepcional que aporta elegancia, pureza y durabilidad. Personalizable en gema y material.",
    metal:"silver", gem:"#FFFFFF",
    images:["img/anillos/eterno-1.png"]
  },
  {
    id:"luz", sku:"ANI-LUZ", cat:"compromiso", name:"Luz",
    price:340000, originalPrice:479000,
    materials:"Plata ley 925 · Moisanita corte ovalado",
    gemName:"Moisanita", colors:["Plata 925","Personalizable en oro"], sizes:[5,6,7,8,9,10],
    desc:"Diseño clásico y elegante, alternativa atemporal para compromiso. Se distingue por una moisanita central en corte ovalado, de brillo excepcional, que aporta pureza y una presencia sutil pero impactante. Personalizable en gema y material.",
    metal:"silver", gem:"#FFFFFF",
    images:["img/anillos/luz-ovalada-1.png"]
  },
  {
    id:"luz-eterna", sku:"ANI-LUZE", cat:"compromiso", name:"Luz Eterna",
    price:250000, originalPrice:313000,
    materials:"Plata ley 925 · Moisanita solitario",
    gemName:"Moisanita", colors:["Plata 925","Plata con baño de oro","Oro a solicitud"], sizes:[5,6,7,8,9,10],
    desc:"Colección de solitarios de diseño clásico, protagonizados por moisanitas de alta brillantez que capturan la luz de manera excepcional. Ideal como anillo de compromiso o joya delicada para uso diario. Desde $250.000 hasta $500.000 según piedra y diseño.",
    metal:"gold", gem:"#FFFFFF",
    images:["img/anillos/luz-eterna-1.png","img/anillos/luz-eterna-2.png"]
  },

  /* ---------------- SETS ---------------- */
  {
    id:"lazo", sku:"ANI-LAZO", cat:"sets", name:"Lazo · Set",
    price:450000, originalPrice:616000,
    materials:"Plata ley 925 · Esmeraldas de laboratorio y moisanitas",
    gemName:"Esmeralda", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Set de dos anillos pensado para el estilo stackable rings, para usarlos juntos o por separado. Sus esmeraldas de laboratorio van acompañadas de delicadas moisanitas que aportan brillo y contraste. Una composición elegante, versátil y contemporánea.",
    metal:"silver", gem:"#1F8A70",
    images:["img/anillos/lazo-1.jpg"]
  },
  {
    id:"olas-oceano", sku:"ANI-OLAS", cat:"sets", name:"Olas de Océano · Set",
    price:650000, originalPrice:855000,
    materials:"Plata ley 925 con baño de oro · Aguamarina natural",
    gemName:"Aguamarina", colors:["Plata con baño de oro","Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Set de dos anillos que combina elegancia y textura: una argolla texturizada junto a un anillo protagonista con aguamarina natural. La piedra evoca la calma del mar, mientras la argolla añade carácter y modernidad al conjunto.",
    metal:"gold", gem:"#7FD4D0",
    images:["img/anillos/olas-oceano-1.png"]
  },
  {
    id:"esencia-prisma", sku:"ANI-ESENCIA", cat:"sets", name:"Esencia Prisma · Set",
    price:350000, originalPrice:486000,
    materials:"Plata ley 925 con baño de oro · Aguamarina y amatista",
    gemName:"Aguamarina / Amatista", colors:["Plata con baño de oro","Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Colección de anillos de diseño contemporáneo con piedras naturales en corte rectangular. Incluye una versión con aguamarina natural y otra con amatista natural, en montajes minimalistas que resaltan la belleza de cada piedra. Precio por anillo.",
    metal:"gold", gem:"#7FBFD4",
    images:["img/anillos/esencia-prisma-1.png","img/anillos/esencia-prisma-2.png"]
  },

  /* ============================================================
     ARETES · STATEMENT (piezas de autor)
     ============================================================ */
  {
    id:"ar-alia", sku:"ARE-ALIA", cat:"statement", name:"Aretes Alia",
    price:390000, originalPrice:523000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Pieza de autor elaborada artesanalmente por maestros filigraneros colombianos. Tejidos a mano en delicados hilos de plata ley 925, destacan por la delicadeza y elegancia de la filigrana tradicional. Cada par se elabora bajo pedido, convirtiéndose en una joya única. Elaboración sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/alia-1.jpg"]
  },
  {
    id:"ar-amara", sku:"ARE-AMARA", cat:"statement", name:"Aretes Amara",
    price:390000, originalPrice:523000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Joya artesanal elaborada mediante la técnica tradicional de la filigrana colombiana. Cada pieza es tejida a mano en finos hilos de plata ley 925. Su diseño refleja la belleza del trabajo artesanal y el valor de una tradición transmitida de generación en generación. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/amara-1.jpg"]
  },
  {
    id:"ar-elba", sku:"ARE-ELBA", cat:"statement", name:"Aretes Elba",
    price:160000, originalPrice:214000,
    materials:"Plata ley 925 · Flores tejidas en filigrana",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Delicadas flores tejidas completamente a mano mediante la técnica de la filigrana colombiana. Su diseño resalta la delicadeza del tejido artesanal y la elegancia de las formas naturales. Cada pieza se elabora con dedicación por maestros artesanos. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/elba-1.jpg"]
  },
  {
    id:"ar-iris", sku:"ARE-IRIS", cat:"statement", name:"Aretes Iris",
    price:170000, originalPrice:228000,
    materials:"Plata ley 925 · Diseño floral en filigrana",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Presentan un delicado diseño floral tejido completamente a mano en filigrana colombiana. Una joya femenina y elegante que resalta el detalle y la tradición artesanal. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDEFF1",
    images:["img/aretes/iris-1.jpg"]
  },
  {
    id:"ar-jazmin", sku:"ARE-JAZMIN", cat:"statement", name:"Aretes Jazmín",
    price:230000, originalPrice:308000,
    materials:"Plata ley 925 · Cuarzo ahumado natural",
    gemName:"Cuarzo ahumado", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Combinan la delicadeza de la filigrana colombiana con la elegancia del cuarzo ahumado natural. Su diseño resalta la armonía entre el tejido artesanal y la belleza de las piedras naturales. Personalizable con distintas piedras. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#8B6F5C",
    images:["img/aretes/jazmin-1.jpg"]
  },
  {
    id:"ar-loto", sku:"ARE-LOTO", cat:"statement", name:"Aretes Loto",
    price:195000, originalPrice:261000,
    materials:"Plata ley 925 · Moissanita central",
    gemName:"Moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Inspirados en la delicadeza de una hoja y elaborados completamente a mano en filigrana colombiana. En el centro destaca una moissanita, que aporta un brillo excepcional y un toque contemporáneo. Personalizable con la piedra de tu elección. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#FFFFFF",
    images:["img/aretes/loto-1.jpg","img/aretes/loto-2.jpg"]
  },
  {
    id:"ar-mosaico", sku:"ARE-MOSAICO", cat:"statement", name:"Aretes Mosaico",
    price:450000, originalPrice:603000,
    materials:"Plata ley 925 · Cuarzo ahumado natural",
    gemName:"Cuarzo ahumado", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Elegante diseño cuadrado tejido en filigrana colombiana. Su piedra central es un cuarzo ahumado natural que aporta profundidad, sofisticación y un brillo sutil. La piedra puede personalizarse según la preferencia. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#8B6F5C",
    images:["img/aretes/mosaico-1.jpg","img/aretes/mosaico-2.jpg"]
  },
  {
    id:"ar-naia", sku:"ARE-NAIA", cat:"statement", name:"Aretes Naia",
    price:240000, originalPrice:322000,
    materials:"Plata ley 925 · Filigrana ovalada",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Destacan por su elegante diseño ovalado, tejido completamente a mano en finos hilos de plata ley 925 por artesanos colombianos. Una pieza clásica que refleja la delicadeza y tradición de la filigrana. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDEFF1",
    images:["img/aretes/naia-1.jpeg"]
  },
  {
    id:"ar-ori", sku:"ARE-ORI", cat:"statement", name:"Aretes Ori",
    price:250000, originalPrice:335000,
    materials:"Plata ley 925 · Perlas y topacios naturales",
    gemName:"Perla y topacio", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Pieza elegante que combina la delicadeza de las perlas con el brillo de los topacios naturales. Diseño femenino, atemporal y versátil que realza cualquier ocasión. Personalizable con distintas piedras y colores. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#EDE6D6",
    images:["img/aretes/ori-1.png"]
  },
  {
    id:"ar-orquidea-dorada", sku:"ARE-ORQD", cat:"statement", name:"Aretes Orquídea Dorada",
    price:290000, originalPrice:389000,
    materials:"Plata ley 925 · Filigrana artesanal",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Inspirados en la elegancia de la flor nacional de Colombia. Elaborados artesanalmente en plata ley 925 mediante la técnica de la filigrana, reflejan la belleza de la naturaleza y el valor del trabajo hecho a mano. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#C9A24B",
    images:["img/aretes/orquidea-dorada-1.png"]
  },
  {
    id:"ar-orquidea-real", sku:"ARE-ORQR", cat:"statement", name:"Aretes Orquídea Real",
    price:350000, originalPrice:469000,
    materials:"Plata ley 925 · Filigrana artesanal",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Interpretación elegante de la flor símbolo de Colombia. Destacan por su diseño sofisticado y el extraordinario detalle de su elaboración. Cada par es tejido completamente a mano, convirtiéndose en una pieza única de alta joyería artesanal. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#C9A24B",
    images:["img/aretes/orquidea-real-1.png"]
  },
  {
    id:"ar-trilogia", sku:"ARE-TRIL", cat:"statement", name:"Aretes Trilogía",
    price:320000, originalPrice:429000,
    materials:"Plata ley 925 · Topacios rosados y granates",
    gemName:"Topacio rosado y granate", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Combinan la delicadeza de la filigrana colombiana con la belleza de los topacios rosados y los granates naturales. Su composición crea un contraste elegante que aporta color, luminosidad y sofisticación. Piedras personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"rose", gem:"#E86FA0",
    images:["img/aretes/trilogia-1.png"]
  },
  {
    id:"ar-trilogia-azul", sku:"ARE-TRILA", cat:"statement", name:"Aretes Trilogía Azul",
    price:320000, originalPrice:429000,
    materials:"Plata ley 925 · Topacios azules naturales",
    gemName:"Topacio azul", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Destacan por la intensidad y el brillo de sus topacios azules naturales. Combinan la tradición de la filigrana colombiana con un diseño elegante y contemporáneo. Personalizables con distintas piedras según disponibilidad. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#3FA9D4",
    images:["img/aretes/trilogia-azul-1.png"]
  },
  {
    id:"ar-zaria", sku:"ARE-ZARIA", cat:"statement", name:"Aretes Zaria",
    price:220000, originalPrice:295000,
    materials:"Plata ley 925 · Topacios y granates naturales",
    gemName:"Topacio y granate", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Delicado diseño entorchado tejido completamente a mano mediante la técnica tradicional de la filigrana colombiana. Incorporan topacios y granates naturales que aportan brillo, contraste y elegancia. Piedras personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#9B3B3B",
    images:["img/aretes/zaria-1.jpg","img/aretes/zaria-2.jpg"]
  },
  {
    id:"ar-legado", sku:"ARE-LEGADO", cat:"statement", name:"Candongas Legado",
    price:590000, originalPrice:791000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Representan la riqueza de la tradición joyera colombiana. Elaboradas artesanalmente en plata ley 925 mediante la técnica de la filigrana, destacan por su diseño elegante y su meticuloso trabajo manual. Preservan un legado de tradición y excelencia. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#C9A24B",
    images:["img/aretes/candongas-legado-1.png"]
  },
  {
    id:"ar-siena", sku:"ARE-SIENA", cat:"statement", name:"Aretes Siena",
    price:220000, originalPrice:295000,
    materials:"Plata ley 925 · Amatistas y cuarzos naturales",
    gemName:"Amatista y cuarzo", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Elegante diseño colgante inspirado en la naturaleza. Incorporan amatistas naturales y cuarzos ahumados que aportan profundidad, brillo y sofisticación. Cada pieza puede personalizarse con distintas piedras naturales. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#9B6FB3",
    images:["img/aretes/siena-1.jpg","img/aretes/siena-2.jpg"]
  },

  /* ============================================================
     ARETES · CANDONGAS (hoops)
     ============================================================ */
  {
    id:"ar-esmerald", sku:"ARE-ESM", cat:"candongas", name:"Candongas Esmerald",
    price:220000, originalPrice:295000,
    materials:"Plata ley 925 · Circones",
    gemName:"Circón", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Reinterpretación elegante de un clásico. Elaboradas artesanalmente en plata ley 925, incorporan delicados circones que aportan brillo y sofisticación sin perder la esencia del trabajo hecho a mano. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDEFF1",
    images:["img/aretes/candongas-esmerald-1.jpg"]
  },
  {
    id:"ar-esencia-gruesas", sku:"ARE-ESEG", cat:"candongas", name:"Candongas Esencia · Gruesas",
    price:250000, originalPrice:335000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Elaboradas artesanalmente en finos hilos de plata ley 925, tejidos completamente a mano por artesanos colombianos. Su diseño de mayor volumen conserva la delicadeza y elegancia de la filigrana tradicional. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/esencia-gruesas-1.jpg"]
  },
  {
    id:"ar-esencia-sencillas", sku:"ARE-ESES", cat:"candongas", name:"Candongas Esencia · Sencillas",
    price:190000, originalPrice:255000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Destacan por su diseño ligero y atemporal. Elaboradas artesanalmente en plata ley 925 mediante la técnica de la filigrana, son una pieza versátil para cualquier ocasión. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/esencia-sencillas-1.jpg"]
  },
  {
    id:"ar-gardenia", sku:"ARE-GARD", cat:"candongas", name:"Candongas Gardenia",
    price:190000, originalPrice:255000,
    materials:"Plata ley 925 · Filigrana en espiral",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Expresión de la filigrana colombiana en su máxima delicadeza. Su diseño en forma de espiral resalta el trabajo artesanal realizado completamente a mano. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/gardenia-1.jpg"]
  },
  {
    id:"ar-halo-hoops", sku:"ARE-HALOH", cat:"candongas", name:"Halo Hoops",
    price:280000, originalPrice:375000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Candongas elaboradas artesanalmente en plata ley 925 mediante la técnica de la filigrana colombiana. Su diseño contemporáneo combina elegancia, ligereza y el valor del trabajo hecho completamente a mano. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/halo-hoops-1.png"]
  },
  {
    id:"ar-nara-hoops", sku:"ARE-NARAH", cat:"candongas", name:"Nara Hoops",
    price:230000, originalPrice:308000,
    materials:"Plata ley 925 · Flores tejidas en filigrana",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Elegantes candongas elaboradas en filigrana colombiana. Su diseño incorpora delicadas flores tejidas en el interior, creando una pieza llena de detalles y sofisticación. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/nara-hoops-1.jpg","img/aretes/nara-hoops-2.jpg"]
  },
  {
    id:"ar-oriana-hoops", sku:"ARE-ORIAH", cat:"candongas", name:"Oriana Hoops",
    price:340000, originalPrice:456000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Candongas de gran tamaño elaboradas artesanalmente en plata ley 925 mediante la técnica tradicional de la filigrana colombiana. Su diseño elegante y ligero resalta el minucioso trabajo realizado completamente a mano. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/oriana-hoops-1.jpg"]
  },
  {
    id:"ar-primavera-hoops", sku:"ARE-PRIMH", cat:"candongas", name:"Primavera Hoops",
    price:230000, originalPrice:308000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Candongas inspiradas en la delicadeza y el movimiento de la naturaleza. Elaboradas artesanalmente en plata ley 925 mediante la técnica tradicional de la filigrana colombiana, ofrecen un diseño ligero, elegante y lleno de detalles. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/primavera-hoops-1.jpg","img/aretes/primavera-hoops-2.jpg"]
  },
  {
    id:"ar-cayena-hoops", sku:"ARE-CAYH", cat:"candongas", name:"Cayena Hoops",
    price:190000, originalPrice:255000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Delicadas candongas elaboradas artesanalmente mediante la técnica tradicional de la filigrana colombiana. Tejidas completamente a mano en finos hilos de plata ley 925, destacan por su diseño ligero, elegante y atemporal. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/cayena-hoops-1.jpg"]
  },
  {
    id:"ar-elia-hoops", sku:"ARE-ELIAH", cat:"candongas", name:"Elia Hoops",
    price:350000, originalPrice:469000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Elegantes candongas elaboradas en filigrana colombiana, tejidas completamente a mano por maestros artesanos. Su diseño combina delicadeza, movimiento y sofisticación, convirtiéndolas en una pieza versátil para cualquier ocasión. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/elia-hoops-1.jpg"]
  },
  {
    id:"ar-jardin-hoops", sku:"ARE-JARDH", cat:"candongas", name:"Jardín Hoops",
    price:220000, originalPrice:295000,
    materials:"Plata ley 925 · Hojas tejidas en filigrana",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Inspiradas en la belleza de las hojas y las formas orgánicas de la naturaleza. Su diseño de hojas delicadamente torcidas, elaborado completamente a mano en filigrana colombiana, aporta movimiento, elegancia y un estilo único. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#C9A24B",
    images:["img/aretes/jardin-hoops-1.jpg","img/aretes/jardin-hoops-2.jpg"]
  },
  {
    id:"ar-liora-hoops", sku:"ARE-LIORH", cat:"candongas", name:"Liora Hoops",
    price:260000, originalPrice:349000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Elegantes candongas elaboradas artesanalmente en plata ley 925 mediante la técnica tradicional de la filigrana colombiana. Su diseño ligero y sofisticado resalta el delicado tejido realizado completamente a mano, convirtiéndolas en una pieza atemporal. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDEFF1",
    images:["img/aretes/liora-hoops-1.jpg"]
  },
  {
    id:"ar-nela-hoops", sku:"ARE-NELAH", cat:"candongas", name:"Mini Nela Hoops",
    price:190000, originalPrice:255000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Versión delicada y versátil de las clásicas candongas de filigrana. Elaboradas completamente a mano en plata ley 925, destacan por su ligereza y elegancia, ideales para el uso diario sin perder el encanto del trabajo artesanal. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/nela-hoops-1.jpg"]
  },
  {
    id:"ar-trama-hoops", sku:"ARE-TRAMH", cat:"candongas", name:"Trama Hoops",
    price:230000, originalPrice:308000,
    materials:"Plata ley 925 · Hilos entorchados y granulados",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Candongas que resaltan la riqueza de la filigrana colombiana a través de un delicado tejido de hilos de plata entorchados y granulados, elaborados completamente a mano. Su diseño combina textura, profundidad y elegancia. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/trama-hoops-1.jpg","img/aretes/trama-hoops-2.jpg"]
  },

  /* ============================================================
     ARETES · MINI STUDS (topos)
     ============================================================ */
  {
    id:"ar-aira", sku:"ARE-AIRA", cat:"studs", name:"Mini Aira",
    price:190000, originalPrice:255000,
    materials:"Plata ley 925 · Turmalinas naturales",
    gemName:"Turmalina", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Pieza delicada y luminosa elaborada en plata ley 925, realzada con turmalinas naturales que aportan color, brillo y elegancia. Su diseño minimalista los convierte en el complemento ideal para el día a día. Piedra personalizable. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#D98FA8",
    images:["img/aretes/aira-1.jpg"]
  },
  {
    id:"ar-carmesi", sku:"ARE-CARM", cat:"studs", name:"Aretes Carmesí",
    price:290000, originalPrice:389000,
    materials:"Plata ley 925 · Rubíes, esmeraldas y diamantes naturales",
    gemName:"Rubí, esmeralda y diamante", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Combinan la intensidad de los rubíes naturales, la frescura de las esmeraldas naturales y el brillo de los diamantes naturales en una composición elegante y sofisticada. Disponibles con cierre de rosca de seguridad o mariposa tradicional. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#A6192E",
    images:["img/aretes/carmesi-1.jpg"]
  },
  {
    id:"ar-corona", sku:"ARE-CORO", cat:"studs", name:"Mini Corona",
    price:190000, originalPrice:255000,
    materials:"Plata ley 925 · Rubí natural",
    gemName:"Rubí natural", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Destacan por la belleza de su rubí natural, cuidadosamente montado para crear una pieza clásica, delicada y elegante que puede acompañarte todos los días. Piedra personalizable. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#A6192E",
    images:["img/aretes/corona-1.png"]
  },
  {
    id:"ar-florina", sku:"ARE-FLOR", cat:"studs", name:"Mini Florina",
    price:150000, originalPrice:201000,
    materials:"Plata ley 925 · Moissanitas",
    gemName:"Moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Joya delicada elaborada en plata ley 925 con brillantes moissanitas, una piedra reconocida por su extraordinario brillo y elegancia. Su diseño floral los convierte en una pieza sutil y femenina. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#FFFFFF",
    images:["img/aretes/florina-1.jpg"]
  },
  {
    id:"ar-halo", sku:"ARE-HALO", cat:"studs", name:"Aretes Halo",
    price:170000, originalPrice:228000,
    materials:"Plata ley 925 · Diseño clásico",
    gemName:"Circón", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Diseño clásico, elegante y atemporal, pensado para acompañarte todos los días. Elaborados en plata ley 925, destacan por su sencillez y versatilidad, convirtiéndose en un básico imprescindible. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDEFF1",
    images:["img/aretes/halo-1.jpg"]
  },
  {
    id:"ar-jade", sku:"ARE-JADE", cat:"studs", name:"Aretes Jade",
    price:160000, originalPrice:214000,
    materials:"Plata ley 925 · Circón y moissanita",
    gemName:"Circón y moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Combinan un delicado circón con una brillante moissanita, creando una joya elegante, luminosa y perfecta para cualquier ocasión. Personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#FFFFFF",
    images:["img/aretes/jade-1.png"]
  },
  {
    id:"ar-lady", sku:"ARE-LADY", cat:"studs", name:"Aretes Lady",
    price:160000, originalPrice:214000,
    materials:"Plata ley 925 · Circones",
    gemName:"Circón", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Destacan por su diseño clásico de tamaño mediano y el brillo de sus circones cuidadosamente seleccionados. Una joya elegante y versátil que complementa cualquier estilo. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDEFF1",
    images:["img/aretes/lady-1.jpg"]
  },
  {
    id:"ar-laguna", sku:"ARE-LAGU", cat:"studs", name:"Aretes Laguna",
    price:150000, originalPrice:201000,
    materials:"Plata ley 925 · Circones",
    gemName:"Circón", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Elegante diseño rectangular que resalta el brillo de sus delicados circones. Una pieza moderna y sofisticada, ideal para quienes buscan una joya de líneas limpias y atemporales. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDEFF1",
    images:["img/aretes/laguna-1.jpg"]
  },
  {
    id:"ar-lavanda", sku:"ARE-LAVA", cat:"studs", name:"Aretes Lavanda",
    price:160000, originalPrice:214000,
    materials:"Plata ley 925 · Amatista de laboratorio",
    gemName:"Amatista", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Destacan por su elegante diseño ovalado y el delicado color de su amatista de laboratorio. Una joya sofisticada que aporta un toque de color y elegancia a cualquier ocasión. Piedra personalizable. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#9B6FB3",
    images:["img/aretes/lavanda-1.jpg"]
  },
  {
    id:"ar-mini-lavanda", sku:"ARE-MLAVA", cat:"studs", name:"Mini Lavanda",
    price:140000, originalPrice:188000,
    materials:"Plata ley 925 · Amatista de laboratorio",
    gemName:"Amatista", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Versión más delicada del diseño Lavanda, ideal para quienes prefieren una joya sutil sin perder la elegancia y el brillo de la amatista de laboratorio. Piedra personalizable. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#9B6FB3",
    images:["img/aretes/mini-lavanda-1.jpg"]
  },
  {
    id:"ar-lila", sku:"ARE-LILA", cat:"studs", name:"Aretes Lila",
    price:170000, originalPrice:228000,
    materials:"Plata ley 925 · Diseño rectangular",
    gemName:"Circón", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Refinado diseño rectangular que combina elegancia y modernidad. Su estilo minimalista los convierte en una pieza perfecta tanto para el día como para la noche. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDEFF1",
    images:["img/aretes/lila-1.jpg","img/aretes/lila-2.jpg"]
  },
  {
    id:"ar-lumi", sku:"ARE-LUMI", cat:"studs", name:"Mini Lumi",
    price:150000, originalPrice:201000,
    materials:"Plata ley 925 · Diseño clásico",
    gemName:"Circón", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Clásico imprescindible para el uso diario. Su diseño delicado y atemporal aporta un brillo sutil que combina fácilmente con cualquier estilo. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#FFFFFF",
    images:["img/aretes/lumi-1.png"]
  },
  {
    id:"ar-marea", sku:"ARE-MAREA", cat:"studs", name:"Aretes Marea",
    price:220000, originalPrice:295000,
    materials:"Plata ley 925 · Turquesas naturales y moissanitas",
    gemName:"Turquesa y moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Combinan la belleza de las turquesas naturales con el brillo excepcional de las moissanitas. Inspirados en los colores del mar, ofrecen un diseño fresco, elegante y lleno de personalidad. Piedras personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#0ABAB5",
    images:["img/aretes/marea-1.jpg"]
  },
  {
    id:"ar-mini-emerald", sku:"ARE-MEMR", cat:"studs", name:"Mini Candongas Esmeralda",
    price:160000, originalPrice:214000,
    materials:"Plata ley 925 · Esmeralda de laboratorio",
    gemName:"Esmeralda", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Versión delicada y elegante de un clásico. Elaboradas en plata ley 925, incorporan esmeraldas de laboratorio que aportan un intenso color verde y un brillo sofisticado. Piedra personalizable. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#1F8A70",
    images:["img/aretes/mini-emerald-1.png"]
  },
  {
    id:"ar-nacar", sku:"ARE-NACAR", cat:"studs", name:"Aretes Nácar",
    price:190000, originalPrice:255000,
    materials:"Plata ley 925 · Perlas naturales",
    gemName:"Perla natural", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Combinan la delicadeza de las perlas con un diseño clásico y elegante, convirtiéndose en una joya versátil que nunca pasa de moda. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDE6D6",
    images:["img/aretes/nacar-1.jpg"]
  },
  {
    id:"ar-prisma", sku:"ARE-PRIS", cat:"studs", name:"Aretes Prisma",
    price:250000, originalPrice:335000,
    materials:"Plata ley 925 · Esmeraldas de laboratorio",
    gemName:"Esmeralda", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Destacan por su elegante diseño rectangular y el intenso color de sus esmeraldas de laboratorio. Una joya contemporánea que aporta sofisticación y brillo. Personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#1F8A70",
    images:["img/aretes/prisma-1.jpg"]
  },
  {
    id:"ar-rosalia", sku:"ARE-ROSA", cat:"studs", name:"Aretes Rosalía",
    price:150000, originalPrice:201000,
    materials:"Plata ley 925 · Topacios rosados",
    gemName:"Topacio rosado", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Incorporan delicados topacios rosados que aportan un toque femenino, elegante y luminoso. Su diseño clásico permite lucirlos tanto en ocasiones especiales como en el día a día. Personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#E86FA0",
    images:["img/aretes/rosalia-1.png"]
  },
  {
    id:"ar-sky", sku:"ARE-SKY", cat:"studs", name:"Aretes Sky",
    price:190000, originalPrice:255000,
    materials:"Plata ley 925 · Topacios azules",
    gemName:"Topacio azul", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Resaltan la intensidad y el brillo de sus topacios azules, evocando los tonos del cielo y transmitiendo elegancia en una pieza clásica y sofisticada. Personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#3FA9D4",
    images:["img/aretes/sky-1.jpg","img/aretes/sky-2.jpg"]
  },
  {
    id:"ar-sky-oval", sku:"ARE-SKYO", cat:"studs", name:"Aretes Sky Oval",
    price:190000, originalPrice:255000,
    materials:"Plata ley 925 · Topacios azules",
    gemName:"Topacio azul", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Elegante diseño ovalado que resalta la belleza de los topacios azules. Una joya refinada que combina delicadeza, brillo y un estilo atemporal. Personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#3FA9D4",
    images:["img/aretes/sky-oval-1.jpg","img/aretes/sky-oval-2.jpg"]
  },
  {
    id:"ar-sky-shine", sku:"ARE-SKYS", cat:"studs", name:"Aretes Sky Shine",
    price:270000, originalPrice:362000,
    materials:"Plata ley 925 · Topacios azules y moissanitas",
    gemName:"Topacio azul y moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Combinan el intenso color de los topacios azules con el extraordinario brillo de las moissanitas, creando una pieza elegante y sofisticada que destaca por su luminosidad. Personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#3FA9D4",
    images:["img/aretes/sky-shine-1.jpg"]
  },
  {
    id:"ar-tria", sku:"ARE-TRIA", cat:"studs", name:"Mini Tría",
    price:130000, originalPrice:174000,
    materials:"Plata ley 925 · Moissanitas",
    gemName:"Moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Joya delicada elaborada con moissanitas, reconocidas por su brillo excepcional. Su diseño minimalista los convierte en una excelente opción para el uso diario. Personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#FFFFFF",
    images:["img/aretes/tria-1.jpg"]
  },
  {
    id:"ar-vera", sku:"ARE-VERA", cat:"studs", name:"Aretes Vera",
    price:250000, originalPrice:335000,
    materials:"Plata ley 925 · Esmeraldas de laboratorio y moissanitas",
    gemName:"Esmeralda y moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Combinan la intensidad del verde de las esmeraldas de laboratorio con el brillo de las moissanitas, logrando una pieza elegante, contemporánea y llena de luz. Personalizables con distintas piedras. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#1F8A70",
    images:["img/aretes/vera-1.png"]
  }
];

if (typeof window !== "undefined") { window.PRODUCTS = PRODUCTS; }
