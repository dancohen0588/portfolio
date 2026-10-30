'use client';

import { motion, useReducedMotion, easeOut } from 'motion/react';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut, staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const skillGroups = [
  {
    label: 'IA & agents',
    skills: [
      { label: 'Cursor', variant: 'violet' },
      { label: 'OpenAI Codex', variant: 'violet' },
      { label: 'Claude', variant: 'violet' },
      { label: 'Claude Code', variant: 'violet' },
      { label: 'n8n', variant: 'pink' },
      { label: 'Mistral', variant: 'pink' },
      { label: 'RAG · pgvector', variant: 'pink' },
    ],
  },
  {
    label: 'Stack & Deploy',
    skills: [
      { label: 'Next.js', variant: 'cyan' },
      { label: 'React', variant: 'cyan' },
      { label: 'Tailwind', variant: 'cyan' },
      { label: 'Supabase', variant: 'neutral' },
      { label: 'PostgreSQL', variant: 'neutral' },
      { label: 'Vercel', variant: 'neutral' },
      { label: 'Figma', variant: 'neutral' },
      { label: 'Framer Motion', variant: 'neutral' },
    ],
  },
] as const;

const chipStyles: Record<string, React.CSSProperties> = {
  violet: {
    color: '#7C3AED',
    borderColor: 'rgba(124,58,237,0.3)',
    background: '#F5F3FF',
  },
  pink: {
    color: '#DB2777',
    borderColor: 'rgba(219,39,119,0.25)',
    background: 'rgba(219,39,119,0.05)',
  },
  cyan: {
    color: '#06B6D4',
    borderColor: 'rgba(6,182,212,0.3)',
    background: '#ECFEFF',
  },
  neutral: {
    color: '#71717A',
    borderColor: '#E4E4E7',
    background: '#FFFFFF',
  },
};

export function About() {
  const shouldReduceMotion = useReducedMotion();

  const sectionProps = shouldReduceMotion
    ? {}
    : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport: { once: true } };

  const itemProps = shouldReduceMotion ? {} : { variants: itemVariants };

  return (
    <section
      id="about"
      className="bg-[var(--bg)] px-5 py-20 md:px-14 md:py-[120px]"
    >
      <motion.div
        className="mx-auto max-w-[1100px]"
        variants={containerVariants}
        {...sectionProps}
      >
        <motion.div
          className="mb-2 font-mono-custom text-[11px] uppercase tracking-[0.14em] text-[var(--violet)]"
          {...itemProps}
        >
          Qui je suis
        </motion.div>

        <motion.h2
          className="h-ink max-w-[24ch] font-cabinet text-[30px] font-extrabold leading-[1.02] tracking-[-0.04em] md:text-[40px] lg:text-[52px]"
          {...itemProps}
        >
          J&rsquo;ai passé 15 ans à faire livrer des produits.{' '}
          <span className="h-accent">Maintenant je les livre moi-même.</span>
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[3fr_2fr] md:items-start md:gap-16">
          {/* Bio */}
          <motion.div
            className="font-bricolage text-[16px] leading-[1.8] text-[var(--mid)]"
            {...itemProps}
          >
            <p className="mb-5">
              <strong className="text-[var(--dark-text)]">
                Ingénieur ISEP (spécialisation IA) et Université de Sherbrooke.
              </strong>{' '}
              Conseil SI chez Beijaflore et Wavestone, direction de projets digitaux en agence
              pour TF1, Bouygues Telecom, Sarenza et M&rsquo;Monoprix, puis Product Owner
              e-commerce et PMO chez Monoprix.
            </p>
            <p className="mb-5">
              Depuis 2025, je travaille en freelance sous DCO-IT comme{' '}
              <strong className="text-[var(--dark-text)]">ingénieur IA embarqué</strong> : je
              cadre les cas d&rsquo;usage avec le métier et je construis moi-même les workflows,
              les agents et les prompts, avec transfert de compétences aux équipes.
            </p>
            <p className="mb-5">
              Je suis aussi CPO et co-fondateur de{' '}
              <strong className="text-[var(--dark-text)]">Pretx</strong>, un CRM SaaS pour les
              intermédiaires en crédit, que je pilote sur le volet produit.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <a
                href="/Dan-COHEN-CV-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[100px] px-6 py-3 font-mono-custom text-[13px] font-semibold tracking-[0.04em] text-white transition-opacity duration-150 hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #DB2777)' }}
              >
                Voir mon CV
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12L12 2M12 2H6M12 2V8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <Link
                href="/experiences"
                className="inline-flex items-center gap-2 rounded-[100px] border px-6 py-3 font-mono-custom text-[13px] font-semibold tracking-[0.04em] transition-colors duration-150 hover:border-[var(--violet)] hover:text-[var(--violet)]"
                style={{ borderColor: '#E4E4E7', color: '#18181B' }}
              >
                Mes expériences →
              </Link>
            </div>
          </motion.div>

          {/* Skills groupés */}
          <motion.div className="flex flex-col gap-6" {...itemProps}>
            {skillGroups.map((group) => (
              <div key={group.label}>
                <div className="mb-3 font-mono-custom text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.label}
                      className="cursor-default whitespace-nowrap rounded-[100px] border px-4 py-2 font-mono-custom text-[12px] font-medium transition-transform duration-150 hover:scale-105"
                      style={chipStyles[skill.variant]}
                    >
                      {skill.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
