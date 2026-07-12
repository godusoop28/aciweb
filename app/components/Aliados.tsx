import Image from "next/image";

const ALIADOS = [
  {
    name: "ANA Seguros",
    label: "ANA Seguros",
    src: "/aliados/logo-ana-seguros.jpeg",
    boost: true,
  },
  {
    name: "Allianz — Distribuidor Autorizado",
    label: "Allianz",
    src: "/aliados/logo-allianz-distribuidor-autorizado.jpeg",
  },
  {
    name: "Banorte Seguros",
    label: "Banorte",
    src: "/aliados/logo-banorte-seguros.jpeg",
    boost: true,
  },
  {
    name: "GMX Seguros",
    label: "GMX Seguros",
    src: "/aliados/logo-gmx-seguros.jpeg",
    boost: true,
  },
  {
    name: "HDI Seguros",
    label: "HDI Seguros",
    src: "/aliados/logo-hdi-seguros.jpeg",
  },
  {
    name: "Seguros El Potosí",
    label: "El Potosí",
    src: "/aliados/logo-seguros-el-potosi.jpeg",
  },
  {
    name: "Seguros Monterrey New York Life",
    label: "Seguros Monterrey",
    src: "/aliados/logo-seguros-monterrey-new-york-life.jpeg",
    boost: true,
  },
  { name: "Skandia", label: "Skandia", src: "/aliados/logo-skandia.jpeg" },
  { name: "NAICA", label: "NAICA", src: "/aliados/logo-naica.jpeg" },
  { name: "Quálitas", label: "Quálitas", src: "/aliados/logo-qualitas.jpeg" },
];

export default function Aliados() {
  return (
    <section id="aliados" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-aci-red">
            Respaldo sólido
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-aci-ink sm:text-4xl">
            Nuestros aliados comerciales
          </h2>
          <p className="mt-4 text-base text-aci-ink/65 sm:text-lg">
            Trabajamos con compañías reconocidas para ofrecerte alternativas
            sólidas y confiables.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {ALIADOS.map((aliado) => (
            <div
              key={aliado.name}
              className="group flex h-40 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-black/5 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-aci-navy/15 hover:shadow-md"
            >
              <div
                className={`relative w-full ${aliado.boost ? "h-20" : "h-16"}`}
              >
                <Image
                  src={aliado.src}
                  alt={aliado.name}
                  fill
                  sizes="(max-width: 640px) 40vw, (max-width: 1024px) 28vw, 16vw"
                  className="object-contain mix-blend-multiply"
                />
              </div>
              <span className="text-center text-[11px] font-medium leading-tight text-aci-ink/40">
                {aliado.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
