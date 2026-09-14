"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { QuestCta } from "./quest-cta";
import { BrandLeaf } from "./illustrations";

const content = {
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
    body: "Sidequests nace de una idea sencilla: también mereces tiempo para lo que te hace bien. Queremos acompañarte a explorar intereses, disfrutar lo cotidiano y encontrar pequeños momentos que sean solo tuyos.",
  },
};
type Info = keyof typeof content;

export function SiteHeader({
  action = "start",
}: {
  action?: "start" | "none";
}) {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState<Info>("Sobre");
  const dialog = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  function showInfo(key: Info) {
    setInfo(key);
    setOpen(false);
    dialog.current?.showModal();
  }
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <header className="site-header">
        <Link href="/" aria-label="Sidequests, inicio" className="brand">
          <BrandLeaf />
          <span>Sidequests</span>
        </Link>
        <nav aria-label="Navegación principal" className="desktop-nav">
          <Link href="/actividades" className="explore-nav">
            Explorar actividades
          </Link>
          {(Object.keys(content) as Info[]).map((key) => (
            <button key={key} onClick={() => showInfo(key)}>
              {key}
            </button>
          ))}
          {action === "start" && (
            <QuestCta className="header-cta" arrow={false} />
          )}
        </nav>
        <button
          ref={menuButton}
          className="menu-toggle"
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
            className="mobile-nav"
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setOpen(false);
                menuButton.current?.focus();
              }
            }}
          >
            <Link
              href="/actividades"
              className="explore-nav"
              onClick={() => setOpen(false)}
            >
              Explorar actividades
            </Link>
            {(Object.keys(content) as Info[]).map((key) => (
              <button key={key} onClick={() => showInfo(key)}>
                {key}
              </button>
            ))}
            {action === "start" && <QuestCta onOpen={() => setOpen(false)} />}
          </nav>
        )}
      </header>
      <dialog
        ref={dialog}
        className="info-dialog"
        aria-labelledby="info-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="dialog-close"
          aria-label="Cerrar"
          onClick={() => dialog.current?.close()}
        >
          ✕
        </button>
        <p className="eyebrow">{info}</p>
        <h2 id="info-title">{content[info].title}</h2>
        <p>{content[info].body}</p>
        <button className="home-cta" onClick={() => dialog.current?.close()}>
          Entendido <span aria-hidden="true">→</span>
        </button>
      </dialog>
    </>
  );
}
