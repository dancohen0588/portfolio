'use client';

import { motion, useReducedMotion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    num: '01 / padel',
    emoji: '🎾',
    title: 'Le Tournoi des Frérots',
    tagline: '→ livrée en 5 jours',
    desc: "30 équipes à gérer par WhatsApp. J'ai construit une plateforme complète : inscriptions, tirage au sort automatique, résultats en temps réel.",
    stack: 'VSCode · Codex · Next.js · PostgreSQL · Vercel',
    result: '✦ 50+ équipes · 0 gestion manuelle',
    href: '#',
  },
  {
    num: '02 / entreprise',
    emoji: '⚽',
    title: "Monop'Foot",
    tagline: '→ livrée en 4 jours',
    desc: 'Le club de foot interne Monoprix sans outil digital. App complète : planification, classements, notifications — remplace les feuilles Excel.',
    stack: 'Cursor · Claude Opus 4.5 · Next.js · Supabase',
    result: '✦ 52 équipes · 0 feuille Excel',
    href: '#',
  },
  {
    num: '03 / associatif',
    emoji: '🃏',
    title: 'Club de Belote de Suresnes',
    tagline: '→ livrée en 4 jours',
    desc: 'Association locale sans présence digitale. Site vitrine + espace membres + calendrier. Autonomie complète pour le bureau, 0€/mois.',
    stack: 'Bolt.new · Next.js · Neon · Resend · Vercel',
    result: '✦ 47 membres · 0€/mois',
    href: '#',
  },
];

export function Projets() {
  const shouldReduceMotion = useReducedMotion();

  const sectionProps = shouldReduceMotion
    ? {}
    : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport: { once: true } };

  const itemProps = shouldReduceMotion ? {} : { variants: itemVariants };

  return (
    <section
      id="projets"
      className="bg-[var(--bg2)] px-5 py-20 md:px-14 md:py-[120px]"
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
          // projets récents
        </motion.div>

        <motion.h2
          className="mt-2 font-cabinet text-[30px] font-extrabold leading-tight tracking-[-0.04em] text-[var(--dark-text)] md:text-[40px] lg:text-[52px]"
          {...itemProps}
        >
          Trois outils,
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            trois délais tenus
          </span>
        </motion.h2>

        <motion.p
          className="mt-4 max-w-[480px] font-bricolage text-[17px] text-[var(--muted)]"
          style={{ marginBottom: 48 }}
          {...itemProps}
        >
          Des livrables réels, pour de vraies organisations.
        </motion.p>

        <motion.div
          className="grid gap-5 md:grid-cols-3"
          {...itemProps}
        >
          {projects.map((project) => (
            <motion.div
              key={project.num}
              className="flex flex-col gap-4 rounded-[20px] border border-[var(--border)] bg-[var(--white)] px-7 py-8"
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
              <div className="font-mono-custom text-[11px] tracking-[0.12em] text-[var(--muted)]">
                {project.num}
              </div>

              <div className="text-[36px] leading-none">{project.emoji}</div>

              <div className="font-cabinet text-[20px] font-extrabold leading-snug tracking-[-0.02em] text-[var(--dark-text)]">
                {project.title}
              </div>

              <div className="font-mono-custom text-[11px] tracking-[0.04em] text-[var(--violet)]">
                {project.tagline}
              </div>

              <p className="flex-1 font-bricolage text-[14px] leading-relaxed text-[var(--muted)]">
                {project.desc}
              </p>

              <div
                className="border-t pt-3 font-mono-custom text-[11px] tracking-[0.04em]"
                style={{ borderColor: 'var(--border)', color: '#A1A1AA' }}
              >
                {project.stack}
              </div>

              <div
                className="inline-flex w-fit items-center gap-1.5 rounded-[100px] px-3.5 py-2 text-[13px] font-bold text-[var(--violet)]"
                style={{
                  background:
                    'linear-gradient(135deg, #F5F3FF, rgba(219,39,119,0.06))',
                  border: '1px solid rgba(124,58,237,0.2)',
                }}
              >
                {project.result}
              </div>

              <a
                href={project.href}
                className="inline-flex items-center gap-1.5 text-[13px] font-bold transition-[gap] duration-200 hover:gap-2.5"
                style={{ color: 'var(--cyan)' }}
              >
                Voir le projet →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
