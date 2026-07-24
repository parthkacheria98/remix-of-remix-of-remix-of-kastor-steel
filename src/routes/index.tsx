import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Globe, Layers, ShieldCheck, Truck, Handshake } from "lucide-react";
import { useReveal } from "@/lib/reveal";
import { WorldMap } from "@/components/WorldMap";
const warehouse = { url: "/assets/warehouse.jpeg" };
const coilCloseup = { url: "/assets/coil-closeup.jpeg" };
const coilsRow = { url: "/assets/coils-row.jpeg" };
const coilEdges = { url: "/assets/coil-edges.jpeg" };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kastor International FZE — Prime CRGO Electrical Steel Supplier | UAE" },
      { name: "description", content: "UAE-based global distributor of prime CRGO electrical steel for transformer manufacturers. Full-width and custom-slitted coils, BIS/PGCIL/PSPCL certified for India, delivered across 22+ countries." },
      { property: "og:title", content: "Kastor International FZE — Prime CRGO Electrical Steel, Globally Distributed" },
      { property: "og:description", content: "A decade of trust in electrical steel. Prime CRGO coils sourced globally, distributed reliably — from Sharjah, UAE to transformer manufacturers worldwide." },
      { name: "twitter:title", content: "Kastor International FZE — Prime CRGO Electrical Steel" },
      { name: "twitter:description", content: "Global distribution of prime CRGO electrical steel. UAE-registered, certified for India, trusted across four continents." },
    ],
  }),
  component: Home,
});

const ACCENT = "#4F7C9E";
const ACCENT_LIGHT = "#7BA7C2";

const supplyItems = [
  { icon: Globe, title: "Global Sourcing & Distribution", desc: "An international procurement network engineered for consistency, volume, and lead-time discipline." },
  { icon: Layers, title: "Prime Electrical Steel Supply", desc: "Cold Rolled Grain Oriented (CRGO) coils for power and distribution transformer cores, in full-width and custom-slitted formats." },
  { icon: ShieldCheck, title: "BIS-Compliant Material for India", desc: "Complete, end-to-end certified material including BIS, PGCIL, and PSPCL, ready for the Indian market." },
  { icon: Truck, title: "Customized Procurement & Logistics", desc: "Specification-driven sourcing and freight orchestration across continents." },
  { icon: Handshake, title: "Long-Term Supply Partnerships", desc: "Multi-year frameworks that stabilize pricing, allocation, and delivery." },
];

function Home() {
  useReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      {/* HERO */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{ background: "#1C2B3A", color: "#FFFFFF", minHeight: "auto" }}
      >
        <div className="absolute inset-0">
          <img
            src={warehouse.url}
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
            style={{ opacity: 0.42 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(28,43,58,0.92) 0%, rgba(28,43,58,0.74) 55%, rgba(28,43,58,0.45) 100%)",
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10 pt-32 pb-10">
          <div
            className="anim-up label-eyebrow"
            style={{ color: ACCENT_LIGHT, animationDelay: "0.4s" }}
          >
            Kastor International FZE · Est. 2016
          </div>

          <h1
            className="anim-up mt-6 max-w-5xl text-[2.1rem] leading-[1.1] sm:text-[3rem] lg:text-[4.2rem]"
            style={{ animationDelay: "0.7s", fontWeight: 300, letterSpacing: "-0.02em" }}
          >
            Global Supplier of <span style={{ color: ACCENT_LIGHT }}>Prime CRGO Electrical Steel</span>
          </h1>

          <p
            className="anim-up mt-5 max-w-2xl text-base sm:text-lg"
            style={{ color: "rgba(255,255,255,0.78)", animationDelay: "0.9s", lineHeight: 1.7, fontWeight: 300 }}
          >
            Full-width and custom-slitted coils.
          </p>

          <div className="anim-up mt-7" style={{ animationDelay: "1.1s" }}>
            <Link
              to="/contact"
              className="inline-flex items-center px-7 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors"
              style={{
                color: "#FFFFFF",
                border: "1px solid rgba(255,255,255,0.55)",
                background: "transparent",
                borderRadius: 999,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="bg-white border-b" style={{ borderColor: "#EAEEF2" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 sm:py-16">
          <div className="grid gap-8 sm:gap-6 grid-cols-1 sm:grid-cols-3">
            {[
              ["30,000+", "Metric Tons Traded Annually"],
              ["22+", "Countries Served"],
              ["15+", "Years of Industry Experience"],
            ].map(([n, l], i) => (
              <div
                key={l}
                className={`flex flex-col items-center justify-center text-center px-4 ${i > 0 ? "sm:border-l" : ""}`}
                style={{ borderColor: "#EAEEF2" }}
              >
                <div
                  className="text-5xl sm:text-5xl lg:text-6xl text-[#1C2B3A] leading-none"
                  style={{ fontWeight: 300, letterSpacing: "-0.02em" }}
                >
                  {n}
                </div>
                <div
                  className="mt-4 text-[0.75rem] sm:text-[0.78rem] uppercase tracking-[0.2em]"
                  style={{ color: ACCENT, fontWeight: 500, lineHeight: 1.5 }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* WHO WE ARE (About intro) */}
      <section style={{ background: "#F5F6F8" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid gap-16 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 reveal">
              <img src={coilCloseup.url} alt="Close-up of prime CRGO coil" className="w-full" loading="lazy" />
            </div>
            <div className="lg:col-span-5 lg:col-start-8 reveal">
              <div className="label-eyebrow" style={{ color: ACCENT }}>Who we are</div>
              <h2 className="mt-5 text-4xl lg:text-5xl text-[#1C2B3A]" style={{ fontWeight: 300, letterSpacing: "-0.01em" }}>
                A UAE-registered house of Electrical Steel.
              </h2>
              <p className="mt-6 text-lg" style={{ color: "#4A5F72", lineHeight: 1.8, fontWeight: 300 }}>
                Kastor International FZE is a UAE-based global distributor of prime CRGO Electrical Steel, trusted by transformer manufacturers across 22+ countries.
              </p>
              <Link to="/about" className="ulink mt-8 inline-block text-[0.72rem] font-medium uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
                More about Kastor International FZE →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE SUPPLY */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="reveal max-w-3xl">
            <div className="label-eyebrow" style={{ color: ACCENT }}>What we supply</div>
            <h2 className="mt-5 text-4xl lg:text-5xl text-[#1C2B3A]" style={{ fontWeight: 300, letterSpacing: "-0.01em" }}>
              Prime CRGO Electrical Steel. The heart of every transformer.
            </h2>
            <p className="mt-6 text-lg" style={{ color: "#4A5F72", lineHeight: 1.8, fontWeight: 300 }}>
              A complete supply discipline, from mill to factory floor. We supply prime Electrical Steel while maintaining full compliance with international standards and regional regulations.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {supplyItems.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="reveal bg-white p-8 transition-transform duration-500 hover:-translate-y-1"
                style={{ border: "1px solid #EAEEF2", borderRadius: 2 }}
              >
                <div className="flex items-center justify-center" style={{ width: 56, height: 56, borderRadius: "50%", background: ACCENT }}>
                  <Icon size={24} color="#FFFFFF" strokeWidth={1.5} />
                </div>
                <div className="mt-6 text-[#1C2B3A] text-lg" style={{ fontWeight: 400, minHeight: "3.4rem", lineHeight: 1.35 }}>
                  {title}
                </div>
                <p className="mt-3 text-[15px]" style={{ color: "#4A5F72", lineHeight: 1.7, fontWeight: 300 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal mt-12 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-7 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors"
              style={{
                color: "#1C2B3A",
                border: "1px solid #1C2B3A",
                background: "transparent",
                borderRadius: 999,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#1C2B3A"; e.currentTarget.style.color = "#FFFFFF"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1C2B3A"; }}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT IS ELECTRICAL STEEL */}
      <section style={{ background: "#F5F6F8" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="max-w-3xl reveal">
            <div className="label-eyebrow" style={{ color: ACCENT }}>What is Electrical Steel?</div>
            <h2 className="mt-5 text-4xl lg:text-5xl text-[#1C2B3A]" style={{ fontWeight: 300, letterSpacing: "-0.01em" }}>
              CRGO. The magnetic heart of modern power.
            </h2>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 reveal overflow-hidden">
              <img src={coilEdges.url} alt="Edge view of CRGO steel coils" className="w-full transition-transform duration-[1500ms] ease-out hover:scale-[1.03]" loading="lazy" />
            </div>
            <div className="lg:col-span-6 reveal">
              <p className="text-lg" style={{ color: "#4A5F72", fontWeight: 300, lineHeight: 1.8 }}>
                Electrical Steel, commonly known as CRGO (Cold Rolled Grain Oriented Steel), is a specialized steel used in the manufacture of power and distribution transformers.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 reveal lg:order-1">
              <p className="text-lg" style={{ color: "#4A5F72", fontWeight: 300, lineHeight: 1.8 }}>
                Considered the heart of a transformer due to its unique magnetic properties and high energy efficiency, it plays a critical role in electricity generation, transmission, and distribution, and is essential to both renewable and conventional power generations.
              </p>
            </div>
            <div className="lg:col-span-6 reveal overflow-hidden lg:order-2">
              <img src={coilsRow.url} alt="Row of CRGO steel coils ready for dispatch" className="w-full transition-transform duration-[1500ms] ease-out hover:scale-[1.03]" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL REACH MAP */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="reveal max-w-3xl">
            <div className="label-eyebrow" style={{ color: ACCENT }}>Global Reach</div>
            <h2 className="mt-5 text-4xl lg:text-5xl text-[#1C2B3A]" style={{ fontWeight: 300, letterSpacing: "-0.01em" }}>
              From Dubai to 22 countries worldwide.
            </h2>
            <p className="mt-6 text-lg" style={{ color: "#4A5F72", lineHeight: 1.8, fontWeight: 300 }}>
              Headquartered in the UAE, we serve transformer manufacturers across the Middle East, Europe, Asia, and the Americas.
            </p>
          </div>

          <div className="reveal mt-10">
            <WorldMap />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#1C2B3A" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-4">
          <div className="grid items-end gap-10 lg:grid-cols-2">
            <div className="reveal">
              <h2 className="text-4xl lg:text-5xl text-white" style={{ fontWeight: 300 }}>
                Ready to source <span style={{ color: ACCENT_LIGHT }}>prime steel</span> for your next project?
              </h2>
            </div>
            <div className="reveal flex lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center px-7 py-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white transition-colors"
                style={{
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.55)",
                  background: "transparent",
                  borderRadius: 999,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
