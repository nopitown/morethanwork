"use client";

import { useRef, useState, type RefObject } from "react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { cn } from "@repo/ui/lib/utils";
import { QuestCta } from "./quest-cta";

const brand = "more than work.";
const siteInfo = {
  "Cómo funciona": {
    title: "Un pequeño paso hacia algo tuyo.",
    body: "Responde unas preguntas sobre cómo te sientes, tu tiempo y lo que te gustaría explorar. Te ayudaremos a descubrir pequeñas actividades que encajen contigo. Elige una y empieza a tu ritmo.",
  },
  FAQs: {
    title: "Sin presión. Sin grandes compromisos.",
    body: "¿Necesito una cuenta? No. ¿Tengo que tener experiencia? Tampoco. La idea es descubrir algo nuevo, con opciones para distintos tiempos y presupuestos. Tú decides qué probar y cuándo.",
  },
  Sobre: {
    title: "Tu vida es mucho más que tu trabajo.",
    body: "more than work. nace de una idea sencilla: también mereces tiempo para lo que te hace bien. Queremos acompañarte a explorar intereses, disfrutar lo cotidiano y encontrar pequeños momentos que sean solo tuyos.",
  },
};

type SiteInfoTopic = keyof typeof siteInfo;

const topics = Object.keys(siteInfo) as SiteInfoTopic[];

function NavigationLinks({
  mobile = false,
  showInfo,
  onNavigate,
}: {
  mobile?: boolean;
  showInfo: (topic: SiteInfoTopic) => void;
  onNavigate?: () => void;
}) {
  const linkStyle = cn(
    "py-3 text-[14px] font-medium text-ink hover:text-brand",
    "focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand",
  );
  return (
    <>
      <Link
        href="/actividades"
        className={cn(linkStyle, mobile && "phone:px-1.5")}
        onClick={onNavigate}
      >
        Explorar actividades
      </Link>
      {topics.map((topic) => (
        <button
          key={topic}
          type="button"
          className={
            mobile
              ? cn(
                  "p-[13px] text-left text-[14px] text-ink hover:text-brand",
                  "focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand",
                )
              : linkStyle
          }
          onClick={() => showInfo(topic)}
        >
          {topic}
        </button>
      ))}
    </>
  );
}

export function SiteHeader() {
  const segments = useSelectedLayoutSegments();
  const [section, activity] = segments;
  const showQuestCta =
    section !== "cuestionario" &&
    section !== "resultados" &&
    !(section === "actividades" && activity);

  return (
    <SiteHeaderContent key={segments.join("/")} showQuestCta={showQuestCta} />
  );
}

function SiteHeaderContent({ showQuestCta }: { showQuestCta: boolean }) {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState<SiteInfoTopic>("Sobre");
  const dialog = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  let logoLetterIndex = 0;

  function showInfo(next: SiteInfoTopic) {
    setTopic(next);
    setOpen(false);
    dialog.current?.showModal();
  }

  return (
    <>
      <a
        href="#contenido"
        className="fixed -top-[100px] left-5 z-20 bg-background p-[15px] focus:top-3"
      >
        Saltar al contenido
      </a>
      <header className="relative z-5 mx-auto flex h-24 w-full max-w-page items-center justify-between bg-background px-[min(5.2vw,62.4px)] text-ink stacked:h-20 stacked:px-6">
        <Link
          href="/"
          aria-label={`${brand}, inicio`}
          className="inline-flex items-center gap-2 text-foreground no-underline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          <span className="font-sans text-[24px] leading-[29.7px] font-bold tracking-[-0.8px] whitespace-nowrap text-brand stacked:text-[22px]">
            {Array.from(brand).map((letter, index) =>
              letter === " " ? (
                " "
              ) : (
                <span
                  key={index}
                  className="inline-block animate-[brand-letter-in_140.625ms_cubic-bezier(0,0,0.58,1)_both] [font:inherit] [letter-spacing:inherit]"
                  style={{
                    animationDelay: `${logoLetterIndex++ * 63.28125}ms`,
                  }}
                >
                  {letter}
                </span>
              ),
            )}
          </span>
        </Link>
        <nav
          aria-label="Navegación principal"
          className="flex items-center gap-[34px] compact:gap-[18px] menu:hidden"
        >
          <NavigationLinks showInfo={showInfo} />
          {showQuestCta && (
            <QuestCta className="ml-[15px] min-h-11 px-[21px] py-3 text-[12px] compact:ml-0" />
          )}
        </nav>
        <button
          type="button"
          ref={menuButton}
          className="hidden size-11 text-[24px] text-ink hover:text-brand menu:block phone:-mr-2.5 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>
        {open && (
          <nav
            id="mobile-menu"
            aria-label="Navegación móvil"
            className="absolute inset-x-4 top-[calc(100%-8px)] hidden flex-col gap-1.5 rounded-[4px] border border-border bg-background p-4 shadow-soft menu:flex"
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setOpen(false);
                menuButton.current?.focus();
              }
            }}
          >
            <NavigationLinks
              mobile
              showInfo={showInfo}
              onNavigate={() => setOpen(false)}
            />
            {showQuestCta && (
              <QuestCta
                className="phone:mt-1.5"
                onOpen={() => setOpen(false)}
              />
            )}
          </nav>
        )}
      </header>
      <SiteInfoDialog topic={topic} dialog={dialog} />
    </>
  );
}

function SiteInfoDialog({
  topic,
  dialog,
}: {
  topic: SiteInfoTopic;
  dialog: RefObject<HTMLDialogElement | null>;
}) {
  const close = () => dialog.current?.close();

  return (
    <dialog
      ref={dialog}
      className="inset-0 m-auto w-[calc(100%-32px)] max-w-[510px] rounded-[16px] border border-[color-mix(in_srgb,var(--color-brand)_16%,var(--color-background))] bg-background p-[45px] text-ink shadow-[0_20px_80px_rgb(36_53_45_/_18%)] backdrop:bg-[rgb(36_53_45_/_24%)] backdrop:backdrop-blur-[4px] phone:px-[25px] phone:pt-[38px] phone:pb-7"
      aria-labelledby="info-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <button
        type="button"
        className="absolute top-3 right-3 size-10 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand"
        aria-label="Cerrar"
        onClick={close}
      >
        ✕
      </button>
      <p className="mb-[15px] text-[11px] tracking-[0.15em] uppercase text-brand">
        {topic}
      </p>
      <h2
        id="info-title"
        className="mb-[18px] font-editorial text-[clamp(30px,5vw,39px)] leading-[1.1] font-normal"
      >
        {siteInfo[topic].title}
      </h2>
      <p className="text-[15px] leading-[1.8]">{siteInfo[topic].body}</p>
      <button
        type="button"
        className="action-primary focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand mt-[26px]"
        onClick={close}
      >
        Entendido
      </button>
    </dialog>
  );
}
