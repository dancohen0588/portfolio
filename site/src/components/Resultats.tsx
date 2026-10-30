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

const metrics = [
  {
    value: '~70',
    label: 'signaux concurrentiels scorés chaque semaine, automatiquement',
    source: 'Daum · veille n8n',
  },
  {
    value: '1 250',
    label: 'produits interrogeables en langage naturel par les commerciaux',
    source: 'Daum · agent PIM',
  },
  {
    value: '50+',
    label: 'équipes gérées sans intervention manuelle',
    source: "Tournoi des Frérots · Monop'Foot",
  },
  {
    value: '0 €/mois',
    label: "de coût d'hébergement pour 2 projets sur 3",
    source: 'Builds express',
  },
];

export function Resultats() {
  const shouldReduceMotion = useReducedMotion();

  const sectionProps = shouldReduceMotion
    ? {}
    : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport: { once: true } };

  const itemProps = shouldReduceMotion ? {} : { variants: itemVariants };

  return (
    <section id="resultats" className="bg-[var(--white)] px-5 py-20 md:px-14 md:py-[120px]">
      <motion.div className="mx-auto max-w-[1100px]" variants={containerVariants} {...sectionProps}>
        <motion.div
          className="font-mono-custom text-[11px] uppercase tracking-[0.14em] text-[var(--violet)]"
          {...itemProps}
        >
          Résultats mesurés
        </motion.div>

        <motion.h2
          className="h-ink mt-2 font-cabinet text-[30px] font-extrabold leading-[1.02] tracking-[-0.04em] md:text-[40px] lg:text-[52px]"
          {...itemProps}
        >
          Ce que ça donne, <span className="h-accent">chiffré</span>
        </motion.h2>

        <motion.div className="mt-10 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4" {...itemProps}>
          {metrics.map((metric) => (
            <motion.div key={metric.value} className="flex flex-col" {...itemProps}>
              <div
                className="w-fit font-cabinet text-[40px] font-extrabold leading-none tracking-[-0.04em] md:text-[52px]"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {metric.value}
              </div>
              <div className="mt-2 max-w-[22ch] font-bricolage text-[14px] leading-snug text-[var(--muted)]">
                {metric.label}
              </div>
              <div className="mt-1.5 font-mono-custom text-[11px] text-[var(--muted)]">
                {metric.source}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
