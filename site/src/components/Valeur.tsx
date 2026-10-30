'use client';

import { motion, useReducedMotion, easeOut } from 'motion/react';

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

const cards = [
  {
    mark: '{ }',
    title: 'Je code dans vos systèmes',
    body: 'Agents, RAG sur vos données, workflows n8n, intégrations API et ERP. Pas un POC sur un laptop : un système branché sur votre PIM, votre CRM, vos mails.',
  },
  {
    mark: '>_',
    title: 'Je forme vos équipes sur leurs vrais cas',
    body: "Ateliers par métier, charte d'usage, prompts et agents prêts à l'emploi. Vos équipes reprennent la main sur ce que j'ai construit.",
  },
  {
    mark: '15',
    title: 'Je parle métier',
    body: '15 ans de Product Owner et de direction de projets chez Monoprix, TF1, Bouygues Telecom. Je cadre avec la direction commerciale, pas avec un data lab.',
  },
];

export function Valeur() {
  const shouldReduceMotion = useReducedMotion();

  const sectionProps = shouldReduceMotion
    ? {}
    : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport: { once: true } };

  const itemProps = shouldReduceMotion ? {} : { variants: itemVariants };

  return (
    <section id="valeur" className="bg-[var(--white)] px-5 py-20 md:px-14 md:py-[120px]">
      <motion.div className="mx-auto max-w-[1100px]" variants={containerVariants} {...sectionProps}>
        <motion.div
          className="font-mono-custom text-[11px] uppercase tracking-[0.14em] text-[var(--violet)]"
          {...itemProps}
        >
          Le problème
        </motion.div>

        <motion.h2
          className="h-ink mt-2 max-w-[20ch] font-cabinet text-[30px] font-extrabold leading-[1.02] tracking-[-0.04em] md:text-[40px] lg:text-[52px]"
          {...itemProps}
        >
          Pourquoi vos projets IA n&rsquo;arrivent pas{' '}
          <span className="h-accent">en production</span>
        </motion.h2>

        <motion.p
          className="mt-4 max-w-[560px] font-bricolage text-[17px] text-[var(--muted)]"
          {...itemProps}
        >
          77 % des ETI françaises utilisent l&rsquo;IA générative, 17 % en tirent un gain de temps
          (Bpifrance, 2026). Entre les deux, il manque quelqu&rsquo;un qui code, déploie et forme,
          dans vos outils et avec vos équipes.
        </motion.p>

        <motion.div className="mt-10 grid gap-5 md:grid-cols-3" {...itemProps}>
          {cards.map((card) => (
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
              <div className="mb-5 flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[var(--violet-l)] font-mono-custom text-[13px] text-[var(--violet)]">
                {card.mark}
              </div>

              <h3 className="font-cabinet text-[19px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--ink)]">
                {card.title}
              </h3>

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
