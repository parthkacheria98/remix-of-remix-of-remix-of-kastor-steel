import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useReveal } from "@/lib/reveal";
import { Socials } from "@/components/Socials";
import { Globe, ShieldCheck, Layers, Handshake } from "lucide-react";
import janilShahImage from "@/assets/janil-shah.jpg";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us · Kastor International FZE" },
      { name: "description", content: "Founded in 2016 in the UAE, Kastor International is led by CEO Janil Shah, with 15+ years of experience in the Electrical Steel industry." },
      { property: "og:title", content: "About Kastor International FZE" },
      { property: "og:description", content: "A UAE-registered global distributor of Electrical Steel, led by founder Janil Shah." },
    ],
  }),
  component: About,
});

const ACCENT = "#4F7C9E";
const ACCENT_LIGHT = "#7BA7C2";

const pillars = [
  { icon: Globe, title: "Global Network", desc: "Trusted by manufacturers across 22+ countries spanning four continents." },
  { icon: ShieldCheck, title: "Certified Quality", desc: "Full BIS, PGCIL & PSPCL compliance for the Indian market." },
  { icon: Layers, title: "Prime Material", desc: "Cold Rolled Grain Oriented coils, full-width and custom-slitted." },
  { icon: Handshake, title: "Long-Term Partners", desc: "Multi-year frameworks stabilizing pricing, allocation, and delivery." },
];

function About() {
  useReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <section style={{ background: "#1C2B3A" }} className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          
          <div className="anim-up label-eyebrow mt-8" style={{ color: ACCENT_LIGHT, animationDelay: "0.6s" }}>About Us</div>
          <h1 className="anim-up mt-6 max-w-4xl text-5xl lg:text-7xl text-white" style={{ fontWeight: 300, animationDelay: "0.9s", letterSpacing: "-0.02em" }}>
            A decade of trust in <span style={{ color: ACCENT_LIGHT }}>Electrical Steel.</span>
          </h1>
        </div>
      </section>

      {/* Company */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5 reveal">
              <div className="label-eyebrow" style={{ color: ACCENT }}>The Company</div>
              <h2 className="mt-5 text-4xl lg:text-5xl text-[#1C2B3A]" style={{ fontWeight: 300, letterSpacing: "-0.01em" }}>
                UAE-registered.<br/>Globally connected.
              </h2>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t pt-8" style={{ borderColor: "#EAEEF2" }}>
                {[["2016", "Founded"], ["30k+", "MT / Year"], ["22+", "Countries"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="text-3xl lg:text-4xl text-[#1C2B3A]" style={{ fontWeight: 300 }}>{n}</div>
                    <div className="label-eyebrow mt-2" style={{ color: ACCENT }}>{l}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t pt-8" style={{ borderColor: "#EAEEF2" }}>
                <div className="label-eyebrow" style={{ color: ACCENT }}>Headquarters</div>
                <p className="mt-3 text-[15px]" style={{ color: "#4A5F72", lineHeight: 1.8 }}>
                  ELOB Office No. E-23F-43<br />
                  Hamriyah Free Zone<br />
                  Sharjah, United Arab Emirates
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 reveal">
              <p className="text-lg lg:text-xl" style={{ color: "#4A5F72", fontWeight: 300, lineHeight: 1.8 }}>
                Kastor International FZE is a UAE-registered company established in May 2016. We are a leading global distributor and trader of Electrical Steel, serving customers globally.
              </p>
              <p className="mt-6 text-lg lg:text-xl" style={{ color: "#4A5F72", fontWeight: 300, lineHeight: 1.8 }}>
                With extensive industry experience and a strong international network, we currently trade over 30,000 metric tons of Electrical Steel annually. As part of our long-term growth strategy, we aim to increase this volume to 50,000 metric tons per year by 2030.
              </p>

              <div className="mt-12 grid gap-5 sm:grid-cols-2">
                {pillars.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="p-6" style={{ border: "1px solid #EAEEF2", borderRadius: 2 }}>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center" style={{ width: 36, height: 36, borderRadius: "50%", background: ACCENT }}>
                        <Icon size={16} color="#FFFFFF" strokeWidth={1.6} />
                      </div>
                      <div className="text-[#1C2B3A]" style={{ fontWeight: 500 }}>{title}</div>
                    </div>
                    <p className="mt-3 text-sm" style={{ color: "#4A5F72", lineHeight: 1.7, fontWeight: 300 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section style={{ background: "#F8F9FB" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="reveal label-eyebrow" style={{ color: ACCENT }}>Our Leadership</div>
          <div className="mt-10 grid gap-16 lg:grid-cols-12">
            <div className="reveal lg:col-span-5">
              <div
                className="relative aspect-[4/5] w-full overflow-hidden"
                style={{ background: "#1C2B3A" }}
              >
                <img
                  src={janilShahImage}
                  alt="Janil Shah, CEO of Kastor International FZE"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: "58% 38%", transform: "scale(1.28)", transformOrigin: "58% 38%" }}

                />

                <div
                  className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-24 sm:px-7 sm:pb-7"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(28,43,58,0) 0%, rgba(28,43,58,0.45) 45%, rgba(28,43,58,0.85) 100%)",
                  }}
                >
                  <div className="label-eyebrow" style={{ color: ACCENT_LIGHT }}>Janil Shah</div>
                  <div className="mt-2 text-sm text-white" style={{ fontWeight: 300 }}>
                    CEO, Kastor International FZE
                  </div>
                </div>


              </div>

            </div>

            <div className="reveal lg:col-span-6 lg:col-start-7">
              <h2 className="text-4xl lg:text-5xl text-[#1C2B3A]" style={{ fontWeight: 300 }}>Janil Shah</h2>
              <div className="label-eyebrow mt-3" style={{ color: ACCENT }}>CEO, Kastor International FZE</div>

              <p className="mt-8 text-lg" style={{ color: "#4A5F72", fontWeight: 300, lineHeight: 1.8 }}>
                Janil Shah brings over 15 years of experience in the Electrical Steel industry. Known for his extensive market knowledge and global network, he has successfully helped global businesses obtain complete end-to-end certifications such as BIS, PGCIL, and PSPCL for India's Electrical Steel regulations.
              </p>
              <p className="mt-6 text-lg" style={{ color: "#4A5F72", fontWeight: 300, lineHeight: 1.8 }}>
                His expertise, relationships, and customer-first approach continue to drive Kastor International FZE's growth and reputation.
              </p>

              <div className="mt-10 grid gap-8 border-t pt-8 sm:grid-cols-2" style={{ borderColor: "#EAEEF2" }}>
                <div>
                  <div className="label-eyebrow" style={{ color: ACCENT }}>Education</div>
                  <div className="mt-3 text-[#1C2B3A]" style={{ fontWeight: 500 }}>Global MBA</div>
                  <div className="text-sm" style={{ color: "#4A5F72" }}>S.P. Jain School of Global Management (2019)</div>
                  <div className="text-sm" style={{ color: "#4A5F72" }}>Marketing & Management</div>
                </div>
                <div>
                  <div className="label-eyebrow opacity-0">.</div>
                  <div className="mt-3 text-[#1C2B3A]" style={{ fontWeight: 500 }}>B.Sc. Computer Science</div>
                  <div className="text-sm" style={{ color: "#4A5F72" }}>Mumbai University, India</div>
                </div>
              </div>

              <div className="mt-10">
                <div className="label-eyebrow mb-3" style={{ color: ACCENT }}>Follow Us</div>
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
