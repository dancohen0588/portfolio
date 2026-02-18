'use client';

import { useReducedMotion, motion } from 'framer-motion';

const fadeContainer = {
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

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerProps = shouldReduceMotion
    ? {}
    : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport: { once: true } };

  const itemAnimationProps = shouldReduceMotion ? {} : { variants: fadeItem };

  const blobAnimationProps = shouldReduceMotion
    ? {}
    : {
        animate: { y: [0, -20, 0], scale: [1, 1.05, 1] },
        transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
      };

  const dotAnimationProps = shouldReduceMotion
    ? {}
    : {
        animate: { opacity: [1, 0.3, 1] },
        transition: { duration: 2, repeat: Infinity },
      };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[var(--bg)] px-5 pt-[140px] pb-20 md:px-14"
    >
      {/* Blobs de fond */}
      <motion.div
        className="pointer-events-none absolute -top-[200px] -right-[100px] h-[700px] w-[700px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(124,58,237,0.08) 0%, transparent 70%)',
        }}
        {...blobAnimationProps}
      />

      <motion.div
        className="pointer-events-none absolute -bottom-[100px] -left-[150px] h-[500px] w-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(219,39,119,0.06) 0%, transparent 70%)',
        }}
        {...blobAnimationProps}
      />

      <motion.div
        className="relative mx-auto max-w-[1100px] text-left"
        variants={fadeContainer}
        {...containerProps}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex w-fit items-center gap-2 px-4 py-1.5 text-[12px] font-mono-custom uppercase tracking-[0.06em]"
          style={{
            background: '#F5F3FF',
            border: '1px solid rgba(124,58,237,0.2)',
            borderRadius: 100,
            color: '#7C3AED',
            fontWeight: 700,
          }}
          {...itemAnimationProps}
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: '#7C3AED' }}
            {...dotAnimationProps}
          />
          Expert Vibe Coding &amp; Développement IA
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="mt-8 max-w-[800px] font-cabinet text-[44px] font-extrabold leading-[0.95] tracking-[-0.04em] text-[var(--dark-text)] md:text-[64px] lg:text-[80px]"
          {...itemAnimationProps}
        >
          Je{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            vibe code
          </span>
          <br />
          votre prochain
          <br />
          outil. <span className="text-[#06B6D4]">En jours.</span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          className="mt-8 max-w-[520px] text-[15px] font-bricolage text-[var(--muted)] md:text-[18px]"
          {...itemAnimationProps}
        >
          Sites web, dashboards, apps mobiles sur mesure. Ingénieur + 15 ans Product chez
          Monoprix, TF1, Bouygues — livré 5× plus vite avec les meilleurs outils IA.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-start gap-4"
          {...itemAnimationProps}
        >
          <button
            type="button"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center gap-2 text-[15px] font-bricolage font-bold text-white shadow-[0_12px_36px_rgba(124,58,237,0.30)] transition-transform hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
              borderRadius: 100,
              padding: '15px 36px',
            }}
          >
            Discutons de votre projet ✦
          </button>

          <button
            type="button"
            onClick={() =>
              document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center rounded-full border-2 border-[var(--border)] bg-[var(--white)] px-7 py-3 text-[15px] font-bricolage font-semibold text-[var(--mid)] transition-colors hover:border-[var(--violet)] hover:text-[var(--violet)]"
          >
            Voir mes projets ↓
          </button>
        </motion.div>

        {/* Métriques */}
        <motion.div
          className="mt-16 grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:gap-10"
          {...itemAnimationProps}
        >
          <div className="flex flex-col">
            <div
              className="font-cabinet text-4xl font-extrabold leading-none tracking-[-0.04em]"
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              5×
            </div>
            <div className="mt-1 text-xs text-[var(--muted)]">
              plus rapide qu&apos;un dev classique
            </div>
          </div>

          <div className="flex flex-col">
            <div
              className="font-cabinet text-4xl font-extrabold leading-none tracking-[-0.04em]"
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              15
            </div>
            <div className="mt-1 text-xs text-[var(--muted)]">ans en Product Management</div>
          </div>

          <div className="flex flex-col">
            <div
              className="font-cabinet text-4xl font-extrabold leading-none tracking-[-0.04em]"
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              3j
            </div>
            <div className="mt-1 text-xs text-[var(--muted)]">délai moyen de livraison</div>
          </div>
        </motion.div>

        {/* Logos clients */}
        <motion.div
          className="mt-14 flex flex-wrap items-center gap-3"
          {...itemAnimationProps}
        >
          <span className="text-[12px] font-medium text-[var(--muted)]">
            Clients &amp; missions :
          </span>
          {['Monoprix', 'Bouygues Telecom', 'TF1', 'Sarenza'].map((name) => (
            <span
              key={name}
              className="font-mono-custom text-[11px] text-[var(--muted)] rounded-full border border-[var(--border)] bg-[var(--white)] px-3 py-1"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

