import type { ReactNode } from "react";

const tones = {
  sage: "bg-sage",
  sunshine: "bg-sunshine",
  coral: "bg-coral",
  clear: "bg-transparent",
};

export function Benefit({
  icon,
  title,
  children,
  tone = "sage",
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  tone?: keyof typeof tones;
}) {
  return (
    <article className="flex flex-col items-center text-center">
      <span
        aria-hidden="true"
        className={`mb-4 flex size-14 items-center justify-center rounded-full ${tones[tone]}`}
      >
        {icon}
      </span>
      <h3 className="mb-2 text-sm font-semibold">{title}</h3>
      <p className="max-w-44 text-sm leading-relaxed text-muted-foreground">
        {children}
      </p>
    </article>
  );
}
