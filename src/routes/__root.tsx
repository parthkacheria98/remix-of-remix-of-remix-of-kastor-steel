import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Nav />
      <div className="flex flex-1 items-center justify-center px-6 pt-24">
        <div className="max-w-md text-center">
          <div className="label-eyebrow" style={{ color: "#4F7C9E" }}>Error 404</div>
          <h1 className="mt-4 text-5xl font-light text-[#1C2B3A]">Page not found</h1>
          <p className="mt-4 text-sm" style={{ color: "#4A5F72" }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center px-6 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.18em]"
            style={{ border: "1px solid #1C2B3A", borderRadius: 999, color: "#1C2B3A", background: "transparent" }}
          >
            Return Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-md text-center">
        <div className="label-eyebrow" style={{ color: "#4F7C9E" }}>Something went wrong</div>
        <h1 className="mt-4 text-3xl font-light text-[#1C2B3A]">This page didn't load</h1>
        <p className="mt-3 text-sm" style={{ color: "#4A5F72" }}>
          Please try refreshing or head back home.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="px-5 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em]"
            style={{ border: "1px solid #1C2B3A", borderRadius: 999, color: "#1C2B3A", background: "transparent" }}
          >
            Try again
          </button>
          <a
            href="/"
            className="px-5 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em]"
            style={{ border: "1px solid #EAEEF2", borderRadius: 999, color: "#1C2B3A" }}
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Kastor International FZE" },
      { name: "keywords", content: "CRGO, Electrical Steel, Grain Oriented Steel, Transformer Core, CRGO Coils, CRGO Suppliers, UAE Steel Distributor, Kastor International, Janil Shah, BIS PGCIL PSPCL" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Kastor International FZE" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white">
        <Nav />
        <main className="pt-0">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
