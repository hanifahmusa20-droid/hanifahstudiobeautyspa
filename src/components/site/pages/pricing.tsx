"use client";

import Image from "next/image";
import { Sparkles, Gift, Car } from "lucide-react";
import { PRICES } from "@/lib/site-data";
import { SectionHeading, PageHero, CtaBanner } from "@/components/site/shared";
import { A } from "@/components/site/a";

const EXTRAS = [
  {
    icon: Sparkles,
    title: "The Amara Club",
    text: "Our membership gives you one treatment a month, ten percent off everything else and first pick of December slots. ₦60,000 monthly, cancel any month you need to.",
  },
  {
    icon: Gift,
    title: "Gift cards",
    text: "Load any amount from ₦15,000 onto a physical card or send it by email. Valid for a full year, and the front desk will help them choose if they get stuck.",
  },
  {
    icon: Car,
    title: "Home and venue service",
    text: "Makeup and bridal travel to your location anywhere in Lagos. A flat callout fee of ₦20,000 applies, and it is waived for wedding parties of six or more.",
  },
];

export function PricingPage() {
  return (
    <>
      <PageHero
        image="/images/gal_products.jpg"
        eyebrow="The Price List"
        title="Clear prices, set in advance"
        subtitle="What you see is what you pay. Your consultation is always free, and we will never add a service you did not agree to."
      />

      {/* Full price list */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-x-14 gap-y-16 md:grid-cols-2">
            {PRICES.map((group) => (
              <div key={group.title} className="bg-cream ring-1 ring-blush p-8 sm:p-10">
                <h2 className="font-display text-3xl text-espresso">
                  {group.title}
                </h2>
                <p className="mt-2 text-sm text-taupe">{group.note}</p>
                <ul className="mt-7 space-y-4">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-baseline text-[15px]">
                      <span className="text-cocoa/90">{item.name}</span>
                      <span className="price-leader" aria-hidden />
                      <span className="font-medium text-espresso whitespace-nowrap">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-sm leading-relaxed text-taupe">
            Prices were last updated this quarter and already include VAT.
            Bridal bookings require a 50 percent deposit to hold the date,
            which our front desk will confirm with a receipt.
          </p>
        </div>
      </section>

      {/* Extras */}
      <section className="bg-cream-deep/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Good to Know"
            title="Little extras our clients love"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {EXTRAS.map((extra) => (
              <div
                key={extra.title}
                className="bg-cream ring-1 ring-blush p-8 transition-shadow hover:shadow-[0_14px_40px_rgba(50,37,27,0.1)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center bg-blush/70 text-caramel-deep">
                  <extra.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-[22px] text-espresso">
                  {extra.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cocoa/85">
                  {extra.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <A
              href="#/contact"
              className="inline-flex items-center justify-center bg-espresso px-8 py-4 text-[13px] uppercase tracking-[0.14em] text-cream transition-colors hover:bg-caramel-deep"
            >
              Book With Any of These
            </A>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
