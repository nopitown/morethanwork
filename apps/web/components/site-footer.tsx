import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mx-auto grid w-[calc(100%-2*var(--page-gutter))] max-w-[calc(var(--container-page)-2*var(--page-gutter))] grid-cols-[1fr_auto_1fr] items-center gap-4 py-6 font-sans text-[14px] phone:grid-cols-1 phone:gap-2">
      <Link
        href="/"
        className="justify-self-start text-[22px] font-bold tracking-[-0.8px] text-brand"
        aria-label="more than work., inicio"
      >
        more than work.
      </Link>
      <p>
        Hecho con amor por{" "}
        <a
          className="text-brand underline underline-offset-[0.15em]"
          href="https://nopitown.com/"
          target="_blank"
        >
          @nopitown
        </a>{" "}
        (solo por el gusto de hacer algo distinto 😌)
      </p>
      <small className="justify-self-end text-right text-[12px] text-muted-foreground phone:justify-self-start phone:text-left">
        © {new Date().getFullYear()} · Todos los derechos reservados.
      </small>
    </footer>
  );
}
