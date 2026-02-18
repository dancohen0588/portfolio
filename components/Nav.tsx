import Link from 'next/link';

const navLinks = [
  { href: '#valeur', label: 'Valeur' },
  { href: '#projets', label: 'Projets' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'À propos' },
];

export function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[rgba(250,250,250,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-5 md:px-14">
        <Link
          href="#hero"
          className="font-cabinet text-[20px] font-extrabold tracking-[-0.03em] text-[var(--dark)]"
        >
          <span className="text-[var(--violet)]">Dan</span>
          <span className="text-[var(--pink)]">.</span>
          <span>Gohen</span>
        </Link>

        <div className="hidden items-center gap-9 text-sm font-medium text-[var(--muted)] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[var(--violet)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="inline-flex items-center rounded-full bg-gradient-to-tr from-[var(--violet)] to-[var(--pink)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(124,58,237,0.35)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(124,58,237,0.35)]"
        >
          Discutons de votre projet ✦
        </Link>
      </div>
    </nav>
  );
}

