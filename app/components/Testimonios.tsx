import { IconStar } from "./Icons";

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

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIOS.map((t) => (
            <figure
              key={t.name + t.role}
              className="flex flex-col rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex gap-1 text-aci-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-aci-ink/75">
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
          ))}
        </div>
      </div>
    </section>
  );
}
