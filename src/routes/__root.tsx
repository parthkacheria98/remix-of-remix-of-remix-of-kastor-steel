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
      { title: "Kastor International FZE · Global Electrical Steel Distribution" },
      { name: "description", content: "UAE-based global distributor of prime CRGO Electrical Steel for transformer manufacturers across the Middle East, Southeast Asia, and Europe." },
      { name: "author", content: "Kastor International FZE" },
      { property: "og:title", content: "Kastor International FZE · Global Electrical Steel Distribution" },
      { property: "og:description", content: "UAE-based global distributor of prime CRGO Electrical Steel for transformer manufacturers across the Middle East, Southeast Asia, and Europe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Kastor International FZE · Global Electrical Steel Distribution" },
      { name: "twitter:description", content: "UAE-based global distributor of prime CRGO Electrical Steel for transformer manufacturers across the Middle East, Southeast Asia, and Europe." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/31fedfa8-8284-4e65-9607-1c67b2da2591/id-preview-ca01ad24--5ab4a263-7ea3-4f3e-ad6c-f81c4b216a25.lovable.app-1781726151270.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/31fedfa8-8284-4e65-9607-1c67b2da2591/id-preview-ca01ad24--5ab4a263-7ea3-4f3e-ad6c-f81c4b216a25.lovable.app-1781726151270.png" },
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
