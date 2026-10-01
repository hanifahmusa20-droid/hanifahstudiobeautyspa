"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { A } from "@/components/site/a";

interface HeaderProps {
  route: string;
}

export function Header({ route }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "#/") return route === "#/" || route === "" || route === "#";
    return route === href;
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-espresso text-cream/90 text-[12.5px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-9 items-center justify-between gap-4">
            <div className="flex items-center gap-5 overflow-hidden">
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <MapPin className="h-3.5 w-3.5 text-caramel" aria-hidden />
                <span className="hidden sm:inline">{BRAND.address}</span>
                <span className="sm:hidden">Lekki Phase 1, Lagos</span>
              </span>
              <span className="hidden md:flex items-center gap-1.5 whitespace-nowrap">
                <Clock className="h-3.5 w-3.5 text-caramel" aria-hidden />
                {BRAND.hoursWeek}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={BRAND.phoneHref}
                className="flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-caramel"
              >
                <Phone className="h-3.5 w-3.5 text-caramel" aria-hidden />
                {BRAND.phone}
              </a>
              <span className="hidden sm:block h-3.5 w-px bg-cream/25" aria-hidden />
              <div className="hidden sm:flex items-center gap-3">
                <a href={BRAND.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-colors hover:text-caramel">
                  <Instagram className="h-3.5 w-3.5" />
                </a>
                <a href={BRAND.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="transition-colors hover:text-caramel">
                  <Facebook className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "bg-cream/95 backdrop-blur border-b border-blush transition-shadow duration-300",
          scrolled && "shadow-[0_8px_30px_rgba(50,37,27,0.08)]"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[74px] items-center justify-between gap-6">
            {/* Logo */}
            <A href="#/" className="flex items-center gap-3" aria-label="Amara Beauty and Spa home">
              <Image
                src="/images/logo.png"
                alt="Amara Beauty and Spa logo"
                width={52}
                height={52}
                className="h-12 w-12 object-cover rounded-full ring-1 ring-blush"
                priority
              />
              <span className="leading-tight">
                <span className="block font-display text-[26px] font-semibold tracking-wide text-espresso">
                  Amara
                </span>
                <span className="block text-[10px] uppercase tracking-brand text-taupe">
                  Beauty &amp; Spa
                </span>
              </span>
            </A>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <A
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-[13.5px] uppercase tracking-[0.14em] transition-colors py-2",
                    isActive(link.href) ? "text-caramel" : "text-espresso/80 hover:text-caramel"
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-px w-6 bg-caramel" aria-hidden />
                  )}
                </A>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <A
                href="#/contact"
                className="hidden sm:inline-flex items-center justify-center bg-espresso px-6 py-3 text-[12.5px] uppercase tracking-[0.14em] text-cream transition-colors hover:bg-caramel-deep"
              >
                Book Appointment
              </A>
              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden inline-flex h-11 w-11 items-center justify-center border border-blush text-espresso"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <div
          className={cn(
            "lg:hidden overflow-hidden border-t border-blush bg-cream transition-[max-height] duration-300",
            menuOpen ? "max-h-[420px]" : "max-h-0 border-t-0"
          )}
        >
          <nav className="px-6 py-4" aria-label="Mobile navigation">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <A
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "block py-3 text-sm uppercase tracking-[0.14em] border-b border-blush/70",
                      isActive(link.href) ? "text-caramel" : "text-espresso/85"
                    )}
                  >
                    {link.label}
                  </A>
                </li>
              ))}
              <li className="pt-4">
                <A
                  href="#/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center bg-espresso px-6 py-3.5 text-[12.5px] uppercase tracking-[0.14em] text-cream"
                >
                  Book Appointment
                </A>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
