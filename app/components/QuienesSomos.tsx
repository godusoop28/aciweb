import { IconCheck } from "./Icons";

const VALUES = [
  "Atención personalizada",
  "Estrategias claras",
  "Protección patrimonial",
  "Acompañamiento profesional",
];

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-aci-red">
            Quiénes somos
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-aci-ink sm:text-4xl">
            Más de 30 años construyendo tranquilidad financiera.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-aci-ink/70">
            <p>
              Detrás de ACI Consultoría existe un equipo de asesores
              financieros con más de tres décadas de experiencia en el
              sector financiero.
            </p>
            <p>
              Nuestra misión es ayudarte a proteger tu patrimonio,
              incrementar tu capital y planear un retiro seguro mediante
              estrategias personalizadas.
            </p>
            <p>
              No creemos en soluciones genéricas. Analizamos cada caso para
              ofrecer recomendaciones claras, seguras y adaptadas a tus
              objetivos financieros.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {VALUES.map((value, i) => (
            <div
              key={value}
              className="group rounded-2xl border border-black/5 bg-aci-offwhite p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl text-white ${
                  i % 3 === 0
                    ? "bg-aci-navy"
                    : i % 3 === 1
                      ? "bg-aci-red"
                      : "bg-aci-gold-dark"
                }`}
              >
                <IconCheck className="h-5 w-5" />
              </span>
              <p className="mt-4 text-base font-semibold text-aci-ink">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
