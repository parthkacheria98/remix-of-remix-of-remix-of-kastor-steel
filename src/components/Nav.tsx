import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
const kastorLogo = { url: "/assets/kastor-logo.png" };

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTransparent = !scrolled && !open;
  const textColor = open ? "#1C2B3A" : "#FFFFFF";
  const taglineColor = open ? "#4F7C9E" : "rgba(255,255,255,0.72)";

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        height: 96,
        background: isTransparent ? "transparent" : "rgba(28,43,58,0.92)",
        backdropFilter: isTransparent ? "none" : "blur(12px)",
        borderBottom: isTransparent ? "1px solid transparent" : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-6 lg:px-10">
        <Link to="/" className="flex min-w-0 flex-col items-start gap-1.5 pb-2" aria-label="Kastor International FZE · Home">
          <img
            src={kastorLogo.url}
            alt="Kastor International FZE"
            className="h-12 w-auto shrink-0 transition-all duration-300 md:h-14"
          />
          <p
            className="text-[0.68rem] sm:text-[0.72rem] md:text-[0.78rem] italic leading-relaxed"
            style={{ color: taglineColor, fontWeight: 500, letterSpacing: "0.12em", whiteSpace: "pre-line" }}
          >
            Our commitment is etched in steel{"\n"}
          </p>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="nav-link transition-colors"
              style={{ color: textColor }}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ style: { color: isTransparent ? "#7BA7C2" : "#4F7C9E" } }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center px-5 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors"
            style={{
              color: textColor,
              border: `1px solid ${open ? "#1C2B3A" : "rgba(255,255,255,0.55)"}`,
              borderRadius: 999,
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = textColor;
            }}
          >
            Get in Touch
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex h-9 w-9 items-center justify-center"
          >
            <div className="flex flex-col gap-[5px]">
              <span className="block h-px w-5" style={{ background: textColor }} />
              <span className="block h-px w-5" style={{ background: textColor }} />
              <span className="block h-px w-5" style={{ background: textColor }} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#EAEEF2] bg-white">
          <div className="flex flex-col px-6 py-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="nav-link py-3"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-fit items-center px-5 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em]"
              style={{ border: "1px solid #1C2B3A", borderRadius: 999, color: "#1C2B3A" }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
