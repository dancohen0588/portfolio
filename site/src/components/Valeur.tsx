'use client';

import { motion, useReducedMotion, easeOut } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Valeur() {
  const shouldReduceMotion = useReducedMotion();

  const sectionProps = shouldReduceMotion
    ? {}
    : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport: { once: true } };

  const itemProps = shouldReduceMotion ? {} : { variants: itemVariants };

  return (
    <section
      id="valeur"
      className="bg-[var(--white)] px-5 py-20 md:px-14 md:py-[120px]"
    >
      <motion.div
        className="mx-auto max-w-[1100px]"
        variants={containerVariants}
        {...sectionProps}
      >
        <motion.div
          className="font-mono-custom text-[11px] uppercase tracking-[0.14em] text-[var(--violet)]"
          {...itemProps}
        >
          // pourquoi moi
        </motion.div>

        <motion.h2
          className="mt-2 font-cabinet text-[30px] font-extrabold leading-tight tracking-[-0.04em] text-[var(--dark-text)] md:text-[40px] lg:text-[52px]"
          {...itemProps}
        >
          Un dev IA,
          <br />
          pas juste{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            un dev
          </span>
        </motion.h2>

        <motion.p
          className="mt-4 max-w-[480px] font-bricolage text-[17px] text-[var(--muted)]"
          {...itemProps}
        >
          Trois avantages concrets qui font la différence pour vos projets.
        </motion.p>

        <motion.div
          className="mt-10 grid gap-5 md:grid-cols-3"
          {...itemProps}
        >
          {[
            {
              icon: '⚡',
              title: 'Livraison express',
              metric: '→ 5× plus rapide',
              body: "J'utilise les meilleurs outils IA du marché — Cursor, Codex, Claude — pour coder en jours ce qu'un dev classique prend des semaines à livrer.",
            },
            {
              icon: '🎯',
              title: 'Compréhension métier',
              metric: '→ 15 ans Product',
              body: 'PM chez Monoprix, TF1, Bouygues — je transforme des besoins complexes en produits qui marchent, sans réunion inutile ni spécifications interminables.',
            },
            {
              icon: '🔒',
              title: 'Rigueur ingénieur',
              metric: '→ ISEP · IA Sherbrooke',
              body: 'Formation ingénieur + spécialisation IA : chaque ligne est validée pour la sécurité, la performance et la maintenabilité à long terme.',
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              className="rounded-[20px] border border-[var(--border)] bg-[var(--bg)] p-7"
              whileHover={
                shouldReduceMotion
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
              <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[14px]"
                style={{
                  background:
                    'linear-gradient(135deg, #F5F3FF, rgba(219,39,119,0.06))',
                }}
              >
                <span className="text-[24px]">{card.icon}</span>
              </div>

              <h3 className="font-cabinet text-[19px] font-extrabold tracking-[-0.02em] text-[var(--dark-text)]">
                {card.title}
              </h3>

              <div className="mt-1 font-mono-custom text-[11px] text-[var(--violet)]">
                {card.metric}
              </div>

              <p className="mt-3 font-bricolage text-[14px] leading-relaxed text-[var(--muted)]">
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
