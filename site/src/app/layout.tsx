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
  title: "Dan Cohen — Forward Deployed Engineer IA · Déploiement & formation IA en entreprise",
  description:
    "Ingénieur IA embarqué chez vous : je mets vos cas d'usage IA en production dans vos outils et je forme vos équipes. Ingénieur ISEP, 15 ans de Product chez Monoprix, TF1, Bouygues.",
  keywords: [
    "forward deployed engineer",
    "déploiement IA entreprise",
    "formation IA équipes",
    "développement IA",
    "agents IA",
    "n8n",
    "freelance IA",
  ],
  openGraph: {
    title: "Dan Cohen — Forward Deployed Engineer IA",
    description: "Vos ambitions IA, transformées en résultats.",
    url: "https://dancohen.fr",
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

