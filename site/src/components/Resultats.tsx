'use client';

import { motion, useReducedMotion, easeOut } from 'framer-motion';

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
  { value: '50+', label: 'équipes gérées sans intervention manuelle' },
  { value: '3 outils', label: 'livrés en moins de 5 jours chacun' },
  { value: '0€/mois', label: "de coût d'hébergement pour 2 projets sur 3" },
];

export function Resultats() {
  const shouldReduceMotion = useReducedMotion();

  const sectionProps = shouldReduceMotion
    ? {}
    : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport: { once: true } };

  const itemProps = shouldReduceMotion ? {} : { variants: itemVariants };

  return (
    <section id="resultats" className="bg-[var(--bg2)] px-5 py-20 md:px-14 md:py-[120px]">
      <motion.div
        className="mx-auto max-w-[1100px] text-center"
        variants={containerVariants}
        {...sectionProps}
      >
        <motion.div
          className="font-mono-custom text-[11px] uppercase tracking-[0.14em] text-[var(--violet)]"
          {...itemProps}
        >
          // résultats
        </motion.div>

        <motion.h2
          className="mt-2 font-cabinet text-[30px] font-extrabold leading-tight tracking-[-0.04em] text-[var(--dark-text)] md:text-[40px]"
          {...itemProps}
        >
          Des chiffres réels, sur des projets réels.
        </motion.h2>

        <motion.div className="mt-12 grid gap-8 md:grid-cols-3" {...itemProps}>
          {metrics.map((metric) => (
            <motion.div
              key={metric.value}
              className="flex flex-col items-center gap-2"
              {...itemProps}
            >
              <div
                className="font-cabinet text-[52px] font-extrabold leading-none tracking-[-0.04em]"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {metric.value}
              </div>
              <div className="max-w-[200px] font-bricolage text-[14px] leading-snug text-[var(--muted)]">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
