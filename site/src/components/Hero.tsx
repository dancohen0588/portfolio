'use client';

import { PrismBackground } from './PrismBackground';

const stats = [
  { value: '15 ans', label: 'de Product grands comptes' },
  { value: '~70', label: 'signaux IA scorés par semaine chez Daum' },
  { value: '4', label: 'systèmes IA en production chez Daum' },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-5 pb-16 pt-[140px] md:px-14 md:pb-24 md:pt-[180px]"
      style={{ background: '#18181B', color: '#ffffff' }}
    >
      <PrismBackground />

      {/* Veil: keeps the text column legible, lets the spectrum breathe on the right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(24,24,27,0.94) 0%, rgba(24,24,27,0.78) 45%, rgba(24,24,27,0.12) 100%)',
        }}
      />

      <div className="relative mx-auto max-w-[1100px]">
        <div
          className="hero-fade font-mono-custom text-[12px] tracking-[0.02em]"
          style={{ color: '#C4B5FD' }}
        >
          Forward Deployed Engineer IA · DCO-IT
        </div>

        <h1 className="mt-5 max-w-[13ch] font-cabinet text-[40px] font-extrabold leading-[0.95] tracking-[-0.04em] text-white md:text-[64px] lg:text-[80px]">
          <span className="hero-line">
            <span className="hero-line-inner">Vos ambitions IA,</span>
          </span>
          <span className="hero-line">
            <span className="hero-line-inner">transformées en résultats.</span>
          </span>
        </h1>

        <div
          aria-hidden="true"
          className="hero-fade hero-fade-2 mt-8 h-[3px] w-[72px] rounded-[2px]"
          style={{ background: 'linear-gradient(135deg, #7C3AED, #DB2777)' }}
        />

        <p
          className="hero-fade hero-fade-2 mt-7 max-w-[52ch] font-bricolage text-[15px] leading-[1.55] md:text-[18px]"
          style={{ color: '#D4D4D8' }}
        >
          Déploiement IA dans vos outils et formation de vos équipes, par un Ingénieur IA
          embarqué chez vous pour vos cas d&rsquo;usage en production.{' '}
          <strong className="font-semibold text-white">
            15 ans de Product chez Monoprix, TF1, Bouygues.
          </strong>
        </p>

        <div className="hero-fade hero-fade-3 mt-9 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center gap-2 rounded-[100px] px-9 py-[15px] font-bricolage text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #DB2777)' }}
          >
            Discutons de votre projet ✦
          </button>
          <button
            type="button"
            onClick={() =>
              document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center rounded-[100px] border-2 px-7 py-3 font-bricolage text-[15px] font-semibold transition-colors hover:border-[var(--violet)] hover:text-white"
            style={{ borderColor: '#52525B', color: '#E4E4E7' }}
          >
            Voir les références
          </button>
        </div>

        <div className="hero-fade hero-fade-3 mt-14 flex flex-wrap gap-x-11 gap-y-5">
          {stats.map((s) => (
            <div key={s.value}>
              <div className="font-cabinet text-[34px] font-extrabold leading-none tracking-[-0.04em] text-white">
                {s.value}
              </div>
              <div className="mt-1.5 max-w-[18ch] text-[12.5px]" style={{ color: '#A1A1AA' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
