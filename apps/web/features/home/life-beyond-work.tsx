import Image from "next/image";
import { LifeActivityIcons } from "./life-activity-icons";
import { QuestCta } from "@components/quest-cta";

const sectionLayout =
  "mx-auto grid max-w-page grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center gap-(--section-gap) px-(--page-gutter) py-[clamp(64px,8vw,100px)] stacked:grid-cols-1 stacked:py-14";
const visual =
  "relative aspect-[3/2] w-full max-w-[400px] justify-self-center mix-blend-multiply stacked:max-w-[340px]";
const copy =
  "mt-6 max-w-[44ch] text-[clamp(17px,2vw,20px)] leading-[1.6] text-muted-foreground";

const imageSizes =
  "(max-width: 388px) calc(100vw - 48px), (max-width: 800px) 340px, (max-width: 1000px) 40vw, 400px";

export function LifeBeyondWork() {
  return (
    <>
      <section
        id="por-que-es-importante"
        className="scroll-mt-8 bg-section"
        aria-labelledby="life-beyond-title"
      >
        <div className={sectionLayout}>
          <div>
            <h2
              id="life-beyond-title"
              className="font-editorial text-[clamp(34px,4.4vw,54px)] leading-[1.1] font-normal tracking-[-0.025em] [&>span]:text-brand text-balance"
            >
              Un mal día puede ocupar <span>más de la cuenta.</span>
            </h2>
            <p className={copy}>
              Si lo último que recuerdas del día es algo que salió mal en el
              trabajo, es fácil sentir que el día entero fue así.
            </p>
            <a
              href="#haz-espacio"
              className="action-secondary focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand mt-7"
            >
              Dale otro momento a tu día
            </a>
          </div>
          <div className={visual}>
            <Image
              src="/images/life-work-blue.png"
              alt="Una mujer pensativa frente a su laptop."
              fill
              sizes={imageSizes}
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <section
        id="haz-espacio"
        className="scroll-mt-8 bg-background"
        aria-labelledby="life-beyond-follow-up-title"
        tabIndex={-1}
      >
        <div className={sectionLayout}>
          <div>
            <h2
              id="life-beyond-follow-up-title"
              className="font-editorial text-[clamp(34px,4.4vw,54px)] leading-[1.1] font-normal tracking-[-0.025em] [&>span]:text-brand text-balance"
            >
              Que hoy también tenga algo <span>que esperabas con ganas.</span>
            </h2>
            <p className={copy}>
              Cocinar algo rico, dibujar un rato o llamar a alguien que extrañas
              puede cambiar lo que recuerdas de hoy.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 stacked:mt-6">
              <QuestCta label="Probar algo nuevo" />
              <a
                href="#actividades-destacadas"
                className="action-secondary focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                Explora ideas
              </a>
            </div>
          </div>
          <div className={visual}>
            <Image
              src="/images/life-interests-blue.png"
              alt="Una mujer sonríe con los ojos cerrados."
              fill
              sizes={imageSizes}
              className="object-cover"
            />
            <LifeActivityIcons />
          </div>
        </div>
      </section>
    </>
  );
}
