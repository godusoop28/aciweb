import Image from "next/image";

const ALIADOS = [
  { name: "Quálitas", src: "/aliados/logo-qualitas.jpeg" },
  { name: "Skandia", src: "/aliados/logo-skandia.jpeg" },
  {
    name: "Seguros Monterrey New York Life",
    src: "/aliados/logo-seguros-monterrey-new-york-life.jpeg",
  },
  { name: "Seguros El Potosí", src: "/aliados/logo-seguros-el-potosi.jpeg" },
  { name: "GMX Seguros", src: "/aliados/logo-gmx-seguros.jpeg" },
  { name: "Banorte Seguros", src: "/aliados/logo-banorte-seguros.jpeg" },
  {
    name: "Allianz — Distribuidor Autorizado",
    src: "/aliados/logo-allianz-distribuidor-autorizado.jpeg",
  },
  { name: "ANA Seguros", src: "/aliados/logo-ana-seguros.jpeg" },
  { name: "HDI Seguros", src: "/aliados/logo-hdi-seguros.jpeg" },
  { name: "NAICA", src: "/aliados/logo-naica.jpeg" },
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

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {ALIADOS.map((aliado) => (
            <div
              key={aliado.name}
              className="flex h-28 items-center justify-center rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-aci-navy/15 hover:shadow-md"
            >
              <div className="relative h-full w-full">
                <Image
                  src={aliado.src}
                  alt={aliado.name}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
