type Props = { tone?: "light" | "dark"; size?: number };

export function Socials({ tone = "light", size = 22 }: Props) {
  const color = tone === "dark" ? "#D5DEE6" : "#1C2B3A";
  const hover = "#7BA7C2";
  const items = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/kastorinternational",
      svg: (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/kastor-international-fze/",
      svg: (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
          <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.94v5.666H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.267 2.37 4.267 5.455v6.288ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.114 20.452H3.556V9h3.558v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          target="_blank"
          rel="noreferrer"
          aria-label={it.label}
          title={`Follow Kastor International FZE on ${it.label} — ${it.href}`}
          className="inline-flex items-center justify-center transition-colors"
          style={{ color }}
          onMouseEnter={(e) => (e.currentTarget.style.color = hover)}
          onMouseLeave={(e) => (e.currentTarget.style.color = color)}
        >
          {it.svg}
        </a>
      ))}
    </div>
  );
}
