import Image from "next/image";
import { LifeActivityIcons } from "./life-activity-icons";
import { QuestCta } from "./quest-cta";

const imageSizes =
  "(max-width: 388px) calc(100vw - 48px), (max-width: 800px) 340px, (max-width: 1000px) 40vw, 400px";

export function LifeBeyondWork() {
  return (
    <>
      <section
        id="por-que-es-importante"
        className="life-beyond"
        aria-labelledby="life-beyond-title"
      >
        <div className="life-beyond__inner">
          <div className="life-beyond__copy">
            <h2 id="life-beyond-title" className="life-beyond__heading">
              Un mal día puede ocupar <span>más de la cuenta.</span>
            </h2>
            <p>
              Si lo último que recuerdas del día es algo que salió mal en el
              trabajo, es fácil sentir que el día entero fue así.
            </p>
            <a href="#haz-espacio" className="home-secondary-cta">
              Dale otro momento a tu día
            </a>
          </div>
          <div className="life-beyond__visual">
            <Image
              src="/images/life-work-blue.png"
              alt="Una mujer pensativa frente a su laptop."
              fill
              sizes={imageSizes}
              className="life-beyond__image"
            />
          </div>
        </div>
      </section>
      <section
        id="haz-espacio"
        className="life-beyond life-beyond--follow-up"
        aria-labelledby="life-beyond-follow-up-title"
        tabIndex={-1}
      >
        <div className="life-beyond__inner">
          <div className="life-beyond__copy">
            <h2 id="life-beyond-follow-up-title" className="life-beyond__heading">
              Que hoy también tenga algo <span>que esperabas con ganas.</span>
            </h2>
            <p>
              Cocinar algo rico, dibujar un rato o llamar a alguien que extrañas
              puede cambiar lo que recuerdas de hoy.
            </p>
            <div className="home-hero__actions">
              <QuestCta className="home-hero__cta" label="Probar algo nuevo" />
              <a href="#actividades-destacadas" className="home-secondary-cta">
                Explora ideas
              </a>
            </div>
          </div>
          <div className="life-beyond__visual">
            <Image
              src="/images/life-interests-blue.png"
              alt="Una mujer sonríe con los ojos cerrados."
              fill
              sizes={imageSizes}
              className="life-beyond__image"
            />
            <LifeActivityIcons />
          </div>
        </div>
      </section>
    </>
  );
}
