'use client';

import Link from 'next/link';

const links = [
  { href: '#valeur', label: 'Valeur' },
  { href: '#projets', label: 'Projets' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'À propos' },
];

export function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-16 border-b border-[var(--border)] bg-[rgba(250,250,250,0.88)] backdrop-blur-[16px]">
      <div className="mx-auto grid h-full w-full max-w-[1100px] grid-cols-[1fr_auto_1fr] items-center px-5 md:px-14">
        <Link
          href="#hero"
          className="font-cabinet text-[20px] font-extrabold tracking-[-0.03em] text-[var(--dark-text)]"
        >
          <span className="text-[#7C3AED]">Dan</span>
          <span className="text-[#DB2777]">.</span>
          <span className="text-[#18181B]">Cohen</span>
        </Link>

        <div className="hidden items-center justify-self-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-bricolage font-medium text-[var(--muted)] transition-colors hover:text-[var(--violet)]"
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
          className="inline-flex items-center justify-self-end text-sm font-bricolage font-bold text-white transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,58,237,0.35)]"
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

