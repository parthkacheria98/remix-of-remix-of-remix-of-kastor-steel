import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useReveal } from "@/lib/reveal";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — What Partners Say About Kastor International FZE" },
      { name: "description", content: "Two decades of relationships in electrical steel. Read what mill executives, industry veterans, and long-term partners say about working with Janil Shah and Kastor International FZE." },
      { property: "og:title", content: "Testimonials — Kastor International FZE" },
      { property: "og:description", content: "Reflections from mill executives and industry partners on two decades of working with Janil Shah in the electrical steel industry." },
      { name: "twitter:title", content: "Testimonials — Kastor International FZE" },
      { name: "twitter:description", content: "What partners and industry veterans say about Kastor International FZE." },
    ],
  }),
  component: Testimonials,
});

const ACCENT = "#4F7C9E";
const ACCENT_LIGHT = "#7BA7C2";
const INK = "#1C2B3A";
const MUTED = "#4A5F72";
const LINE = "#EAEEF2";

const items = [
  {
    quote:
      "I had the pleasure of getting acquainted with Mr. Janil Shah many years ago when, during his studies, he joined his father's team. The unquestionable skill of combining theoretical knowledge with the practice of everyday sales activities in the difficult and demanding Indian market has yielded excellent results for Janil. One of them being the establishment of his own company, Kastor International FZE, based in UAE, and the expansion of its operations to the countries of the region.\n\nFor his clients and partners, cooperation with Janil will be a source of satisfaction and benefits, providing abundant inspiration for further development.",
    name: "Józef Ryszka",
    role: "Former Director, Sales Division · Electrical Steel",
    org: "Stalprodukt S.A., Poland",
    featured: true,
  },
  {
    quote:
      "I have known Janil Shah for nearly twenty years and have had the privilege of watching him grow alongside the global electrical steel industry. Throughout that time, he has consistently demonstrated the ability to adapt, lead, and deliver results.\n\nWhat sets Janil apart is the clarity of his leadership. He gives his team well-defined, achievable goals and empowers them to succeed. He leads with integrity, earns people's trust, and brings out the best in those around him. I would recommend him without hesitation.",
    name: "Kim Earhart",
    role: "Manufacturing Systems and Equipment, Inc.",
    org: "North Carolina, USA",
  },
  {
    quote:
      "Janil has an astute insight and understanding of the market. He catches the pulse of the market early on.\n\nTherefore he is always able to deliver outstanding results time after time again.",
    name: "Nilesh Patel",
    role: "Vilas Transcore",
    org: "India",
  },
  {
    quote:
      "I have known Janil and his father Mr. Prakash Shah for a long period of time. They are very reliable and trustworthy business people and it's always a pleasure to do business with them. They always honour their word.",
    name: "CEO & Managing Director",
    role: "Kryfs Power Components Ltd.",
    org: "India",
  },
];

function initials(name: string) {
  return name
    .replace(/[^A-Za-z\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]!.toUpperCase())
    .join("");
}

function Testimonials() {
  useReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);




  return (
    <>
      {/* Hero */}
      <section style={{ background: INK }} className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="anim-up label-eyebrow" style={{ color: ACCENT_LIGHT, animationDelay: "0.6s" }}>Testimonials</div>
          <h1 className="anim-up mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-7xl text-white break-words" style={{ fontWeight: 300, animationDelay: "0.9s", letterSpacing: "-0.02em" }}>
            In the words of <span style={{ color: ACCENT_LIGHT }}>our partners</span>
          </h1>
        </div>
      </section>

      {/* 2x2 Grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {items.map((t) => (
              <figure
                key={t.name + t.role}
                className="reveal group relative flex h-full min-w-0 flex-col p-6 sm:p-8 lg:p-10 transition-shadow duration-300 hover:shadow-[0_20px_50px_-20px_rgba(28,43,58,0.18)]"
                style={{ border: `1px solid ${LINE}`, borderRadius: 4, background: "#F8F9FB" }}
              >
                {/* Top accent bar */}
                <div
                  aria-hidden
                  className="absolute left-0 top-0 h-[2px] w-10 transition-all duration-300 group-hover:w-20"
                  style={{ background: ACCENT }}
                />
                {/* Decorative mark */}
                <div
                  aria-hidden
                  className="select-none"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "4rem",
                    lineHeight: 0.7,
                    color: ACCENT_LIGHT,
                    opacity: 0.35,
                    fontWeight: 400,
                  }}
                >
                  “
                </div>

                <blockquote
                  className="mt-4 flex-1 whitespace-pre-line text-[15px] lg:text-base"
                  style={{ color: INK, fontWeight: 300, lineHeight: 1.75 }}
                >
                  {t.quote}
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-4 border-t pt-5" style={{ borderColor: LINE }}>
                  <div
                    className="flex items-center justify-center shrink-0 text-sm font-medium rounded-full"
                    style={{
                      width: 48,
                      height: 48,
                      background: `linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT_LIGHT} 100%)`,
                      color: "#fff",
                      letterSpacing: "0.03em",
                      boxShadow: `0 4px 12px -4px ${ACCENT}66`,
                    }}
                  >
                    {initials(t.name)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm break-words" style={{ color: INK, fontWeight: 500 }}>{t.name}</div>
                    <div className="text-xs break-words" style={{ color: MUTED }}>{t.role}</div>
                    <div className="text-xs break-words" style={{ color: MUTED }}>{t.org}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
