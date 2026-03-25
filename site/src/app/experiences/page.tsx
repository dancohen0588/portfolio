import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ExperiencesPage } from '@/components/ExperiencesPage';

export const metadata: Metadata = {
  title: 'Expériences — Dan Cohen',
  description:
    "15 ans de missions grands comptes — Product Owner, Project Manager et Consultant chez Monoprix, TF1, Bouygues Telecom, Wavestone et Beijaflore.",
  openGraph: {
    title: 'Expériences — Dan Cohen',
    description: '15 ans de missions grands comptes en product management.',
    url: 'https://dancohen.dev/experiences',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Experiences() {
  return (
    <>
      <Nav />
      <ExperiencesPage />
      <Footer />
    </>
  );
}
