import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useReveal } from "@/lib/reveal";
import { Socials } from "@/components/Socials";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kastor International FZE — CRGO Electrical Steel Enquiries" },
      { name: "description", content: "Request a quote for prime CRGO electrical steel coils or start a long-term supply partnership. Kastor International FZE — Hamriyah Free Zone, Sharjah, UAE." },
      { property: "og:title", content: "Contact Kastor International FZE" },
      { property: "og:description", content: "Reach out for CRGO electrical steel enquiries, quotes, and long-term supply partnerships. Based in Sharjah, UAE — serving 22+ countries." },
      { name: "twitter:title", content: "Contact Kastor International FZE" },
      { name: "twitter:description", content: "CRGO electrical steel enquiries and long-term supply partnerships. Sharjah, UAE." },
    ],
  }),
  component: Contact,
});

function Contact() {
  useReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:janil@kastorintl.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field = "w-full bg-transparent border-0 border-b py-4 text-[15px] text-[#1C2B3A] placeholder:text-[#4A5F72]/60 outline-none transition-colors focus:border-[#4F7C9E]";

  return (
    <>
      <section style={{ background: "#1C2B3A" }} className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          
          <div className="anim-up label-eyebrow mt-8" style={{ color: "#7BA7C2", animationDelay: "0.6s" }}>Contact</div>
          <h1 className="anim-up mt-6 max-w-4xl text-5xl lg:text-7xl text-white" style={{ fontWeight: 300, animationDelay: "0.9s", letterSpacing: "-0.02em" }}>
            Let's <span style={{ color: "#7BA7C2" }}>talk steel</span>
          </h1>
          <p className="anim-up mt-8 max-w-2xl text-lg" style={{ color: "rgba(255,255,255,0.7)", fontWeight: 300, lineHeight: 1.8, animationDelay: "1.2s" }}>
            Got a requirement? Drop us a note and we'll be in touch.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid gap-20 lg:grid-cols-12">
            {/* Form */}
            <div className="reveal lg:col-span-7">
              <div className="label-eyebrow" style={{ color: "#4F7C9E" }}>Enquiry Form</div>
              <h2 className="mt-5 text-3xl text-[#1C2B3A]" style={{ fontWeight: 300 }}>Tell us what you need.</h2>

              {sent ? (
                <div className="mt-10 border p-8" style={{ borderColor: "#EAEEF2", borderRadius: 2 }}>
                  <div className="label-eyebrow" style={{ color: "#4F7C9E" }}>Thank you</div>
                  <p className="mt-3 text-[15px]" style={{ color: "#4A5F72", lineHeight: 1.8 }}>
                    Your mail client should now be open with your message. We'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-10 space-y-2">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="label-eyebrow" style={{ color: "#4F7C9E" }}>Name</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} style={{ borderColor: "#EAEEF2" }} placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="label-eyebrow" style={{ color: "#4F7C9E" }}>Email</label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} style={{ borderColor: "#EAEEF2" }} placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <label className="label-eyebrow" style={{ color: "#4F7C9E" }}>Phone</label>
                    <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={field} style={{ borderColor: "#EAEEF2" }} placeholder="+971 ..." />
                  </div>
                  <div className="pt-2">
                    <label className="label-eyebrow" style={{ color: "#4F7C9E" }}>Message</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={field + " resize-none"} style={{ borderColor: "#EAEEF2" }} placeholder="Tell us about your requirement · grade, volume, destination..." />
                  </div>

                  <div className="pt-8">
                    <button
                      type="submit"
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
                      Send Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="reveal lg:col-span-4 lg:col-start-9">
              <div className="label-eyebrow" style={{ color: "#4F7C9E" }}>Direct</div>
              <ul className="mt-5 space-y-5 text-[15px]" style={{ color: "#4A5F72", lineHeight: 1.7 }}>
                <li>
                  <div className="label-eyebrow" style={{ color: "#7BA7C2" }}>Email</div>
                  <a className="ulink text-[#1C2B3A]" href="mailto:janil@kastorintl.com">janil@kastorintl.com</a>
                </li>
                <li>
                  <div className="label-eyebrow" style={{ color: "#7BA7C2" }}>Phone & WhatsApp</div>
                  <a className="ulink text-[#1C2B3A]" href="tel:+971521372730">+971 52 137 2730</a>
                </li>
                <li>
                  <div className="label-eyebrow" style={{ color: "#7BA7C2" }}>Secondary</div>
                  <a className="ulink text-[#1C2B3A]" href="tel:+919820025838">+91 98200 25838</a>
                </li>
              </ul>

              <div className="mt-10 border-t pt-8" style={{ borderColor: "#EAEEF2" }}>
                <div className="label-eyebrow" style={{ color: "#4F7C9E" }}>Office</div>
                <p className="mt-4 text-[15px]" style={{ color: "#4A5F72", lineHeight: 1.8 }}>
                  ELOB Office No. E-23F-43<br />
                  Hamriyah Free Zone<br />
                  Sharjah, United Arab Emirates
                </p>
              </div>

              <div className="mt-10 border-t pt-8" style={{ borderColor: "#EAEEF2" }}>
                <div className="label-eyebrow mb-4" style={{ color: "#4F7C9E" }}>Follow Us</div>
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
