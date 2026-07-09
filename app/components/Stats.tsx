"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { target: 30, prefix: "+", suffix: " años", label: "de experiencia" },
  { target: 3500, prefix: "+", suffix: "", label: "clientes protegidos" },
  { target: 598, prefix: "", suffix: "", label: "autos asegurados cada año" },
];

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = performance.now();

    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-aci-navy">
      <div ref={ref} className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} active={active} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  active,
  index,
}: {
  stat: Stat;
  active: boolean;
  index: number;
}) {
  const value = useCountUp(stat.target, active);
  const accents = ["bg-aci-gold", "bg-aci-red", "bg-white"];

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-sm">
      <span className={`h-10 w-1.5 shrink-0 rounded-full ${accents[index % accents.length]}`} />
      <div>
        <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {stat.prefix}
          {value.toLocaleString("es-MX")}
          {stat.suffix}
        </p>
        <p className="mt-1 text-sm font-medium text-white/70">{stat.label}</p>
      </div>
    </div>
  );
}
