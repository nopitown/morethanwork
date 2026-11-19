import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="home-site-footer">
      <Link
        href="/"
        className="home-site-footer__brand"
        aria-label="more than work., inicio"
      >
        more than work.
      </Link>
      <p>
        Hecho con amor por <a href="https://nopitown.com/" target="_blank">@nopitown</a>{" "}
        (solo por el gusto de hacer algo distinto 😌)
      </p>
      <small>© {new Date().getFullYear()} · Todos los derechos reservados.</small>
    </footer>
  );
}
