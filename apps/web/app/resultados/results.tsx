"use client";
import Link from "next/link";
import { useEffect } from "react";
import { ActivityCard } from "../components/activity-card";
import { useRouter } from "next/navigation";
import { recommend } from "../lib/activities";
import { isComplete, optionLabel, questions } from "../lib/quest";
import { resetSession, useQuestSession } from "../lib/quest-session";
import { Sprout } from "../components/illustrations";

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
    return (
      <p className="quest-loading" role="status">
        Buscando tus pequeños grandes planes…
      </p>
    );
  if (!isComplete(session.answers))
    return (
      <section className="results-empty">
        <Sprout />
        <p className="eyebrow">A tu ritmo</p>
        <h1>Primero, cuéntanos un poco de ti.</h1>
        <p>
          Con tus respuestas podremos encontrar actividades que encajen contigo.
        </p>
        <Link href="/cuestionario" className="home-cta">
          {Object.keys(session.answers).length
            ? "Continuar cuestionario"
            : "Empezar cuestionario"}
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    );
  const answers = session.answers;
  const matches = recommend(answers);
  return (
    <section className="results-container">
      <div className="results-toolbar">
        <Link href="/cuestionario?paso=2" className="text-action">
          ← Ajustar mis respuestas
        </Link>
        <button
          className="restart-button"
          onClick={() => {
            resetSession();
            router.push("/cuestionario?paso=1");
          }}
        >
          Volver a empezar
        </button>
      </div>
      <header className="results-heading">
        <p className="eyebrow">
          <span aria-hidden="true">· · ·</span> Según tus respuestas{" "}
          <span aria-hidden="true">· · ·</span>
        </p>
        <h1>
          Estas sidequests
          <br />
          podrían ser para ti
        </h1>
        <p>Pequeñas actividades. Una vida más tranquila.</p>
      </header>
      <div className="answer-summary" aria-label="Tus preferencias">
        {questions
          .filter((question) => question.id !== "mood")
          .map((question) => (
            <Link
              key={question.id}
              href={`/cuestionario?paso=${questions.indexOf(question) + 1}`}
              aria-label={`Cambiar preferencia: ${optionLabel(question.id, answers[question.id])}`}
            >
              {optionLabel(question.id, answers[question.id])}
              <span aria-hidden="true"> ↗</span>
            </Link>
          ))}
      </div>
      {matches.length ? (
        <>
          <p className="results-count">
            {matches.length}{" "}
            {matches.length === 1 ? "idea para empezar" : "ideas para empezar"}.
            Elige la que te dé curiosidad.
          </p>
          <div className="activity-grid">
            {matches.map((activity) => (
              <ActivityCard key={activity.slug} activity={activity} />
            ))}
            <aside className="results-note">
              <Sprout />
              <p>
                Diferentes caminos.
                <br />
                Una vida más tuya.
              </p>
              <span>
                No tienes que hacerlo todo.
                <br />
                Un pequeño paso es suficiente.
              </span>
            </aside>
          </div>
        </>
      ) : (
        <div className="results-empty">
          <h2>Probemos otro pequeño camino.</h2>
          <p>
            Todavía no tenemos actividades que cumplan todas estas preferencias.
            Puedes ampliar el tiempo o cambiar el lugar, manteniendo el tipo de
            actividad que te gusta.
          </p>
          <Link href="/cuestionario?paso=3" className="home-cta">
            Ajustar mis preferencias <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
      <p className="results-footer">
        <Link href="/actividades" className="text-action">
          Explorar todas las actividades →
        </Link>
        <br />
        No es otra lista de pendientes. Es un espacio para ti.
      </p>
    </section>
  );
}
