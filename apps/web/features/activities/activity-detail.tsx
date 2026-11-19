import Image from "next/image";
import { ActivityFacts } from "@repo/ui/components/activity-facts";
import { cn } from "@repo/ui/lib/utils";
import { Sprout } from "@components/illustrations";
import { ActivityBadge, activityTone } from "./activity-badge";
import { categories, type Activity } from "./activities";
import {
  activityImage,
  type ActivityDetail as Detail,
} from "./activity-details";
import { DetailBack, StartActivity } from "./detail-actions";

const sectionHeading =
  "mb-[18px] font-heading text-[28px] leading-[1.2] font-normal phone:text-[27px]";

function ActivityBenefits({ benefits }: { benefits: Detail["benefits"] }) {
  return (
    <section
      className="[grid-area:benefits] phone:order-3"
      aria-labelledby="benefits-title"
    >
      <h2 id="benefits-title" className={sectionHeading}>
        ¿Por qué podría ayudarte?
      </h2>
      <ul className="grid list-none grid-cols-2 gap-x-[35px] gap-y-[13px] phone:grid-cols-1">
        {benefits.map((benefit) => (
          <li
            key={benefit}
            className="flex items-start gap-2.5 text-[13px] leading-[1.6]"
          >
            <span
              className="mt-px inline-flex size-[18px] shrink-0 items-center justify-center rounded-full border border-primary text-[11px] text-primary phone:size-[21px] phone:rounded-[5px] phone:border-2 phone:border-[#b5d6bb] phone:bg-secondary"
              aria-hidden="true"
            >
              ✓
            </span>
            {benefit}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ActivitySteps({
  steps,
  materials,
  costNote,
}: Pick<Detail, "steps" | "materials"> & Pick<Activity, "costNote">) {
  return (
    <section
      className="pt-[7px] [grid-area:steps] phone:order-4 phone:pt-0"
      aria-labelledby="steps-title"
    >
      <h2 id="steps-title" className={sectionHeading}>
        ¿Cómo empezar?
      </h2>
      <ol className="grid list-none gap-[15px]">
        {steps.map((step, index) => (
          <li
            key={step}
            className="flex items-start gap-3 text-[13px] leading-[1.7] phone:text-[12px]"
          >
            <span
              className="mt-px flex size-[23px] shrink-0 items-center justify-center rounded-full bg-primary text-[11px] text-primary-foreground"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <p>{step}</p>
          </li>
        ))}
      </ol>
      <div className="mt-[25px] ml-[35px] border-t border-border pt-[17px] phone:ml-0">
        <h3 className="mb-[7px] text-[12px] font-semibold">Lo que necesitas</h3>
        <p className="text-[12px] leading-[1.8] text-muted-foreground">
          {materials}
        </p>
        {costNote && (
          <p className="mt-2.5 text-[11px] leading-[1.8] text-muted-foreground">
            {costNote}
          </p>
        )}
      </div>
    </section>
  );
}

export function ActivityDetail({
  activity,
  detail,
  backTo,
}: {
  activity: Activity;
  detail: Detail;
  backTo?: string;
}) {
  const { slug } = activity;
  const { tone } = categories[activity.type];
  const panelTone = tone === "sage" ? "bg-sky" : activityTone[tone];

  return (
    <>
      <nav
        className="px-[5.2%] pb-[19px] phone:px-[22px] phone:pb-[13px]"
        aria-label="Volver"
      >
        <DetailBack slug={slug} from={backTo} />
      </nav>
      <div className="relative h-[390px] overflow-hidden after:absolute after:inset-0 after:bg-[linear-gradient(90deg,#102c3466,transparent_60%)] detail-tablet:h-[320px] phone:mx-3.5 phone:h-[245px] phone:rounded-[13px] phone:after:hidden">
        <Image
          src={activityImage(slug)}
          alt={detail.imageAlt}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover object-center"
        />
        <p
          className="absolute top-[30%] left-[7%] z-1 max-w-[300px] -rotate-7 font-hand text-[34px] leading-[1.35] font-light whitespace-pre-line text-[#fffdf7] [text-shadow:0_1px_12px_#102c3450] phone:hidden"
          aria-hidden="true"
        >
          {detail.heroNote}
        </p>
      </div>
      <article
        className="relative mx-[4%] -mt-7 grid grid-cols-[minmax(0,1fr)_235px] gap-x-9 gap-y-8 rounded-t-[22px] bg-background px-[38px] pt-[37px] pb-2.5 [grid-template-areas:'intro_quote'_'benefits_benefits'_'facts_facts'_'steps_first'_'action_first'] detail-tablet:mx-[2%] detail-tablet:grid-cols-[minmax(0,1fr)_200px] detail-tablet:gap-x-6 detail-tablet:gap-y-7 detail-tablet:px-[25px] detail-tablet:py-7 phone:m-0 phone:flex phone:flex-col phone:gap-[26px] phone:rounded-none phone:px-[22px] phone:pt-0"
        aria-labelledby="activity-title"
      >
        <header className="[grid-area:intro] phone:relative phone:order-0 phone:-mt-[11px]">
          <ActivityBadge activity={activity} variant="detail" />
          <h1
            id="activity-title"
            className="mb-3 font-heading text-[clamp(38px,4.2vw,55px)] leading-[1.03] font-normal tracking-[-0.6px] phone:mb-[9px] phone:text-[37px]"
          >
            {activity.title}
          </h1>
          <p className="mb-4 text-[15px] leading-[1.65] phone:mb-0 phone:text-[14px] phone:leading-[1.6]">
            {activity.description}
          </p>
          <p className="max-w-[660px] text-[13px] leading-[1.8] text-muted-foreground phone:mt-3.5 phone:text-[12px]">
            {detail.intro}
          </p>
        </header>
        <aside
          className={cn(
            panelTone,
            "flex flex-col items-center self-start rounded-[18px] px-[23px] pt-[26px] pb-4 [grid-area:quote] phone:order-6 phone:bg-transparent phone:px-[22px] phone:pt-[18px] phone:pb-0",
          )}
        >
          <p className="-rotate-6 text-center font-hand text-[22px] leading-[1.4] font-light detail-tablet:text-[20px] phone:max-w-[240px] phone:text-[23px]">
            “{detail.quote}”
          </p>
          <Sprout className="mt-[19px] h-[63px] w-[42px] phone:mt-4 phone:h-[47px] phone:w-8" />
        </aside>
        <div className="[grid-area:facts] phone:order-1">
          <ActivityFacts
            minutes={activity.minutes}
            cost={activity.cost}
            place={activity.place}
            variant="editorial"
          />
        </div>
        <StartActivity />
        <ActivityBenefits benefits={detail.benefits} />
        <ActivitySteps
          steps={detail.steps}
          materials={detail.materials}
          costNote={activity.costNote}
        />
        <aside
          className={cn(
            panelTone,
            "mt-[7px] self-stretch rounded-[18px] px-[22px] py-[26px] text-center [grid-area:first] has-[h2:focus]:shadow-[0_0_0_2px_var(--color-ring)] phone:order-5 phone:mt-0 phone:p-[25px]",
          )}
        >
          <h2
            id="primer-paso"
            tabIndex={-1}
            className="mb-[18px] scroll-mt-[30px] font-heading text-[25px] leading-[1.2] font-normal focus:outline-none phone:text-[27px]"
          >
            Tu primer paso
          </h2>
          <span
            className="mx-auto mb-[18px] flex size-[65px] items-center justify-center rounded-full bg-[#ffffff75] text-[33px]"
            aria-hidden="true"
          >
            {activity.icon}
          </span>
          <p className="text-[14px] leading-[1.65]">{activity.firstStep}</p>
          <span className="mt-5 block font-sans text-[14px] leading-[1.5] font-medium">
            Un pequeño comienzo también cuenta.
          </span>
        </aside>
      </article>
      <div className="flex items-center justify-center gap-2.5 px-5 py-[35px] phone:pt-5">
        <Sprout className="h-[39px] w-[27px]" />
        <p className="font-hand text-[20px] font-light phone:text-[18px]">
          Más vida. Menos sobrepensar.
        </p>
      </div>
    </>
  );
}
