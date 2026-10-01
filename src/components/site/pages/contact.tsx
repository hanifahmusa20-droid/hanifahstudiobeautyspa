"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Send, CalendarCheck } from "lucide-react";
import { BRAND, SERVICES, TIME_SLOTS, FAQS } from "@/lib/site-data";
import { SectionHeading, PageHero } from "@/components/site/shared";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

const inputClass =
  "h-12 w-full bg-cream border border-blush px-4 text-sm text-espresso placeholder:text-taupe/70 outline-none transition-colors focus:border-caramel";

export function ContactPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [stored, setStored] = useState(true);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          service: data.get("service"),
          preferredDate: data.get("preferredDate"),
          preferredTime: data.get("preferredTime"),
          notes: data.get("notes"),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      const body = await res.json();
      const savedInBook = body?.stored !== false;
      setStored(savedInBook);
      setSubmitted(true);
      form.reset();
      toast({
        title: savedInBook ? "Booking request sent" : "Almost done",
        description: savedInBook
          ? "Thank you, we have your request. We will confirm your slot within a few working hours."
          : "Please complete your booking by calling us on " + BRAND.phone + ".",
      });
    } catch {
      toast({
        title: "Something went wrong",
        description:
          "We could not send your request. Please try again, or reach us on " + BRAND.phone + ".",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        image="/images/cta_spa.jpg"
        eyebrow="Contact and Booking"
        title="Book your visit"
        subtitle="Send the form and we will confirm your slot the same day. Prefer to talk? Call or WhatsApp us directly."
      />

      {/* Form + info */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.35fr_1fr] gap-12">
            {/* Booking form */}
            <div className="bg-cream ring-1 ring-blush p-8 sm:p-10">
              <SectionHeading
                align="left"
                eyebrow="Appointment Form"
                title="Tell us what you need"
              />
              <p className="mt-4 text-sm leading-relaxed text-cocoa/85">
                Fill this in and we will get back to you within a few working
                hours with a confirmed slot. Fields marked with a star are
                required.
              </p>

              {submitted ? (
                <div className="mt-8 flex flex-col items-center gap-4 bg-blush/40 border border-caramel/30 px-6 py-12 text-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-caramel text-cream">
                    <CalendarCheck className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="font-display text-2xl text-espresso">
                    {stored ? "Request received" : "Thank you for choosing Amara"}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-cocoa/85">
                    {stored ? (
                      <>Thank you for choosing Amara. Our front desk will reach you
                      shortly to confirm the exact slot. If it is urgent, call us
                      on {BRAND.phone}.</>
                    ) : (
                      <>Our booking desk could not take this request online just
                      now. Please call or message us on {BRAND.phone} and we
                      will lock in your slot for you straight away.</>
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 border border-caramel px-6 py-3 text-[12px] uppercase tracking-[0.12em] text-caramel transition-colors hover:bg-caramel hover:text-cream"
                  >
                    Book Another Service
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-[12px] uppercase tracking-[0.1em] text-cocoa/80">
                        Full name *
                      </label>
                      <input id="name" name="name" required placeholder="Adaeze Okonkwo" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-[12px] uppercase tracking-[0.1em] text-cocoa/80">
                        Phone *
                      </label>
                      <input id="phone" name="phone" required type="tel" placeholder="0901 555 0134" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-[12px] uppercase tracking-[0.1em] text-cocoa/80">
                      Email
                    </label>
                    <input id="email" name="email" type="email" placeholder="you@example.com" className={inputClass} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="service" className="mb-2 block text-[12px] uppercase tracking-[0.1em] text-cocoa/80">
                        Service *
                      </label>
                      <select id="service" name="service" required defaultValue="" className={inputClass}>
                        <option value="" disabled>
                          Choose a service
                        </option>
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                        <option value="Something else">Something else</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="mb-2 block text-[12px] uppercase tracking-[0.1em] text-cocoa/80">
                        Preferred time *
                      </label>
                      <select id="preferredTime" name="preferredTime" required defaultValue="" className={inputClass}>
                        <option value="" disabled>
                          Choose a time
                        </option>
                        {TIME_SLOTS.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="preferredDate" className="mb-2 block text-[12px] uppercase tracking-[0.1em] text-cocoa/80">
                        Preferred date *
                      </label>
                      <input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div className="flex items-end">
                      <p className="text-[13px] leading-relaxed text-taupe">
                        We will do our best for this date and time, and offer
                        the closest alternative if it is taken.
                      </p>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="mb-2 block text-[12px] uppercase tracking-[0.1em] text-cocoa/80">
                      Anything we should know?
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      placeholder="For example, sensitive scalp, expecting, first facial, bridal party of five..."
                      className="w-full bg-cream border border-blush px-4 py-3 text-sm text-espresso placeholder:text-taupe/70 outline-none transition-colors focus:border-caramel resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-espresso px-10 py-4 text-[13px] uppercase tracking-[0.14em] text-cream transition-colors hover:bg-caramel-deep disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream/40 border-t-cream" aria-hidden />
                        Sending
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" aria-hidden />
                        Send Booking Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="bg-espresso text-cream/85 p-8">
                <h3 className="font-display text-2xl text-cream">
                  Visit the salon
                </h3>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-caramel" aria-hidden />
                    <span>
                      {BRAND.address}
                      <span className="block text-cream/60 mt-1">
                        Free parking behind the building
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-caramel" aria-hidden />
                    <a href={BRAND.phoneHref} className="transition-colors hover:text-caramel">
                      {BRAND.phone}
                      <span className="block text-cream/60 mt-1">
                        Calls and WhatsApp, same number
                      </span>
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
                      <span className="block text-cream/60 mt-1">{BRAND.hoursSunday}</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden aspect-[4/3] ring-1 ring-blush">
                <Image
                  src="/images/about_interior.png"
                  alt="The Amara salon interior on Admiralty Way"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/85 to-transparent p-5 pt-12">
                  <p className="text-sm text-cream">
                    Look for the gold sign on Admiralty Way, two doors from the
                    petrol station.
                  </p>
                </div>
              </div>

              <div className="bg-blush/40 border border-caramel/30 p-6">
                <p className="text-sm leading-relaxed text-cocoa/90">
                  <span className="font-medium text-espresso">Running late?</span>{" "}
                  Call us and we will hold your slot for fifteen minutes.
                  After that we may need to reschedule you so the next client
                  is not affected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-deep/60 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Common Questions"
            title="Before you ask"
          />
          <Accordion type="single" collapsible className="mt-12">
            {FAQS.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`} className="border-blush">
                <AccordionTrigger className="text-left font-display text-xl text-espresso hover:text-caramel hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-cocoa/85">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
