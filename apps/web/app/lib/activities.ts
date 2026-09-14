import type { CompleteAnswers } from "./quest";
export type ActivityType = Exclude<CompleteAnswers["type"], "any">;
export type Activity = {
  slug: string;
  title: string;
  description: string;
  type: ActivityType;
  icon: string;
  minutes: number;
  cost: number;
  place: "home" | "outside";
  moods: CompleteAnswers["mood"][];
  firstStep: string;
  costNote?: string;
};
export const categories: Record<
  ActivityType,
  { label: string; tone: string; phrase: string }
> = {
  calm: {
    label: "Calma",
    tone: "sage",
    phrase: "Un momento para bajar el ritmo.",
  },
  creative: {
    label: "Creatividad",
    tone: "coral",
    phrase: "Haz espacio para tus ideas.",
  },
  move: {
    label: "Movimiento",
    tone: "sunshine",
    phrase: "Un poco de movimiento, a tu ritmo.",
  },
  explore: {
    label: "Explorar",
    tone: "sky",
    phrase: "Sigue un poquito tu curiosidad.",
  },
};
export const activities: Activity[] = [
  {
    slug: "cuida-una-planta",
    title: "Cuida una planta",
    description:
      "Trae un poco de verde a tu espacio y disfruta de un pequeño ritual cotidiano.",
    type: "calm",
    icon: "🪴",
    minutes: 15,
    cost: 50,
    place: "home",
    moods: ["anxious", "stressed", "tired"],
    firstStep:
      "Elige una planta fácil de cuidar y busca un rincón con luz indirecta. Antes de regar, comprueba si la tierra está seca.",
    costNote:
      "Hasta S/ 50 estimados para una planta pequeña y maceta; varía según la tienda.",
  },
  {
    slug: "pausa-junto-a-la-ventana",
    title: "Haz una pausa junto a la ventana",
    description:
      "Regálate unos minutos sin pantallas para observar lo que pasa a tu alrededor.",
    type: "calm",
    icon: "🌤️",
    minutes: 10,
    cost: 0,
    place: "home",
    moods: ["tired", "anxious", "stressed"],
    firstStep:
      "Deja el teléfono a un lado, siéntate cerca de una ventana y encuentra cinco pequeños detalles que normalmente no notas.",
  },
  {
    slug: "escucha-tu-entorno",
    title: "Escucha tu entorno",
    description:
      "Encuentra un lugar tranquilo y deja que los sonidos te devuelvan al presente.",
    type: "calm",
    icon: "🌿",
    minutes: 10,
    cost: 0,
    place: "outside",
    moods: ["anxious", "stressed"],
    firstStep:
      "Acércate a un parque o a un rincón tranquilo al que puedas llegar a pie. Escucha durante unos minutos sin auriculares, sin buscar hacer nada más.",
  },
  {
    slug: "album-de-buenos-momentos",
    title: "Reúne tus buenos momentos",
    description:
      "Redescubre pequeñas cosas que te hicieron sonreír y dales un lugar propio.",
    type: "calm",
    icon: "🌼",
    minutes: 15,
    cost: 0,
    place: "home",
    moods: ["tired", "good"],
    firstStep:
      "Crea un álbum en tu teléfono y añade cinco fotos de momentos que quieras recordar. Puedes escribir una frase sobre cada uno.",
  },
  {
    slug: "tres-acordes-ukelele",
    title: "Aprende 3 acordes en ukelele",
    description:
      "Prueba algo nuevo con las manos y deja que una pequeña melodía tome forma.",
    type: "creative",
    icon: "🎸",
    minutes: 30,
    cost: 150,
    place: "home",
    moods: ["good", "motivated"],
    firstStep:
      "Consigue un ukelele propio o prestado, afínalo y empieza por el acorde de Do. Cuando te resulte cómodo, prueba Fa y Sol.",
    costNote:
      "Hasta S/ 150 estimados para un instrumento básico; si ya tienes uno, no necesitas comprarlo.",
  },
  {
    slug: "dibuja-sin-reglas",
    title: "Dibuja sin reglas",
    description:
      "Líneas, formas y garabatos. No hace falta que se parezca a nada.",
    type: "creative",
    icon: "✏️",
    minutes: 10,
    cost: 0,
    place: "home",
    moods: ["stressed", "anxious", "good"],
    firstStep:
      "Usa papel y lápiz que ya tengas, o una aplicación de notas. Dibuja durante cinco minutos sin borrar ni juzgar el resultado.",
  },
  {
    slug: "taller-de-ceramica",
    title: "Prueba un taller de cerámica",
    description:
      "Explora una textura nueva y disfruta creando algo con tus manos.",
    type: "creative",
    icon: "🏺",
    minutes: 120,
    cost: 150,
    place: "outside",
    moods: ["motivated", "good", "stressed"],
    firstStep:
      "Busca un taller para principiantes cerca de ti y pregunta por duración, precio y materiales incluidos antes de reservar.",
    costNote:
      "Presupuesto orientativo de S/ 150. Confirma el precio y la disponibilidad con el taller.",
  },
  {
    slug: "fotos-de-un-color",
    title: "Busca un color y fotografíalo",
    description:
      "Convierte un paseo corto en un pequeño ejercicio de creatividad.",
    type: "creative",
    icon: "📷",
    minutes: 15,
    cost: 0,
    place: "outside",
    moods: ["motivated", "good"],
    firstStep:
      "Elige un color, sal a caminar cerca de casa y toma cinco fotos de cosas que lo tengan con la cámara que ya uses.",
  },
  {
    slug: "caminata-sin-celular",
    title: "Haz una caminata sin celular",
    description:
      "Desconecta un rato de las notificaciones y vuelve a mirar tu entorno.",
    type: "move",
    icon: "🚶",
    minutes: 30,
    cost: 0,
    place: "outside",
    moods: ["stressed", "anxious", "motivated"],
    firstStep:
      "Elige un recorrido conocido. Guarda el teléfono con las notificaciones silenciadas y camina al ritmo que te resulte cómodo.",
  },
  {
    slug: "baila-una-cancion",
    title: "Baila tu canción favorita",
    description:
      "Sin coreografía ni público. Solo una canción y un momento para soltarte.",
    type: "move",
    icon: "🎵",
    minutes: 5,
    cost: 0,
    place: "home",
    moods: ["good", "motivated", "stressed"],
    firstStep:
      "Haz un poco de espacio, pon una canción que te guste y muévete como te apetezca. También puedes hacerlo sentado/a.",
  },
  {
    slug: "paseo-de-diez-minutos",
    title: "Date una vuelta a la manzana",
    description: "Un pequeño cambio de aire puede darle otro ritmo a tu día.",
    type: "move",
    icon: "👟",
    minutes: 10,
    cost: 0,
    place: "outside",
    moods: ["tired", "good", "anxious"],
    firstStep:
      "Elige un camino cercano y accesible, sal sin prisa y dedica diez minutos a recorrerlo a tu ritmo.",
  },
  {
    slug: "pausa-en-movimiento",
    title: "Muévete entre canciones",
    description:
      "Interrumpe un rato de estar sentado/a con una pausa que disfrutes.",
    type: "move",
    icon: "☀️",
    minutes: 10,
    cost: 0,
    place: "home",
    moods: ["tired", "stressed"],
    firstStep:
      "Pon dos canciones y cambia de postura o recorre tu espacio de la manera que te resulte cómoda. No hay una meta que cumplir.",
  },
  {
    slug: "feria-de-arte-local",
    title: "Visita una feria de arte local",
    description:
      "Conoce ideas, colores y personas que están creando cerca de ti.",
    type: "explore",
    icon: "🎪",
    minutes: 90,
    cost: 50,
    place: "outside",
    moods: ["good", "motivated"],
    firstStep:
      "Busca una feria en la agenda cultural de tu ciudad. Revisa fecha, accesibilidad, entrada y transporte antes de salir.",
    costNote:
      "Reserva hasta S/ 50 como referencia. El costo real depende de la entrada y del transporte; no incluye compras.",
  },
  {
    slug: "museo-desde-casa",
    title: "Explora un museo desde casa",
    description:
      "Acércate a una colección distinta sin moverte de tu rincón favorito.",
    type: "explore",
    icon: "🖼️",
    minutes: 15,
    cost: 0,
    place: "home",
    moods: ["tired", "good", "motivated"],
    firstStep:
      "Entra en la web de un museo que te dé curiosidad y busca su colección digital gratuita. Elige una obra y observa sus detalles.",
  },
  {
    slug: "detalle-de-tu-barrio",
    title: "Descubre un detalle de tu barrio",
    description: "Mira un lugar conocido con ojos de quien acaba de llegar.",
    type: "explore",
    icon: "🧭",
    minutes: 15,
    cost: 0,
    place: "outside",
    moods: ["good", "motivated", "anxious"],
    firstStep:
      "Recorre una calle cercana y encuentra algo que nunca habías observado: una fachada, un árbol o un letrero. Dedícale unos minutos.",
  },
  {
    slug: "escucha-un-genero-nuevo",
    title: "Descubre un género musical",
    description: "Abre una pequeña puerta a sonidos que todavía no conoces.",
    type: "explore",
    icon: "🎧",
    minutes: 10,
    cost: 0,
    place: "home",
    moods: ["tired", "good", "stressed"],
    firstStep:
      "Elige un género que casi nunca escuches y busca una canción en una opción gratuita que ya uses. Escúchala sin hacer otra cosa.",
  },
];
export const timeLimits = { short: 15, medium: 30, long: 120, any: Infinity };
export const budgetLimits = { free: 0, low: 50, medium: 150, any: Infinity };
export function recommend(
  answers: CompleteAnswers,
  catalog: readonly Activity[] = activities,
): Activity[] {
  return catalog
    .filter(
      (activity) =>
        (answers.type === "any" || activity.type === answers.type) &&
        activity.minutes <= timeLimits[answers.time] &&
        activity.cost <= budgetLimits[answers.budget] &&
        (answers.place === "any" || activity.place === answers.place),
    )
    .map((activity, index) => ({
      activity,
      index,
      score: activity.moods.includes(answers.mood) ? 1 : 0,
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map(({ activity }) => activity)
    .slice(0, 6);
}
