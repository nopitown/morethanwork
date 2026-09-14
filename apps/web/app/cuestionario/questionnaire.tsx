"use client";
import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@repo/ui/components/button";
import { ChoiceGroup } from "@repo/ui/components/choice-group";
import { StepProgress } from "@repo/ui/components/step-progress";
import { Sprout } from "../components/illustrations";
import { availableStep, questions, type Answers } from "../lib/quest";
import { saveSession, useQuestSession } from "../lib/quest-session";

export function Questionnaire() {
  const { session, ready } = useQuestSession();
  const router = useRouter();
  const search = useSearchParams();
  const heading = useRef<HTMLHeadingElement>(null);
  const requested = Number(search.get("paso") ?? session.step + 1) - 1;
  const step = Math.min(
    availableStep(session.answers),
    Math.max(0, Number.isInteger(requested) ? requested : 0),
  );
  const question = questions[step]!;
  const selected = session.answers[question.id];
  useEffect(() => {
    if (ready) heading.current?.focus({ preventScroll: true });
  }, [step, ready]);
  function go(next: number) {
    saveSession({ ...session, step: next });
    router.push(`/cuestionario?paso=${next + 1}`, { scroll: true });
  }
  if (!ready)
    return (
      <p className="quest-loading" role="status">
        Preparando tu espacio…
      </p>
    );
  return (
    <div className="questionnaire">
      <div className="quest-navigation">
        <button
          className="quest-back"
          onClick={() => (step ? go(step - 1) : router.push("/"))}
        >
          <span aria-hidden="true">←</span>
          <span>Volver</span>
        </button>
        <StepProgress current={step + 1} total={questions.length} />
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!selected) return;
          if (step === questions.length - 1) router.push("/resultados");
          else go(step + 1);
        }}
      >
        <div className="question-intro">
          <p className="eyebrow">
            Paso {step + 1} de {questions.length}
          </p>
          <h1 id="question-title" ref={heading} tabIndex={-1}>
            {question.title}
          </h1>
          <p id="question-help">{question.help}</p>
        </div>
        <ChoiceGroup
          key={question.id}
          name={question.id}
          options={question.options}
          value={selected}
          labelledBy="question-title"
          describedBy="question-help"
          onChange={(value) =>
            saveSession({
              ...session,
              step,
              answers: { ...session.answers, [question.id]: value } as Answers,
            })
          }
        />
        <div className="quest-bottom">
          <p className="quest-note">{question.note}</p>
          <Button type="submit" className="home-cta" disabled={!selected}>
            {step === questions.length - 1 ? "Ver mis sidequests" : "Siguiente"}
            <span aria-hidden="true">→</span>
          </Button>
        </div>
        {!selected && (
          <p className="selection-hint">Elige una opción para continuar.</p>
        )}
      </form>
      <Sprout className="quest-plant" />
    </div>
  );
}
