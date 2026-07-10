"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { IconChevronLeft, IconChevronRight, IconStar } from "./Icons";

const TESTIMONIOS = [
  {
    name: "Alejandro Montiel",
    role: "Plan Personal para el Retiro",
    text: "Pensaba que todavía faltaban muchos años para preocuparme por mi retiro, pero en ACI Consultoría me hicieron ver la importancia de empezar hoy. Diseñaron un plan acorde a mis objetivos y ahora tengo la tranquilidad de que estoy construyendo un mejor futuro para mí.",
  },
  {
    name: "Gabriela Salinas",
    role: "Inversión",
    text: "Quería hacer crecer mi dinero, pero no sabía por dónde empezar. En ACI Consultoría me explicaron las opciones de inversión de forma sencilla y sin presiones. Hoy veo resultados y, sobre todo, tengo la confianza de que mis finanzas están respaldadas por un equipo profesional.",
  },
  {
    name: "Fernanda Alcocer",
    role: "Gastos Médicos Mayores",
    text: "Cuando surgió una emergencia médica, lo último que quería era preocuparme por los gastos. Gracias al seguro que contraté con ACI Consultoría pude enfocarme en mi recuperación. Su acompañamiento antes, durante y después del proceso hizo una gran diferencia. Los recomiendo completamente.",
  },
  {
    name: "Ricardo Velasco",
    role: "Seguro de Vida",
    text: "Contratar un seguro de vida era algo que siempre dejaba para después. Gracias a la asesoría de ACI Consultoría entendí que era una forma de proteger a mi familia y asegurar su futuro. Me explicaron todo con claridad y encontré un plan que realmente se adapta a mis necesidades.",
  },
  {
    name: "Mariana Castañeda",
    role: "Seguro de Auto",
    text: "Tuve un accidente que nunca imaginé vivir. Pensé que todo sería complicado, pero en ACI Consultoría estuvieron conmigo desde el primer momento. Me guiaron en cada paso y el proceso fue mucho más sencillo de lo que esperaba. Hoy sé que tener un seguro no es un gasto, es una tranquilidad.",
  },
];

const AUTOPLAY_MS = 6000;
const WHATSAPP_NUMBER = "5539869683";

function useSlidesPerView() {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    function compute() {
      const w = window.innerWidth;
      if (w >= 1024) setSlidesPerView(3);
      else if (w >= 640) setSlidesPerView(2);
      else setSlidesPerView(1);
    }
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return slidesPerView;
}

function TestimoniosCarousel() {
  const slidesPerView = useSlidesPerView();
  const count = TESTIMONIOS.length;
  const maxIndex = Math.max(0, count - slidesPerView);
  const [rawIndex, setIndex] = useState(0);
  const index = Math.min(rawIndex, maxIndex);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (i: number) => {
      setIndex(Math.max(0, Math.min(i, maxIndex)));
    },
    [maxIndex]
  );

  const next = useCallback(
    () => setIndex((i) => (Math.min(i, maxIndex) >= maxIndex ? 0 : i + 1)),
    [maxIndex]
  );
  const prev = useCallback(
    () => setIndex((i) => (Math.min(i, maxIndex) <= 0 ? maxIndex : i - 1)),
    [maxIndex]
  );

  useEffect(() => {
    if (paused || maxIndex <= 0) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const timer = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, maxIndex]);

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

  const slideWidthPct = 100 / slidesPerView;
  const dots = Array.from({ length: maxIndex + 1 });

  return (
    <div
      className="relative"
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
          style={{
            transform: `translateX(-${index * slideWidthPct}%)`,
          }}
        >
          {TESTIMONIOS.map((t, i) => (
            <div
              key={t.name}
              className="shrink-0 px-2"
              style={{ width: `${slideWidthPct}%` }}
              aria-hidden={
                i < index || i >= index + slidesPerView ? "true" : undefined
              }
            >
              <figure className="flex h-full min-h-[280px] flex-col rounded-3xl border border-black/5 bg-white p-7 shadow-sm sm:p-8">
                <div className="flex gap-1 text-aci-gold">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <IconStar key={si} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-aci-ink/75">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-black/5 pt-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aci-navy text-sm font-bold text-white">
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

      {maxIndex > 0 && (
        <>
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
        </>
      )}

      {maxIndex > 0 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          {dots.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir al grupo de testimonios ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all ${
                i === index
                  ? "w-7 bg-aci-navy"
                  : "w-2.5 bg-aci-navy/25 hover:bg-aci-navy/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const RATING_OPTIONS = [5, 4, 3, 2, 1];

function DejaTuResena() {
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") || "").trim();
    const servicio = String(data.get("servicio") || "").trim();
    const calificacion = String(data.get("calificacion") || "5");
    const opinion = String(data.get("opinion") || "").trim();

    if (!nombre || !opinion) {
      setError("Por favor completa tu nombre y tu opinión para continuar.");
      setConfirmed(false);
      return;
    }

    setError("");
    setConfirmed(true);

    const texto = [
      "Hola, quiero dejar una reseña para ACI Consultoría.",
      "",
      `Nombre: ${nombre}`,
      `Servicio contratado: ${servicio || "No especificado"}`,
      `Calificación: ${calificacion} estrellas`,
      `Opinión: ${opinion}`,
    ].join("\n");

    window.open(
      `https://wa.me/52${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  }

  return (
    <div className="mx-auto mt-20 max-w-3xl rounded-3xl border border-black/5 bg-white p-6 shadow-sm sm:p-9">
      <div className="text-center">
        <h3 className="text-2xl font-extrabold tracking-tight text-aci-ink">
          ¿Ya eres cliente de ACI Consultoría?
        </h3>
        <p className="mt-3 text-sm text-aci-ink/65 sm:text-base">
          Comparte tu experiencia y ayúdanos a seguir mejorando nuestro
          servicio.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 text-left">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-sm font-medium text-aci-ink/80">
            Nombre
            <input
              type="text"
              name="nombre"
              required
              placeholder="Tu nombre"
              className="rounded-xl border border-black/10 bg-aci-offwhite px-4 py-3 text-sm text-aci-ink outline-none transition-colors focus:border-aci-navy"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-aci-ink/80">
            Servicio contratado
            <input
              type="text"
              name="servicio"
              placeholder="Ej. Seguro de Auto"
              className="rounded-xl border border-black/10 bg-aci-offwhite px-4 py-3 text-sm text-aci-ink outline-none transition-colors focus:border-aci-navy"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-aci-ink/80 sm:col-span-2">
            Calificación
            <select
              name="calificacion"
              defaultValue="5"
              className="rounded-xl border border-black/10 bg-aci-offwhite px-4 py-3 text-sm text-aci-ink outline-none transition-colors focus:border-aci-navy"
            >
              {RATING_OPTIONS.map((r) => (
                <option key={r} value={r}>
                  {"★".repeat(r)}
                  {"☆".repeat(5 - r)} ({r} estrella{r !== 1 ? "s" : ""})
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-aci-ink/80 sm:col-span-2">
            Opinión
            <textarea
              name="opinion"
              required
              rows={4}
              placeholder="Cuéntanos tu experiencia con ACI Consultoría"
              className="resize-none rounded-xl border border-black/10 bg-aci-offwhite px-4 py-3 text-sm text-aci-ink outline-none transition-colors focus:border-aci-navy"
            />
          </label>
        </div>

        {error && (
          <p className="mt-4 text-sm font-medium text-aci-red">{error}</p>
        )}
        {confirmed && !error && (
          <p className="mt-4 text-sm font-medium text-aci-navy">
            Tu opinión se preparó correctamente. Continúa en WhatsApp para
            enviarla.
          </p>
        )}

        <button
          type="submit"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-aci-navy px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-aci-navy-dark hover:shadow-md"
        >
          Enviar mi opinión
        </button>

        <p className="mt-4 text-xs text-aci-ink/45">
          Tu opinión será enviada por WhatsApp para revisión antes de
          publicarse en el sitio.
        </p>
      </form>
    </div>
  );
}

export default function Testimonios() {
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

        <div className="mt-14">
          <TestimoniosCarousel />
        </div>

        <DejaTuResena />
      </div>
    </section>
  );
}
