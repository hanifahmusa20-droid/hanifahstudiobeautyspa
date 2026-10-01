"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY } from "@/lib/site-data";
import { PageHero, CtaBanner } from "@/components/site/shared";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Hair", "Nails", "Makeup", "Spa", "Salon", "Brows"] as const;

export function GalleryPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const visible =
    filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter);

  return (
    <>
      <PageHero
        image="/images/gal_bridal.jpg"
        eyebrow="Gallery"
        title="Our work, exactly as it left the chair"
        subtitle="Real clients, real results, no heavy filters. Everything you see here was done inside our salon."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  "px-5 py-2.5 text-[12px] uppercase tracking-[0.12em] border transition-colors",
                  filter === f
                    ? "bg-espresso text-cream border-espresso"
                    : "border-blush text-cocoa/80 hover:border-caramel hover:text-caramel"
                )}
                aria-pressed={filter === f}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-12 columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
            {visible.map((item) => (
              <figure
                key={`${item.image}-${item.caption}`}
                className="group relative break-inside-avoid overflow-hidden"
              >
                <div className="relative w-full aspect-square sm:aspect-[4/4.6]">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-espresso/85 to-transparent p-4 pt-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-cream">{item.caption}</p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.12em] text-caramel">
                    {item.category}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-taupe">
            Follow our daily work on Instagram at{" "}
            <a
              href="https://instagram.com/amara.beauty.spa"
              target="_blank"
              rel="noreferrer"
              className="text-caramel underline underline-offset-4"
            >
              @amara.beauty.spa
            </a>
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
