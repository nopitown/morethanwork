"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { QuestCta } from "./quest-cta";

const words = ["pinta", "escucha", "baila", "explora"];

export function HomeHero() {
  const [scene, setScene] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setScene((current) => (current + 1) % words.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <div className="home-hero__content">
        <h1 id="hero-title">
          Eres mucho más
          <br />
          que tu trabajo.
        </h1>
        <p className="home-hero__subtitle">
          También puedes ser alguien
          <br />
          que{" "}
          <span className="home-hero__words">
            {words.map((word, index) => (
              <span
                key={word}
                className="home-hero__word"
                data-active={scene === index}
                aria-hidden={scene !== index}
              >
                {word}.
              </span>
            ))}
          </span>
        </p>
        <div className="home-hero__actions">
          <QuestCta className="home-hero__cta" label="Encuentra algo para ti" />
          <a href="#por-que-es-importante" className="home-secondary-cta">
            ¿Por qué cuesta desconectar?
          </a>
        </div>
      </div>
      <figure className="home-hero__art">
        <div
          className="home-hero__animation"
          data-scene={words[scene]}
          aria-hidden="true"
        >
          {words.map((word, index) => (
            <Image
              key={word}
              src={`/images/hero/figma-${word}.png`}
              alt=""
              width={1200}
              height={896}
              unoptimized
              loading="eager"
              className="home-hero__image"
              data-active={scene === index}
            />
          ))}
        </div>
      </figure>
    </section>
  );
}
