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

const services = [
  {
    icon: '🌐',
    title: 'Site web sur mesure',
    delay: '~5 jours',
    description:
      'Vitrine, landing page, site événementiel ou institutionnel. Design soigné, SEO de base, formulaire de contact, déploiement inclus.',
    example: '→ Club de Belote de Suresnes (4j · 0€/mois)',
  },
  {
    icon: '⚙️',
    title: 'Outil métier & dashboard',
    delay: '~5 jours',
    description:
      "Gestion d'inscriptions, planification, classements, notifications. Un outil taillé sur mesure pour un besoin précis — sans les fonctionnalités inutiles d'un SaaS générique.",
    example: "→ Monop'Foot (4j · 52 équipes)",
  },
  {
    icon: '🚀',
    title: 'Plateforme & app web complète',
    delay: '~7 à 10 jours',
    description:
      'Application multi-écrans avec authentification, base de données, backoffice et interface utilisateur. Idéal pour un MVP ou un projet événementiel ambitieux.',
    example: '→ Le Tournoi des Frérots (5j · 50+ équipes)',
  },
  {
    icon: '🤖',
    title: 'Automatisation & intégration IA',
    delay: '~3 à 5 jours',
    description:
      "Workflows automatisés avec n8n ou Make, intégration d'API, agents IA sur vos données. Connectez vos outils existants et éliminez les tâches répétitives.",
    example: '→ Notifications auto · Emails · Classements temps réel',
  },
];

export function Services() {
  const shouldReduceMotion = useReducedMotion();

  const sectionProps = shouldReduceMotion
    ? {}
    : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport: { once: true } };

  const itemProps = shouldReduceMotion ? {} : { variants: itemVariants };

  return (
    <section id="services" className="bg-[var(--bg2)] px-5 py-20 md:px-14 md:py-[120px]">
      <motion.div
        className="mx-auto max-w-[1100px]"
        variants={containerVariants}
        {...sectionProps}
      >
        <motion.div
          className="font-mono-custom text-[11px] uppercase tracking-[0.14em] text-[var(--violet)]"
          {...itemProps}
        >
          // services
        </motion.div>

        <motion.h2
          className="mt-2 font-cabinet text-[30px] font-extrabold leading-tight tracking-[-0.04em] text-[var(--dark-text)] md:text-[40px] lg:text-[52px]"
          {...itemProps}
        >
          Ce que je livre
        </motion.h2>

        <motion.p
          className="mt-4 max-w-[480px] font-bricolage text-[17px] text-[var(--muted)]"
          {...itemProps}
        >
          Quatre types de missions, tous livrés en moins de 2 semaines.
        </motion.p>

        <motion.div className="mt-10 grid gap-5 md:grid-cols-2" {...itemProps}>
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="flex flex-col gap-4 rounded-[20px] border border-[var(--border)] bg-[var(--white)] p-7"
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
              <div className="flex items-start justify-between gap-4">
                <div
                  className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px]"
                  style={{
                    background: 'linear-gradient(135deg, #F5F3FF, rgba(219,39,119,0.06))',
                  }}
                >
                  <span className="text-[24px]">{service.icon}</span>
                </div>
                <div
                  className="rounded-[100px] px-3 py-1 font-mono-custom text-[10px] tracking-[0.08em]"
                  style={{
                    background: 'rgba(6,182,212,0.10)',
                    color: 'var(--cyan)',
                    border: '1px solid rgba(6,182,212,0.2)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {service.delay}
                </div>
              </div>

              <h3 className="font-cabinet text-[19px] font-extrabold tracking-[-0.02em] text-[var(--dark-text)]">
                {service.title}
              </h3>

              <p className="flex-1 font-bricolage text-[14px] leading-relaxed text-[var(--muted)]">
                {service.description}
              </p>

              <div
                className="border-t pt-3 font-mono-custom text-[11px] tracking-[0.04em]"
                style={{ borderColor: 'var(--border)', color: '#A1A1AA' }}
              >
                {service.example}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-12 text-center" {...itemProps}>
          <button
            type="button"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center gap-2 font-bricolage text-[15px] font-bold transition-opacity hover:opacity-70"
            style={{ color: 'var(--violet)' }}
          >
            Un autre besoin ? Discutons-en →
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
