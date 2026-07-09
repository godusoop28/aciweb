"use client";

import { FormEvent, useState } from "react";
import { IconCheck } from "./Icons";

const OPCIONES = [
  "PPR",
  "Inversión",
  "Seguros",
  "Ahorro",
  "Retiro",
  "Gestoría Vehicular",
  "Contabilidad",
  "Otro",
];

const BENEFICIOS = [
  "Atención personalizada",
  "Diagnóstico inicial",
  "Estrategia a la medida",
  "Seguimiento profesional",
];

const WHATSAPP_NUMBER = "5539869683";

export default function Agenda() {
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") || "").trim();
    const celular = String(data.get("celular") || "").trim();
    const correo = String(data.get("correo") || "").trim();
    const interes = String(data.get("interes") || "");
    const mensaje = String(data.get("mensaje") || "").trim();

    if (!nombre || !celular) {
      setError("Por favor completa tu nombre y celular para continuar.");
      setSent(false);
      return;
    }

    setError("");
    setSent(true);

    const texto = [
      "Hola, me gustaría agendar una cita con ACI Consultoría.",
      `Nombre: ${nombre}`,
      `Celular: ${celular}`,
      correo ? `Correo: ${correo}` : null,
      `Interés: ${interes}`,
      mensaje ? `Mensaje: ${mensaje}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/52${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  }

  return (
    <section id="agenda" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-aci-red">
            Hablemos
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-aci-ink sm:text-4xl">
            Agenda una cita
          </h2>
          <p className="mt-4 text-base text-aci-ink/65 sm:text-lg">
            Cuéntanos qué necesitas y un asesor de ACI Consultoría te
            contactará para orientarte.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-black/5 bg-aci-offwhite p-6 shadow-sm sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm font-medium text-aci-ink/80">
                Nombre
                <input
                  type="text"
                  name="nombre"
                  required
                  placeholder="Tu nombre completo"
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-aci-ink outline-none transition-colors focus:border-aci-navy"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-aci-ink/80">
                Celular
                <input
                  type="tel"
                  name="celular"
                  required
                  placeholder="10 dígitos"
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-aci-ink outline-none transition-colors focus:border-aci-navy"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-aci-ink/80">
                Correo
                <input
                  type="email"
                  name="correo"
                  placeholder="tucorreo@ejemplo.com"
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-aci-ink outline-none transition-colors focus:border-aci-navy"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-aci-ink/80">
                Me interesa
                <select
                  name="interes"
                  defaultValue="PPR"
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-aci-ink outline-none transition-colors focus:border-aci-navy"
                >
                  {OPCIONES.map((opcion) => (
                    <option key={opcion} value={opcion}>
                      {opcion}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-aci-ink/80 sm:col-span-2">
                Mensaje
                <textarea
                  name="mensaje"
                  rows={4}
                  placeholder="Detalla más información del servicio que quieres contratar"
                  className="resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-aci-ink outline-none transition-colors focus:border-aci-navy"
                />
              </label>
            </div>

            {error && (
              <p className="mt-4 text-sm font-medium text-aci-red">{error}</p>
            )}
            {sent && !error && (
              <p className="mt-4 text-sm font-medium text-aci-navy">
                Abrimos WhatsApp con tus datos. Si no se abrió, revisa que tu
                navegador permita ventanas emergentes.
              </p>
            )}

            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-aci-navy px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-aci-navy-dark hover:shadow-md"
            >
              Agendar cita
            </button>
          </form>

          <div className="rounded-3xl bg-gradient-to-br from-aci-navy to-aci-navy-dark p-8 text-white shadow-md">
            <h3 className="text-xl font-bold">Por qué agendar con ACI</h3>
            <ul className="mt-6 space-y-4">
              {BENEFICIOS.map((beneficio) => (
                <li key={beneficio} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-aci-gold text-aci-ink">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-white/90">
                    {beneficio}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="text-sm text-white/70">
                También puedes escribirnos directamente por WhatsApp al
              </p>
              <a
                href={`https://wa.me/52${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-lg font-bold text-aci-gold"
              >
                55 3986 9683
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
