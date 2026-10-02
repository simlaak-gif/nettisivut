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
import { ChatTarjousWidget } from "../components/ChatTarjousWidget";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  const safeError = error instanceof Error ? error : new Error(String(error));

  console.error(safeError);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(safeError, { boundary: "tanstack_root_error_component" });
  }, [safeError]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
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
      { title: "KS-Sähkö Oy — Luotettavaa sähköurakointia Keski-Suomessa" },
      {
        name: "description",
        content:
          "Paikallinen ja ammattitaitoinen sähköalan yritys Jyväskylän ja Laukaan alueella. Sähköurakointi rakennusliikkeille sekä kotitalouksien sähkötyöt — turvallisesti ja sovitussa aikataulussa.",
      },
      { name: "author", content: "KS-Sähkö Oy" },
      { property: "og:title", content: "KS-Sähkö Oy — Luotettavaa sähköurakointia Keski-Suomessa" },
      {
        property: "og:description",
        content:
          "Sähköurakointi, aliurakointi ja kotitalouksien sähkötyöt Keski-Suomessa. VastuuGroup Luotettava Kumppani.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "KS-Sähkö Oy — Luotettavaa sähköurakointia Keski-Suomessa",
      },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/kDFxTauTIeMCeqmxwS2rgD6Z1R42/social-images/social-1782190125324-Logo_k.webp",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/kDFxTauTIeMCeqmxwS2rgD6Z1R42/social-images/social-1782190125324-Logo_k.webp",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap",
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
    <html lang="fi">
      <head>
        <HeadContent />
        {/* Google tag (gtag.js) — Analytics + Google Ads conversion tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8QSTMD3RZ1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-8QSTMD3RZ1');
gtag('config', 'G-904200985N');
gtag('config', 'AW-18075345752');`,
          }}
        />

        {/* ChatGPT Ads / OpenAI Ads Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://oaiq.openai.com/pixel.js?id='+i;f.parentNode.insertBefore(j,f);
}(window,document,'script','oaiq','68P6a7NmY1s5Dx8C3eKGyD');
oaiq('init', '68P6a7NmY1s5Dx8C3eKGyD');
oaiq('track', 'PageView');`,
          }}
        />
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
      {/* Required: nested routes render here */}
      <Outlet />
      {/* Interaktiivinen Tarjouspyyntö-Chat-Widget näkyy nyt kaikilla sivuilla */}
      <ChatTarjousWidget />
    </QueryClientProvider>
  );
}
