"use client";
import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { QuestLoading } from "./quest-loading";
import { ChoiceGroup } from "@repo/ui/components/choice-group";
import { StepProgress } from "@repo/ui/components/step-progress";
import { availableStep, questions, type Answers } from "./quest";
import { saveSession, useQuestSession } from "./quest-session";

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
  if (!ready) return <QuestLoading>Preparando tu espacio…</QuestLoading>;
  return (
    <div className="relative mx-auto mt-4 max-w-[520px] px-6 pb-[60px] phone:mt-0 phone:px-[22px] phone:pt-5 phone:pb-9">
      <div className="mb-[49px] flex items-center gap-[30px] phone:mb-7 phone:gap-6">
        <button
          type="button"
          className="flex items-center gap-3 py-2.5 text-[14px] text-foreground phone:px-[3px]"
          onClick={() => (step ? go(step - 1) : router.push("/"))}
        >
          Volver
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
        <div className="mb-[27px] phone:mb-[22px]">
          <p className="mb-[11px] text-[11px] tracking-[0.05em] uppercase phone:hidden">
            Paso {step + 1} de {questions.length}
          </p>
          <h1
            id="question-title"
            ref={heading}
            tabIndex={-1}
            className="max-w-[430px] font-heading text-[43px] leading-[1.02] font-normal tracking-[-0.5px] focus:outline-none phone:max-w-[330px] phone:text-[37px]"
          >
            {question.title}
          </h1>
          <p
            id="question-help"
            className="mt-[13px] max-w-[410px] text-[14px] leading-[1.65] text-muted-foreground phone:mt-2.5 phone:text-[13px]"
          >
            {question.help}
          </p>
        </div>
        <ChoiceGroup
          className="phone:gap-2.5 phone:[&>label]:min-h-[77px] phone:[&>label]:gap-3 phone:[&>label]:px-3 phone:[&>label>span:first-of-type]:size-[38px] phone:[&>label>span:first-of-type]:text-[23px]"
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
        <div className="mt-[26px] flex justify-end phone:mt-[25px]">
          <button
            type="submit"
            className="action-primary min-w-[158px] px-[21px] leading-5 phone:min-h-[52px] phone:w-full"
            disabled={!selected}
          >
            {step === questions.length - 1
              ? "Ver mis actividades"
              : "Siguiente"}
          </button>
        </div>
      </form>
    </div>
  );
}
