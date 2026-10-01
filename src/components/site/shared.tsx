"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { BRAND } from "@/lib/site-data";
import { A } from "@/components/site/a";

/* Small decorative flower mark used between heading lines */
export function Flourish({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-hidden>
      <span className="h-px w-10 bg-caramel/60" />
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-caramel">
        <path
          d="M12 3c1.8 2.2 1.8 4.6 0 6.4C10.2 7.6 10.2 5.2 12 3Zm0 9.6c1.8 2.2 1.8 4.6 0 6.4-1.8-1.8-1.8-4.2 0-6.4ZM3 12c2.2-1.8 4.6-1.8 6.4 0-1.8 1.8-4.2 1.8-6.4 0Zm11.6 0c1.8-1.8 4.2-1.8 6.4 0-2.2 1.8-4.6 1.8-6.4 0Z"
          fill="currentColor"
        />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      </svg>
      <span className="h-px w-10 bg-caramel/60" />
    </span>
  );
}

/* Eyebrow + serif heading used to open every section */
export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p
        className={`text-[12px] uppercase tracking-brand ${
          light ? "text-caramel" : "text-caramel"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl sm:text-4xl lg:text-[44px] leading-tight text-balance ${
          light ? "text-cream" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      <Flourish className={align === "center" ? "mt-4 justify-center" : "mt-4"} />
    </div>
  );
}

/* Banner used at the top of inner pages */
export function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
}: {
  image: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative h-[300px] sm:h-[360px] overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-espresso/55" aria-hidden />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="text-[12px] uppercase tracking-brand text-caramel">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl text-cream text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-xl text-sm sm:text-[15px] text-cream/85 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

/* Reusable booking call to action band */
export function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/cta_spa.jpg"
        alt="Candles and orchids in the Amara spa room"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-espresso/65" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 sm:py-24 text-center">
        <p className="text-[12px] uppercase tracking-brand text-caramel">
          Ready when you are
        </p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-cream text-balance">
          Your chair is waiting at Amara
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-cream/85">
          Call us, send a message, or book online in under a minute. We will
          confirm your slot the same day and have the tea ready.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <A
            href="#/contact"
            className="inline-flex items-center justify-center bg-caramel px-8 py-4 text-[13px] uppercase tracking-[0.14em] font-medium text-espresso transition-colors hover:bg-cream"
          >
            Book an Appointment
          </A>
          <a
            href={BRAND.phoneHref}
            className="inline-flex items-center gap-2 border border-cream/40 px-8 py-4 text-[13px] uppercase tracking-[0.14em] text-cream transition-colors hover:bg-cream/10"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {BRAND.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
