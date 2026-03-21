"use client";
// Triggering redeploy to apply new Cloudflare environment variables

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, Facebook, Send, MapPin } from "lucide-react";
import { LineIcon } from "@/components/line-icon";
import { useLanguage } from "@/lib/i18n-context";
import { dictionaries } from "@/lib/dictionaries";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();
  const t = dictionaries[language].contact;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: t.form.email,
      value: "contact@phichaya.com",
      href: "mailto:contact@phichaya.com",
    },
    {
      icon: Phone,
      label: t.form.phone,
      value: "082-646-5526",
      href: "tel:0826465526",
    },
    {
      icon: LineIcon,
      label: "Line Official",
      value: "@106vnkyh",
      href: "https://line.me/R/ti/p/@106vnkyh",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Phichaya HR Solutions",
      href: "https://www.facebook.com/share/174YVEitJY/",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a FormData object from the form
    const form = e.currentTarget;
    const formData = new FormData(form);

    // We'll use the id of inputs as keys
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service") || "Not Specified",
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        // Show specific error if available, otherwise generic
        const errorMessage = errorData.error || "Failed to send message";
        alert(`Error: ${errorMessage}`);
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      alert(`Something went wrong: ${error.message || "Please try again later"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) return null;

  return (
    <section id="contact" className="section-gray py-28 relative overflow-hidden">
      {/* Decorative blobs - Explicitly pointer-events-none */}
      <div className="absolute top-0 left-0 w-80 h-80 gradient-blob gradient-blob-blue animate-pulse-soft pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 gradient-blob gradient-blob-purple animate-pulse-soft pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
            {t.label}
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold text-gray-900 md:text-4xl heading-accent">
            {t.title}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-gray-500 leading-relaxed">
            {t.desc}
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-4 relative z-20">
            <h3 className="text-lg font-semibold text-gray-900">
              {t.channels}
            </h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              {t.channelsDesc}
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl card-gradient-border bg-white p-4 transition-all hover:translate-x-1"
                >
                  <div className="icon-glow flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-all group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      {info.label}
                    </div>
                    <div className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-5 relative z-30">
            <div className="rounded-2xl card-gradient-border bg-white p-8 relative shadow-sm hover:shadow-md transition-shadow">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/25">
                    <Send className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {t.form.success}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {t.form.successDesc}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-shimmer mt-6 rounded-lg bg-gradient-to-r from-primary to-secondary px-6 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25"
                  >
                    {t.form.resend}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        {t.form.name}
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        required
                        placeholder={t.form.namePlaceholder}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-sm font-medium text-gray-700">
                        {t.form.company}
                      </label>
                      <input
                        name="company"
                        id="company"
                        type="text"
                        placeholder={t.form.companyPlaceholder}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        {t.form.email}
                      </label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        required
                        placeholder="email@company.com"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        {t.form.phone}
                      </label>
                      <input
                        name="phone"
                        id="phone"
                        type="tel"
                        placeholder="08X-XXX-XXXX"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      {t.form.message}
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      placeholder={t.form.messagePlaceholder}
                      className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        {t.form.sending}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        {t.form.submit}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bot Logo / Assistant Image */}
          <div className="lg:col-span-3 flex justify-center items-center lg:pt-12">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <Image
                src="/botlogo.png"
                alt="Assistant Bot"
                width={240}
                height={240}
                className="relative z-10 w-full max-w-[224px] h-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
