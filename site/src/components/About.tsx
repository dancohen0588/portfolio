'use client';

import { motion, useReducedMotion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const skills = [
  { label: 'Cursor', variant: 'violet' },
  { label: 'OpenAI Codex', variant: 'violet' },
  { label: 'Claude', variant: 'violet' },
  { label: 'Lovable', variant: 'pink' },
  { label: 'Bolt.new', variant: 'pink' },
  { label: 'v0.dev', variant: 'pink' },
  { label: 'Next.js', variant: 'cyan' },
  { label: 'React', variant: 'cyan' },
  { label: 'Tailwind', variant: 'cyan' },
  { label: 'Supabase', variant: 'neutral' },
  { label: 'PostgreSQL', variant: 'neutral' },
  { label: 'Vercel', variant: 'neutral' },
  { label: 'Figma', variant: 'neutral' },
  { label: 'Framer Motion', variant: 'neutral' },
  { label: 'n8n', variant: 'neutral' },
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

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start md:gap-20">
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
          </motion.div>

          {/* Skills cloud */}
          <motion.div className="flex flex-wrap items-start gap-2.5" {...itemProps}>
            {skills.map((skill) => (
              <span
                key={skill.label}
                className="cursor-default whitespace-nowrap rounded-[100px] border px-4 py-2 font-mono-custom text-[12px] font-medium transition-transform duration-150 hover:scale-105"
                style={chipStyles[skill.variant]}
              >
                {skill.label}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
