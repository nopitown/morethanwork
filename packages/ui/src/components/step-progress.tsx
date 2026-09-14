export function StepProgress({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const bounded = Math.min(total, Math.max(1, current));
  return (
    <div className="flex flex-1 items-center gap-6">
      <div
        role="progressbar"
        aria-label="Progreso del cuestionario"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={bounded}
        aria-valuetext={`Paso ${bounded} de ${total}`}
        className="h-1 flex-1 overflow-hidden rounded-full bg-border"
      >
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-300"
          style={{ width: `${(bounded / total) * 100}%` }}
        />
      </div>
      <span
        aria-hidden="true"
        className="whitespace-nowrap text-sm tracking-wider text-muted-foreground"
      >
        {bounded} / {total}
      </span>
    </div>
  );
}
