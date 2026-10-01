"use client";

import Image from "next/image";
import { Leaf, HandHeart, GraduationCap } from "lucide-react";
import { TEAM, BRAND } from "@/lib/site-data";
import { SectionHeading, PageHero, CtaBanner } from "@/components/site/shared";

const VALUES = [
  {
    icon: Leaf,
    title: "Gentle by default",
    text: "Heat controlled, product light, always patch tested. Your hair and skin are living things and we treat them that way. If a treatment is wrong for you, we will say so even if it costs us the sale.",
  },
  {
    icon: HandHeart,
    title: "Honest advice",
    text: "We will tell you when a style will not suit your routine, when a product is a waste of your money and when your hair needs rest instead of colour. Clients stay with us for years because of this.",
  },
  {
    icon: GraduationCap,
    title: "Always learning",
    text: "Every member of our team trains twice a year, in house or abroad. Techniques change, products improve, and we keep up so your hair and skin benefit first.",
  },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/about_interior.png"
        eyebrow="About Amara"
        title="Our story, twelve years in the making"
        subtitle="From one chair and a kettle to the calmest salon in Lekki. This is how we got here."
      />

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="relative aspect-[4/4.4] w-[88%] overflow-hidden">
                <Image
                  src="/images/hero_woman.png"
                  alt="A guest relaxing at Amara Beauty and Spa"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-[-30px] right-0 w-[45%] aspect-square overflow-hidden border-8 border-cream shadow-[0_20px_50px_rgba(50,37,27,0.15)]">
                <Image
                  src="/images/gal_products.jpg"
                  alt="The gentle products we use and sell"
                  fill
                  sizes="(max-width: 1024px) 50vw, 24vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 h-24 w-24 border-t border-l border-caramel/50" aria-hidden />
            </div>

            <div>
              <SectionHeading
                align="left"
                eyebrow="How It Started"
                title="One chair, one kettle, one strong belief"
              />
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-cocoa/90">
                <p>
                  Amara Eze started this salon in a single room on Admiralty
                  Way in 2013, with a styling chair, a kettle for hair steam
                  and a small but loyal set of clients who followed her from
                  her kitchen. The idea was simple. Treat every head of hair
                  and every face like it belongs to someone you love.
                </p>
                <p>
                  Word travelled. Clients brought their sisters, their
                  colleagues, their wedding parties. We grew room by room,
                  always slowly, always without rushing the work. Today we
                  have six treatment rooms, a dedicated spa floor and a team
                  of twelve, but the kettle is still here. It sits by the tea
                  station as a small reminder of where we came from.
                </p>
                <p>
                  What has never changed is how we treat people. You will be
                  offered tea, asked real questions and given honest answers.
                  If we think a treatment is wrong for you, we will say so.
                  That is the whole secret, and we are happy to share it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-deep/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Three things we refuse to compromise"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-cream ring-1 ring-blush p-8 text-center transition-shadow hover:shadow-[0_14px_40px_rgba(50,37,27,0.1)]"
              >
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-blush/70 text-caramel-deep">
                  <value.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-2xl text-espresso">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-cocoa/85">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Meet the Team"
            title="The hands behind the calm"
          />
          <p className="mx-auto mt-5 max-w-2xl text-center text-[15px] leading-relaxed text-cocoa/85">
            Twelve people keep Amara running. Here are the four you will
            likely meet first.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative mx-auto aspect-[3/3.6] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-display text-[23px] text-espresso">
                  {member.name}
                </h3>
                <p className="mt-1 text-[12px] uppercase tracking-[0.12em] text-caramel">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cocoa/85">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="bg-espresso py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-display italic text-2xl sm:text-3xl leading-relaxed text-cream/95 text-balance">
            &ldquo;Getting ready should feel as good as looking good. That is
            the promise we made in 2013, and it is the promise we keep every
            morning.&rdquo;
          </p>
          <p className="mt-6 text-[12px] uppercase tracking-brand text-caramel">
            Amara Eze · Founder
          </p>
        </div>
      </section>

      <CtaBanner />

      {/* Hours note */}
      <section className="py-14">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-[12px] uppercase tracking-brand text-caramel">
            Planning Your First Visit
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-cocoa/90">
            We are at {BRAND.address}. {BRAND.hoursWeek}, and{" "}
            {BRAND.hoursSunday.toLowerCase()}. Parking is free behind the
            building, and the gate has our name in gold, you cannot miss it.
          </p>
        </div>
      </section>
    </>
  );
}
