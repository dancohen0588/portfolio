'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export interface ProjectModalData {
  badgeType: string;
  badgeDays: string;
  siteHref: string;
  heroTitleLine1: string;
  heroTitleLine2?: string;
  lead: string;
  contextTitle: string;
  context: string;
  video: string;
  videoCaption: string;
  solutionTitle: string;
  solution: string;
  screenshots: string[];
  stackFull: string[];
  tools: string[];
  metrics: { val: string; label: string }[];
  quote: string;
  authorName: string;
  authorRole: string;
  avatarInitials: string;
}

export interface ProjectForModal {
  emoji: string;
  title: string;
  modal: ProjectModalData;
}

interface ProjectModalProps {
  project: ProjectForModal | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const shouldReduceMotion = useReducedMotion();

  // Lock body scroll while modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const overlayAnim = shouldReduceMotion
    ? {}
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };

  const modalAnim = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28, scale: 0.97 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 16, scale: 0.97 },
      };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-start justify-center overflow-y-auto py-10 px-5"
          style={{ background: 'rgba(24,24,27,0.65)', backdropFilter: 'blur(10px)' }}
          onClick={onClose}
          {...overlayAnim}
          transition={{ duration: 0.2 }}
        >
          <motion.article
            className="relative w-full overflow-hidden rounded-[28px] bg-white my-auto"
            style={{
              maxWidth: 760,
              boxShadow: '0 40px 120px rgba(24,24,27,0.25), 0 0 0 1px rgba(124,58,237,0.04)',
            }}
            onClick={(e) => e.stopPropagation()}
            {...modalAnim}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* ── STICKY HEADER ─────────────────────────────────────── */}
            <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-[var(--border)] bg-white px-7 py-4">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex-shrink-0 text-2xl leading-none">{project.emoji}</span>
                <span className="truncate font-cabinet text-lg font-extrabold leading-tight tracking-tight text-[var(--dark)]">
                  {project.title}
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Fermer la modale"
                className="flex h-[34px] w-[34px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-[var(--border)] bg-white text-sm font-bold text-[var(--mid)] transition-colors hover:border-[var(--violet)] hover:bg-[var(--violet-l)] hover:text-[var(--violet)]"
              >
                ✕
              </button>
            </div>

            {/* ── HERO BLOCK ────────────────────────────────────────── */}
            <div className="px-9 pt-8">
              {/* Badges */}
              <div className="mb-3.5 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-[rgba(124,58,237,0.2)] bg-[var(--violet-l)] px-3 py-1 font-mono-custom text-[11px] font-medium tracking-[0.08em] text-[var(--violet)]">
                  {project.modal.badgeType}
                </span>
                <span
                  className="inline-flex items-center rounded-full px-3 py-1 font-mono-custom text-[11px] font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #7C3AED, #DB2777)' }}
                >
                  {project.modal.badgeDays}
                </span>
              </div>

              {/* Title */}
              <h2 className="mb-4 font-cabinet text-[36px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[var(--dark)]">
                {project.modal.heroTitleLine1}
                {project.modal.heroTitleLine2 && (
                  <>
                    <br />
                    <span
                      style={{
                        background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {project.modal.heroTitleLine2}
                    </span>
                  </>
                )}
              </h2>

              {/* Lead */}
              <p className="mb-5 font-bricolage text-[15px] leading-[1.75] text-[var(--mid)]">
                {project.modal.lead}
              </p>

              {/* CTA */}
              <a
                href={project.modal.siteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-bricolage text-[14px] font-bold text-white transition-transform hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #DB2777)' }}
              >
                Voir le site en ligne ↗
              </a>
            </div>

            <div className="mx-9 h-px bg-[var(--border)]" />

            {/* ── SECTION 01: CONTEXTE ──────────────────────────────── */}
            <div className="px-9 py-7">
              <div className="mb-2.5 font-mono-custom text-[10px] uppercase tracking-[0.16em] text-[var(--violet)]">
                // 01 — Le contexte
              </div>
              <h3 className="mb-3 font-cabinet text-[18px] font-extrabold tracking-[-0.02em] text-[var(--dark)]">
                {project.modal.contextTitle}
              </h3>
              <p className="font-bricolage text-[15px] leading-[1.75] text-[var(--mid)]">
                {project.modal.context}
              </p>
            </div>

            {/* ── VIDEO DÉMO — pleine largeur ───────────────────────── */}
            <div className="relative bg-[#0D0820]">
              {/* key forces remount when project changes → video restarts */}
              <video
                key={project.modal.video}
                src={project.modal.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full object-cover"
                style={{ maxHeight: 320 }}
              />
              {/* Gradient overlay bas */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent)' }}
              />
              {/* Labels */}
              <div className="absolute bottom-3.5 left-6 flex items-center gap-2">
                <span
                  className="h-2 w-2 flex-shrink-0 rounded-full bg-red-500"
                  style={{
                    boxShadow: '0 0 6px rgba(239,68,68,0.8)',
                    animation: 'pulse 1.5s ease-in-out infinite',
                  }}
                />
                <span className="font-mono-custom text-[11px] tracking-[0.06em] text-white/55">
                  Démo · Parcours utilisateur complet
                </span>
              </div>
              <span className="absolute bottom-3.5 right-6 font-mono-custom text-[10px] tracking-[0.06em] text-white/30">
                ~15 secondes
              </span>
            </div>
            {/* Caption sous la vidéo */}
            <div className="border-b border-[var(--border)] bg-[var(--bg)] px-9 py-2.5">
              <p className="font-mono-custom text-[11px] tracking-[0.04em] text-[var(--muted)]">
                {project.modal.videoCaption}
              </p>
            </div>

            <div className="mx-9 h-px bg-[var(--border)]" />

            {/* ── SECTION 02: SOLUTION ──────────────────────────────── */}
            <div className="px-9 py-7">
              <div className="mb-2.5 font-mono-custom text-[10px] uppercase tracking-[0.16em] text-[var(--violet)]">
                // 02 — La solution
              </div>
              <h3 className="mb-3 font-cabinet text-[18px] font-extrabold tracking-[-0.02em] text-[var(--dark)]">
                {project.modal.solutionTitle}
              </h3>
              <div className="flex flex-col gap-3">
                {project.modal.solution.split('\n\n').map((paragraph, i) => {
                  const parts = paragraph.split(/\*\*(.+?)\*\*/g);
                  return (
                    <p key={i} className="font-bricolage text-[15px] leading-[1.75] text-[var(--mid)]">
                      {parts.map((part, j) =>
                        j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                      )}
                    </p>
                  );
                })}
              </div>

              {/* Screenshots 2×2 — affiché seulement si disponibles */}
              {project.modal.screenshots.length > 0 && (
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {project.modal.screenshots.slice(0, 4).map((src, i) => (
                    <div
                      key={i}
                      className="relative aspect-video overflow-hidden rounded-[14px] border border-black/[0.06] bg-[var(--bg2)]"
                    >
                      <Image
                        src={src}
                        alt={`Capture d'écran ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 760px) 45vw, 350px"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mx-9 h-px bg-[var(--border)]" />

            {/* ── SECTION 03: STACK & OUTILS ────────────────────────── */}
            <div className="px-9 py-7">
              <div className="mb-5 font-mono-custom text-[10px] uppercase tracking-[0.16em] text-[var(--violet)]">
                // 03 — Stack & Outils
              </div>

              {/* Stack technique */}
              <div className="mb-4">
                <div className="mb-2.5 font-mono-custom text-[11px] uppercase tracking-[0.1em] text-[var(--violet)]">
                  Stack technique
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.modal.stackFull.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full border border-[rgba(124,58,237,0.2)] bg-[var(--violet-l)] px-3 py-1.5 font-mono-custom text-[11px] font-medium tracking-[0.04em] text-[var(--violet)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outils IA */}
              <div>
                <div
                  className="mb-2.5 font-mono-custom text-[11px] uppercase tracking-[0.1em]"
                  style={{ color: 'var(--pink)' }}
                >
                  Outils IA
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.modal.tools.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full px-3 py-1.5 font-mono-custom text-[11px] font-medium tracking-[0.04em]"
                      style={{
                        background: '#FDF2F8',
                        color: 'var(--pink)',
                        border: '1px solid rgba(219,39,119,0.2)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mx-9 h-px bg-[var(--border)]" />

            {/* ── SECTION 04: MÉTRIQUES ─────────────────────────────── */}
            <div className="px-9 py-7">
              <div className="mb-5 font-mono-custom text-[10px] uppercase tracking-[0.16em] text-[var(--violet)]">
                // 04 — Les résultats
              </div>
              <div
                className="grid grid-cols-3 overflow-hidden rounded-[18px] border border-[var(--border)]"
              >
                {project.modal.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center py-5 px-4 text-center bg-[var(--bg)]"
                    style={
                      i === 1
                        ? {
                            background: 'var(--white)',
                            borderLeft: '1px solid var(--border)',
                            borderRight: '1px solid var(--border)',
                          }
                        : {}
                    }
                  >
                    <div
                      className="mb-1 font-cabinet text-[40px] font-extrabold leading-none tracking-[-0.05em]"
                      style={{
                        background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {m.val}
                    </div>
                    <div className="font-bricolage text-[12px] text-[var(--muted)]">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-9 h-px bg-[var(--border)]" />

            {/* ── SECTION 05: TÉMOIGNAGE ────────────────────────────── */}
            <div className="px-9 pb-10 pt-7">
              <div className="mb-5 font-mono-custom text-[10px] uppercase tracking-[0.16em] text-[var(--violet)]">
                // 05 — Témoignage
              </div>
              <div
                className="rounded-[18px] p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.04), rgba(219,39,119,0.03))',
                  border: '1px solid rgba(124,58,237,0.12)',
                }}
              >
                <div
                  className="mb-[-6px] font-cabinet text-[38px] font-extrabold leading-none opacity-25"
                  style={{ color: 'var(--violet)' }}
                >
                  "
                </div>
                <p className="mb-4 font-bricolage text-[15px] italic leading-[1.7] text-[var(--mid)]">
                  {project.modal.quote}
                </p>
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-cabinet text-[11px] font-extrabold text-white"
                    style={{ background: 'linear-gradient(135deg, #7C3AED, #DB2777)' }}
                  >
                    {project.modal.avatarInitials}
                  </div>
                  <div>
                    <div className="font-bricolage text-[13px] font-bold text-[var(--dark)]">
                      {project.modal.authorName}
                    </div>
                    <div className="font-bricolage text-[11px] text-[var(--muted)]">
                      {project.modal.authorRole}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
