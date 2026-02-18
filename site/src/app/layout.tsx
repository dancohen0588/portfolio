import type { Metadata } from "next";
import { Bricolage_Grotesque, Fira_Code } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
  variable: "--font-bricolage",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Dan Cohen — Expert Vibe Coding & Développement IA",
  description:
    "Je vibe code votre prochain outil digital en quelques jours. Sites web, dashboards, apps mobiles sur mesure. Ingénieur ISEP + 15 ans Product chez Monoprix, TF1, Bouygues.",
  keywords: ["vibe coding", "développement IA", "freelance", "Next.js", "Cursor", "MALT"],
  openGraph: {
    title: "Dan Cohen — Expert Vibe Coding",
    description: "Je vibe code votre prochain outil. En jours.",
    url: "https://dancohen.dev",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${bricolage.variable} ${firaCode.variable}`}>
      <head>
        {/* Cabinet Grotesk via Fontshare (non disponible sur Google Fonts) */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${bricolage.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

