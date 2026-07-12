import { IconCheck } from "./Icons";

const SEGUROS = [
  "Seguro de Auto",
  "Seguro de Moto",
  "Pick Up",
  "Flotillas",
  "Vida",
  "Gastos Médicos Mayores",
  "Gastos Médicos Menores",
  "Accidentes Personales",
  "Escolares",
  "Hogar",
  "Negocio",
];

const AHORRO = [
  {
    title: "Retiro (PPR)",
    text: "Ahorra para tu retiro con beneficios fiscales y crea un patrimonio para tu futuro.",
  },
  {
    title: "Metas Personales",
    text: "Ahorro enfocado en adquisición de bienes, viajes o proyectos propios.",
  },
  {
    title: "Fondos de Reserva",
    text: "Acumulación segura con la tranquilidad de contar con un respaldo financiero.",
  },
];

const INVERSIONES = [
  {
    plazo: "Corto plazo",
    items: [
      {
        title: "Disponibilidad Diaria",
        text: "Fondos de inversión dinámicos con liquidez inmediata para mantener tu capital siempre en movimiento.",
      },
      {
        title: "Estrategias de Alta Liquidez",
        text: "Fondos exentos de impuestos, ideales para proteger tu dinero con acceso a tus recursos en 72 horas.",
      },
    ],
  },
  {
    plazo: "Mediano plazo",
    items: [
      {
        title: "Rendimiento Constante",
        text: "Pagarés anuales con la flexibilidad de recibir tus intereses de manera mensual o acumulados al vencimiento del plazo.",
      },
    ],
  },
  {
    plazo: "Largo plazo",
    items: [
      {
        title: "Garantía Multianual",
        text: "Pagarés a largo plazo con tasa de interés fija asegurada durante todo el periodo contratado.",
      },
      {
        title: "Crecimiento Optimizado",
        text: "Fondos de inversión en renta variable orientados a maximizar tus ganancias con el tiempo.",
      },
    ],
  },
];

const RETIRO = [
  "Diagnóstico de pensión personalizado",
  "Modalidad 40",
  "Optimización de semanas cotizadas",
  "Acompañamiento de gestión para trámites",
];

function ServiceButton({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      href="#agenda"
      className={`mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
        variant === "primary"
          ? "bg-aci-navy text-white shadow-sm hover:bg-aci-navy-dark hover:shadow-md"
          : "border-2 border-aci-navy text-aci-navy hover:bg-aci-navy hover:text-white"
      }`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}

function CardShell({
  accent,
  icon,
  title,
  description,
  children,
  button,
}: {
  accent: string;
  icon: string;
  title: string;
  description: string;
  children: React.ReactNode;
  button: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col rounded-3xl border border-black/5 bg-white p-7 shadow-[0_20px_45px_-30px_rgba(17,17,17,0.35)] transition-all hover:-translate-y-1 hover:shadow-[0_25px_50px_-25px_rgba(17,17,17,0.3)] sm:p-8 border-t-4 ${accent}`}
    >
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-aci-offwhite text-2xl">
          {icon}
        </span>
        <h3 className="text-xl font-bold text-aci-ink">{title}</h3>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-aci-ink/65">
        {description}
      </p>
      <div className="mt-5 flex-1">{children}</div>
      {button}
    </div>
  );
}

export default function Servicios() {
  return (
    <section id="servicios" className="bg-aci-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-aci-red">
            Lo que hacemos
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-aci-ink sm:text-4xl">
            Nuestros servicios
          </h2>
          <p className="mt-4 text-base text-aci-ink/65 sm:text-lg">
            Soluciones financieras y patrimoniales diseñadas para cada etapa
            de tu vida.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-2">
          <CardShell
            accent="border-t-aci-navy"
            icon="🛡️"
            title="Seguros"
            description="Diseñamos estrategias de protección para personas, familias y empresas mediante coberturas adaptadas a cada necesidad."
            button={<ServiceButton>Asegura tu patrimonio hoy</ServiceButton>}
          >
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-aci-ink/75">
              {SEGUROS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-aci-navy" />
                  {item}
                </li>
              ))}
            </ul>
          </CardShell>

          <CardShell
            accent="border-t-aci-gold"
            icon="💰"
            title="Planes de ahorro"
            description="Creamos estrategias de retiro y de ahorro personalizadas que te ayudan a alcanzar tus metas personales y familiares."
            button={
              <ServiceButton variant="secondary">
                Cotiza un Plan de Ahorro a tu medida
              </ServiceButton>
            }
          >
            <ul className="space-y-4 text-sm text-aci-ink/75">
              {AHORRO.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold text-aci-ink">{item.title}</p>
                  <p className="mt-0.5 leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ul>
          </CardShell>

          <CardShell
            accent="border-t-aci-red"
            icon="📈"
            title="Inversiones"
            description="Diseñamos portafolios de inversión enfocados en el crecimiento y protección de tu patrimonio."
            button={<ServiceButton>Diseñar mi portafolio</ServiceButton>}
          >
            <div className="space-y-4">
              {INVERSIONES.map((group) => (
                <div key={group.plazo}>
                  <p className="text-xs font-bold uppercase tracking-wide text-aci-navy">
                    {group.plazo}
                  </p>
                  <ul className="mt-2 space-y-2.5 text-sm text-aci-ink/75">
                    {group.items.map((item) => (
                      <li key={item.title}>
                        <span className="font-semibold text-aci-ink">
                          {item.title}:
                        </span>{" "}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardShell>

          <CardShell
            accent="border-t-aci-navy"
            icon="🧓"
            title="Asesoría para el retiro"
            description="Te ayudamos a obtener la mejor pensión posible mediante una estrategia personalizada."
            button={
              <ServiceButton variant="secondary">
                Quiero maximizar mi pensión
              </ServiceButton>
            }
          >
            <ul className="space-y-2.5 text-sm text-aci-ink/75">
              {RETIRO.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-aci-red" />
                  {item}
                </li>
              ))}
            </ul>
          </CardShell>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-7 sm:grid-cols-2">
          <CardShell
            accent="border-t-aci-gold"
            icon="🚗"
            title="Gestoría Vehicular"
            description="Te acompañamos en trámites vehiculares para que puedas resolver procesos administrativos de forma más clara, rápida y segura."
            button={<ServiceButton>Solicitar gestoría</ServiceButton>}
          >
            <span className="sr-only">Gestoría vehicular</span>
          </CardShell>

          <CardShell
            accent="border-t-aci-red"
            icon="📊"
            title="Contabilidad"
            description="Brindamos orientación contable para personas y negocios que buscan orden, cumplimiento y claridad en sus obligaciones."
            button={
              <ServiceButton variant="secondary">
                Solicitar asesoría contable
              </ServiceButton>
            }
          >
            <span className="sr-only">Contabilidad</span>
          </CardShell>
        </div>
      </div>
    </section>
  );
}
