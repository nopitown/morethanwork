"use client";
import { QuestLoading } from "./quest-loading";
import Link from "next/link";
import { useEffect } from "react";
import { ActivityGrid } from "../activities/activity-grid";
import { useRouter } from "next/navigation";
import { recommend } from "./recommend";
import { isComplete, optionLabel, questions } from "./quest";
import { resetSession, useQuestSession } from "./quest-session";
import { Sprout } from "@components/illustrations";

export function Results() {
  const { session, ready } = useQuestSession();
  const router = useRouter();
  useEffect(() => {
    if (ready && window.location.hash) {
      document
        .getElementById(window.location.hash.slice(1))
        ?.scrollIntoView({ block: "center" });
    }
  }, [ready]);
  if (!ready)
    return <QuestLoading>Buscando tus pequeños grandes planes…</QuestLoading>;
  if (!isComplete(session.answers))
    return (
      <section className="mx-auto my-[65px] max-w-[510px] px-[25px] py-5 text-center phone:mt-[30px]">
        <Sprout className="mx-auto mb-5 h-[75px]" />
        <p className="mb-[15px] text-[11px] tracking-[0.15em] uppercase">
          A tu ritmo
        </p>
        <h1 className="font-heading text-[48px] leading-[1.02] font-normal tracking-[-0.5px] phone:text-[38px]">
          Primero, cuéntanos un poco de ti.
        </h1>
        <p className="mt-5 mb-[25px] text-[14px] leading-[1.8] text-muted-foreground">
          Con tus respuestas podremos encontrar actividades que encajen contigo.
        </p>
        <Link href="/cuestionario" className="action-primary">
          {Object.keys(session.answers).length
            ? "Continuar cuestionario"
            : "Empezar cuestionario"}
        </Link>
      </section>
    );
  const answers = session.answers;
  const matches = recommend(answers);
  return (
    <section className="mx-auto px-8 pt-3 pb-[50px] phone:px-[22px] phone:pt-0 phone:pb-[35px] max-w-[1120px]">
      <div className="flex items-center justify-between gap-4 phone:gap-2.5">
        <Link
          href="/cuestionario?paso=2"
          className="py-3 text-[13px] text-primary no-underline hover:underline phone:text-[11px]"
        >
          Ajustar mis respuestas
        </Link>
        <button
          type="button"
          className="rounded-[12px] border border-primary px-[17px] py-[11px] text-[12px] font-medium text-primary hover:bg-secondary phone:p-2.5 phone:text-[10px]"
          onClick={() => {
            resetSession();
            router.push("/cuestionario?paso=1");
          }}
        >
          Volver a empezar
        </button>
      </div>
      <header className="mx-auto mt-10 mb-[26px] text-center phone:mt-8">
        <p className="mb-[15px] text-[10px] tracking-[0.08em] uppercase phone:text-[9px]">
          <span
            className="mx-2.5 text-[#c87d20] phone:mx-[5px]"
            aria-hidden="true"
          >
            · · ·
          </span>{" "}
          Según tus respuestas{" "}
          <span
            className="mx-2.5 text-[#c87d20] phone:mx-[5px]"
            aria-hidden="true"
          >
            · · ·
          </span>
        </p>
        <h1 className="font-heading text-[48px] leading-[1.02] font-normal tracking-[-0.5px] phone:text-[39px]">
          Estas actividades
          <br />
          podrían ser para ti
        </h1>
        <p className="mt-3.5 text-[14px] text-muted-foreground phone:text-[12px]">
          Pequeñas actividades. Una vida más tranquila.
        </p>
      </header>
      <div
        className="mb-8 flex flex-wrap justify-center gap-2 phone:mb-[25px] phone:gap-1.5"
        aria-label="Tus preferencias"
      >
        {questions
          .filter((question) => question.id !== "mood")
          .map((question) => (
            <Link
              key={question.id}
              className="rounded-[30px] bg-secondary px-[11px] py-[7px] text-[11px] text-primary no-underline hover:shadow-[inset_0_0_0_1px_var(--color-primary)] phone:text-[10px]"
              href={`/cuestionario?paso=${questions.indexOf(question) + 1}`}
              aria-label={`Cambiar preferencia: ${optionLabel(question.id, answers[question.id])}`}
            >
              {optionLabel(question.id, answers[question.id])}
            </Link>
          ))}
      </div>
      {matches.length ? (
        <>
          <p className="mb-[15px] text-[12px] text-muted-foreground">
            {matches.length}{" "}
            {matches.length === 1 ? "idea para empezar" : "ideas para empezar"}.
            Elige la que te dé curiosidad.
          </p>
          <ActivityGrid activities={matches}>
            <aside className="flex min-h-[305px] flex-col items-center justify-center self-stretch rounded-[15px] bg-secondary px-5 py-[30px] text-center phone:min-h-[260px]">
              <Sprout className="mb-5 h-[75px] w-[55px]" />
              <p className="-rotate-6 font-hand text-[25px] leading-[1.5] font-light">
                Diferentes caminos.
                <br />
                Una vida más tuya.
              </p>
              <span className="mt-[25px] text-[12px] leading-[1.7] text-muted-foreground">
                No tienes que hacerlo todo.
                <br />
                Un pequeño paso es suficiente.
              </span>
            </aside>
          </ActivityGrid>
        </>
      ) : (
        <div className="mx-auto my-[65px] max-w-[510px] px-[25px] py-5 text-center phone:mt-[30px]">
          <h2 className="font-heading text-[48px] leading-[1.02] font-normal tracking-[-0.5px] phone:text-[38px]">
            Probemos otro pequeño camino.
          </h2>
          <p className="mt-5 mb-[25px] text-[14px] leading-[1.8] text-muted-foreground">
            Todavía no tenemos actividades que cumplan todas estas preferencias.
            Puedes ampliar el tiempo o cambiar el lugar, manteniendo el tipo de
            actividad que te gusta.
          </p>
          <Link href="/cuestionario?paso=3" className="action-primary">
            Ajustar mis preferencias
          </Link>
        </div>
      )}
      <p className="mt-10 text-center font-hand text-[20px] font-light phone:text-[17px]">
        <Link
          href="/actividades"
          className="py-3 text-[13px] text-primary no-underline hover:underline phone:text-[11px]"
        >
          Explorar todas las actividades
        </Link>
        <br />
        No es otra lista de pendientes. Es un espacio para ti.
      </p>
    </section>
  );
}
