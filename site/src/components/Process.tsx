const steps = [
  {
    num: 'STEP 01 /',
    title: 'Brief',
    time: 'Jour 0 · 1h',
    desc: 'Un appel pour comprendre votre besoin, vos contraintes et votre délai. Pas de jargon technique.',
  },
  {
    num: 'STEP 02 /',
    title: 'Prototype',
    time: 'J+1 à J+2',
    desc: 'Un premier prototype cliquable pour valider les parcours avant de coder la solution finale.',
  },
  {
    num: 'STEP 03 /',
    title: 'Build',
    time: 'J+3 à J+7',
    desc: "Construction complète, feature par feature. Partage d'avancement quotidien via message.",
  },
  {
    num: 'STEP 04 /',
    title: 'Livraison',
    time: 'J+5 à J+10',
    desc: 'Déploiement en ligne, formation rapide, et 30 jours de support inclus après la mise en production.',
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden px-5 py-20 md:px-14 md:py-[120px]"
      style={{ background: 'linear-gradient(135deg, #2E0087, #7C3AED, #DB2777)' }}
    >
      {/* SVG pointillé en overlay, opacity 3% */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        <div
          className="mb-2.5 font-mono-custom text-[11px] uppercase tracking-[0.14em]"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          // ma méthode
        </div>

        <h2 className="font-cabinet text-[30px] font-extrabold leading-tight tracking-[-0.04em] text-white md:text-[40px] lg:text-[52px]">
          4 étapes, <span className="text-white">0 surprise</span>
        </h2>

        <p
          className="mb-12 mt-3 font-bricolage text-[17px]"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          Une méthode éprouvée pour livrer vite et bien.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={[
                'px-7 py-9',
                /* Mobile : bordure bas sauf dernier */
                i < steps.length - 1 ? 'border-b md:border-b-0' : '',
                /* Desktop : bordure droite sauf dernier */
                i < steps.length - 1 ? 'md:border-r' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              style={{ borderColor: 'rgba(255,255,255,0.1)' }}
            >
              <div
                className="mb-5 font-mono-custom text-[11px] tracking-[0.1em]"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                {step.num}
              </div>

              <div className="mb-1.5 font-cabinet text-[20px] font-extrabold tracking-[-0.02em] text-white">
                {step.title}
              </div>

              <div
                className="mb-3.5 font-mono-custom text-[11px]"
                style={{ color: 'rgba(6,182,212,0.8)' }}
              >
                {step.time}
              </div>

              <p
                className="font-bricolage text-[13px] leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
