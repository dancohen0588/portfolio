import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import { Nav } from '../components/Nav';

export const metadata: Metadata = {
  title: 'Dan Cohen — Expert Vibe Coding & Développement IA',
  description:
    "Je vibe code votre prochain outil digital en quelques jours. Sites web, dashboards, apps mobiles sur mesure. Ingénieur ISEP + 15 ans Product chez Monoprix, TF1, Bouygues.",
  keywords: ['vibe coding', 'développement IA', 'freelance', 'Next.js', 'Cursor', 'MALT'],
  openGraph: {
    title: 'Dan Cohen — Expert Vibe Coding',
    description: 'Je vibe code votre prochain outil. En jours.',
    url: 'https://dancohen.dev',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--dark-text)] font-bricolage antialiased">
        <Nav />
        <main className="pt-16">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}

