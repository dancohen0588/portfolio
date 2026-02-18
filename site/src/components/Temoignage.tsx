'use client';

import { motion, useReducedMotion, easeOut } from 'framer-motion';

export function Temoignage() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUpProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, ease: easeOut },
      };

  return (
    <section
      id="testimonial"
      className="px-5 py-[100px] md:px-14"
      style={{ background: '#18181B' }}
    >
      <div className="mx-auto max-w-[700px] text-center">
        <motion.div {...fadeUpProps}>
          <div
            className="mb-8 inline-block rounded-[100px] px-4 py-1.5 font-mono-custom text-[11px] tracking-[0.1em]"
            style={{
              background: 'rgba(6,182,212,0.15)',
              color: 'var(--cyan)',
              border: '1px solid rgba(6,182,212,0.2)',
            }}
          >
            // testimonial
          </div>

          <blockquote
            className="mb-8 font-cabinet font-bold leading-snug tracking-[-0.02em] text-white"
            style={{ fontSize: 'clamp(20px, 3vw, 30px)' }}
          >
            &ldquo;Dan a livré notre outil en 4 jours. Ce qui m&rsquo;a frappé, c&rsquo;est
            qu&rsquo;il a compris notre besoin métier immédiatement — sans qu&rsquo;on ait besoin
            de tout expliquer.&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-3.5">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-cabinet text-[18px] font-extrabold text-white"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #DB2777)' }}
            >
              J
            </div>
            <div className="text-left">
              <div className="text-[14px] font-bold text-white">Jeremie Z.</div>
              <div className="text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Organisateur du Tournoi des Frérots
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
