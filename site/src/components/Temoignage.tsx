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
    <section id="testimonial" className="bg-[var(--bg)] px-5 py-20 md:px-14 md:py-[120px]">
      <motion.div className="mx-auto max-w-[1100px]" variants={containerVariants} {...sectionProps}>
        <motion.div
          className="font-mono-custom text-[11px] uppercase tracking-[0.14em] text-[var(--violet)]"
          {...itemProps}
        >
          Ils en parlent
        </motion.div>

        <motion.h2
          className="h-ink mt-2 font-cabinet text-[30px] font-extrabold leading-[1.02] tracking-[-0.04em] md:text-[40px] lg:text-[52px]"
          {...itemProps}
        >
          Ce que disent <span className="h-accent">les clients</span>
        </motion.h2>

        <div className="mt-10 grid gap-[18px] md:grid-cols-2">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              className="flex flex-col gap-5 rounded-[20px] border border-[var(--border)] bg-[var(--white)] p-7"
              {...itemProps}
            >
              <div
                className="w-fit font-cabinet text-[40px] leading-[0.6]"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <blockquote className="flex-1 font-bricolage text-[16px] leading-[1.6] text-[var(--mid)]">
                {t.quote}
              </blockquote>

              <div className="flex items-center gap-3.5">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-cabinet text-[18px] font-extrabold text-white"
                  style={{ background: 'linear-gradient(135deg, #7C3AED, #DB2777)' }}
                >
                  {t.initial}
                </div>
                <div className="text-left">
                  <div className="text-[14px] font-bold text-[var(--ink)]">{t.name}</div>
                  <div className="text-[13px] text-[var(--muted)]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
