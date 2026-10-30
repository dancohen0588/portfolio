'use client';

import { motion, useReducedMotion, easeOut } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type Offer = {
  num: string;
  title: string;
  audience: string;
  description: string;
  bullets: string[];
  format: string;
  reference: string;
  main?: boolean;
};

const offers: Offer[] = [
  {
    num: "01 / Cœur de l'offre",
    title: 'Déploiement IA embarqué',
    audience: 'PME · ETI · un sponsor dirigeant ou DSI',
    description:
      "Je rejoins votre entreprise 1 à 3 jours par semaine. Je cadre les cas d'usage avec vos équipes métier et je construis les systèmes en direct : agents IA, RAG, automatisations, connexions ERP et PIM.",
    bullets: [
      "Cas d'usage prioritaire en production en premier",
      'Architecture souveraine si nécessaire (Mistral, Claude sur Bedrock UE)',
      'Transfert aux équipes inclus',
    ],
    format: '1 à 3 j / semaine, 1 à 3 mois',
    reference: 'Daum',
    main: true,
  },
  {
    num: '02 / Formation',
    title: 'Formation IA des équipes',
    audience: 'Équipes métier · dirigeants · développeurs',
    description:
      "Vos salariés utilisent déjà l'IA, souvent sans cadre. Je les forme sur leurs propres cas, avec vos outils, et je laisse des prompts, des agents et une charte d'usage.",
    bullets: [
      'Ateliers par métier (commerce, ADV, marketing, RH)',
      'Version dirigeants : décider et piloter',
      'Version dev : Claude Code, Cursor, agents',
    ],
    format: '½ à 2 jours par équipe + office hours',
    reference: 'Daum, équipes métier',
  },
  {
    num: '03 / Build',
    title: 'Build express',
    audience: 'Un outil interne, un site, une app',
    description:
      "Un besoin précis, un outil sur mesure livré et hébergé. Gestion d'inscriptions, classements, dashboards, sites professionnels.",
    bullets: [
      'Forfait, périmètre fixé au brief',
      "Hébergement 0 €/mois quand c'est possible",
      '30 jours de support inclus',
    ],
    format: '3 à 10 jours, forfait',
    reference: "Nakache, Monop'Foot, Belote",
  },
];

export function Services() {
  const shouldReduceMotion = useReducedMotion();

  const sectionProps = shouldReduceMotion
    ? {}
    : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport: { once: true } };

  const itemProps = shouldReduceMotion ? {} : { variants: itemVariants };

  return (
    <section id="services" className="bg-[var(--bg)] px-5 py-20 md:px-14 md:py-[120px]">
      <motion.div className="mx-auto max-w-[1100px]" variants={containerVariants} {...sectionProps}>
        <motion.div
          className="font-mono-custom text-[11px] uppercase tracking-[0.14em] text-[var(--violet)]"
          {...itemProps}
        >
          Les offres
        </motion.div>

        <motion.h2
          className="h-ink mt-2 max-w-[20ch] font-cabinet text-[30px] font-extrabold leading-[1.02] tracking-[-0.04em] md:text-[40px] lg:text-[52px]"
          {...itemProps}
        >
          Trois façons de <span className="h-accent">travailler ensemble</span>
        </motion.h2>

        <motion.p
          className="mt-4 max-w-[560px] font-bricolage text-[17px] text-[var(--muted)]"
          {...itemProps}
        >
          Dans l&rsquo;ordre où mes clients les achètent : on déploie, on forme, on construit.
        </motion.p>

        <motion.div
          className="mt-10 grid gap-[18px] md:grid-cols-[1.2fr_1fr_1fr]"
          {...itemProps}
        >
          {offers.map((offer) => {
            const main = offer.main === true;
            return (
              <motion.article
                key={offer.title}
                className="flex flex-col rounded-[20px] border p-7"
                style={
                  main
                    ? { background: '#18181B', borderColor: '#18181B', color: '#ffffff' }
                    : { background: 'var(--white)', borderColor: 'var(--border)' }
                }
                whileHover={
                  shouldReduceMotion || main
                    ? undefined
                    : {
                        y: -6,
                        borderColor: '#7C3AED',
                        boxShadow: '0 20px 60px rgba(124, 58, 237, 0.10)',
                        transition: { duration: 0.2 },
                      }
                }
                {...itemProps}
              >
                <div
                  className="font-mono-custom text-[11px] uppercase tracking-[0.1em]"
                  style={{ color: main ? '#A1A1AA' : 'var(--muted)' }}
                >
                  {offer.num}
                </div>

                <h3
                  className="mt-3.5 font-cabinet text-[22px] font-extrabold leading-[1.1] tracking-[-0.025em]"
                  style={{ color: main ? '#ffffff' : 'var(--ink)' }}
                >
                  {offer.title}
                </h3>

                <div
                  className="mt-2 font-bricolage text-[13px]"
                  style={{ color: main ? '#A1A1AA' : 'var(--muted)' }}
                >
                  {offer.audience}
                </div>

                <p
                  className="mt-3.5 flex-1 font-bricolage text-[14.5px] leading-[1.6]"
                  style={{ color: main ? '#D4D4D8' : 'var(--mid)' }}
                >
                  {offer.description}
                </p>

                <ul
                  className="mt-3 list-disc pl-[18px] font-bricolage text-[14px]"
                  style={{ color: main ? '#D4D4D8' : 'var(--mid)' }}
                >
                  {offer.bullets.map((b) => (
                    <li key={b} className="mt-1">
                      {b}
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-5 grid gap-1 border-t pt-4 font-mono-custom text-[12px]"
                  style={{
                    borderColor: main ? '#3F3F46' : 'var(--border)',
                    color: main ? '#A1A1AA' : 'var(--muted)',
                  }}
                >
                  <span>
                    Format ·{' '}
                    <strong
                      className="font-medium"
                      style={{ color: main ? '#ffffff' : 'var(--dark-text)' }}
                    >
                      {offer.format}
                    </strong>
                  </span>
                  <span>
                    Référence ·{' '}
                    <strong
                      className="font-medium"
                      style={{ color: main ? '#ffffff' : 'var(--dark-text)' }}
                    >
                      {offer.reference}
                    </strong>
                  </span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
