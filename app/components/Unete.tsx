"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "5539869683";

export default function Unete() {
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") || "").trim();
    const telefono = String(data.get("telefono") || "").trim();
    const correo = String(data.get("correo") || "").trim();
    const cv = data.get("cv") as File | null;

    if (!nombre || !telefono) {
      setError("Por favor completa tu nombre y teléfono para continuar.");
      setConfirmed(false);
      return;
    }

    setError("");
    setConfirmed(true);

    const texto = [
      "Hola, quiero postularme para formar parte del equipo de ACI Consultoría.",
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      correo ? `Correo: ${correo}` : null,
      cv && cv.name
        ? `Adjuntaré mi CV (${cv.name}) directamente por este medio.`
        : "Enviaré mi CV directamente por este medio.",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/52${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  }

  return (
    <section id="unete" className="bg-aci-ink py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-aci-gold">
          Bolsa de trabajo
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Únete a nuestro equipo
        </h2>
        <p className="mt-4 text-base text-white/60 sm:text-lg">
          Si quieres formar parte de ACI Consultoría, compártenos tus datos y
          nos pondremos en contacto contigo.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm sm:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm font-medium text-white/80">
              Nombre
              <input
                type="text"
                name="nombre"
                required
                placeholder="Tu nombre completo"
                className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-aci-gold"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-medium text-white/80">
              Teléfono
              <input
                type="tel"
                name="telefono"
                required
                placeholder="10 dígitos"
                className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-aci-gold"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-medium text-white/80">
              Correo
              <input
                type="email"
                name="correo"
                placeholder="tucorreo@ejemplo.com"
                className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-aci-gold"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-medium text-white/80">
              CV (PDF)
              <input
                type="file"
                name="cv"
                accept="application/pdf"
                className="rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white/70 outline-none transition-colors file:mr-3 file:rounded-full file:border-0 file:bg-aci-gold file:px-4 file:py-1.5 file:text-xs file:font-semibold file:text-aci-ink focus:border-aci-gold"
              />
            </label>
          </div>

          {error && (
            <p className="mt-4 text-sm font-medium text-aci-gold">{error}</p>
          )}
          {confirmed && !error && (
            <p className="mt-4 text-sm font-medium text-white">
              Solicitud preparada. Para enviar tu CV, contáctanos por
              WhatsApp o correo, ya que el navegador no puede adjuntar
              archivos automáticamente por WhatsApp.
            </p>
          )}

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-aci-gold px-7 py-3.5 text-sm font-semibold text-aci-ink shadow-sm transition-all hover:-translate-y-0.5 hover:bg-aci-gold-dark hover:shadow-md"
          >
            Enviar solicitud
          </button>
        </form>
      </div>
    </section>
  );
}
