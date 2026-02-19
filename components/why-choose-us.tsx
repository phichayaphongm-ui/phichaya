"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Award, Cpu, Layers, PiggyBank, Building, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";
import { dictionaries } from "@/lib/dictionaries";

const reasons = [
  { icon: Award, id: "experience" },
  { icon: Cpu, id: "digital" },
  { icon: Layers, id: "solution" },
  { icon: PiggyBank, id: "cost" },
  { icon: Building, id: "size" },
];

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const t = dictionaries[language].whyChooseUs;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-gray py-28 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-80 h-80 gradient-blob gradient-blob-blue animate-pulse-soft" />
      <div className="absolute bottom-20 left-0 w-64 h-64 gradient-blob gradient-blob-purple animate-pulse-soft" style={{ animationDelay: "2s" }} />

      <div className="mx-auto max-w-7xl px-6 relative z-10" ref={ref}>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Text + Bullet Points */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
              {t.label}
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold text-gray-900 md:text-4xl heading-accent">
              {t.title}
            </h2>
            <p className="mt-8 max-w-lg text-pretty text-gray-500 leading-relaxed">
              {t.desc}
            </p>

            {/* Compact bullet points */}
            <div className="mt-8 space-y-3">
              {reasons.map((reason) => {
                // @ts-ignore
                const item = t.items[reason.id];
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-gray-900">{item.title}</span>
                      <span className="text-sm text-gray-500"> — {item.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Image */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              transitionDelay: "200ms",
            }}
          >
            <Image
              src="/why-choose.png"
              alt="Why Choose Phichaya HR Solutions"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
