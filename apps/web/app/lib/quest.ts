export const questions = [
  {
    id: "mood",
    title: "¿Cómo te sientes últimamente?",
    help: "Sé honesto. Esto nos ayuda a recomendarte mejores actividades.",
    note: "Está bien sentirte así.\nEstás dando un paso\nhacia algo mejor.",
    options: [
      {
        value: "anxious",
        label: "Ansioso/a",
        description: "Siento que mi mente no se detiene.",
        icon: "😟",
        tone: "coral",
      },
      {
        value: "stressed",
        label: "Estresado/a",
        description: "Tengo muchas cosas en la cabeza.",
        icon: "😐",
        tone: "sunshine",
      },
      {
        value: "tired",
        label: "Cansado/a",
        description: "Me falta energía.",
        icon: "😔",
        tone: "coral",
      },
      {
        value: "good",
        label: "Bien",
        description: "Todo bien, pero quiero algo nuevo.",
        icon: "🙂",
        tone: "sunshine",
      },
      {
        value: "motivated",
        label: "Motivado/a",
        description: "Me siento bien y con ganas de explorar.",
        icon: "😃",
        tone: "sage",
      },
    ],
  },
  {
    id: "type",
    title: "¿Qué te gustaría hacer?",
    help: "Elige el tipo de actividad que más te llama hoy. No necesitas experiencia.",
    note: "No tienes que ser bueno.\nSolo darte permiso\npara probar.",
    options: [
      {
        value: "calm",
        label: "Bajar el ritmo",
        description: "Algo tranquilo para conectar conmigo.",
        icon: "🌱",
        tone: "sage",
      },
      {
        value: "creative",
        label: "Crear algo",
        description: "Música, arte y cosas hechas por mí.",
        icon: "🎨",
        tone: "coral",
      },
      {
        value: "move",
        label: "Ponerme en movimiento",
        description: "Mover el cuerpo y renovar mi energía.",
        icon: "☀️",
        tone: "sunshine",
      },
      {
        value: "explore",
        label: "Explorar y descubrir",
        description: "Lugares, ideas y experiencias nuevas.",
        icon: "🧭",
        tone: "sky",
      },
      {
        value: "any",
        label: "Sorpréndeme",
        description: "Estoy abierto/a a distintos caminos.",
        icon: "✨",
        tone: "sunshine",
      },
    ],
  },
  {
    id: "time",
    title: "¿Cuánto tiempo te quieres regalar?",
    help: "Un ratito también cuenta. Piensa en lo que puedes dedicarle a una actividad.",
    note: "Los pequeños momentos\ntambién hacen\nun gran día.",
    options: [
      {
        value: "short",
        label: "Hasta 15 minutos",
        description: "Una pequeña pausa en mi día.",
        icon: "🌿",
        tone: "sage",
      },
      {
        value: "medium",
        label: "Hasta 30 minutos",
        description: "Un rato para hacer algo por mí.",
        icon: "☕",
        tone: "sunshine",
      },
      {
        value: "long",
        label: "Hasta 2 horas",
        description: "Tengo espacio para una experiencia.",
        icon: "🌤️",
        tone: "sky",
      },
      {
        value: "any",
        label: "Sin prisa",
        description: "El tiempo no es un problema.",
        icon: "∞",
        tone: "coral",
      },
    ],
  },
  {
    id: "budget",
    title: "¿Qué presupuesto tienes en mente?",
    help: "Hay mucho por descubrir sin gastar. Elige lo que te resulte cómodo.",
    note: "Disfrutar de algo nuevo\nno tiene que\ncostar mucho.",
    options: [
      {
        value: "free",
        label: "Prefiero algo gratis",
        description: "Sin compras ni gastos adicionales.",
        icon: "🍃",
        tone: "sage",
      },
      {
        value: "low",
        label: "Hasta S/ 50",
        description: "Un pequeño gusto, a mi ritmo.",
        icon: "🪴",
        tone: "sunshine",
      },
      {
        value: "medium",
        label: "Hasta S/ 150",
        description: "Puedo invertir un poco en la experiencia.",
        icon: "🎟️",
        tone: "coral",
      },
      {
        value: "any",
        label: "Estoy abierto/a",
        description: "Quiero ver qué opciones hay.",
        icon: "✨",
        tone: "sky",
      },
    ],
  },
  {
    id: "place",
    title: "¿Dónde te gustaría empezar?",
    help: "Un rincón de casa o un cambio de aire. Tú eliges.",
    note: "No importa dónde.\nLo importante es\nhacerte un espacio.",
    options: [
      {
        value: "home",
        label: "En casa",
        description: "En mi espacio, sin tener que salir.",
        icon: "🏡",
        tone: "sage",
      },
      {
        value: "outside",
        label: "Fuera de casa",
        description: "Me vendría bien cambiar de escenario.",
        icon: "🌳",
        tone: "sky",
      },
      {
        value: "any",
        label: "Me da igual",
        description: "Donde me lleve la curiosidad.",
        icon: "🧭",
        tone: "sunshine",
      },
    ],
  },
] as const;

export type QuestionId = (typeof questions)[number]["id"];
export type Answers = {
  [Q in (typeof questions)[number] as Q["id"]]?: Q["options"][number]["value"];
};
export type CompleteAnswers = Required<Answers>;
export type QuestSession = { version: 1; answers: Answers; step: number };
export const SESSION_KEY = "sidequests:quest:v1";
export function emptySession(): QuestSession {
  return { version: 1, answers: {}, step: 0 };
}
export function parseSession(raw: string | null): QuestSession {
  try {
    const value = JSON.parse(raw ?? "null");
    if (
      !value ||
      value.version !== 1 ||
      typeof value.answers !== "object" ||
      !value.answers
    )
      return emptySession();
    const answers: Record<string, string> = {};
    for (const question of questions) {
      const answer = value.answers[question.id];
      if (question.options.some((option) => option.value === answer))
        answers[question.id] = answer;
    }
    return {
      version: 1,
      answers: answers as Answers,
      step: Number.isInteger(value.step)
        ? Math.max(0, Math.min(questions.length - 1, value.step))
        : 0,
    };
  } catch {
    return emptySession();
  }
}
export function isComplete(answers: Answers): answers is CompleteAnswers {
  return questions.every((question) =>
    question.options.some((option) => option.value === answers[question.id]),
  );
}
export function availableStep(answers: Answers): number {
  const unanswered = questions.findIndex((question) => !answers[question.id]);
  return unanswered === -1 ? questions.length - 1 : unanswered;
}
export function optionLabel(id: QuestionId, value: string): string {
  return (
    questions
      .find((question) => question.id === id)
      ?.options.find((option) => option.value === value)?.label ?? ""
  );
}
