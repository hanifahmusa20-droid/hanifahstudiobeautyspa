"use client";

import Image from "next/image";
import { ArrowRight, Star, Sparkles, Leaf, HeartHandshake, Clock3 } from "lucide-react";
import {
  SERVICES,
  STATS,
  WHY_US,
  TEAM,
  TESTIMONIALS,
  PRICES,
  BRAND,
} from "@/lib/site-data";
import { SectionHeading, CtaBanner } from "@/components/site/shared";
import { A } from "@/components/site/a";

const WHY_ICONS = [Sparkles, Leaf, Clock3, HeartHandshake];

export function HomePage() {
  return (
    <>
      {/* ───────────────────── Hero ───────────────────── */}
      <section className="relative">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-10 py-14 lg:py-20">
            {/* Copy */}
            <div className="animate-fade-rise order-2 lg:order-1">
              <p className="text-[12px] uppercase tracking-brand text-caramel">
                Beauty salon and spa · Lekki Phase 1
              </p>
              <h1 className="mt-4 font-display text-[42px] leading-[1.08] sm:text-6xl lg:text-[68px] text-espresso text-balance">
                Where beauty meets calm, and time slows down
              </h1>
              <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-cocoa/90">
                Amara is a quiet salon and spa in the heart of Lekki. We do
                hair, skin, nails and body work the unhurried way, with clean
                tools, gentle products and stylists who actually listen. Come
                in for an hour. Leave feeling new.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <A
                  href="#/contact"
                  className="inline-flex items-center justify-center bg-espresso px-8 py-4 text-[13px] uppercase tracking-[0.14em] text-cream transition-colors hover:bg-caramel-deep"
                >
                  Book an Appointment
                </A>
                <A
                  href="#/services"
                  className="inline-flex items-center justify-center gap-2 border border-espresso/25 px-8 py-4 text-[13px] uppercase tracking-[0.14em] text-espresso transition-colors hover:border-caramel hover:text-caramel"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </A>
              </div>
              {/* Rating strip */}
              <div className="mt-10 flex items-center gap-4">
                <div className="flex" aria-label="Rated 4.9 out of 5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-caramel text-caramel" aria-hidden />
                  ))}
                </div>
                <p className="text-sm text-taupe">
                  <span className="font-medium text-espresso">4.9 rating</span>{" "}
                  from over 4,800 lovely clients
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[4/3.4] lg:aspect-[4/4.1] overflow-hidden">
                <Image
                  src="/images/hero_woman.png"
                  alt="A relaxed guest in a silk robe at Amara Beauty and Spa"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover animate-slow-zoom"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 left-4 sm:left-8 bg-cream shadow-[0_20px_50px_rgba(50,37,27,0.18)] px-6 py-5 ring-1 ring-blush">
                <p className="font-display text-4xl text-caramel">12+</p>
                <p className="mt-1 text-[12px] uppercase tracking-[0.12em] text-taupe">
                  Years of gentle care
                </p>
              </div>
              {/* Corner offset frame */}
              <div className="absolute -bottom-3 -right-3 h-full w-full border border-caramel/40 -z-10" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── Stats band ─────────────── */}
      <section className="bg-espresso text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-cream/10">
            {STATS.map((stat) => (
              <div key={stat.label} className="py-9 px-4 text-center">
                <p className="font-display text-4xl lg:text-5xl text-caramel">
                  {stat.value}
                </p>
                <p className="mt-2 text-[12px] uppercase tracking-[0.12em] text-cream/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Welcome / About teaser ─────────────── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Images collage */}
            <div className="relative">
              <div className="relative aspect-[4/3] w-[86%] overflow-hidden">
                <Image
                  src="/images/about_interior.png"
                  alt="Inside the Amara salon with arched gold mirrors"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-[-40px] right-0 w-[52%] aspect-[3/3.6] overflow-hidden border-8 border-cream shadow-[0_20px_50px_rgba(50,37,27,0.15)]">
                <Image
                  src="/images/svc_hair.jpg"
                  alt="A stylist finishing a silk press"
                  fill
                  sizes="(max-width: 1024px) 55vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 h-24 w-24 border-t border-l border-caramel/50" aria-hidden />
            </div>

            {/* Copy */}
            <div className="lg:pl-4">
              <SectionHeading
                align="left"
                eyebrow="Welcome to Amara"
                title="A salon that feels like a deep breath"
              />
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-cocoa/90">
                <p>
                  We opened our doors in 2013 with one chair, one kettle for
                  hair steam and one belief, that getting ready should feel as
                  good as looking good. Twelve years later the salon has grown,
                  but that belief has not moved an inch.
                </p>
                <p>
                  Every appointment starts with a real conversation. We ask
                  about your routine, your plans and what you actually want
                  before we begin. Then we take our time. No rushed jobs, no
                  surprises at the till, no products you did not ask for.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-5">
                <p className="font-display italic text-3xl text-caramel">
                  Amara Eze
                </p>
                <span className="h-px w-12 bg-caramel/50" aria-hidden />
                <p className="text-[12px] uppercase tracking-[0.12em] text-taupe">
                  Founder
                </p>
              </div>
              <A
                href="#/about"
                className="mt-8 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.14em] text-espresso border-b border-caramel pb-1 transition-colors hover:text-caramel"
              >
                Read Our Story
                <ArrowRight className="h-4 w-4" aria-hidden />
              </A>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── Services ─────────────── */}
      <section className="bg-cream-deep/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Care for every part of you"
          />
          <p className="mx-auto mt-5 max-w-2xl text-center text-[15px] leading-relaxed text-cocoa/85">
            Six things we do properly, under one calm roof. Every service
            begins with a consultation, and nothing starts until you are
            comfortable.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <A
                key={service.slug}
                href="#/services"
                className="group block bg-cream ring-1 ring-blush transition-all duration-300 hover:shadow-[0_18px_45px_rgba(50,37,27,0.12)] hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-[23px] text-espresso leading-snug">
                      {service.name}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-cocoa/85">
                    {service.blurb}
                  </p>
                  <p className="mt-5 flex items-center justify-between border-t border-blush pt-4">
                    <span className="text-[12px] uppercase tracking-[0.12em] text-taupe">
                      From {service.priceFrom}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.12em] text-caramel">
                      View
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </p>
                </div>
              </A>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Why choose us ─────────────── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                align="left"
                eyebrow="Why Amara"
                title="Small habits that make a big difference"
              />
              <p className="mt-6 text-[15px] leading-relaxed text-cocoa/90">
                Anyone can promise luxury. We would rather earn your trust
                with the boring things, done properly, every single visit.
                Here is what that looks like in practice.
              </p>
              <A
                href="#/contact"
                className="mt-8 inline-flex items-center justify-center bg-espresso px-8 py-4 text-[13px] uppercase tracking-[0.14em] text-cream transition-colors hover:bg-caramel-deep"
              >
                Experience It Yourself
              </A>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {WHY_US.map((item, i) => {
                const Icon = WHY_ICONS[i % WHY_ICONS.length];
                return (
                  <div
                    key={item.title}
                    className="bg-cream ring-1 ring-blush p-7 transition-shadow hover:shadow-[0_14px_40px_rgba(50,37,27,0.1)]"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center bg-blush/70 text-caramel-deep">
                      <Icon className="h-5.5 w-5.5" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-display text-[22px] text-espresso">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-cocoa/85">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── Price list preview ─────────────── */}
      <section className="bg-espresso py-20 lg:py-28 text-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            light
            eyebrow="The Price List"
            title="Honest prices, no surprises"
          />
          <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-cream/75">
            A taste of our most booked treatments. The full list, including
            bridal packages and home service, lives on the pricing page.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-x-14 gap-y-12">
            {PRICES.slice(0, 4).map((group) => (
              <div key={group.title}>
                <h3 className="font-display text-2xl text-caramel">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {group.items.slice(0, 4).map((item) => (
                    <li key={item.name} className="flex items-baseline text-sm">
                      <span className="text-cream/85">{item.name}</span>
                      <span className="price-leader" aria-hidden />
                      <span className="text-cream font-medium whitespace-nowrap">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <A
              href="#/pricing"
              className="inline-flex items-center gap-2 border border-caramel px-8 py-4 text-[13px] uppercase tracking-[0.14em] text-caramel transition-colors hover:bg-caramel hover:text-espresso"
            >
              See Full Price List
              <ArrowRight className="h-4 w-4" aria-hidden />
            </A>
          </div>
        </div>
      </section>

      {/* ─────────────── Team ─────────────── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The People"
            title="Hands you will be glad to meet"
          />
          <p className="mx-auto mt-5 max-w-2xl text-center text-[15px] leading-relaxed text-cocoa/85">
            Trained, certified and genuinely kind. Between them, our team
            holds more than forty years of experience.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <div key={member.name} className="group">
                <div className="relative aspect-[3/3.8] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent p-5 pt-14">
                    <p className="font-display text-xl text-cream">
                      {member.name}
                    </p>
                    <p className="mt-0.5 text-[11.5px] uppercase tracking-[0.12em] text-caramel">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Testimonials ─────────────── */}
      <section className="bg-cream-deep/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Kind Words"
            title="What our clients tell their friends"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col bg-cream ring-1 ring-blush p-7"
              >
                <div className="flex gap-0.5" aria-label="Five star review">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-caramel text-caramel" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-cocoa/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-blush pt-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blush font-display text-lg text-caramel-deep">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-espresso">
                      {t.name}
                    </span>
                    <span className="block text-[12px] text-taupe">{t.area}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Gallery strip ─────────────── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Work"
            title="A peek inside the salon"
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {[
              "/images/gal_updo.jpg",
              "/images/svc_nails.jpg",
              "/images/svc_makeup.jpg",
              "/images/svc_massage.png",
              "/images/svc_facial_warm.jpg",
              "/images/gal_hands.png",
              "/images/svc_brows.jpg",
              "/images/about_interior.png",
            ].map((src, i) => (
              <A
                key={`${src}-${i}`}
                href="#/gallery"
                className="group relative aspect-square overflow-hidden"
                aria-label="Open gallery"
              >
                <Image
                  src={src}
                  alt="Amara salon work"
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <span className="absolute inset-0 bg-espresso/0 transition-colors duration-300 group-hover:bg-espresso/25" aria-hidden />
              </A>
            ))}
          </div>
          <div className="mt-10 text-center">
            <A
              href="#/gallery"
              className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.14em] text-espresso border-b border-caramel pb-1 transition-colors hover:text-caramel"
            >
              Browse the Full Gallery
              <ArrowRight className="h-4 w-4" aria-hidden />
            </A>
          </div>
        </div>
      </section>

      {/* ─────────────── Booking CTA ─────────────── */}
      <CtaBanner />

      {/* ─────────────── Visit info strip ─────────────── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="ring-1 ring-blush bg-cream px-6 py-8">
              <p className="text-[12px] uppercase tracking-brand text-caramel">
                Find Us
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cocoa/90">
                {BRAND.address}
              </p>
            </div>
            <div className="ring-1 ring-blush bg-cream px-6 py-8">
              <p className="text-[12px] uppercase tracking-brand text-caramel">
                Open Hours
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cocoa/90">
                {BRAND.hoursWeek}
                <br />
                {BRAND.hoursSunday}
              </p>
            </div>
            <div className="ring-1 ring-blush bg-cream px-6 py-8">
              <p className="text-[12px] uppercase tracking-brand text-caramel">
                Talk to Us
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cocoa/90">
                <a href={BRAND.phoneHref} className="hover:text-caramel">{BRAND.phone}</a>
                <br />
                <a href={BRAND.emailHref} className="hover:text-caramel">{BRAND.email}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
