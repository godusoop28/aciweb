"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { IconChevronLeft, IconChevronRight, IconStar } from "./Icons";

const TESTIMONIOS = [
  {
    name: "Cliente ACI",
    role: "Asesoría en seguros de vida",
    text: "Me ayudaron a entender mis opciones y elegir una estrategia adecuada para proteger a mi familia.",
  },
  {
    name: "Empresario local",
    role: "Seguros para flotilla y negocio",
    text: "Recibí una asesoría clara, profesional y enfocada en mis objetivos financieros.",
  },
  {
    name: "Familia asegurada",
    role: "Plan de ahorro y educación",
    text: "El acompañamiento fue cercano y resolvieron mis dudas durante todo el proceso.",
  },
];

const AUTOPLAY_MS = 6000;

export default function Testimonios() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const count = TESTIMONIOS.length;

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % count) + count) % count);
    },
    [count]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || count <= 1) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, count]);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) next();
      else prev();
    }
    touchStartX.current = null;
  }

  return (
    <section id="opiniones" className="bg-aci-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-aci-red">
            Confianza real
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-aci-ink sm:text-4xl">
            Opiniones de nuestros clientes
          </h2>
        </div>

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {TESTIMONIOS.map((t) => (
                <div
                  key={t.name + t.role}
                  className="w-full shrink-0 px-1 sm:px-3"
                  aria-hidden={
                    TESTIMONIOS.indexOf(t) !== index ? "true" : undefined
                  }
                >
                  <figure className="mx-auto flex max-w-xl flex-col rounded-3xl border border-black/5 bg-white p-7 shadow-sm sm:p-9">
                    <div className="flex gap-1 text-aci-gold">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <IconStar key={i} className="h-4 w-4" />
                      ))}
                    </div>
                    <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-aci-ink/75 sm:text-base">
                      “{t.text}”
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3 border-t border-black/5 pt-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-aci-navy text-sm font-bold text-white">
                        {t.name.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-aci-ink">
                          {t.name}
                        </p>
                        <p className="text-xs text-aci-ink/50">{t.role}</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Testimonio anterior"
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-aci-navy shadow-md transition-all hover:-translate-x-0.5 hover:bg-aci-navy hover:text-white sm:-left-4 sm:h-12 sm:w-12 lg:-left-6"
          >
            <IconChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Siguiente testimonio"
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-aci-navy shadow-md transition-all hover:translate-x-0.5 hover:bg-aci-navy hover:text-white sm:-right-4 sm:h-12 sm:w-12 lg:-right-6"
          >
            <IconChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {TESTIMONIOS.map((t, i) => (
            <button
              key={t.name + t.role}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all ${
                i === index
                  ? "w-7 bg-aci-navy"
                  : "w-2.5 bg-aci-navy/25 hover:bg-aci-navy/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
