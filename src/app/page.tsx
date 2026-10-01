"use client";

import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { HomePage } from "@/components/site/pages/home";
import { AboutPage } from "@/components/site/pages/about";
import { ServicesPage } from "@/components/site/pages/services";
import { PricingPage } from "@/components/site/pages/pricing";
import { GalleryPage } from "@/components/site/pages/gallery";
import { ContactPage } from "@/components/site/pages/contact";

function readRoute() {
  if (typeof window === "undefined") return "#/";
  return window.location.hash || "#/";
}

const PAGES: Record<string, () => React.JSX.Element> = {
  "#/": HomePage,
  "": HomePage,
  "#": HomePage,
  "#/about": AboutPage,
  "#/services": ServicesPage,
  "#/pricing": PricingPage,
  "#/gallery": GalleryPage,
  "#/contact": ContactPage,
};

export default function Site() {
  const [route, setRoute] = useState<string>("#/");
  const firstRun = useRef(true);

  useEffect(() => {
    // Defer the initial read so the first client render matches the server.
    const frame = requestAnimationFrame(() => {
      setRoute((prev) => {
        const next = readRoute();
        return prev === next ? prev : next;
      });
      firstRun.current = false;
    });

    const onHash = () => {
      setRoute(readRoute());
      window.scrollTo({ top: 0 });
    };

    window.addEventListener("hashchange", onHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  const Page = PAGES[route] ?? HomePage;

  return (
    <div className="flex min-h-screen flex-col">
      <Header route={route} />
      <main className="flex-1">
        <Page />
      </main>
      <Footer />
    </div>
  );
}
