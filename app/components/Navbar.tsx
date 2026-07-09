"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IconClose, IconMenu } from "./Icons";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#aliados", label: "Aliados" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#agenda", label: "Agenda" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#unete", label: "Únete" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-black/5 bg-white/95 shadow-[0_2px_20px_-8px_rgba(17,17,17,0.15)] backdrop-blur"
          : "border-transparent bg-white/80 backdrop-blur"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/logo-aci-color.png"
            alt="ACI Consultoría"
            width={140}
            height={48}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-aci-ink/80 transition-colors hover:text-aci-navy"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#agenda"
          className="hidden rounded-full bg-aci-navy px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-aci-navy-dark hover:shadow-md lg:inline-block"
        >
          Agenda una cita
        </a>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-aci-navy transition-colors hover:bg-aci-offwhite lg:hidden"
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 border-t border-black/5 bg-white px-5 pb-6 pt-2 sm:px-8">
          <ul className="flex flex-col divide-y divide-black/5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-aci-ink/85 transition-colors hover:text-aci-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#agenda"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-aci-navy px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-aci-navy-dark"
          >
            Agenda una cita
          </a>
        </div>
      </div>
    </header>
  );
}
