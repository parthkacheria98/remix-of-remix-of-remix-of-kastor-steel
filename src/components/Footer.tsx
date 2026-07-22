import { Link } from "@tanstack/react-router";
import { Socials } from "./Socials";

const kastorLogo = { url: "/assets/kastor-logo.png" };

export function Footer() {
  return (
    <footer style={{ background: "#1C2B3A", color: "#FFFFFF" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-4 pb-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <img
              src={kastorLogo.url}
              alt="Kastor International FZE"
              className="h-16 w-auto md:h-20"
            />
            <p
              className="mt-5 max-w-md text-sm md:text-base"
              style={{ color: "#A8B7C4", lineHeight: 1.8, fontWeight: 300, whiteSpace: "pre-line" }}

            >
              Our commitment is etched in steel{"\n\n\n"}
              Distribution of prime CRGO Electrical Steel to manufacturers around the globe

            </p>
          </div>

          <div>
            <div className="label-eyebrow" style={{ color: "#7BA7C2" }}>Navigate</div>
            <ul className="mt-5 space-y-3 text-sm" style={{ color: "#D5DEE6" }}>
              {[
                ["/", "Home"],
                ["/about", "About Us"],
                ["/testimonials", "Testimonials"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="ulink hover:text-white">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="label-eyebrow" style={{ color: "#7BA7C2" }}>Contact</div>
            <ul className="mt-5 space-y-3 text-sm" style={{ color: "#D5DEE6" }}>
              <li><a className="ulink" href="mailto:janil@kastorintl.com">janil@kastorintl.com</a></li>
              <li><a className="ulink" href="tel:+971521372730">+971 52 137 2730</a></li>
              <li><a className="ulink" href="tel:+919820025838">+91 98200 25838</a></li>
              <li style={{ color: "#A8B7C4" }}>
                ELOB Office No. E-23F-43<br />
                Hamriyah Free Zone, Sharjah, UAE
              </li>
            </ul>

            <div className="mt-6">
              <div className="label-eyebrow mb-3" style={{ color: "#7BA7C2" }}>Follow Us</div>
              <Socials tone="dark" />
            </div>
          </div>
        </div>

        <div
          className="mt-16 border-t pt-6 text-xs"
          style={{ borderColor: "rgba(234,238,242,0.12)", color: "#A8B7C4" }}
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Kastor International FZE. All rights reserved.</div>
            <div>Hamriyah Free Zone · Sharjah, United Arab Emirates</div>
          </div>
          <div className="mt-10 md:mt-16 text-center">
            Made by{" "}
            <a
              href="https://www.platify.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
              style={{ color: "#7BA7C2" }}
            >
              Platify
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
