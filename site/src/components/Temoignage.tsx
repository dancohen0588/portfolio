'use client';

import { motion, useReducedMotion, easeOut } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut, staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    quote:
      "Dan a livré notre outil en 4 jours. Ce qui m'a frappé, c'est qu'il a compris notre besoin métier immédiatement — sans qu'on ait besoin de tout expliquer.",
    name: 'Jeremie Z.',
    role: 'Organisateur du Tournoi des Frérots',
    initial: 'J',
  },
  {
    quote:
      "Exactement ce dont on avait besoin — un outil qui marche, sans se noyer dans des specs. Livré en temps et en heure, sans surprise.",
    name: 'M. B.',
    role: 'Responsable RH, Monoprix',
    initial: 'M',
  },
];

export function Temoignage() {
  const shouldReduceMotion = useReducedMotion();

  const sectionProps = shouldReduceMotion
    ? {}
    : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport: { once: true } };

  const itemProps = shouldReduceMotion ? {} : { variants: itemVariants };

  return (
    <section
      id="testimonial"
      className="px-5 py-[100px] md:px-14"
      style={{ background: '#18181B' }}
    >
      <motion.div
        className="mx-auto max-w-[1100px]"
        variants={containerVariants}
        {...sectionProps}
      >
        <motion.div className="mb-10 text-center" {...itemProps}>
          <div
            className="inline-block rounded-[100px] px-4 py-1.5 font-mono-custom text-[11px] tracking-[0.1em]"
            style={{
              background: 'rgba(6,182,212,0.15)',
              color: 'var(--cyan)',
              border: '1px solid rgba(6,182,212,0.2)',
            }}
          >
            // testimonial
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              className="flex flex-col gap-6 rounded-[20px] p-8"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              {...itemProps}
            >
              <blockquote
                className="flex-1 font-cabinet font-bold leading-snug tracking-[-0.02em] text-white"
                style={{ fontSize: 'clamp(17px, 2vw, 22px)' }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3.5">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-cabinet text-[18px] font-extrabold text-white"
                  style={{ background: 'linear-gradient(135deg, #7C3AED, #DB2777)' }}
                >
                  {t.initial}
                </div>
                <div className="text-left">
                  <div className="text-[14px] font-bold text-white">{t.name}</div>
                  <div className="text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
