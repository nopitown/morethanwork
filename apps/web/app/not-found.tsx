import Link from "next/link";
import { InternalPage } from "@components/internal-page";
import { Sprout } from "@components/illustrations";
export default function NotFound() {
  return (
    <InternalPage className="my-[65px] max-w-[680px] px-[25px] pt-5 pb-12 text-center phone:mt-[30px]">
      <Sprout className="mx-auto mb-5 h-[75px]" />
      <p className="mb-[15px] text-[11px] tracking-[0.15em] uppercase">
        Otro camino te espera
      </p>
      <h1 className="font-heading text-[48px] leading-[1.02] font-normal tracking-[-0.5px] phone:text-[38px]">
        No encontramos lo que buscabas.
      </h1>
      <p className="mt-5 mb-[25px] text-[14px] leading-[1.8] text-muted-foreground">
        Puede que el enlace no sea correcto. Explora el catálogo para encontrar
        algo que te guste.
      </p>
      <Link className="action-primary" href="/actividades">
        Explorar actividades
      </Link>
      <p className="mt-5 mb-[25px] text-[14px] leading-[1.8] text-muted-foreground">
        <Link
          className="py-3 text-[13px] text-primary no-underline hover:underline phone:text-[11px]"
          href="/"
        >
          Volver al inicio
        </Link>
      </p>
    </InternalPage>
  );
}
