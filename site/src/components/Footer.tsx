export function Footer() {
  return (
    <footer
      className="px-14 py-8 text-center font-bricolage text-[13px]"
      style={{ background: '#18181B', color: 'rgba(255,255,255,0.35)' }}
    >
      <strong style={{ color: 'rgba(255,255,255,0.65)' }}>Dan Cohen</strong>
      {' · '}
      <span
        style={{
          background: 'linear-gradient(135deg, #7C3AED, #DB2777)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontWeight: 700,
        }}
      >
        Expert Vibe Coding
      </span>
      {' · '}
      Suresnes, France
    </footer>
  );
}
