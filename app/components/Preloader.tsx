"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => setVisible(false), 1200);
    const removeTimer = setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = "";
    }, 1550);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-aci-navy transition-opacity duration-300 ease-out ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative flex items-center justify-center">
        <span className="preloader-glow absolute h-28 w-28 rounded-full bg-aci-gold/30 blur-2xl sm:h-36 sm:w-36" />
        <Image
          src="/logo-aci-blanco.png"
          alt="ACI Consultoría"
          width={180}
          height={72}
          priority
          className="relative h-auto w-40 sm:w-48"
        />
      </div>
      <div className="mt-6 flex gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-aci-gold preloader-glow" style={{ animationDelay: "0ms" }} />
        <span className="h-1.5 w-1.5 rounded-full bg-aci-red preloader-glow" style={{ animationDelay: "150ms" }} />
        <span className="h-1.5 w-1.5 rounded-full bg-white preloader-glow" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
}
