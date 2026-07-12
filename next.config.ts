import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

// NODE_ENV ainda não está definido quando o Next carrega este arquivo,
// por isso a distinção dev/produção usa o `phase` recebido pelo config.
const buildCsp = (isDev: boolean) =>
  [
    "default-src 'self'",
    // 'unsafe-inline' é exigido pelos scripts inline de bootstrap do Next e pelo JSON-LD do layout;
    // 'unsafe-eval' e va.vercel-scripts.com só existem em dev (debugging do React e script de debug do Vercel Analytics)
    `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval' https://va.vercel-scripts.com" : ""}`,
    // 'unsafe-inline' cobre os styles inline do next/font e as animações do Framer Motion
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' blob: data:",
    "font-src 'self'",
    // ws: permite o WebSocket de hot reload em dev
    `connect-src 'self'${isDev ? " ws:" : ""}`,
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    ...(isDev ? [] : ["upgrade-insecure-requests"]),
  ].join("; ");

const buildSecurityHeaders = (isDev: boolean) => [
  { key: "Content-Security-Policy", value: buildCsp(isDev) },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig = (phase: string): NextConfig => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    poweredByHeader: false,
    async headers() {
      return [
        {
          source: "/:path*",
          headers: buildSecurityHeaders(isDev),
        },
      ];
    },
  };
};

export default nextConfig;
