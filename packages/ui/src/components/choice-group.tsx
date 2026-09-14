import type { ReactNode } from "react";

export type Choice = {
  value: string;
  label: string;
  description: string;
  icon: ReactNode;
  tone?: string;
};
const tones: Record<string, string> = {
  sage: "bg-sage",
  coral: "bg-coral",
  sunshine: "bg-sunshine",
  sky: "bg-sky",
};
export function ChoiceGroup({
  name,
  options,
  value,
  onChange,
  labelledBy,
  describedBy,
}: {
  name: string;
  options: readonly Choice[];
  value?: string;
  onChange: (value: string) => void;
  labelledBy: string;
  describedBy?: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
      className="grid gap-3"
    >
      {options.map((option) => (
        <label
          key={option.value}
          className={`relative flex min-h-20 cursor-pointer items-center gap-4 rounded-xl border px-4 py-3 transition-colors hover:border-ring has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-ring ${value === option.value ? "border-primary bg-secondary/70" : "border-transparent bg-muted/80"}`}
        >
          <input
            className="sr-only"
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
          />
          <span
            aria-hidden="true"
            className={`flex size-11 shrink-0 items-center justify-center rounded-full text-2xl ${tones[option.tone ?? "sage"] ?? tones.sage}`}
          >
            {option.icon}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold leading-snug">
              {option.label}
            </span>
            <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
              {option.description}
            </span>
          </span>
          <span
            aria-hidden="true"
            className={`flex size-4 shrink-0 items-center justify-center rounded-full ${value === option.value ? "bg-primary text-white" : "border border-transparent"}`}
          >
            {value === option.value && (
              <span className="size-1 rounded-full bg-white" />
            )}
          </span>
        </label>
      ))}
    </div>
  );
}
