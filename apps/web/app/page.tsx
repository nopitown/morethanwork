import Image from "next/image";
import { QuestCta } from "./components/quest-cta";
import { Benefit } from "@repo/ui/components/benefit";
import { SiteHeader } from "./components/site-header";
import {
  Heart,
  Mountains,
  Smile,
  Sprout,
  Sun,
} from "./components/illustrations";

export default function Home() {
  return (
    <div className="home-page">
      <SiteHeader />
      <main id="contenido">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-photo">
            <Image
              src="/images/sidequests-hero.webp"
              alt="Una persona y su perro disfrutan juntos de un lago entre montañas al atardecer."
              fill
              priority
              sizes="(max-width: 700px) 100vw, 85vw"
            />
          </div>
          <div className="hero-content">
            <span className="little-spark" aria-hidden="true">
              ⌁
            </span>
            <h1 id="hero-title">
              Tu carrera
              <br />
              es una parte del juego.
              <br />
              <em>Tu vida es mucho más.</em>
            </h1>
            <p className="hero-description">
              Descubre hobbies y experiencias reales que te ayuden
              <br className="desktop-break" /> a sentirte más tranquilo, feliz y
              tú otra vez.
            </p>
            <QuestCta className="hero-cta" />
            <p className="cta-caption">
              Toma 2 minutos. No necesitas una cuenta.
            </p>
          </div>
          <p className="hero-note">
            Una mente más tranquila
            <br />
            también construye
            <br />
            grandes cosas.
          </p>
          <svg
            className="hero-wave"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 40C160 4 280 6 454 40s332 59 562 19S1276 6 1440 33V100H0Z"
              fill="currentColor"
            />
          </svg>
          <p className="mobile-photo-note">
            Más vida.
            <br />
            <span>Menos sobrepensar.</span>
          </p>
        </section>
        <section
          className="benefits"
          aria-label="Un poco más de espacio para ti"
        >
          <Benefit title="Menos ansiedad" icon={<Sprout className="size-9" />}>
            Conecta con lo que
            <br />
            te hace bien.
          </Benefit>
          <Benefit
            title="Nuevas experiencias"
            tone="sunshine"
            icon={<Smile className="size-10" />}
          >
            Explora actividades
            <br />
            que realmente te interesen.
          </Benefit>
          <Benefit
            title="Vida más balanceada"
            tone="clear"
            icon={<Sun className="size-12" />}
          >
            Porque hay más que
            <br />
            solo el trabajo.
          </Benefit>
          <Benefit
            title="Un tú más feliz"
            tone="coral"
            icon={<Heart className="size-10" />}
          >
            Pequeños pasos,
            <br />
            grandes cambios.
          </Benefit>
        </section>
        <footer className="home-footer">
          <div className="footer-mountains">
            <Mountains />
            <p>Hoy también cuenta.</p>
          </div>
          <div className="footer-sprout">
            <Sprout />
            <p>
              Más vida.
              <br />
              Menos sobrepensar.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
