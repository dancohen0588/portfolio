'use client';

import { motion, useReducedMotion, easeOut } from 'framer-motion';

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
    label: 'IA & Vibe Coding',
    skills: [
      { label: 'Cursor', variant: 'violet' },
      { label: 'OpenAI Codex', variant: 'violet' },
      { label: 'Claude', variant: 'violet' },
      { label: 'Lovable', variant: 'pink' },
      { label: 'Bolt.new', variant: 'pink' },
      { label: 'v0.dev', variant: 'pink' },
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
      { label: 'n8n', variant: 'neutral' },
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
          // à propos
        </motion.div>

        <motion.h2
          className="font-cabinet text-[30px] font-extrabold leading-tight tracking-[-0.04em] text-[var(--dark-text)] md:text-[40px] lg:text-[52px]"
          {...itemProps}
        >
          Ingénieur + PM
          <br />+{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Vibe Coder
          </span>
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[3fr_2fr] md:items-start md:gap-16">
          {/* Bio */}
          <motion.div
            className="font-bricolage text-[16px] leading-[1.8] text-[var(--mid)]"
            {...itemProps}
          >
            <p className="mb-5">
              <strong className="text-[var(--dark-text)]">
                Ingénieur de formation (ISEP, spécialisation IA)
              </strong>
              , je passe ma carrière à transformer des idées complexes en produits digitaux qui
              fonctionnent.
            </p>
            <p className="mb-5">
              Après{' '}
              <strong className="text-[var(--dark-text)]">
                15 ans à piloter des apps mobiles
              </strong>{' '}
              pour Monoprix, TF1 et Bouygues, j&rsquo;ai adopté les meilleurs outils d&rsquo;IA
              générative pour livrer des solutions sur mesure 5× plus vite — sans sacrifier la
              qualité.
            </p>
            <p className="mb-5">
              Le vibe coding n&rsquo;est pas un raccourci. C&rsquo;est une méthode. Et ma formation
              technique garantit que ce qui est livré est solide, sécurisé et maintenable.
            </p>
            <p className="mb-5">
              Parallèlement, je suis CPO et actionnaire chez{' '}
              <strong className="text-[var(--dark-text)]">Pretx</strong>, une fintech que je
              co-pilote sur le volet stratégie produit — un rôle purement produit, distinct de mon
              activité de développement.
            </p>
            <a
              href="/Dan-COHEN-CV-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-[100px] px-6 py-3 font-mono-custom text-[13px] font-semibold tracking-[0.04em] text-white transition-opacity duration-150 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #DB2777)' }}
            >
              Voir mon CV
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12L12 2M12 2H6M12 2V8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
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
