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

export function Experiences() {
  const shouldReduceMotion = useReducedMotion();

  const sectionProps = shouldReduceMotion
    ? {}
    : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport: { once: true } };

  const itemProps = shouldReduceMotion ? {} : { variants: itemVariants };

  return (
    <section id="experiences" className="bg-[var(--white)] px-5 py-20 md:px-14 md:py-[120px]">
      <motion.div
        className="mx-auto max-w-[1100px]"
        variants={containerVariants}
        {...sectionProps}
      >
        <motion.div
          className="font-mono-custom text-[11px] uppercase tracking-[0.14em] text-[var(--violet)]"
          {...itemProps}
        >
          // expériences
        </motion.div>

        <motion.h2
          className="mt-2 font-cabinet text-[30px] font-extrabold leading-tight tracking-[-0.04em] text-[var(--dark-text)] md:text-[40px] lg:text-[52px]"
          {...itemProps}
        >
          Missions & Rôles
        </motion.h2>

        <motion.p
          className="mt-4 max-w-[480px] font-bricolage text-[17px] text-[var(--muted)]"
          {...itemProps}
        >
          Les projets qui ont construit mon expertise produit.
        </motion.p>

        <motion.div className="mt-10 flex flex-col gap-5" {...itemProps}>
          {/* Card 1 — Le Tournoi des Frérots */}
          <motion.div
            className="rounded-[20px] border border-[var(--border)] bg-[var(--bg)] p-7"
            style={{ borderLeft: '4px solid #7C3AED' }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: -4,
                    boxShadow: '0 20px 60px rgba(124, 58, 237, 0.10)',
                    transition: { duration: 0.2 },
                  }
            }
            {...itemProps}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div
                  className="mb-2 inline-block rounded-[100px] px-3 py-1 font-mono-custom text-[10px] tracking-[0.08em]"
                  style={{
                    background: 'rgba(124,58,237,0.08)',
                    color: '#7C3AED',
                    border: '1px solid rgba(124,58,237,0.2)',
                  }}
                >
                  2026 — présent
                </div>
                <div className="font-mono-custom text-[11px] tracking-[0.08em] text-[var(--muted)]">
                  Concepteur & Développeur (Vibe Coding)
                </div>
              </div>
              <div
                className="inline-flex items-center gap-1.5 rounded-[100px] px-3.5 py-2 text-[13px] font-bold"
                style={{
                  background: 'rgba(34,197,94,0.10)',
                  color: '#16A34A',
                  border: '1px solid rgba(34,197,94,0.25)',
                }}
              >
                ✦ 50+ équipes · 0 gestion manuelle
              </div>
            </div>

            <h3 className="mt-4 font-cabinet text-[20px] font-extrabold tracking-[-0.02em] text-[var(--dark-text)]">
              Le Tournoi des Frérots — Plateforme Padel
            </h3>

            <p className="mt-3 font-bricolage text-[15px] leading-relaxed text-[var(--muted)]">
              Conception et développement en 5 jours d&rsquo;une plateforme web complète pour gérer
              un tournoi de padel à 50+ équipes. Inscriptions en ligne, tirage au sort automatique,
              tableau de résultats en temps réel, notifications automatiques aux participants.
            </p>

            <div className="mt-4 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div
                  className="font-mono-custom text-[11px] tracking-[0.04em]"
                  style={{ color: '#A1A1AA' }}
                >
                  VSCode · Claude Code · Next.js · Neon · Vercel
                </div>
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="font-bricolage text-[13px] font-bold transition-opacity hover:opacity-70"
                  style={{ color: 'var(--cyan)' }}
                >
                  Voir le projet →
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Pretx */}
          <motion.div
            className="rounded-[20px] border border-[var(--border)] bg-[var(--bg)] p-7"
            style={{ borderLeft: '4px solid #DB2777' }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: -4,
                    boxShadow: '0 20px 60px rgba(219, 39, 119, 0.08)',
                    transition: { duration: 0.2 },
                  }
            }
            {...itemProps}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div
                  className="mb-2 inline-block rounded-[100px] px-3 py-1 font-mono-custom text-[10px] tracking-[0.08em]"
                  style={{
                    background: 'rgba(219,39,119,0.08)',
                    color: '#DB2777',
                    border: '1px solid rgba(219,39,119,0.2)',
                  }}
                >
                  2024 — présent
                </div>
                <div className="font-mono-custom text-[11px] tracking-[0.08em] text-[var(--muted)]">
                  CPO & Associé
                </div>
              </div>
            </div>

            <h3 className="mt-4 font-cabinet text-[20px] font-extrabold tracking-[-0.02em] text-[var(--dark-text)]">
              Pretx — Fintech Regroupement de Crédits
            </h3>

            <p className="mt-3 font-bricolage text-[15px] leading-relaxed text-[var(--muted)]">
              Co-pilotage de la stratégie produit d&rsquo;une fintech spécialisée dans le
              regroupement de crédits et l&rsquo;accompagnement budgétaire des particuliers. Vision
              produit, roadmap, priorisation des fonctionnalités et pilotage des cycles de
              développement en méthode agile. Actionnaire de la société.
            </p>

            <p
              className="mt-2 font-bricolage text-[13px] italic leading-relaxed"
              style={{ color: '#A1A1AA' }}
            >
              Rôle exclusivement produit et stratégique — non impliqué dans le développement
              technique ou IA.
            </p>

            <div className="mt-4 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div
                  className="font-mono-custom text-[11px] tracking-[0.04em]"
                  style={{ color: '#A1A1AA' }}
                >
                  Product Strategy · Roadmap · Agile · Figma
                </div>
                <a
                  href="https://pretx.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bricolage text-[13px] font-bold transition-opacity hover:opacity-70"
                  style={{ color: 'var(--cyan)' }}
                >
                  pretx.fr →
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
