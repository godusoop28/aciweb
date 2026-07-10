const BARS = [
  { h: 45, color: "bg-aci-navy-light", delay: "0ms" },
  { h: 70, color: "bg-aci-gold", delay: "80ms" },
  { h: 55, color: "bg-aci-red", delay: "160ms" },
  { h: 88, color: "bg-aci-navy", delay: "240ms" },
  { h: 64, color: "bg-aci-gold-dark", delay: "320ms" },
];

const DASHBOARD_ROWS = [
  { label: "Protección patrimonial", value: "Activa", color: "bg-aci-navy" },
  { label: "Crecimiento financiero", value: "+12.4%", color: "bg-aci-red" },
  { label: "Retiro seguro", value: "En curso", color: "bg-aci-gold-dark" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-[#f7f8fb] via-white to-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-aci-navy/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-aci-gold/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-2 lg:items-center lg:gap-10 lg:pb-28 lg:pt-24">
        <div className="aci-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-aci-navy/15 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-aci-navy shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-aci-gold" />
            Consultoría financiera y patrimonial
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-aci-ink sm:text-5xl lg:text-[3.4rem]">
            Tu futuro depende de lo que hagas hoy
          </h1>

          <p className="mt-4 text-xl font-semibold text-aci-navy sm:text-2xl">
            Seguros, Inversiones y Ahorro
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-aci-ink/70 sm:text-lg">
            Protegemos tu patrimonio, impulsamos tu crecimiento financiero y
            te acompañamos en cada etapa de tu vida con estrategias
            personalizadas.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
            <a
              href="#agenda"
              className="inline-flex items-center justify-center rounded-full bg-aci-navy px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-aci-navy/20 transition-all hover:-translate-y-0.5 hover:bg-aci-navy-dark hover:shadow-lg"
            >
              Agenda una cita
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border-2 border-aci-navy px-7 py-3.5 text-sm font-semibold text-aci-navy transition-all hover:-translate-y-0.5 hover:bg-aci-navy hover:text-white"
            >
              Conoce nuestros servicios
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 border-t border-aci-ink/10 pt-6">
            <span className="h-9 w-1 rounded-full bg-gradient-to-b from-aci-gold via-aci-red to-aci-navy" />
            <p className="text-sm font-medium text-aci-ink/60">
              Más de tres décadas acompañando a personas, familias y
              empresas.
            </p>
          </div>
        </div>

        <div className="aci-fade-up opacity-0 [animation-delay:150ms]">
          <div className="relative mx-auto max-w-md rounded-3xl border border-black/5 bg-white p-6 shadow-[0_30px_60px_-25px_rgba(37,52,125,0.35)] sm:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-16 w-16 rounded-2xl bg-aci-gold shadow-lg"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full border-4 border-aci-red/20"
            />

            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-aci-ink/40">
                  Panel financiero
                </p>
                <p className="text-lg font-bold text-aci-ink">
                  Tu estrategia ACI
                </p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-aci-navy text-white">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="M3 17l6-6 4 4 8-8M21 7v6h-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            <div className="relative mt-7 flex h-32 items-end gap-3 rounded-2xl bg-aci-offwhite p-4">
              {BARS.map((bar, i) => (
                <div
                  key={i}
                  className={`aci-bar flex-1 rounded-t-md ${bar.color}`}
                  style={{ height: `${bar.h}%`, animationDelay: bar.delay }}
                />
              ))}
            </div>

            <div className="relative mt-6 space-y-3">
              {DASHBOARD_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between rounded-xl border border-black/5 bg-white px-4 py-3 shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`h-2 w-2 rounded-full ${row.color}`} />
                    <span className="text-sm font-medium text-aci-ink/80">
                      {row.label}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-aci-ink">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
