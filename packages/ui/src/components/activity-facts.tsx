import type { ReactNode } from "react";

const styles = {
  default: {
    grid: "m-0 grid grid-cols-2 gap-3 md:grid-cols-4",
    item: "flex items-center gap-3 rounded-xl bg-muted p-4",
    label: "mb-1 text-xs font-semibold",
    value: "m-0 text-xs text-muted-foreground",
  },
  editorial: {
    grid: "m-0 grid grid-cols-4 gap-2.5 p-0 [@media(max-width:700px)]:grid-cols-2 [@media(max-width:700px)]:gap-x-[9px] [@media(max-width:700px)]:gap-y-3.5",
    item: "flex items-center gap-3 rounded-[12px] bg-[#f2f0e9] px-[13px] py-[17px] [&>svg]:shrink-0 [@media(700px<width<=900px)]:gap-2 [@media(700px<width<=900px)]:px-2.5 [@media(700px<width<=900px)]:[&>svg]:w-[21px] [@media(max-width:700px)]:gap-[9px] [@media(max-width:700px)]:bg-transparent [@media(max-width:700px)]:p-0 [@media(max-width:700px)]:[&>svg]:w-[22px]",
    label:
      "mb-1 text-[11px] leading-[1.3333333333] font-semibold [@media(max-width:700px)]:text-[10px]",
    value: "m-0 text-[11px] leading-[1.4] text-muted-foreground",
  },
};
function FactIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}
export function ActivityFacts({
  minutes,
  cost,
  place,
  variant = "default",
}: {
  minutes: number;
  cost: number;
  place: string;
  variant?: keyof typeof styles;
}) {
  const facts = [
    {
      label: "Tiempo",
      value:
        minutes >= 60 ? `${minutes / 60} horas aprox.` : `${minutes} minutos`,
      icon: (
        <FactIcon>
          <circle cx="12" cy="13" r="8" />
          <path d="M12 8v5l3 2M5 3 2 6m17-3 3 3M10 2h4" />
        </FactIcon>
      ),
    },
    {
      label: "Costo",
      value: cost ? `Hasta S/ ${cost} aprox.` : "Gratis",
      icon: (
        <FactIcon>
          <path d="m9 7-2-4h10l-2 4M8 8c-5 5-6 12 0 12h8c6 0 5-7 0-12ZM12 11v6m2-5c-4-2-5 2-2 2s2 4-2 2" />
        </FactIcon>
      ),
    },
    {
      label: "Lugar",
      value: place === "home" ? "En casa" : "Fuera de casa",
      icon: (
        <FactIcon>
          <path d="m2 11 10-8 10 8M5 10v11h5v-7h4v7h5V10" />
        </FactIcon>
      ),
    },
    {
      label: "Nivel",
      value: "Principiante",
      icon: (
        <FactIcon>
          <rect x="3" y="15" width="3" height="6" rx="1" />
          <rect x="10" y="10" width="3" height="11" rx="1" />
          <rect x="17" y="4" width="3" height="17" rx="1" />
        </FactIcon>
      ),
    },
  ];
  const appearance = styles[variant];
  return (
    <dl className={appearance.grid}>
      {facts.map((fact) => (
        <div key={fact.label} className={appearance.item}>
          {fact.icon}
          <div>
            <dt className={appearance.label}>{fact.label}</dt>
            <dd className={appearance.value}>{fact.value}</dd>
          </div>
        </div>
      ))}
    </dl>
  );
}
