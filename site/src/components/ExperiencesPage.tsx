'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { companies, stats, filters, SectorKey, Mission } from '@/data/experiences';

function MissionCard({ mission }: { mission: Mission }) {
  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: 16,
        padding: 28,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
        transition: 'all 0.3s ease',
      }}
      className="group"
    >
      {/* Gradient top bar on hover */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(135deg, #2E0087, #7C3AED, #DB2777)',
          opacity: 0,
          transition: 'opacity 0.3s',
        }}
        className="group-hover:opacity-100"
      />

      {/* Card top: logo + client name + date */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <Image
            src={`/logos/${mission.logo}.svg`}
            alt={mission.client}
            width={24}
            height={24}
            className="shrink-0 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
          />
          <span
            style={{
              fontFamily: '"Cabinet Grotesk", system-ui, sans-serif',
              fontWeight: 700,
              fontSize: 19,
              letterSpacing: '-0.02em',
              color: '#18181B',
            }}
          >
            {mission.client}
          </span>
        </div>
        <span
          className="font-mono-custom shrink-0 text-[12px]"
          style={{ color: '#A1A1AA' }}
        >
          {mission.date}
        </span>
      </div>

      {/* Role */}
      <div
        className="mb-2.5 text-[14px] font-semibold"
        style={{ color: '#7C3AED' }}
      >
        {mission.role}
      </div>

      {/* Description */}
      <p
        className="mb-4 text-[14px] leading-[1.7]"
        style={{ color: '#52525B' }}
      >
        {mission.description}
      </p>

      {/* Mission list */}
      {mission.missions && mission.missions.length > 0 && (
        <ul className="mb-4 list-none p-0">
          {mission.missions.map((item, i) => (
            <li
              key={i}
              className="relative py-1 pl-[18px] text-[13px] leading-[1.6]"
              style={{ color: '#52525B' }}
            >
              <span
                className="absolute left-0 top-[7px] text-[10px]"
                style={{
                  background: 'linear-gradient(135deg, #2E0087, #7C3AED, #DB2777)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                ✦
              </span>
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5">
        {mission.stack.map((tag) => (
          <span
            key={tag}
            className="font-mono-custom rounded-full border px-3 py-1 text-[11px]"
            style={{
              background: 'rgba(124,58,237,0.06)',
              color: '#7C3AED',
              borderColor: 'rgba(124,58,237,0.12)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ExperiencesPage() {
  const [activeFilter, setActiveFilter] = useState<SectorKey>('all');

  return (
    <main
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '100px 40px 80px',
      }}
      className="px-5 md:px-10"
    >
      {/* Back link */}
      <Link
        href="/"
        className="font-mono-custom mb-10 inline-flex items-center gap-2 text-[13px] tracking-[0.05em] transition-colors duration-200"
        style={{ color: '#A1A1AA', textDecoration: 'none' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#7C3AED')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}
      >
        ← Retour à l&apos;accueil
      </Link>

      {/* Page title */}
      <div className="mb-10">
        <div
          className="font-mono-custom mb-2 text-[11px] uppercase tracking-[0.14em]"
          style={{ color: '#7C3AED' }}
        >
          // expériences
        </div>
        <h1
          className="font-cabinet text-[32px] font-extrabold leading-tight tracking-[-0.04em] md:text-[48px]"
          style={{ color: '#18181B' }}
        >
          Missions &{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #2E0087, #7C3AED, #DB2777)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Parcours
          </span>
        </h1>
        <p
          className="mt-3 max-w-[520px] text-[16px] leading-relaxed"
          style={{ color: '#71717A' }}
        >
          15 ans de missions grands comptes — des télécoms à l&apos;e-commerce, en passant par l&apos;industrie et les médias.
        </p>
      </div>

      {/* KPIs bar */}
      <div
        className="mb-12 grid grid-cols-2 overflow-hidden rounded-2xl border md:grid-cols-4"
        style={{
          borderColor: 'rgba(0,0,0,0.08)',
          background: '#ffffff',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="py-9 text-center"
            style={{
              padding: '36px 24px',
              borderRight:
                i < stats.length - 1 ? '1px solid rgba(0,0,0,0.08)' : undefined,
              borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.08)' : undefined,
            }}
          >
            <div
              className="font-cabinet text-[40px] font-extrabold"
              style={{
                background: 'linear-gradient(135deg, #2E0087, #7C3AED, #DB2777)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {stat.number}
            </div>
            <div
              className="font-mono-custom mt-1.5 text-[13px] uppercase tracking-[0.1em]"
              style={{ color: '#A1A1AA' }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Filter bar */}
      <div className="mb-12 flex flex-wrap justify-center gap-2.5">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className="font-mono-custom cursor-pointer rounded-full border px-[22px] py-[9px] text-[12px] uppercase tracking-[0.08em] transition-all duration-200"
            style={
              activeFilter === f.key
                ? {
                    background: 'linear-gradient(135deg, #2E0087, #7C3AED, #DB2777)',
                    borderColor: 'transparent',
                    color: '#fff',
                  }
                : {
                    background: '#ffffff',
                    borderColor: 'rgba(0,0,0,0.08)',
                    color: '#52525B',
                  }
            }
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Company blocks */}
      <div className="flex flex-col gap-14">
        {companies.map((company) => {
          const isCompanyVisible =
            activeFilter === 'all' ||
            company.sectors.includes(activeFilter as 'retail' | 'media' | 'telecoms' | 'industrie' | 'banque');

          const visibleMissions =
            activeFilter === 'all'
              ? company.missions
              : company.missions.filter(
                  (m) => !m.sector || m.sector === activeFilter
                );

          if (!isCompanyVisible || visibleMissions.length === 0) return null;

          return (
            <div
              key={company.id}
              style={{
                opacity: 1,
                transform: 'translateY(0)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
              }}
            >
              {/* Company header */}
              <div
                className="mb-5 flex flex-wrap items-center gap-4 border-b pb-3.5"
                style={{ borderColor: 'rgba(0,0,0,0.08)' }}
              >
                <Image
                  src={`/logos/${company.logo}.svg`}
                  alt={company.name}
                  width={32}
                  height={32}
                  className="rounded-lg opacity-80"
                />
                <span
                  className="font-mono-custom text-[13px] font-semibold tracking-[0.05em]"
                  style={{ color: '#7C3AED', whiteSpace: 'nowrap' }}
                >
                  {company.period}
                </span>
                <span
                  className="font-cabinet text-[26px] font-extrabold tracking-[-0.04em]"
                  style={{ color: '#18181B' }}
                >
                  {company.name}
                </span>
                <span
                  className="text-[15px] italic"
                  style={{ color: '#52525B' }}
                >
                  {company.role}
                </span>
                <span
                  className="font-mono-custom ml-auto rounded-full border px-3.5 py-1 text-[11px] uppercase tracking-[0.08em]"
                  style={{
                    borderColor: 'rgba(0,0,0,0.08)',
                    color: '#A1A1AA',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {company.sectorTag}
                </span>
              </div>

              {/* Mission cards grid */}
              <div
                className="grid gap-[18px]"
                style={{
                  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                }}
              >
                {visibleMissions.map((mission, i) => (
                  <MissionCard key={i} mission={mission} />
                ))}
              </div>

              {/* Company context block */}
              {company.context && activeFilter === 'all' && (
                <div
                  className="mt-[18px] rounded-xl border p-6 text-[14px] leading-[1.7]"
                  style={{
                    background: 'rgba(124,58,237,0.03)',
                    borderColor: 'rgba(124,58,237,0.1)',
                    color: '#52525B',
                  }}
                >
                  <div
                    className="font-mono-custom mb-2 text-[11px] uppercase tracking-[0.1em]"
                    style={{ color: '#7C3AED' }}
                  >
                    // responsabilités transverses
                  </div>
                  {company.context}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
