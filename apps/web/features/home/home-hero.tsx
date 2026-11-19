"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { QuestCta } from "@components/quest-cta";

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
    <section
      className="mx-auto grid min-h-[620px] max-w-page grid-cols-[1.2fr_1fr] items-center gap-(--section-gap) px-(--page-gutter) pt-[70px] pb-[100px] stacked:min-h-0 stacked:grid-cols-1 stacked:pt-10 stacked:pb-14"
      aria-labelledby="hero-title"
    >
      <div className="min-w-0">
        <h1
          id="hero-title"
          className="font-editorial text-[clamp(44px,5vw,72px)] leading-[1.06] font-normal tracking-[-1.5px] stacked:text-[clamp(39px,7.8vw,60px)] stacked:tracking-[-1px]"
        >
          Eres mucho más
          <br />
          que tu trabajo.
        </h1>
        <p className="mt-9 font-editorial text-[clamp(24px,2.23vw,32px)] leading-[1.5] stacked:mt-6 stacked:text-[clamp(22px,4.4vw,30px)]">
          También puedes ser alguien
          <br />
          que{" "}
          <span className="inline-grid min-w-[4.5em] align-baseline text-[1.5em] text-brand">
            {words.map((word, index) => (
              <span
                key={word}
                className="[grid-area:1/1] opacity-0 transition-opacity duration-700 ease-in-out data-[active=true]:opacity-100 motion-reduce:transition-none"
                data-active={scene === index}
                aria-hidden={scene !== index}
              >
                {word}.
              </span>
            ))}
          </span>
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3 stacked:mt-6">
          <QuestCta />
          <a
            href="#por-que-es-importante"
            className="action-secondary focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            ¿Por qué cuesta desconectar?
          </a>
        </div>
      </div>
      <figure className="w-full min-w-0 max-w-[507px] justify-self-center compact:max-w-[460px]">
        <div
          className="grid aspect-[500/380] w-full items-center"
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
              className="block aspect-[507/384] h-auto w-full [grid-area:1/1] object-contain opacity-0 transition-opacity duration-700 ease-in-out data-[active=true]:opacity-100 motion-reduce:transition-none"
              data-active={scene === index}
            />
          ))}
        </div>
      </figure>
    </section>
  );
}
