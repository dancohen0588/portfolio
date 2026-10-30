const steps = [
  {
    num: 'ÉTAPE 01',
    title: 'Diagnostic sur site',
    desc: "Deux heures avec vos équipes métier et votre DSI : vos outils, vos données, vos irritants. On sort avec trois cas d'usage classés.",
    deliverable: 'Livrable : liste priorisée',
  },
  {
    num: 'ÉTAPE 02',
    title: "Premier cas d'usage en production",
    desc: "Je construis le cas le plus rentable directement dans vos systèmes, avec les personnes qui s'en serviront.",
    deliverable: 'Livrable : un système qui tourne',
  },
  {
    num: 'ÉTAPE 03',
    title: 'Déploiement élargi et formation',
    desc: "On enchaîne les cas suivants et je forme chaque équipe sur ce qui la concerne : prompts, agents, règles d'usage.",
    deliverable: 'Livrable : équipes formées',
  },
  {
    num: 'ÉTAPE 04',
    title: 'Transfert et autonomie',
    desc: 'Documentation, passation, support. Vos équipes font vivre les workflows sans moi ; je reste disponible en office hours.',
    deliverable: 'Livrable : autonomie',
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[var(--bg2)] px-5 py-20 md:px-14 md:py-[120px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="font-mono-custom text-[11px] uppercase tracking-[0.14em] text-[var(--violet)]">
          Méthode
        </div>

        <h2 className="h-ink mt-2 max-w-[20ch] font-cabinet text-[30px] font-extrabold leading-[1.02] tracking-[-0.04em] md:text-[40px] lg:text-[52px]">
          Comment se passe un <span className="h-accent">déploiement embarqué</span>
        </h2>

        <p className="mt-4 max-w-[560px] font-bricolage text-[17px] text-[var(--muted)]">
          Quatre étapes, du diagnostic à l&rsquo;autonomie de vos équipes. Chaque étape produit
          quelque chose d&rsquo;utilisable.
        </p>

        <div className="mt-10 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-[20px] border border-[var(--border)] bg-[var(--white)] px-6 py-7"
            >
              <div className="font-mono-custom text-[11px] tracking-[0.1em] text-[var(--violet)]">
                {step.num}
              </div>

              <h3 className="mt-7 font-cabinet text-[19px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--ink)]">
                {step.title}
              </h3>

              <p className="mt-2.5 font-bricolage text-[14.5px] leading-[1.6] text-[var(--muted)]">
                {step.desc}
              </p>

              <div className="mt-4 border-t border-[var(--border)] pt-3 font-mono-custom text-[12px] text-[var(--dark-text)]">
                {step.deliverable}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
