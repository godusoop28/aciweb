import {
  IconClock,
  IconFacebook,
  IconInstagram,
  IconMail,
  IconMapPin,
  IconPhone,
  IconTikTok,
  IconWhatsApp,
} from "./Icons";

const ADDRESS =
  "Plaza Cascada Local C-15 Planta Alta, Av. Plan de Ayala 1759, Jacarandas, 62420, Cuernavaca, Morelos";

const REDES = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/consultoriaaci",
    icon: IconFacebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/aciconsultoria/",
    icon: IconInstagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@aci.consultoria?_r=1&_t=ZS-97rzqgGdCir",
    icon: IconTikTok,
  },
];

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="bg-aci-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-aci-red">
            Visítanos
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-aci-ink sm:text-4xl">
            Ubicación y contacto
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
            <iframe
              title="Ubicación de ACI Consultoría"
              src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
              className="h-80 w-full border-0 sm:h-full sm:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm sm:p-8">
              <ul className="space-y-5 text-sm text-aci-ink/75">
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-aci-offwhite text-aci-navy">
                    <IconMapPin className="h-5 w-5" />
                  </span>
                  <span className="pt-2 leading-relaxed">{ADDRESS}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-aci-offwhite text-aci-navy">
                    <IconClock className="h-5 w-5" />
                  </span>
                  <span className="pt-2 leading-relaxed">
                    Lunes a viernes de 9:00 a 18:00
                    <br />
                    Sábado de 10:00 a 15:00
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-aci-offwhite text-aci-navy">
                    <IconPhone className="h-5 w-5" />
                  </span>
                  <a href="tel:+527775163068" className="pt-2 hover:text-aci-navy">
                    777 516 3068
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-aci-offwhite text-aci-navy">
                    <IconWhatsApp className="h-5 w-5" />
                  </span>
                  <a
                    href="https://wa.me/525539869683"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-2 hover:text-aci-navy"
                  >
                    55 3986 9683
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-aci-offwhite text-aci-navy">
                    <IconMail className="h-5 w-5" />
                  </span>
                  <span className="pt-2">contacto@aciconsultoria.com</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-aci-navy p-7 text-white shadow-sm sm:p-8">
              <h3 className="text-lg font-bold">Síguenos en redes</h3>
              <p className="mt-2 text-sm text-white/70">
                Contenido, consejos financieros y novedades de ACI
                Consultoría.
              </p>
              <div className="mt-5 flex gap-3">
                {REDES.map((red) => (
                  <a
                    key={red.name}
                    href={red.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={red.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-aci-gold hover:text-aci-ink"
                  >
                    <red.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
