import Image from "next/image";
import {
  IconFacebook,
  IconInstagram,
  IconMail,
  IconMapPin,
  IconPhone,
  IconTikTok,
} from "./Icons";

const QUICK_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#aliados", label: "Aliados" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#agenda", label: "Agenda" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#unete", label: "Únete" },
];

export default function Footer() {
  return (
    <footer className="bg-aci-ink text-white/80">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo-aci-blanco.png"
              alt="ACI Consultoría"
              width={150}
              height={56}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Seguros, Inversiones y Ahorro para proteger tu presente y
              construir tu futuro.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/consultoriaaci"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-aci-gold hover:text-aci-ink"
              >
                <IconFacebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/aciconsultoria/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-aci-gold hover:text-aci-ink"
              >
                <IconInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@aci.consultoria?_r=1&_t=ZS-97rzqgGdCir"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-aci-gold hover:text-aci-ink"
              >
                <IconTikTok className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Enlaces rápidos
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 transition-colors hover:text-aci-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex gap-2.5">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-aci-gold" />
                <span>
                  Plaza Cascada Local C-15 Planta Alta, Av. Plan de Ayala
                  1759, Jacarandas, 62420, Cuernavaca, Morelos
                </span>
              </li>
              <li className="flex gap-2.5">
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-aci-gold" />
                <a href="tel:+527775163068" className="hover:text-aci-gold">
                  777 516 3068
                </a>
              </li>
              <li className="flex gap-2.5">
                <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-aci-gold" />
                <span>contacto@aciconsultoria.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Horario de atención
            </h3>
            <p className="mt-4 text-sm text-white/60">
              Lunes a viernes de 9:00 a 18:00
              <br />
              Sábado de 10:00 a 15:00
            </p>
            <a
              href="#agenda"
              className="mt-5 inline-block rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-aci-gold hover:text-aci-gold"
            >
              Agenda una cita
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © 2026 ACI Consultoría. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
