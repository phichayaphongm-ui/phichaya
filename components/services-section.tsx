"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Monitor,
  Users,
  Search,
  Building2,
  Smartphone,
  FileText,
  Globe,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";
import { dictionaries } from "@/lib/dictionaries";

const services = [
  {
    icon: Monitor,
    id: "Digital HR Transformation",
    video: "/videos/digital-hr-transformation.mp4",
    thumbnail: "/images/thumbnails/digital-hr-transformation.svg",
  },
  {
    icon: Users,
    id: "HR Consulting",
    video: "/videos/hr-consulting.mp4",
    thumbnail: "/images/thumbnails/hr-consulting.svg",
  },
  {
    icon: Search,
    id: "Recruitment Services",
    video: "/videos/recruitment-services.mp4",
    thumbnail: "/images/thumbnails/recruitment-services.svg",
  },
  {
    icon: Building2,
    id: "Organization Development",
    video: "/videos/organization-development.mp4",
    thumbnail: "/images/thumbnails/organization-development.svg",
  },
  {
    icon: Smartphone,
    id: "HR Systems & Apps",
    video: "/videos/hr-systems-apps.mp4",
    thumbnail: "/images/thumbnails/hr-systems-apps.svg",
  },
  {
    icon: FileText,
    id: "Resume/CV Writing",
    video: "/videos/resume-cv-writing.mp4",
    thumbnail: "/images/thumbnails/resume-cv-writing.svg",
  },
  {
    icon: Globe,
    id: "Website Development",
    video: "/videos/website-development.mp4",
    thumbnail: "/images/thumbnails/website-development.svg",
  },
  {
    icon: GraduationCap,
    id: "Training Solutions",
    video: "/videos/training-solutions.mp4",
    thumbnail: "/images/thumbnails/training-solutions.svg",
  },
];

function AnimatedCard({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function ServicesSection() {
  const { language } = useLanguage();
  const t = dictionaries[language].services;

  const displayedServices = services;

  return (
    <section id="services" className="section-gray py-28 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 gradient-blob gradient-blob-blue animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 w-80 h-80 gradient-blob gradient-blob-cyan animate-pulse-soft" style={{ animationDelay: "2s" }} />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
            {t.label}
          </span>
          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-gray-900 md:text-5xl heading-accent">
            {t.title}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-500">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service, index) => {
            // @ts-ignore
            const item = t.items[service.id];
            return (
              <AnimatedCard key={service.id} delay={index * 80}>
                <div className="group card-gradient-border flex h-full flex-col rounded-2xl p-6 transition-all duration-400 hover:-translate-y-2 relative overflow-hidden bg-white">
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex-1">
                      <div className="icon-glow flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/15 mb-6 group-hover:scale-110 group-hover:shadow-primary/30 transition-all duration-300">
                        <service.icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Video Player */}
                    {/* @ts-ignore */}
                    {service.video && (
                      <div className="mt-6 rounded-xl overflow-hidden shadow-md ring-1 ring-gray-100 z-20 group-hover:shadow-lg transition-shadow">
                        <video
                          poster={service.thumbnail}
                          preload="metadata"
                          playsInline
                          controls
                          className="w-full h-auto"
                          title={item.title}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <source src={service.video} type="video/mp4" />
                        </video>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
