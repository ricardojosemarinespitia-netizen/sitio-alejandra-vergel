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
    price:350000,
    materials:"Plata ley 925 con baño de oro · Cuarzo ahumado natural",
    gemName:"Cuarzo ahumado", colors:["Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Pieza de autor tejida a mano en filigrana por maestros artesanos colombianos. En el centro, un elegante cuarzo ahumado de tonalidades profundas aporta carácter y un brillo sutil. Cada anillo se elabora bajo pedido, convirtiéndose en una pieza única.",
    metal:"gold", gem:"#8B6F5C",
    images:["img/anillos/aura-1.jpg","img/anillos/aura-2.jpg","img/anillos/aura-3.png"]
  },
  {
    id:"hebra", sku:"ANI-HEBRA", cat:"filigrana", name:"Hebra",
    price:250000,
    materials:"Plata ley 925 con baño de oro · Filigrana",
    gemName:"Sin piedra", colors:["Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Celebra la esencia de la filigrana colombiana a través de un diseño limpio, atemporal y completamente tejido a mano. Sin piedras, Hebra destaca por la pureza de sus formas y el protagonismo del trabajo artesanal. Versátil para el día a día o para ocasiones especiales.",
    metal:"gold", gem:"#E7D3A1",
    images:["img/anillos/hebra-1.jpg","img/anillos/hebra-2.jpg"]
  },
  {
    id:"bruma", sku:"ANI-BRUMA", cat:"filigrana", name:"Bruma",
    price:300000,
    materials:"Plata ley 925 · Aguamarina azul natural",
    gemName:"Aguamarina", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Tejida completamente a mano en filigrana, de diseño etéreo y ligero. En el centro, una aguamarina azul natural de corte redondo aporta frescura y un carácter sereno que evoca la suavidad de la bruma sobre el agua. Cada piedra es única.",
    metal:"silver", gem:"#7FBFD4",
    images:["img/anillos/bruma-1.png"]
  },
  {
    id:"savia", sku:"ANI-SAVIA", cat:"filigrana", name:"Savia",
    price:220000,
    materials:"Plata ley 925 · Gema ovalada verde",
    gemName:"Gema verde", colors:["Plata 925","Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Tejida a mano en filigrana, resalta la belleza de una piedra ovalada verde de tamaño mediano. La combinación entre la filigrana tradicional y el color vibrante de la gema da vida a una pieza versátil, elegante y llena de personalidad.",
    metal:"silver", gem:"#5FA86F",
    images:["img/anillos/savia-1.png"]
  },
  {
    id:"alba", sku:"ANI-ALBA", cat:"filigrana", name:"Alba",
    price:350000,
    materials:"Plata ley 925 · Alejandrita natural",
    gemName:"Alejandrita", colors:["Plata 925","Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Tejida a mano en filigrana, resalta la belleza de una alejandrita natural, gema excepcional reconocida por sus sutiles cambios de tonalidad según la luz. Una joya elegante, sofisticada y llena de significado para quienes valoran las piezas exclusivas.",
    metal:"silver", gem:"#6FA0C0",
    images:["img/anillos/alba-1.png"]
  },
  {
    id:"selva", sku:"ANI-SELVA", cat:"filigrana", name:"Selva",
    price:320000,
    materials:"Plata ley 925 con baño de oro · Esmeralda natural",
    gemName:"Esmeralda", colors:["Plata con baño de oro","Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Elaborado en Colombia mediante la técnica de filigrana. Su protagonista es una esmeralda natural de corte ovalado, semi en bruto y semi pulida, que resalta la belleza orgánica y auténtica de la piedra, haciendo de cada pieza una joya irrepetible.",
    metal:"gold", gem:"#1F8A70",
    images:["img/anillos/selva-1.jpg","img/anillos/selva-2.jpg"]
  },

  /* ---------------- PIEDRAS DE COLOR ---------------- */
  {
    id:"orilla", sku:"ANI-ORILLA", cat:"color", name:"Orilla",
    price:290000,
    materials:"Plata ley 925 con baño de oro · Amatistas y circón",
    gemName:"Amatista", colors:["Plata con baño de oro","Oro 14K","Oro 18K"], sizes:[5,6,7,8,9,10],
    desc:"Pieza de autor que celebra la belleza de las gemas naturales. Dos amatistas naturales enmarcan un delicado circón transparente, en equilibrio perfecto entre color, brillo y sofisticación. Personalizable con las piedras de tu elección; disponible también en oro de 14K y 18K.",
    metal:"gold", gem:"#9B6FB3",
    images:["img/anillos/orilla-1.jpg","img/anillos/orilla-2.jpg"]
  },
  {
    id:"orilla-plateado", sku:"ANI-ORILLAP", cat:"color", name:"Orilla Plateado",
    price:250000,
    materials:"Plata ley 925 · Aguamarina y amatistas naturales",
    gemName:"Aguamarina", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Pieza delicada y luminosa que combina la belleza de las piedras naturales con la elegancia de la joyería artesanal. Resalta la armonía entre una suave aguamarina y amatistas naturales, creando una composición llena de color y equilibrio.",
    metal:"silver", gem:"#7FBFD4",
    images:["img/anillos/orilla-plateado-1.jpg","img/anillos/orilla-plateado-2.jpg"]
  },
  {
    id:"marquis", sku:"ANI-MARQUIS", cat:"color", name:"Marquis",
    price:320000,
    materials:"Plata ley 925 con baño de oro · Amatista talla marquesa",
    gemName:"Amatista", colors:["Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Diseño entorchado en delicados hilos de plata que resalta el trabajo manual de la filigrana contemporánea. En el centro, una piedra talla marquesa aporta carácter y distinción, convirtiéndose en el punto focal del diseño. Personalizable con la piedra que desees.",
    metal:"gold", gem:"#9B6FB3",
    images:["img/anillos/marquis-1.jpg"]
  },
  {
    id:"aqua", sku:"ANI-AQUA", cat:"color", name:"Aqua",
    price:320000,
    materials:"Plata ley 925 · Topacio azul natural y moisanitas",
    gemName:"Topacio azul", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Diseñada para resaltar la luminosidad de las piedras. Su gema central es un topacio azul natural, rodeado por delicadas moisanitas que aportan brillo y sofisticación, en una composición equilibrada, elegante y atemporal. Personalizable con la gema central de tu elección.",
    metal:"silver", gem:"#3FA9D4",
    images:["img/anillos/aqua-1.jpg"]
  },
  {
    id:"aquamarine", sku:"ANI-AQUAM", cat:"color", name:"Aquamarine",
    price:490000,
    materials:"Plata ley 925 · Aquamarina y moisanitas",
    gemName:"Aquamarina", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Comparte el diseño estructural del anillo Aqua, centrado en una gema de aquamarina acompañada por delicadas moisanitas que aportan brillo y sofisticación. Una joya luminosa, fresca y atemporal, elaborada a mano por artesanos colombianos.",
    metal:"silver", gem:"#7FD4D0",
    images:["img/anillos/aquamarine-1.jpg"]
  },
  {
    id:"cora", sku:"ANI-CORA", cat:"color", name:"Cora",
    price:190000,
    materials:"Plata ley 925 · Amatista en gota",
    gemName:"Amatista", colors:["Plata 925","Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Disponible en acabado plateado o con baño de oro. Su diseño destaca por una elegante amatista en forma de gota que aporta un toque de color profundo, femenino y sofisticado. Una pieza delicada, versátil y atemporal para el uso diario.",
    metal:"silver", gem:"#9B6FB3",
    images:["img/anillos/cora-1.jpg"]
  },
  {
    id:"lira", sku:"ANI-LIRA", cat:"color", name:"Lira",
    price:170000,
    materials:"Plata ley 925 · Gema ovalada de laboratorio",
    gemName:"Gema personalizable", colors:["Plata 925","Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Diseño delicado que resalta una piedra ovalada disponible en una variedad de colores, personalizable según tu elección. Una pieza elegante, versátil y contemporánea que se adapta a diferentes estilos y ocasiones.",
    metal:"silver", gem:"#C56FA0",
    images:["img/anillos/lira-1.jpg","img/anillos/lira-2.jpg","img/anillos/lira-3.jpg"]
  },
  {
    id:"asura", sku:"ANI-ASURA", cat:"color", name:"Asura",
    price:390000,
    materials:"Plata ley 925 con baño de oro · Topacio azul natural",
    gemName:"Topacio azul", colors:["Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Diseño elegante y contemporáneo que resalta una gema central de topacio azul natural, seleccionada para aportar luminosidad, profundidad y sofisticación. Combina tradición y diseño moderno; personalizable con la gema de tu elección.",
    metal:"gold", gem:"#3FA9D4",
    images:["img/anillos/asura-1.jpg","img/anillos/asura-2.jpg"]
  },
  {
    id:"cielo", sku:"ANI-CIELO", cat:"color", name:"Cielo",
    price:390000,
    materials:"Plata ley 925 · Topacio azul de laboratorio",
    gemName:"Topacio azul", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Diseñada para capturar la esencia de la luz y la profundidad de los tonos azules. Su topacio azul, cuidadosamente engastado, resalta su brillo y claridad, evocando la serenidad del cielo en cada detalle. Personalizable con la gema de tu elección.",
    metal:"silver", gem:"#3FA9D4",
    images:["img/anillos/cielo-1.jpg","img/anillos/cielo-2.jpg"]
  },
  {
    id:"lady", sku:"ANI-LADY", cat:"color", name:"Lady",
    price:160000,
    materials:"Plata ley 925 · Gema de laboratorio (color a elección)",
    gemName:"Gema personalizable", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Resalta la elegancia de las formas simples y la belleza del color. Sus gemas están disponibles en una amplia variedad de colores que puedes elegir. Una joya versátil, delicada y contemporánea, ideal para el uso diario o para complementar cualquier look.",
    metal:"silver", gem:"#C56FA0",
    images:["img/anillos/lady-1.jpg","img/anillos/lady-2.jpg"]
  },
  {
    id:"trenza", sku:"ANI-TRENZA", cat:"color", name:"Trenza",
    price:320000,
    materials:"Plata ley 925 con baño de oro · Topacio azul y citrino",
    gemName:"Topacio azul y citrino", colors:["Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Aro entorchado hecho completamente a mano. Su diseño combina topacio azul cuadrado natural y citrino cuadrado natural, creando un contraste luminoso entre tonos fríos y cálidos. Personalizable con la elección de las gemas.",
    metal:"gold", gem:"#3FA9D4",
    images:["img/anillos/trenza-1.jpg"]
  },
  {
    id:"aire", sku:"ANI-AIRE", cat:"color", name:"Aire",
    price:250000,
    materials:"Plata ley 925 con baño de oro · Aguamarina y citrino",
    gemName:"Aguamarina y citrino", colors:["Plata con baño de oro"], sizes:["Pequeño","Grande"],
    desc:"Diseño redondo de aro entorchado hecho a mano. Combina aguamarina natural y citrino natural, en un contraste armónico entre tonos frescos y cálidos. Disponible en tamaño pequeño ($250.000) y grande ($320.000). Personalizable con la gema de tu elección.",
    metal:"gold", gem:"#7FD4D0",
    images:["img/anillos/aire-1.png"]
  },
  {
    id:"marea", sku:"ANI-MAREA", cat:"color", name:"Marea",
    price:650000,
    materials:"Plata ley 925 · Aguamarinas y moisanitas",
    gemName:"Aguamarina", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Inspirada en el movimiento orgánico de las olas del mar. Su diseño fluido tipo nudo evoca la suavidad y el poder del agua. Compuesto por aguamarinas naturales y moisanitas redondas, una joya escultural llena de carácter, naturaleza y sofisticación.",
    metal:"silver", gem:"#7FD4D0",
    images:["img/anillos/marea-1.png","img/anillos/marea-2.png"]
  },
  {
    id:"gota-imperial", sku:"ANI-GOTA", cat:"color", name:"Gota Imperial",
    price:370000,
    materials:"Plata ley 925 · Topacio fucsia y moissanita",
    gemName:"Topacio fucsia", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Joya elegante y sofisticada de diseño en doble gota. Combina el vibrante color del topacio fucsia en corte pera con el brillo intenso de la moissanita, creando una pieza llamativa y delicada. Perfecta para ocasiones especiales.",
    metal:"silver", gem:"#E86FA0",
    images:["img/anillos/gota-imperial-1.png"]
  },
  {
    id:"prisma-rosa", sku:"ANI-PRISMA", cat:"color", name:"Prisma Rosa",
    price:290000,
    materials:"Plata ley 925 · Topacio rosado rectangular",
    gemName:"Topacio rosado", colors:["Plata 925","Plata con baño de oro"], sizes:[5,6,7,8,9,10],
    desc:"Diseño elegante y minimalista, protagonizado por una piedra central rectangular de topacio rosado acompañada de delicados destellos tipo zirconia. Su corte geométrico le aporta un estilo moderno y refinado, sutil pero llamativo.",
    metal:"rose", gem:"#E86FA0",
    images:["img/anillos/prisma-rosa-1.png"]
  },
  {
    id:"jardin-rosado", sku:"ANI-JARDIN", cat:"color", name:"Jardín Rosado",
    price:390000,
    materials:"Plata ley 925 con baño de oro · Topacio rosa",
    gemName:"Topacio rosa", colors:["Plata con baño de oro","Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Inspirado en la belleza de la naturaleza. Su delicado diseño de hojitas y ramitas envuelve una hermosa piedra central de topacio rosa, creando una pieza romántica, femenina y llena de encanto. Para quienes aman los diseños orgánicos con personalidad.",
    metal:"rose", gem:"#E86FA0",
    images:["img/anillos/jardin-rosado-1.jpg"]
  },
  {
    id:"cielo-cuadrado", sku:"ANI-CIELOC", cat:"color", name:"Cielo Cuadrado",
    price:390000,
    materials:"Plata ley 925 con baño de oro · Topacio azul cuadrado",
    gemName:"Topacio azul", colors:["Plata con baño de oro","Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Pieza moderna protagonizada por una piedra central cuadrada de topacio azul creado en laboratorio. Su tono profundo y brillante evoca la calma del cielo y el mar. Diseño limpio y geométrico, ideal para el uso diario o looks más formales.",
    metal:"gold", gem:"#3FA9D4",
    images:["img/anillos/cielo-cuadrado-1.jpeg"]
  },

  /* ---------------- COMPROMISO / SOLITARIOS ---------------- */
  {
    id:"eterno", sku:"ANI-ETERNO", cat:"compromiso", name:"Eterno",
    price:340000,
    materials:"Plata ley 925 · Moisanita central",
    gemName:"Moisanita", colors:["Plata 925","Personalizable en oro"], sizes:[5,6,7,8,9,10],
    desc:"Diseño clásico creado como opción elegante para compromiso o para celebrar vínculos significativos. Protagonizado por una moisanita central de brillo excepcional que aporta elegancia, pureza y durabilidad. Personalizable en gema y material.",
    metal:"silver", gem:"#FFFFFF",
    images:["img/anillos/eterno-1.jpg"]
  },
  {
    id:"luz", sku:"ANI-LUZ", cat:"compromiso", name:"Luz",
    price:340000,
    materials:"Plata ley 925 · Moisanita corte ovalado",
    gemName:"Moisanita", colors:["Plata 925","Personalizable en oro"], sizes:[5,6,7,8,9,10],
    desc:"Diseño clásico y elegante, alternativa atemporal para compromiso. Se distingue por una moisanita central en corte ovalado, de brillo excepcional, que aporta pureza y una presencia sutil pero impactante. Personalizable en gema y material.",
    metal:"silver", gem:"#FFFFFF",
    images:["img/anillos/luz-ovalada-1.jpg"]
  },
  {
    id:"luz-eterna", sku:"ANI-LUZE", cat:"compromiso", name:"Luz Eterna",
    price:250000,
    materials:"Plata ley 925 · Moisanita solitario",
    gemName:"Moisanita", colors:["Plata 925","Plata con baño de oro","Oro a solicitud"], sizes:[5,6,7,8,9,10],
    desc:"Colección de solitarios de diseño clásico, protagonizados por moisanitas de alta brillantez que capturan la luz de manera excepcional. Ideal como anillo de compromiso o joya delicada para uso diario. Desde $250.000 hasta $500.000 según piedra y diseño.",
    metal:"gold", gem:"#FFFFFF",
    images:["img/anillos/luz-eterna-1.jpg","img/anillos/luz-eterna-2.jpg"]
  },

  /* ---------------- SETS ---------------- */
  {
    id:"lazo", sku:"ANI-LAZO", cat:"sets", name:"Lazo · Set",
    price:450000,
    materials:"Plata ley 925 · Esmeraldas de laboratorio y moisanitas",
    gemName:"Esmeralda", colors:["Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Set de dos anillos pensado para el estilo stackable rings, para usarlos juntos o por separado. Sus esmeraldas de laboratorio van acompañadas de delicadas moisanitas que aportan brillo y contraste. Una composición elegante, versátil y contemporánea.",
    metal:"silver", gem:"#1F8A70",
    images:["img/anillos/lazo-1.jpg"]
  },
  {
    id:"olas-oceano", sku:"ANI-OLAS", cat:"sets", name:"Olas de Océano · Set",
    price:650000,
    materials:"Plata ley 925 con baño de oro · Aguamarina natural",
    gemName:"Aguamarina", colors:["Plata con baño de oro","Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Set de dos anillos que combina elegancia y textura: una argolla texturizada junto a un anillo protagonista con aguamarina natural. La piedra evoca la calma del mar, mientras la argolla añade carácter y modernidad al conjunto.",
    metal:"gold", gem:"#7FD4D0",
    images:["img/anillos/olas-oceano-1.jpg"]
  },
  {
    id:"esencia-prisma", sku:"ANI-ESENCIA", cat:"sets", name:"Esencia Prisma · Set",
    price:350000,
    materials:"Plata ley 925 con baño de oro · Aguamarina y amatista",
    gemName:"Aguamarina / Amatista", colors:["Plata con baño de oro","Plata 925"], sizes:[5,6,7,8,9,10],
    desc:"Colección de anillos de diseño contemporáneo con piedras naturales en corte rectangular. Incluye una versión con aguamarina natural y otra con amatista natural, en montajes minimalistas que resaltan la belleza de cada piedra. Precio por anillo.",
    metal:"gold", gem:"#7FBFD4",
    images:["img/anillos/esencia-prisma-1.jpg","img/anillos/esencia-prisma-2.jpg"]
  },

  /* ============================================================
     ARETES · STATEMENT (piezas de autor)
     ============================================================ */
  {
    id:"ar-alia", sku:"ARE-ALIA", cat:"statement", name:"Aretes Alia",
    price:390000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Pieza de autor elaborada artesanalmente por maestros filigraneros colombianos. Tejidos a mano en delicados hilos de plata ley 925, destacan por la delicadeza y elegancia de la filigrana tradicional. Cada par se elabora bajo pedido, convirtiéndose en una joya única. Elaboración sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/alia-1.jpg"]
  },
  {
    id:"ar-amara", sku:"ARE-AMARA", cat:"statement", name:"Aretes Amara",
    price:390000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Joya artesanal elaborada mediante la técnica tradicional de la filigrana colombiana. Cada pieza es tejida a mano en finos hilos de plata ley 925. Su diseño refleja la belleza del trabajo artesanal y el valor de una tradición transmitida de generación en generación. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/amara-1.jpg"]
  },
  {
    id:"ar-elba", sku:"ARE-ELBA", cat:"statement", name:"Aretes Elba",
    price:160000,
    materials:"Plata ley 925 · Flores tejidas en filigrana",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Delicadas flores tejidas completamente a mano mediante la técnica de la filigrana colombiana. Su diseño resalta la delicadeza del tejido artesanal y la elegancia de las formas naturales. Cada pieza se elabora con dedicación por maestros artesanos. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/elba-1.jpg"]
  },
  {
    id:"ar-iris", sku:"ARE-IRIS", cat:"statement", name:"Aretes Iris",
    price:170000,
    materials:"Plata ley 925 · Diseño floral en filigrana",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Presentan un delicado diseño floral tejido completamente a mano en filigrana colombiana. Una joya femenina y elegante que resalta el detalle y la tradición artesanal. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDEFF1",
    images:["img/aretes/iris-1.jpg"]
  },
  {
    id:"ar-jazmin", sku:"ARE-JAZMIN", cat:"statement", name:"Aretes Jazmín",
    price:230000,
    materials:"Plata ley 925 · Cuarzo ahumado natural",
    gemName:"Cuarzo ahumado", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Combinan la delicadeza de la filigrana colombiana con la elegancia del cuarzo ahumado natural. Su diseño resalta la armonía entre el tejido artesanal y la belleza de las piedras naturales. Personalizable con distintas piedras. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#8B6F5C",
    images:["img/aretes/jazmin-1.jpg"]
  },
  {
    id:"ar-loto", sku:"ARE-LOTO", cat:"statement", name:"Aretes Loto",
    price:195000,
    materials:"Plata ley 925 · Moissanita central",
    gemName:"Moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Inspirados en la delicadeza de una hoja y elaborados completamente a mano en filigrana colombiana. En el centro destaca una moissanita, que aporta un brillo excepcional y un toque contemporáneo. Personalizable con la piedra de tu elección. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#FFFFFF",
    images:["img/aretes/loto-1.jpg","img/aretes/loto-2.jpg"]
  },
  {
    id:"ar-mosaico", sku:"ARE-MOSAICO", cat:"statement", name:"Aretes Mosaico",
    price:450000,
    materials:"Plata ley 925 · Cuarzo ahumado natural",
    gemName:"Cuarzo ahumado", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Elegante diseño cuadrado tejido en filigrana colombiana. Su piedra central es un cuarzo ahumado natural que aporta profundidad, sofisticación y un brillo sutil. La piedra puede personalizarse según la preferencia. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#8B6F5C",
    images:["img/aretes/mosaico-1.jpg","img/aretes/mosaico-2.jpg"]
  },
  {
    id:"ar-naia", sku:"ARE-NAIA", cat:"statement", name:"Aretes Naia",
    price:240000,
    materials:"Plata ley 925 · Filigrana ovalada",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Destacan por su elegante diseño ovalado, tejido completamente a mano en finos hilos de plata ley 925 por artesanos colombianos. Una pieza clásica que refleja la delicadeza y tradición de la filigrana. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDEFF1",
    images:["img/aretes/naia-1.jpeg"]
  },
  {
    id:"ar-ori", sku:"ARE-ORI", cat:"statement", name:"Aretes Ori",
    price:250000,
    materials:"Plata ley 925 · Perlas y topacios naturales",
    gemName:"Perla y topacio", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Pieza elegante que combina la delicadeza de las perlas con el brillo de los topacios naturales. Diseño femenino, atemporal y versátil que realza cualquier ocasión. Personalizable con distintas piedras y colores. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#EDE6D6",
    images:["img/aretes/ori-1.png"]
  },
  {
    id:"ar-orquidea-dorada", sku:"ARE-ORQD", cat:"statement", name:"Aretes Orquídea Dorada",
    price:290000,
    materials:"Plata ley 925 · Filigrana artesanal",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Inspirados en la elegancia de la flor nacional de Colombia. Elaborados artesanalmente en plata ley 925 mediante la técnica de la filigrana, reflejan la belleza de la naturaleza y el valor del trabajo hecho a mano. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#C9A24B",
    images:["img/aretes/orquidea-dorada-1.jpg"]
  },
  {
    id:"ar-orquidea-real", sku:"ARE-ORQR", cat:"statement", name:"Aretes Orquídea Real",
    price:350000,
    materials:"Plata ley 925 · Filigrana artesanal",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Interpretación elegante de la flor símbolo de Colombia. Destacan por su diseño sofisticado y el extraordinario detalle de su elaboración. Cada par es tejido completamente a mano, convirtiéndose en una pieza única de alta joyería artesanal. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#C9A24B",
    images:["img/aretes/orquidea-real-1.jpg"]
  },
  {
    id:"ar-trilogia", sku:"ARE-TRIL", cat:"statement", name:"Aretes Trilogía",
    price:320000,
    materials:"Plata ley 925 · Topacios rosados y granates",
    gemName:"Topacio rosado y granate", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Combinan la delicadeza de la filigrana colombiana con la belleza de los topacios rosados y los granates naturales. Su composición crea un contraste elegante que aporta color, luminosidad y sofisticación. Piedras personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"rose", gem:"#E86FA0",
    images:["img/aretes/trilogia-1.jpg"]
  },
  {
    id:"ar-trilogia-azul", sku:"ARE-TRILA", cat:"statement", name:"Aretes Trilogía Azul",
    price:320000,
    materials:"Plata ley 925 · Topacios azules naturales",
    gemName:"Topacio azul", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Destacan por la intensidad y el brillo de sus topacios azules naturales. Combinan la tradición de la filigrana colombiana con un diseño elegante y contemporáneo. Personalizables con distintas piedras según disponibilidad. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#3FA9D4",
    images:["img/aretes/trilogia-azul-1.png"]
  },
  {
    id:"ar-zaria", sku:"ARE-ZARIA", cat:"statement", name:"Aretes Zaria",
    price:220000,
    materials:"Plata ley 925 · Topacios y granates naturales",
    gemName:"Topacio y granate", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Delicado diseño entorchado tejido completamente a mano mediante la técnica tradicional de la filigrana colombiana. Incorporan topacios y granates naturales que aportan brillo, contraste y elegancia. Piedras personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#9B3B3B",
    images:["img/aretes/zaria-1.jpg","img/aretes/zaria-2.jpg"]
  },
  {
    id:"ar-legado", sku:"ARE-LEGADO", cat:"statement", name:"Candongas Legado",
    price:590000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Representan la riqueza de la tradición joyera colombiana. Elaboradas artesanalmente en plata ley 925 mediante la técnica de la filigrana, destacan por su diseño elegante y su meticuloso trabajo manual. Preservan un legado de tradición y excelencia. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#C9A24B",
    images:["img/aretes/candongas-legado-1.png"]
  },
  {
    id:"ar-siena", sku:"ARE-SIENA", cat:"statement", name:"Aretes Siena",
    price:220000,
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
    price:220000,
    materials:"Plata ley 925 · Circones",
    gemName:"Circón", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Reinterpretación elegante de un clásico. Elaboradas artesanalmente en plata ley 925, incorporan delicados circones que aportan brillo y sofisticación sin perder la esencia del trabajo hecho a mano. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDEFF1",
    images:["img/aretes/candongas-esmerald-1.jpg"], imgPos:"58% 50%", imgZoom:2.2
  },
  {
    id:"ar-esencia-gruesas", sku:"ARE-ESEG", cat:"candongas", name:"Candongas Esencia · Gruesas",
    price:250000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Elaboradas artesanalmente en finos hilos de plata ley 925, tejidos completamente a mano por artesanos colombianos. Su diseño de mayor volumen conserva la delicadeza y elegancia de la filigrana tradicional. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/esencia-gruesas-1.jpg"], imgPos:"47% 46%", imgZoom:1.6
  },
  {
    id:"ar-esencia-sencillas", sku:"ARE-ESES", cat:"candongas", name:"Candongas Esencia · Sencillas",
    price:190000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Destacan por su diseño ligero y atemporal. Elaboradas artesanalmente en plata ley 925 mediante la técnica de la filigrana, son una pieza versátil para cualquier ocasión. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/esencia-sencillas-1.jpg"], imgPos:"47% 47%", imgZoom:1.6
  },
  {
    id:"ar-gardenia", sku:"ARE-GARD", cat:"candongas", name:"Candongas Gardenia",
    price:190000,
    materials:"Plata ley 925 · Filigrana en espiral",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Expresión de la filigrana colombiana en su máxima delicadeza. Su diseño en forma de espiral resalta el trabajo artesanal realizado completamente a mano. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/gardenia-1.jpg"]
  },
  {
    id:"ar-halo-hoops", sku:"ARE-HALOH", cat:"candongas", name:"Halo Hoops",
    price:280000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Candongas elaboradas artesanalmente en plata ley 925 mediante la técnica de la filigrana colombiana. Su diseño contemporáneo combina elegancia, ligereza y el valor del trabajo hecho completamente a mano. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/halo-hoops-1.png"]
  },
  {
    id:"ar-nara-hoops", sku:"ARE-NARAH", cat:"candongas", name:"Nara Hoops",
    price:230000,
    materials:"Plata ley 925 · Flores tejidas en filigrana",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Elegantes candongas elaboradas en filigrana colombiana. Su diseño incorpora delicadas flores tejidas en el interior, creando una pieza llena de detalles y sofisticación. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/nara-hoops-1.jpg","img/aretes/nara-hoops-2.jpg"]
  },
  {
    id:"ar-oriana-hoops", sku:"ARE-ORIAH", cat:"candongas", name:"Oriana Hoops",
    price:340000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Candongas de gran tamaño elaboradas artesanalmente en plata ley 925 mediante la técnica tradicional de la filigrana colombiana. Su diseño elegante y ligero resalta el minucioso trabajo realizado completamente a mano. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/oriana-hoops-1.jpg"]
  },
  {
    id:"ar-primavera-hoops", sku:"ARE-PRIMH", cat:"candongas", name:"Primavera Hoops",
    price:230000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Candongas inspiradas en la delicadeza y el movimiento de la naturaleza. Elaboradas artesanalmente en plata ley 925 mediante la técnica tradicional de la filigrana colombiana, ofrecen un diseño ligero, elegante y lleno de detalles. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/primavera-hoops-1.jpg","img/aretes/primavera-hoops-2.jpg"]
  },
  {
    id:"ar-cayena-hoops", sku:"ARE-CAYH", cat:"candongas", name:"Cayena Hoops",
    price:190000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Delicadas candongas elaboradas artesanalmente mediante la técnica tradicional de la filigrana colombiana. Tejidas completamente a mano en finos hilos de plata ley 925, destacan por su diseño ligero, elegante y atemporal. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/cayena-hoops-1.jpg"]
  },
  {
    id:"ar-elia-hoops", sku:"ARE-ELIAH", cat:"candongas", name:"Elia Hoops",
    price:350000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Elegantes candongas elaboradas en filigrana colombiana, tejidas completamente a mano por maestros artesanos. Su diseño combina delicadeza, movimiento y sofisticación, convirtiéndolas en una pieza versátil para cualquier ocasión. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/elia-hoops-1.jpg"]
  },
  {
    id:"ar-jardin-hoops", sku:"ARE-JARDH", cat:"candongas", name:"Jardín Hoops",
    price:220000,
    materials:"Plata ley 925 · Hojas tejidas en filigrana",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Inspiradas en la belleza de las hojas y las formas orgánicas de la naturaleza. Su diseño de hojas delicadamente torcidas, elaborado completamente a mano en filigrana colombiana, aporta movimiento, elegancia y un estilo único. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#C9A24B",
    images:["img/aretes/jardin-hoops-1.jpg","img/aretes/jardin-hoops-2.jpg"]
  },
  {
    id:"ar-liora-hoops", sku:"ARE-LIORH", cat:"candongas", name:"Liora Hoops",
    price:260000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Elegantes candongas elaboradas artesanalmente en plata ley 925 mediante la técnica tradicional de la filigrana colombiana. Su diseño ligero y sofisticado resalta el delicado tejido realizado completamente a mano, convirtiéndolas en una pieza atemporal. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDEFF1",
    images:["img/aretes/liora-hoops-1.jpg"]
  },
  {
    id:"ar-nela-hoops", sku:"ARE-NELAH", cat:"candongas", name:"Mini Nela Hoops",
    price:190000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Versión delicada y versátil de las clásicas candongas de filigrana. Elaboradas completamente a mano en plata ley 925, destacan por su ligereza y elegancia, ideales para el uso diario sin perder el encanto del trabajo artesanal. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/aretes/nela-hoops-1.jpg"]
  },
  {
    id:"ar-trama-hoops", sku:"ARE-TRAMH", cat:"candongas", name:"Trama Hoops",
    price:230000,
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
    price:190000,
    materials:"Plata ley 925 · Turmalinas naturales",
    gemName:"Turmalina", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Pieza delicada y luminosa elaborada en plata ley 925, realzada con turmalinas naturales que aportan color, brillo y elegancia. Su diseño minimalista los convierte en el complemento ideal para el día a día. Piedra personalizable. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#D98FA8",
    images:["img/aretes/aira-1.jpg"]
  },
  {
    id:"ar-carmesi", sku:"ARE-CARM", cat:"studs", name:"Aretes Carmesí",
    price:290000,
    materials:"Plata ley 925 · Rubíes, esmeraldas y diamantes naturales",
    gemName:"Rubí, esmeralda y diamante", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Combinan la intensidad de los rubíes naturales, la frescura de las esmeraldas naturales y el brillo de los diamantes naturales en una composición elegante y sofisticada. Disponibles con cierre de rosca de seguridad o mariposa tradicional. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#A6192E",
    images:["img/aretes/carmesi-1.jpg"]
  },
  {
    id:"ar-corona", sku:"ARE-CORO", cat:"studs", name:"Mini Corona",
    price:190000,
    materials:"Plata ley 925 · Rubí natural",
    gemName:"Rubí natural", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Destacan por la belleza de su rubí natural, cuidadosamente montado para crear una pieza clásica, delicada y elegante que puede acompañarte todos los días. Piedra personalizable. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#A6192E",
    images:["img/aretes/corona-1.png"]
  },
  {
    id:"ar-florina", sku:"ARE-FLOR", cat:"studs", name:"Mini Florina",
    price:150000,
    materials:"Plata ley 925 · Moissanitas",
    gemName:"Moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Joya delicada elaborada en plata ley 925 con brillantes moissanitas, una piedra reconocida por su extraordinario brillo y elegancia. Su diseño floral los convierte en una pieza sutil y femenina. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#FFFFFF",
    images:["img/aretes/florina-1.jpg"]
  },
  {
    id:"ar-halo", sku:"ARE-HALO", cat:"studs", name:"Aretes Halo",
    price:170000,
    materials:"Plata ley 925 · Diseño clásico",
    gemName:"Circón", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Diseño clásico, elegante y atemporal, pensado para acompañarte todos los días. Elaborados en plata ley 925, destacan por su sencillez y versatilidad, convirtiéndose en un básico imprescindible. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDEFF1",
    images:["img/aretes/halo-1.jpg"]
  },
  {
    id:"ar-jade", sku:"ARE-JADE", cat:"studs", name:"Aretes Jade",
    price:160000,
    materials:"Plata ley 925 · Circón y moissanita",
    gemName:"Circón y moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Combinan un delicado circón con una brillante moissanita, creando una joya elegante, luminosa y perfecta para cualquier ocasión. Personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#FFFFFF",
    images:["img/aretes/jade-1.png"]
  },
  {
    id:"ar-lady", sku:"ARE-LADY", cat:"studs", name:"Aretes Lady",
    price:160000,
    materials:"Plata ley 925 · Circones",
    gemName:"Circón", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Destacan por su diseño clásico de tamaño mediano y el brillo de sus circones cuidadosamente seleccionados. Una joya elegante y versátil que complementa cualquier estilo. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDEFF1",
    images:["img/aretes/lady-1.jpg"]
  },
  {
    id:"ar-laguna", sku:"ARE-LAGU", cat:"studs", name:"Aretes Laguna",
    price:150000,
    materials:"Plata ley 925 · Circones",
    gemName:"Circón", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Elegante diseño rectangular que resalta el brillo de sus delicados circones. Una pieza moderna y sofisticada, ideal para quienes buscan una joya de líneas limpias y atemporales. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDEFF1",
    images:["img/aretes/laguna-1.jpg"]
  },
  {
    id:"ar-lavanda", sku:"ARE-LAVA", cat:"studs", name:"Aretes Lavanda",
    price:160000,
    materials:"Plata ley 925 · Amatista de laboratorio",
    gemName:"Amatista", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Destacan por su elegante diseño ovalado y el delicado color de su amatista de laboratorio. Una joya sofisticada que aporta un toque de color y elegancia a cualquier ocasión. Piedra personalizable. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#9B6FB3",
    images:["img/aretes/lavanda-1.jpg"]
  },
  {
    id:"ar-mini-lavanda", sku:"ARE-MLAVA", cat:"studs", name:"Mini Lavanda",
    price:140000,
    materials:"Plata ley 925 · Amatista de laboratorio",
    gemName:"Amatista", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Versión más delicada del diseño Lavanda, ideal para quienes prefieren una joya sutil sin perder la elegancia y el brillo de la amatista de laboratorio. Piedra personalizable. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#9B6FB3",
    images:["img/aretes/mini-lavanda-1.jpg"]
  },
  {
    id:"ar-lila", sku:"ARE-LILA", cat:"studs", name:"Aretes Lila",
    price:170000,
    materials:"Plata ley 925 · Diseño rectangular",
    gemName:"Circón", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Refinado diseño rectangular que combina elegancia y modernidad. Su estilo minimalista los convierte en una pieza perfecta tanto para el día como para la noche. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDEFF1",
    images:["img/aretes/lila-1.jpg","img/aretes/lila-2.jpg"]
  },
  {
    id:"ar-lumi", sku:"ARE-LUMI", cat:"studs", name:"Mini Lumi",
    price:150000,
    materials:"Plata ley 925 · Diseño clásico",
    gemName:"Circón", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Clásico imprescindible para el uso diario. Su diseño delicado y atemporal aporta un brillo sutil que combina fácilmente con cualquier estilo. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#FFFFFF",
    images:["img/aretes/lumi-1.png"]
  },
  {
    id:"ar-marea", sku:"ARE-MAREA", cat:"studs", name:"Aretes Marea",
    price:220000,
    materials:"Plata ley 925 · Turquesas naturales y moissanitas",
    gemName:"Turquesa y moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Combinan la belleza de las turquesas naturales con el brillo excepcional de las moissanitas. Inspirados en los colores del mar, ofrecen un diseño fresco, elegante y lleno de personalidad. Piedras personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#0ABAB5",
    images:["img/aretes/marea-1.jpg"]
  },
  {
    id:"ar-mini-emerald", sku:"ARE-MEMR", cat:"studs", name:"Mini Candongas Esmeralda",
    price:160000,
    materials:"Plata ley 925 · Esmeralda de laboratorio",
    gemName:"Esmeralda", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Versión delicada y elegante de un clásico. Elaboradas en plata ley 925, incorporan esmeraldas de laboratorio que aportan un intenso color verde y un brillo sofisticado. Piedra personalizable. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#1F8A70",
    images:["img/aretes/mini-emerald-1.jpg"]
  },
  {
    id:"ar-nacar", sku:"ARE-NACAR", cat:"studs", name:"Aretes Nácar",
    price:190000,
    materials:"Plata ley 925 · Perlas naturales",
    gemName:"Perla natural", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Combinan la delicadeza de las perlas con un diseño clásico y elegante, convirtiéndose en una joya versátil que nunca pasa de moda. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDE6D6",
    images:["img/aretes/nacar-1.jpg"]
  },
  {
    id:"ar-prisma", sku:"ARE-PRIS", cat:"studs", name:"Aretes Prisma",
    price:250000,
    materials:"Plata ley 925 · Esmeraldas de laboratorio",
    gemName:"Esmeralda", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Destacan por su elegante diseño rectangular y el intenso color de sus esmeraldas de laboratorio. Una joya contemporánea que aporta sofisticación y brillo. Personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#1F8A70",
    images:["img/aretes/prisma-1.jpg"]
  },
  {
    id:"ar-rosalia", sku:"ARE-ROSA", cat:"studs", name:"Aretes Rosalía",
    price:150000,
    materials:"Plata ley 925 · Topacios rosados",
    gemName:"Topacio rosado", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Incorporan delicados topacios rosados que aportan un toque femenino, elegante y luminoso. Su diseño clásico permite lucirlos tanto en ocasiones especiales como en el día a día. Personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#E86FA0",
    images:["img/aretes/rosalia-1.jpg"]
  },
  {
    id:"ar-sky", sku:"ARE-SKY", cat:"studs", name:"Aretes Sky",
    price:190000,
    materials:"Plata ley 925 · Topacios azules",
    gemName:"Topacio azul", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Resaltan la intensidad y el brillo de sus topacios azules, evocando los tonos del cielo y transmitiendo elegancia en una pieza clásica y sofisticada. Personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#3FA9D4",
    images:["img/aretes/sky-1.jpg","img/aretes/sky-2.jpg"]
  },
  {
    id:"ar-sky-oval", sku:"ARE-SKYO", cat:"studs", name:"Aretes Sky Oval",
    price:190000,
    materials:"Plata ley 925 · Topacios azules",
    gemName:"Topacio azul", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Elegante diseño ovalado que resalta la belleza de los topacios azules. Una joya refinada que combina delicadeza, brillo y un estilo atemporal. Personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#3FA9D4",
    images:["img/aretes/sky-oval-1.jpg","img/aretes/sky-oval-2.jpg"]
  },
  {
    id:"ar-sky-shine", sku:"ARE-SKYS", cat:"studs", name:"Aretes Sky Shine",
    price:270000,
    materials:"Plata ley 925 · Topacios azules y moissanitas",
    gemName:"Topacio azul y moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Combinan el intenso color de los topacios azules con el extraordinario brillo de las moissanitas, creando una pieza elegante y sofisticada que destaca por su luminosidad. Personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#3FA9D4",
    images:["img/aretes/sky-shine-1.jpg"]
  },
  {
    id:"ar-tria", sku:"ARE-TRIA", cat:"studs", name:"Mini Tría",
    price:130000,
    materials:"Plata ley 925 · Moissanitas",
    gemName:"Moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Joya delicada elaborada con moissanitas, reconocidas por su brillo excepcional. Su diseño minimalista los convierte en una excelente opción para el uso diario. Personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#FFFFFF",
    images:["img/aretes/tria-1.jpg"]
  },
  {
    id:"ar-vera", sku:"ARE-VERA", cat:"studs", name:"Aretes Vera",
    price:250000,
    materials:"Plata ley 925 · Esmeraldas de laboratorio y moissanitas",
    gemName:"Esmeralda y moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Combinan la intensidad del verde de las esmeraldas de laboratorio con el brillo de las moissanitas, logrando una pieza elegante, contemporánea y llena de luz. Personalizables con distintas piedras. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#1F8A70",
    images:["img/aretes/vera-1.jpg"]
  },

  /* ============================================================
     COLLARES · CADENAS Y DIJES
     ============================================================ */
  {
    id:"co-amet", sku:"COL-AMET", cat:"dijes", name:"Collar Amet",
    price:160000,
    materials:"Plata ley 925 · Moissanita en dije rectangular",
    gemName:"Moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Pieza de autor de líneas limpias y contemporáneas, diseñada para resaltar una deslumbrante moissanita engastada en un elegante dije rectangular. Incluye cadena en plata ley 925. Disponible en plateado o dorado. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#FFFFFF",
    images:["img/collares/amet-1.jpg"]
  },
  {
    id:"co-mini-charms", sku:"COL-MCHARM", cat:"dijes", name:"Collar Mini Charms",
    price:190000, engrave:true,
    materials:"Plata ley 925 · Circones multicolor",
    gemName:"Circones multicolor", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Joya delicada y versátil: una cadena en plata ley 925 acompañada por pequeños corazones adornados con circones de diferentes colores. Alegre, elegante y perfecta para llevar todos los días, sola o combinada con otras cadenas. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#C56FA0",
    images:["img/collares/mini-charms-1.jpg","img/collares/mini-charms-2.jpg","img/collares/mini-charms-3.jpg"]
  },
  {
    id:"co-dijes-nacimiento", sku:"COL-NACIM", cat:"dijes", name:"Dijes de Nacimiento",
    price:160000,
    materials:"Plata ley 925 · Piedra del mes de nacimiento",
    gemName:"Piedra de nacimiento", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Cadena delicada con la piedra del mes de nacimiento, un regalo lleno de significado para celebrar los momentos que marcan la vida. Elige la gema del mes y el acabado plateado o dorado. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#7FBFD4",
    images:["img/collares/dijes-nacimiento-1.jpg","img/collares/dijes-nacimiento-2.jpg","img/collares/dijes-nacimiento-3.jpg"]
  },
  {
    id:"co-amuleto", sku:"COL-AMUL", cat:"dijes", name:"Amuleto · Set de 3 dijes",
    price:450000, engrave:true,
    materials:"Plata ley 925 · Dijes grabables con inicial o nombre",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Colección de tres delicados dijes personalizados: cada uno puede grabarse con la inicial o el nombre que desees, convirtiéndose en un símbolo único de amor e identidad. Incluye cadena en plata ley 925. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#C9A24B",
    images:["img/collares/amuleto-1.jpg"]
  },
  {
    id:"co-amuleto-corazon", sku:"COL-AMULC", cat:"dijes", name:"Amuleto Corazón",
    price:250000, engrave:true,
    materials:"Plata ley 925 · Dije corazón grabable",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Joya personalizada creada para conservar cerca aquello que más amas. Su delicado corazón puede grabarse con una inicial, un nombre o una palabra especial, convirtiéndose en un recuerdo lleno de significado. Incluye cadena. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#C9A24B",
    images:["img/collares/amuleto-corazon-1.jpg","img/collares/amuleto-corazon-2.jpg"]
  },
  {
    id:"co-azure", sku:"COL-AZURE", cat:"dijes", name:"Collar Azure",
    price:230000,
    materials:"Plata ley 925 · Topacio azul natural",
    gemName:"Topacio azul", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Elegante dije rectangular con un luminoso topacio azul, gema que evoca la serenidad del cielo y la profundidad del océano. Su diseño minimalista deja que la piedra sea la protagonista. Personalizable con diferentes gemas. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#3FA9D4",
    images:["img/collares/azure-1.jpg"]
  },
  {
    id:"co-azur-gota", sku:"COL-AZURG", cat:"dijes", name:"Azur Gota",
    price:270000,
    materials:"Plata ley 925 · Turquesa natural o fósil natural",
    gemName:"Turquesa / fósil natural", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Delicado dije en forma de gota que resalta la belleza de las piedras naturales. Disponible con turquesa o con un exclusivo fósil natural: cada pieza posee colores y vetas únicas que la hacen irrepetible. Incluye cadena. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#7FD4D0",
    images:["img/collares/azur-gota-1.jpg"]
  },
  {
    id:"co-latido", sku:"COL-LATIDO", cat:"dijes", name:"Collar Latido",
    price:260000,
    materials:"Plata ley 925 · Corazón con moissanitas",
    gemName:"Moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Simboliza el amor y los vínculos que nos acompañan para siempre. Su delicado corazón está adornado con una brillante piedra central rodeada de moissanitas que realzan su luminosidad. Una joya romántica y atemporal. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#A6192E",
    images:["img/collares/latido-1.jpg","img/collares/latido-2.jpg"]
  },
  {
    id:"co-emera-duo", sku:"COL-EMERA", cat:"dijes", name:"Emera Duo",
    price:590000,
    materials:"Plata ley 925 · Esmeralda de laboratorio y moissanita",
    gemName:"Esmeralda y moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Celebra la armonía entre dos gemas excepcionales: una elegante esmeralda de laboratorio junto a una brillante moissanita, en equilibrio perfecto entre color y luz. Disponible también con esmeralda y diamante naturales bajo cotización. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#1F8A70",
    images:["img/collares/emera-duo-1.jpg","img/collares/emera-duo-2.jpg"]
  },
  {
    id:"co-granate-duo", sku:"COL-GRANA", cat:"dijes", name:"Granate Duo",
    price:490000,
    materials:"Plata ley 925 · Granate natural y moissanita",
    gemName:"Granate y moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Versión del diseño Duo protagonizada por un granate natural de tono profundo acompañado de una brillante moissanita. Un contraste cálido y sofisticado entre color y luz, en una pieza contemporánea y elegante. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#9B3B3B",
    images:["img/collares/granate-duo-1.jpg","img/collares/granate-duo-2.jpg"]
  },
  {
    id:"co-lady", sku:"COL-LADY", cat:"dijes", name:"Collar Lady",
    price:200000,
    materials:"Plata ley 925 · Gema oval con halo de circones",
    gemName:"Gema personalizable", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Elegante dije oval rodeado por un delicado halo de circones, disponible en una variedad de colores de gema para elegir. Una joya clásica, femenina y luminosa que complementa cualquier estilo. Incluye cadena. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#C56FA0",
    images:["img/collares/lady-1.jpg","img/collares/lady-2.jpg","img/collares/lady-3.jpg"]
  },
  {
    id:"co-lady-mini", sku:"COL-LADYM", cat:"dijes", name:"Collar Lady Mini",
    price:180000,
    materials:"Plata ley 925 · Gema oval con halo de circones",
    gemName:"Gema personalizable", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Versión delicada del Collar Lady: un pequeño dije oval con halo de circones, disponible en distintos colores de gema. Sutil y elegante, ideal para el uso diario o para combinar en capas. Incluye cadena. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#E86FA0",
    images:["img/collares/lady-mini-1.jpg"]
  },
  {
    id:"co-laguna", sku:"COL-LAGUNA", cat:"dijes", name:"Collar Laguna",
    price:350000,
    materials:"Plata ley 925 con baño de oro · Topacio azul y esmeraldas",
    gemName:"Topacio azul y esmeralda", colors:["Baño de oro","Plateado"], sizes:[],
    desc:"Composición orgánica que reúne un luminoso topacio azul redondo con esmeraldas y un destello de moissanita, evocando los colores del agua. Una pieza fresca, elegante y llena de personalidad. Piedras personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#3FA9D4",
    images:["img/collares/laguna-1.jpg"]
  },
  {
    id:"co-lila", sku:"COL-LILA", cat:"dijes", name:"Collar Lila",
    price:180000,
    materials:"Plata ley 925 con baño de oro · Amatista en gota",
    gemName:"Amatista", colors:["Baño de oro","Plateado"], sizes:[],
    desc:"Cadena delicada con una amatista en gota de tono lila suave, pensada para acompañarte con un toque de color discreto y femenino. Ligera y versátil, perfecta para el día a día. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#9B6FB3",
    images:["img/collares/lila-1.jpg"]
  },
  {
    id:"co-luna", sku:"COL-LUNA", cat:"dijes", name:"Collar Luna",
    price:210000,
    materials:"Plata ley 925 con baño de oro · Gemas delicadas",
    gemName:"Gema personalizable", colors:["Baño de oro","Plateado"], sizes:[],
    desc:"Diseño delicado pensado para el estilo en capas: cadenas finas con pequeñas gemas que aportan un brillo sutil y sofisticado. Ideal para usar solo o combinado con otros collares. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#FFFFFF",
    images:["img/collares/luna-1.jpg"]
  },
  {
    id:"co-mi-todo", sku:"COL-MITODO", cat:"dijes", name:"Collar Mi Todo",
    price:260000,
    materials:"Plata ley 925 · Dijes de figuras con circones de color",
    gemName:"Circones de color", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Un homenaje a los que más amas: pequeñas figuras con circones de color que representan a cada miembro de la familia. Personalizable con la cantidad de dijes y los colores que elijas. Incluye cadena. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#C56FA0",
    images:["img/collares/mi-todo-1.jpg","img/collares/mi-todo-2.jpg"]
  },
  {
    id:"co-heart-charm", sku:"COL-HEART", cat:"dijes", name:"Heart Charm",
    price:240000,
    materials:"Plata ley 925 · Corazón con turquesas naturales",
    gemName:"Turquesa", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Dije en forma de corazón adornado con turquesas naturales que aportan un color fresco y vibrante. Una pieza romántica y contemporánea, elaborada artesanalmente. Incluye cadena en plata ley 925. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#0ABAB5",
    images:["img/collares/heart-charm-1.jpg","img/collares/heart-charm-2.jpg","img/collares/heart-charm-3.jpg"]
  },
  {
    id:"co-numa", sku:"COL-NUMA", cat:"dijes", name:"Collar Numa",
    price:290000,
    materials:"Plata ley 925 con baño de oro · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Baño de oro","Plateado"], sizes:[],
    desc:"Rosetón de filigrana tejido completamente a mano por maestros artesanos colombianos. Su diseño floral captura la delicadeza de la técnica ancestral en una pieza ligera y elegante. Incluye cadena. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/collares/numa-1.jpg","img/collares/numa-2.jpg"]
  },
  {
    id:"co-prisma", sku:"COL-PRISMA", cat:"dijes", name:"Collar Prisma",
    price:220000,
    materials:"Plata ley 925 con baño de oro · Gema cuadrada natural",
    gemName:"Gema personalizable", colors:["Baño de oro","Plateado"], sizes:[],
    desc:"Diseño minimalista protagonizado por una gema cuadrada engastada sobre una cadena fina. Disponible en distintas piedras y tonos para elegir. Una joya geométrica, moderna y atemporal. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#8B6F5C",
    images:["img/collares/prisma-1.jpg"]
  },
  {
    id:"co-prisma-amatista", sku:"COL-PRISA", cat:"dijes", name:"Prisma Amatista",
    price:240000,
    materials:"Plata ley 925 · Amatista con halo de circones",
    gemName:"Amatista", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Elegante dije de amatista enmarcado por un delicado halo de circones que realzan su brillo. Perfecto solo o en capas con otras cadenas. Piedra personalizable. Incluye cadena en plata ley 925. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#9B6FB3",
    images:["img/collares/prisma-amatista-1.jpg"]
  },
  {
    id:"co-prisma-rectangular", sku:"COL-PRISR", cat:"dijes", name:"Prisma Rectangular",
    price:290000,
    materials:"Plata ley 925 · Gema rectangular sobre cadena gruesa",
    gemName:"Gema personalizable", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Versión statement del diseño Prisma: una gema rectangular de gran formato sobre una cadena de eslabones con carácter. Disponible en amatista, prasiolita o topacio azul, entre otras. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#9B6FB3",
    images:["img/collares/prisma-rectangular-1.jpg"]
  },
  {
    id:"co-tres-almas", sku:"COL-TRESA", cat:"dijes", name:"Collar Tres Almas",
    price:390000,
    materials:"Plata ley 925 con baño de oro · Tres gemas naturales",
    gemName:"Gemas naturales", colors:["Baño de oro","Plateado"], sizes:[],
    desc:"Tres gemas naturales reunidas en una sola pieza, simbolizando los vínculos que nos unen. Cada composición combina colores y cortes distintos, creando una joya única y llena de significado. Piedras personalizables. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#7FBFD4",
    images:["img/collares/tres-almas-1.jpg","img/collares/tres-almas-2.jpg"]
  },

  /* ============================================================
     COLLARES · GARGANTILLAS
     ============================================================ */
  {
    id:"co-gargantilla-raiz", sku:"COL-RAIZ", cat:"gargantillas", name:"Gargantilla Raíz",
    price:470000,
    materials:"Plata ley 925 con baño de oro · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Baño de oro","Plateado"], sizes:[],
    desc:"Gargantilla de eslabones tipo marquesa tejidos a mano en filigrana colombiana. Su diseño orgánico envuelve el cuello con elegancia, celebrando el legado de los maestros orfebres. Puede acompañarse con aretes a juego. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#C9A24B",
    images:["img/collares/gargantilla-raiz-1.jpg","img/collares/gargantilla-raiz-2.jpg","img/collares/gargantilla-raiz-3.jpg"]
  },
  {
    id:"co-orquidea", sku:"COL-ORQUI", cat:"gargantillas", name:"Collar Orquídea",
    price:170000,
    materials:"Bronce con baño de oro · Moissanita",
    gemName:"Moissanita", colors:["Baño de oro"], sizes:[],
    desc:"Inspirado en la flor más representativa de Colombia. Su delicado diseño resalta una brillante moissanita central y su cadena graduable ofrece comodidad y versatilidad. Elaborado artesanalmente por joyeros colombianos. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#FFFFFF",
    images:["img/collares/orquidea-1.jpg","img/collares/orquidea-2.jpg"]
  },
  {
    id:"co-mare", sku:"COL-MARE", cat:"gargantillas", name:"Collar Mare",
    price:420000,
    materials:"Plata ley 925 · Filigrana y topacio natural en gota",
    gemName:"Topacio azul", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Pieza de autor tejida a mano por maestros filigraneros colombianos. El delicado tejido de plata enmarca una hermosa gota de topacio natural, gema que evoca la serenidad del mar. Personalizable con diferentes piedras. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#3FA9D4",
    images:["img/collares/mare-1.jpg","img/collares/mare-2.jpg"]
  },
  {
    id:"co-origen", sku:"COL-ORIGEN", cat:"gargantillas", name:"Gargantilla Origen",
    price:490000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Homenaje a la tradición de la filigrana colombiana: un delicado tejido en hilos de plata ley 925 que envuelve el cuello con elegancia y sofisticación. Una joya atemporal que celebra la artesanía hecha a mano. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#E7D3A1",
    images:["img/collares/origen-1.jpg"]
  },

  /* ============================================================
     PULSERAS
     ============================================================ */
  {
    id:"pu-aura", sku:"PUL-AURA", cat:"pulseras", name:"Pulsera Aura",
    price:170000,
    materials:"Plata ley 925 · Lisa o con moissanitas",
    gemName:"Moissanita (opcional)", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Joya de autor que destaca por la delicadeza de su diseño y la elegancia de sus líneas minimalistas. Su silueta fina y atemporal la convierte en el complemento perfecto para cualquier ocasión. Disponible en versión clásica ($170.000) o con múltiples moissanitas que realzan su luminosidad ($190.000). Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#FFFFFF",
    images:["img/pulseras/aura-1.jpg"]
  },
  {
    id:"pu-cereza", sku:"PUL-CEREZA", cat:"pulseras", name:"Pulsera Cereza",
    price:170000,
    materials:"Plata ley 925 · Rubí con halo de brillantes",
    gemName:"Rubí", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Joya delicada que resalta el intenso color cereza de su piedra central, rodeada por un delicado halo de brillantes que realzan su luminosidad. Elaborada en plata ley 925, su diseño fino y elegante la convierte en el complemento ideal para cualquier ocasión. Piedra personalizable. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#A6192E",
    images:["img/pulseras/cereza-1.jpg"]
  },
  {
    id:"pu-dueto", sku:"PUL-DUETO", cat:"pulseras", name:"Pulsera Dueto",
    price:290000, engrave:true,
    materials:"Plata ley 925 · Placa grabable o eslabones con moissanitas",
    gemName:"Moissanita (versión eslabones)", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Creada para celebrar los vínculos más importantes. Su delicada placa puede personalizarse con el nombre, inicial o palabra que desees, convirtiéndola en un regalo lleno de significado. Disponible también en versión de eslabones con moissanitas ($390.000). Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#FFFFFF",
    images:["img/pulseras/dueto-1.jpg"]
  },
  {
    id:"pu-esfera", sku:"PUL-ESFERA", cat:"pulseras", name:"Pulsera Esfera",
    price:190000,
    materials:"Plata ley 925 · Filigrana tejida a mano",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Pieza de autor elaborada artesanalmente por maestros filigraneros colombianos. Su protagonista es una delicada esfera tejida a mano en finos hilos de plata ley 925, reflejando la belleza y el legado de la filigrana tradicional colombiana. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDEFF1",
    images:["img/pulseras/esfera-1.jpg"]
  },
  {
    id:"pu-grana", sku:"PUL-GRANA", cat:"pulseras", name:"Pulsera Grana",
    price:199000,
    materials:"Plata ley 925 · Técnica artesanal de granulado",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Joya de autor elaborada artesanalmente mediante la tradicional técnica del granulado, en la que pequeñas esferas de plata son trabajadas cuidadosamente a mano para crear una textura elegante y sofisticada. Una pieza atemporal y llena de carácter. Sobre pedido (15 a 25 días hábiles).",
    metal:"silver", gem:"#EDEFF1",
    images:["img/pulseras/grana-1.jpg","img/pulseras/grana-2.jpg","img/pulseras/grana-3.jpg","img/pulseras/grana-4.jpg","img/pulseras/grana-5.jpg"]
  },
  {
    id:"pu-lavanda", sku:"PUL-LAVANDA", cat:"pulseras", name:"Pulsera Lavanda",
    price:190000,
    materials:"Plata ley 925 · Amatista rectangular y moissanita",
    gemName:"Amatista y moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Combina la intensidad del color de una amatista rectangular con el brillo excepcional de una moissanita, creando una joya delicada y sofisticada que resalta por su armonía y elegancia. Personalizable con diferentes piedras. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#9B6FB3",
    images:["img/pulseras/lavanda-1.jpg"]
  },
  {
    id:"pu-malva", sku:"PUL-MALVA", cat:"pulseras", name:"Pulsera Malva",
    price:170000,
    materials:"Plata ley 925 · Amatistas ovaladas",
    gemName:"Amatista", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Joya delicada elaborada en plata ley 925 que destaca por la belleza de sus amatistas ovaladas. Su diseño fino y femenino aporta un toque de color y sofisticación, convirtiéndola en el complemento ideal para cualquier ocasión. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#9B6FB3",
    images:["img/pulseras/malva-1.jpg"]
  },
  {
    id:"pu-rocio", sku:"PUL-ROCIO", cat:"pulseras", name:"Pulsera Rocío",
    price:190000,
    materials:"Plata ley 925 · Dos moissanitas en gota",
    gemName:"Moissanita", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Inspirada en la belleza de las gotas de agua. Su diseño reúne dos moissanitas en forma de gota que reflejan la luz con un brillo excepcional, creando una pieza elegante, femenina y atemporal. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#FFFFFF",
    images:["img/pulseras/rocio-1.jpg"]
  },
  {
    id:"pu-serena", sku:"PUL-SERENA", cat:"pulseras", name:"Pulsera Serena",
    price:190000,
    materials:"Plata ley 925 · Moissanitas de colores",
    gemName:"Moissanita de color", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Colección de joyas delicadas que celebra el color y la luz a través de moissanitas en diferentes tonalidades. Su diseño fino y elegante la convierte en una pieza versátil, perfecta para usar sola o combinar con otras pulseras. Personalizable con el color de piedra de tu preferencia. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#C56FA0",
    images:["img/pulseras/serena-1.jpg"]
  },
  {
    id:"pu-signature", sku:"PUL-SIGN", cat:"pulseras", name:"Pulsera Signature",
    price:240000, engrave:true,
    materials:"Plata ley 925 · Inicial personalizada",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Joya personalizada creada para llevar contigo una inicial con un significado especial. Su diseño delicado y atemporal convierte cada pieza en un símbolo de identidad, amor y recuerdos inolvidables. Elaborada artesanalmente por joyeros colombianos. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#C9A24B",
    images:["img/pulseras/signature-1.jpg"]
  },
  {
    id:"pu-tennis", sku:"PUL-TENNIS", cat:"pulseras", name:"Pulsera Tenis Personalizada",
    price:295000, engrave:true,
    materials:"Plata ley 925 · Dos placas grabadas con iniciales",
    gemName:"Sin piedra", colors:["Plateado","Baño de oro"], sizes:[],
    desc:"Reinventa un clásico de la joyería con un toque único y personal. Su elegante diseño incorpora dos placas grabadas con las iniciales de tu elección, convirtiéndola en una joya llena de significado, perfecta para celebrar momentos especiales o regalar a quienes más quieres. Sobre pedido (15 a 25 días hábiles).",
    metal:"gold", gem:"#FFFFFF",
    images:["img/pulseras/tennis-1.jpg"]
  }
];

if (typeof window !== "undefined") { window.PRODUCTS = PRODUCTS; }
