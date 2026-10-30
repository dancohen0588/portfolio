import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg2)] px-5 py-8 font-bricolage text-[13px] text-[var(--muted)] md:px-14">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-x-8 gap-y-3">
        <span>
          <strong className="font-semibold text-[var(--ink)]">Dan Cohen</strong> · DCO-IT ·
          Forward Deployed Engineer IA · Suresnes, France
        </span>
        <span className="flex gap-5">
          <Link href="/" className="transition-colors hover:text-[var(--violet)]">
            Accueil
          </Link>
          <Link href="/experiences" className="transition-colors hover:text-[var(--violet)]">
            Parcours
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-[var(--violet)]">
            Contact
          </Link>
        </span>
      </div>
    </footer>
  );
}
