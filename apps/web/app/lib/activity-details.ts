export type ActivityDetail = {
  intro: string;
  quote: string;
  heroNote: string;
  imageAlt: string;
  benefits: [string, string, string, string];
  steps: [string, string, string, string];
  materials: string;
};
export const activityDetails: Record<string, ActivityDetail> = {
  "cuida-una-planta": {
    intro:
      "Cuidar una planta es una forma sencilla de traer más vida a tu día. Observar una hoja nueva, tocar la tierra y encontrarle su rincón puede convertirse en un pequeño ritual que disfrutes sin prisa.",
    quote: "Cuidar algo también es una forma de cuidarte.",
    heroNote: "Pequeños rituales,\ngrandes diferencias.",
    imageAlt: "Plantas en macetas junto a una ventana iluminada por el sol.",
    benefits: [
      "Te invita a observar el presente",
      "Crea un pequeño ritual cotidiano",
      "Da vida a tu espacio",
      "Te permite aprender a tu ritmo",
    ],
    steps: [
      "Elige una planta adecuada para la luz de tu casa y pregunta por sus cuidados.",
      "Busca una maceta con drenaje y un rincón donde puedas verla cada día.",
      "Revisa la tierra y sigue las indicaciones de riego de esa especie.",
      "Dedica unos minutos a observarla. Disfruta del proceso, sin prisa.",
    ],
    materials:
      "Una planta, una maceta con drenaje y un lugar con la luz adecuada.",
  },
  "pausa-junto-a-la-ventana": {
    intro:
      "A veces no necesitas añadir otra cosa a tu día, sino dejar un pequeño espacio vacío. Acercarte a la ventana y mirar sin buscar nada es una invitación a detenerte un momento.",
    quote: "También puedes regalarte unos minutos de nada.",
    heroNote: "Mira despacio.\nHoy también está pasando.",
    imageAlt:
      "Una persona descansa junto a una ventana y observa los árboles del exterior.",
    benefits: [
      "Hace espacio entre tus tareas",
      "Te invita a mirar con atención",
      "No requiere preparar nada",
      "Se adapta a tu energía de hoy",
    ],
    steps: [
      "Busca una ventana y acomódate en una postura agradable.",
      "Deja el teléfono fuera de tu mano durante estos minutos.",
      "Observa cinco detalles: una sombra, un color, una nube o una hoja.",
      "Vuelve a tu día cuando quieras, sin convertir la pausa en otra obligación.",
    ],
    materials: "Una ventana y un rincón en el que puedas estar cómodo/a.",
  },
  "escucha-tu-entorno": {
    intro:
      "Un parque o una plaza conocida pueden sentirse diferentes cuando prestas atención a sus sonidos. No hay nada que resolver: solo darte un momento para escuchar lo que normalmente pasa de fondo.",
    quote: "Hay pequeñas historias en lo que escuchas.",
    heroNote: "Baja el ritmo.\nEscucha lo que hay.",
    imageAlt:
      "Un banco en un parque verde con una persona descansando bajo los árboles.",
    benefits: [
      "Te invita a prestar atención",
      "Propone una pausa sin pantallas",
      "Abre otra forma de conocer tu entorno",
      "No necesita equipo ni experiencia",
    ],
    steps: [
      "Elige un rincón tranquilo cercano al que puedas llegar a pie.",
      "Siéntate o quédate de pie donde te sientas cómodo/a, sin auriculares.",
      "Distingue un sonido cercano y otro lejano, sin intentar cambiar nada.",
      "Antes de irte, elige el sonido que más curiosidad te haya dado.",
    ],
    materials: "Un lugar accesible y tranquilo cerca de ti.",
  },
  "album-de-buenos-momentos": {
    intro:
      "Entre tantas fotos puede haber momentos pequeños que merecen otra mirada. Reunir algunos en un álbum es una manera de darles un lugar y recordar lo que disfrutas, sin buscar una vida perfecta.",
    quote: "Lo cotidiano también merece ser recordado.",
    heroNote: "Pequeños momentos.\nMuy tuyos.",
    imageAlt:
      "Fotografías de momentos cotidianos sobre una mesa cálida junto a unas flores.",
    benefits: [
      "Te ayuda a reconocer lo que disfrutas",
      "Da un lugar a tus recuerdos",
      "Despierta ideas para nuevos planes",
      "Puedes hacerlo con lo que ya tienes",
    ],
    steps: [
      "Abre tus fotos y crea un álbum con un nombre que te haga sonreír.",
      "Elige cinco imágenes de momentos que quieras recordar, aunque sean sencillos.",
      "Añade una frase a cada una si te apetece: qué pasó o qué te gustó.",
      "Guarda el álbum para volver a él otro día. No hace falta compartirlo.",
    ],
    materials:
      "Tus fotos y el teléfono u ordenador que ya utilizas. No necesitas imprimirlas.",
  },
  "tres-acordes-ukelele": {
    intro:
      "No necesitas tocar una canción entera para disfrutar de la música. Un instrumento pequeño, unos minutos y la curiosidad de escuchar lo que sale de tus manos pueden ser un buen comienzo.",
    quote: "No tiene que sonar perfecto para sonar a ti.",
    heroNote: "Tres acordes.\nUn mundo por probar.",
    imageAlt:
      "Manos tocando un ukelele de madera en un sofá iluminado por luz natural.",
    benefits: [
      "Te acerca a una habilidad nueva",
      "Combina escucha y creatividad",
      "Te da pequeños retos a tu ritmo",
      "Invita a disfrutar del proceso",
    ],
    steps: [
      "Consigue un ukelele propio o prestado y una guía de afinación para ese instrumento.",
      "Busca una guía visual para principiantes y prueba el acorde de Do.",
      "Cuando te resulte cómodo, explora Fa y Sol, uno a la vez.",
      "Alterna dos acordes despacio. Unos minutos de curiosidad ya cuentan.",
    ],
    materials:
      "Un ukelele y una guía de afinación y acordes para principiantes.",
  },
  "dibuja-sin-reglas": {
    intro:
      "Dibujar no tiene por qué empezar con una idea ni terminar con una obra. Puedes llenar una página de líneas, formas y trazos solo por el gusto de probar qué hace tu mano.",
    quote: "Una hoja no te pide que lo hagas bien.",
    heroNote: "Menos reglas.\nMás garabatos.",
    imageAlt:
      "Una mano dibuja formas libres con lápiz sobre una hoja de papel.",
    benefits: [
      "Abre un rato de juego creativo",
      "Te deja experimentar sin un resultado fijo",
      "Invita a observar formas y texturas",
      "Empieza con materiales cotidianos",
    ],
    steps: [
      "Busca papel y lápiz que ya tengas, o abre una aplicación de notas.",
      "Empieza con una línea y deja que aparezcan otras sin planearlas.",
      "Prueba puntos, curvas o formas durante cinco minutos, sin borrar.",
      "Mira lo que hiciste y encuentra un detalle que te guste. Eso es suficiente.",
    ],
    materials:
      "Papel y lápiz disponibles, o una aplicación de dibujo o notas que ya uses.",
  },
  "taller-de-ceramica": {
    intro:
      "Trabajar con barro propone un ritmo distinto: tocar, probar y volver a dar forma. Un taller de iniciación te permite conocer los materiales y crear algo acompañado/a, sin experiencia previa.",
    quote: "Tus manos también tienen cosas que descubrir.",
    heroNote: "Dale forma\na un rato para ti.",
    imageAlt:
      "Manos modelando un cuenco de barro sobre un torno en un taller de cerámica.",
    benefits: [
      "Te permite explorar una textura nueva",
      "Ofrece un espacio de aprendizaje práctico",
      "Da lugar a crear con tus manos",
      "Puedes compartir la experiencia con otras personas",
    ],
    steps: [
      "Busca un taller de iniciación cercano y revisa qué tipo de pieza se trabaja.",
      "Confirma precio, duración, materiales, cocción y recogida antes de reservar.",
      "Lleva ropa cómoda que pueda mancharse y sigue la orientación del taller.",
      "Prueba sin perseguir una pieza perfecta. Pregunta cómo continuar si te gusta.",
    ],
    materials:
      "Un taller para principiantes y ropa cómoda. Confirma qué materiales están incluidos.",
  },
  "fotos-de-un-color": {
    intro:
      "Un color puede ser la excusa para mirar tu barrio de otra manera. En lugar de buscar una gran foto, date un paseo corto para reunir pequeños hallazgos que normalmente pasarían desapercibidos.",
    quote: "La curiosidad cabe en una foto pequeña.",
    heroNote: "Elige un color.\nSigue la curiosidad.",
    imageAlt:
      "Una persona fotografía una flor amarilla junto a una pared del mismo color.",
    benefits: [
      "Entrena una mirada curiosa",
      "Combina paseo y creatividad",
      "Te invita a descubrir detalles cercanos",
      "No requiere una cámara especial",
    ],
    steps: [
      "Elige un color que te apetezca buscar hoy.",
      "Sal a recorrer un camino cercano con la cámara que ya uses.",
      "Encuentra cinco objetos de ese color y prueba encuadres diferentes.",
      "Reúne las imágenes en un álbum y elige tu favorita, sin necesidad de publicarla.",
    ],
    materials: "La cámara de tu teléfono u otra que ya tengas.",
  },
  "caminata-sin-celular": {
    intro:
      "Caminar un rato sin revisar notificaciones te deja espacio para mirar alrededor. El destino puede ser tan sencillo como volver a casa: lo que cuenta es tener un momento a tu ritmo.",
    quote: "No todo camino necesita una meta.",
    heroNote: "Un paso afuera.\nUn rato para ti.",
    imageAlt: "Una persona camina por un sendero verde con montañas al fondo.",
    benefits: [
      "Abre una pausa entre pantallas",
      "Invita a conocer tu entorno",
      "Suma movimiento a tu día",
      "Se adapta a tu propio ritmo",
    ],
    steps: [
      "Elige un recorrido conocido, accesible y cómodo para ti.",
      "Silencia las notificaciones y guarda el teléfono; puedes llevarlo contigo.",
      "Camina a tu ritmo y observa los colores, sonidos y cambios del camino.",
      "Regresa cuando te apetezca. No hace falta contar pasos ni batir marcas.",
    ],
    materials: "Calzado cómodo y un recorrido que se adapte a ti.",
  },
  "baila-una-cancion": {
    intro:
      "Pon esa canción que siempre te dan ganas de seguir y hazle un poco de espacio. No hay coreografía, público ni pasos correctos: puedes moverte como quieras, incluso sentado/a.",
    quote: "Tu canción. Tus pasos. Tu momento.",
    heroNote: "Que empiece\ntu canción.",
    imageAlt: "Una persona baila libremente en una sala luminosa y acogedora.",
    benefits: [
      "Conecta movimiento y música",
      "Deja espacio para jugar",
      "Cabe en unos pocos minutos",
      "No requiere aprender una coreografía",
    ],
    steps: [
      "Elige una canción que te guste y despeja un pequeño espacio.",
      "Empieza siguiendo el ritmo de la forma que te resulte cómoda.",
      "Prueba un movimiento propio o simplemente acompaña la música.",
      "Al terminar, decide si quieres otra canción o si ese rato ya fue suficiente.",
    ],
    materials: "Una canción que ya puedas reproducir y un poco de espacio.",
  },
  "paseo-de-diez-minutos": {
    intro:
      "No siempre hace falta organizar una salida. Dar una vuelta cerca de casa es una forma sencilla de cambiar de escenario y descubrir cómo se siente tu barrio hoy.",
    quote: "A veces, una vuelta pequeña abre el día.",
    heroNote: "Cerca de casa.\nLejos de la prisa.",
    imageAlt:
      "Una persona pasea por una acera arbolada de un barrio tranquilo.",
    benefits: [
      "Propone un cambio de escenario",
      "No necesita un plan elaborado",
      "Te acerca a tu barrio",
      "Permite moverte a tu ritmo",
    ],
    steps: [
      "Busca un recorrido cercano, accesible y de aproximadamente diez minutos.",
      "Ponte cómodo/a y sal sin añadir recados al paseo.",
      "Observa un detalle diferente en cada tramo del camino.",
      "Vuelve cuando te resulte suficiente. El paseo no tiene que ser más largo.",
    ],
    materials:
      "Calzado cómodo y una ruta cercana que puedas recorrer a tu manera.",
  },
  "pausa-en-movimiento": {
    intro:
      "Entre una tarea y la siguiente puedes hacer espacio para dos canciones. Cambiar de postura o recorrer tu habitación puede convertirse en una pausa sencilla, sin rutinas ni objetivos de rendimiento.",
    quote: "Tu pausa puede tener su propio ritmo.",
    heroNote: "Cambia de postura.\nCambia de ritmo.",
    imageAlt:
      "Una persona hace una pausa de movimiento junto a su silla en una habitación luminosa.",
    benefits: [
      "Interrumpe un rato de estar sentado/a",
      "Te permite elegir cómo moverte",
      "Cabe entre tareas cotidianas",
      "No necesita equipo ni una rutina",
    ],
    steps: [
      "Pon dos canciones que te apetezca escuchar.",
      "Cambia de postura o acomódate de otra manera, según lo que te resulte agradable.",
      "Si te apetece, recorre tu espacio o acompaña la música con las manos.",
      "Al terminar, vuelve a tu actividad sin convertir la pausa en una exigencia.",
    ],
    materials: "Un espacio cómodo y música que ya tengas disponible.",
  },
  "feria-de-arte-local": {
    intro:
      "Una feria puede acercarte a cosas que no sabías que te interesaban. Pasea entre colores y materiales, conoce el trabajo de otras personas y deja que una pieza te despierte curiosidad, sin obligación de comprar.",
    quote: "Tal vez tu próxima idea esté a la vuelta.",
    heroNote: "Sal a mirar.\nDéjate sorprender.",
    imageAlt:
      "Personas recorren una pequeña feria al aire libre con puestos de arte y artesanía.",
    benefits: [
      "Te acerca a propuestas creativas",
      "Ofrece un plan fuera de casa",
      "Invita a conversar con quienes crean",
      "Puedes disfrutar mirando y descubriendo",
    ],
    steps: [
      "Consulta la agenda cultural de tu ciudad y elige una feria que te interese.",
      "Confirma fecha, entrada, accesibilidad y transporte antes de salir.",
      "Recorre los puestos sin prisa y pregunta por una técnica o una pieza.",
      "Quédate con una idea que te haya inspirado. No necesitas llevarte una compra.",
    ],
    materials:
      "Información actualizada de la feria y un plan de traslado. No hay una reserva incluida.",
  },
  "museo-desde-casa": {
    intro:
      "Una colección digital puede abrirte una ventana a otras épocas e ideas. No necesitas recorrer un museo entero: una sola obra observada con calma puede ser suficiente para descubrir algo nuevo.",
    quote: "Hay mundos que empiezan con una mirada.",
    heroNote: "Un pequeño viaje.\nDesde tu rincón.",
    imageAlt:
      "Una persona explora imágenes de una colección de arte en un portátil desde casa.",
    benefits: [
      "Abre un espacio para la curiosidad",
      "Te acerca al arte desde casa",
      "Permite explorar a tu ritmo",
      "Puedes empezar por una sola obra",
    ],
    steps: [
      "Elige un museo y entra en su web oficial desde el dispositivo que ya uses.",
      "Busca una colección digital de acceso gratuito.",
      "Abre una obra que te llame la atención y observa sus detalles antes de leer.",
      "Lee su contexto y guarda el nombre si quieres seguir explorando otro día.",
    ],
    materials:
      "Un dispositivo con conexión a internet y una colección digital gratuita.",
  },
  "detalle-de-tu-barrio": {
    intro:
      "Los lugares conocidos también guardan pequeñas sorpresas. Dedicar unos minutos a mirar una puerta, un árbol o una fachada puede convertir el camino de siempre en una breve exploración.",
    quote: "Lo nuevo también puede estar muy cerca.",
    heroNote: "Mismo barrio.\nOtra mirada.",
    imageAlt:
      "Una esquina de barrio con una puerta antigua, flores en macetas y paredes cálidas.",
    benefits: [
      "Despierta curiosidad por lo cercano",
      "Invita a mirar con más atención",
      "Propone una salida sencilla",
      "No necesita compras ni entradas",
    ],
    steps: [
      "Elige una calle cercana que puedas recorrer cómodamente.",
      "Mira con atención algo que normalmente pasa de fondo.",
      "Dedícale unos minutos: observa sus formas, colores y cómo cambia con la luz.",
      "Ponle un nombre a tu hallazgo o anótalo para recordarlo después.",
    ],
    materials:
      "Una ruta cercana y curiosidad. Puedes llevar notas si te apetece.",
  },
  "escucha-un-genero-nuevo": {
    intro:
      "Escuchar algo distinto puede ser una pequeña aventura sin salir de casa. Dale una canción a un género que casi nunca eliges y descubre qué instrumento, ritmo o sonido se queda contigo.",
    quote: "No tienes que conocerlo para disfrutarlo.",
    heroNote: "Abre los oídos.\nEncuentra algo nuevo.",
    imageAlt:
      "Una persona disfruta escuchando música con auriculares cerca de una ventana.",
    benefits: [
      "Amplía tus descubrimientos musicales",
      "Invita a escuchar con atención",
      "Cabe en un momento breve",
      "Puede inspirar tu próximo pequeño plan",
    ],
    steps: [
      "Elige un género musical que no suelas escuchar.",
      "Busca una canción en una opción gratuita que ya uses.",
      "Escúchala a un volumen cómodo, sin hacer otra tarea a la vez.",
      "Elige un detalle que te haya gustado y decide si quieres probar otra canción.",
    ],
    materials:
      "Música disponible en una opción gratuita y auriculares o altavoz, si ya tienes.",
  },
};
export function activityImage(slug: string) {
  return `/images/activities/${slug}.webp`;
}
