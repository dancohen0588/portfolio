'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '/#services', label: 'Offres' },
  { href: '/#projets', label: 'Références' },
  { href: '/#process', label: 'Méthode' },
  { href: '/experiences', label: 'Parcours' },
];

type NavProps = {
  /** Dark variant sits on the dark hero and turns light once it scrolls away. */
  overHero?: boolean;
};

export function Nav({ overHero = true }: NavProps) {
  const [dark, setDark] = useState(overHero);

  useEffect(() => {
    if (!overHero) return;
    const hero = document.getElementById('hero');
    if (!hero) return;
    const update = () => setDark(hero.getBoundingClientRect().bottom > 72);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [overHero]);

  return (
    <nav
      className={[
        'fixed inset-x-0 top-0 z-50 h-16 border-b backdrop-blur-[16px] transition-colors duration-300',
        dark
          ? 'border-[rgba(255,255,255,0.08)] bg-[rgba(24,24,27,0.85)]'
          : 'border-[var(--border)] bg-[rgba(250,250,250,0.88)]',
      ].join(' ')}
    >
      <div className="mx-auto grid h-full w-full max-w-[1100px] grid-cols-[1fr_auto_1fr] items-center px-5 md:px-14">
        <Link
          href="/"
          className={[
            'font-cabinet text-[20px] font-extrabold tracking-[-0.03em] transition-colors duration-300',
            dark ? 'text-white' : 'text-[var(--ink)]',
          ].join(' ')}
        >
          Dan<span className="text-[#DB2777]">.</span>Cohen
        </Link>

        <div className="hidden items-center justify-self-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={[
                'text-sm font-bricolage font-medium transition-colors duration-300 hover:text-[var(--violet)]',
                dark ? 'text-[#A1A1AA] hover:text-white' : 'text-[var(--muted)]',
              ].join(' ')}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() =>
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="inline-flex items-center justify-self-end text-sm font-bricolage font-bold text-white transition-transform hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
            borderRadius: 100,
            padding: '10px 24px',
          }}
        >
          Discutons ✦
        </button>
      </div>
    </nav>
  );
}
