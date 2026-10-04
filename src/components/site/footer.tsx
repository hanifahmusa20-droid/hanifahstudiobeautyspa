"use client";

import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Music2,
  ArrowRight,
} from "lucide-react";
import { BRAND, NAV_LINKS, SERVICES } from "@/lib/site-data";
import { A } from "@/components/site/a";

export function Footer() {
  return (
    <footer className="mt-auto bg-espresso text-cream/85">
      {/* Newsletter strip */}
      <div className="border-b border-cream/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-cream">
                Lovely things, once a month
              </h3>
              <p className="mt-2 text-sm text-cream/70 max-w-md">
                Seasonal offers, skincare notes and first look at new services.
                No noise, we promise.
              </p>
            </div>
            <form
              className="flex w-full max-w-md"
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.querySelector("input");
                if (input) input.value = "";
                alert("Thank you, you are on the list.");
              }}
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                aria-label="Email address"
                className="h-12 flex-1 bg-cream/10 border border-cream/20 px-4 text-sm text-cream placeholder:text-cream/50 outline-none focus:border-caramel"
              />
              <button
                type="submit"
                className="h-12 shrink-0 bg-caramel px-6 text-[12px] uppercase tracking-[0.14em] text-espresso font-medium transition-colors hover:bg-cream"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <A href="#/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Amara Beauty and Spa logo"
                width={48}
                height={48}
                className="h-12 w-12 object-cover rounded-full ring-1 ring-cream/20"
              />
              <span className="leading-tight">
                <span className="block font-display text-2xl font-semibold text-cream">
                  Amara
                </span>
                <span className="block text-[10px] uppercase tracking-brand text-cream/60">
                  Beauty &amp; Spa
                </span>
              </span>
            </A>
            <p className="mt-5 text-sm leading-relaxed text-cream/70">
              A calm corner of Lekki where hair, skin and nails are looked
              after slowly and with real care. Come in with a plan, or come in
              and let us make one with you.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center border border-cream/20 transition-colors hover:bg-caramel hover:border-caramel hover:text-espresso"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={BRAND.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center border border-cream/20 transition-colors hover:bg-caramel hover:border-caramel hover:text-espresso"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={BRAND.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="inline-flex h-9 w-9 items-center justify-center border border-cream/20 transition-colors hover:bg-caramel hover:border-caramel hover:text-espresso"
              >
                <Music2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[12px] uppercase tracking-brand text-caramel">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <A
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-cream/75 transition-colors hover:text-caramel"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-caramel/60 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    {link.label}
                  </A>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[12px] uppercase tracking-brand text-caramel">
              What We Do
            </h4>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <A
                    href="#/services"
                    className="group inline-flex items-center gap-2 text-sm text-cream/75 transition-colors hover:text-caramel"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-caramel/60 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    {service.name}
                  </A>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] uppercase tracking-brand text-caramel">
              Visit Us
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-cream/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-caramel" aria-hidden />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-caramel" aria-hidden />
                <a href={BRAND.phoneHref} className="transition-colors hover:text-caramel">
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-caramel" aria-hidden />
                <a href={BRAND.emailHref} className="transition-colors hover:text-caramel">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-caramel" aria-hidden />
                <span>
                  {BRAND.hoursWeek}
                  <br />
                  {BRAND.hoursSunday}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-[13px] text-cream/60 text-center">
            <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
            <span className="hidden sm:inline text-cream/30">·</span>
            <a
              href="https://preview-chat-8dbaa95e-ab4d-48e2-9030-1e7c59b14b99.space-z.ai/website-offer"
              target="_blank"
              rel="noreferrer"
              className="text-cream/60 transition-colors hover:text-caramel"
            >
              Designed By hanifah Studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
