"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { SERVICES, STEPS } from "@/lib/site-data";
import { SectionHeading, PageHero, CtaBanner } from "@/components/site/shared";
import { cn } from "@/lib/utils";
import { A } from "@/components/site/a";

export function ServicesPage() {
  return (
    <>
      <PageHero
        image="/images/svc_facial_warm.jpg"
        eyebrow="Our Services"
        title="Six crafts, done properly"
        subtitle="Hair, nails, skin, body, makeup and brows. Each one a craft we have spent years getting right."
      />

      {/* Service detail blocks */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICES.map((service, i) => (
            <article
              key={service.slug}
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {/* Image */}
              <div
                className={cn(
                  "relative",
                  i % 2 === 1 && "lg:order-2"
                )}
              >
                <div className="relative aspect-[4/3.2] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <span
                  className={cn(
                    "absolute -bottom-4 w-24 h-24 border-b border-r border-caramel/50",
                    i % 2 === 1 ? "-left-4 border-l border-t border-b-0 border-r-0" : "-right-4"
                  )}
                  aria-hidden
                />
                <span className="absolute -top-5 left-6 bg-espresso px-4 py-2 font-display text-lg text-cream">
                  0{i + 1}
                </span>
              </div>

              {/* Copy */}
              <div className={cn(i % 2 === 1 && "lg:order-1")}>
                <p className="text-[12px] uppercase tracking-brand text-caramel">
                  From {service.priceFrom}
                </p>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl text-espresso text-balance">
                  {service.name}
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-cocoa/90">
                  {service.detail}
                </p>
                <ul className="mt-7 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-cocoa/90">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blush/70">
                        <Check className="h-3 w-3 text-caramel-deep" aria-hidden />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <A
                  href="#/contact"
                  className="mt-8 inline-flex items-center justify-center bg-espresso px-8 py-4 text-[13px] uppercase tracking-[0.14em] text-cream transition-colors hover:bg-caramel-deep"
                >
                  Book This Service
                </A>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream-deep/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="Booking with us is simple"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="relative bg-cream ring-1 ring-blush p-7"
              >
                <span className="font-display text-5xl text-blush absolute top-5 right-6" aria-hidden>
                  {i + 1}
                </span>
                <h3 className="font-display text-[22px] text-espresso">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cocoa/85">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
