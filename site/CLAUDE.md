# Portfolio Dan Cohen — Context Claude Code

> Lis ce fichier en entier avant de toucher au code. Lis aussi `../spec.md` pour le PRD complet et `../portfolio-C-vibe-creator.html` pour la maquette visuelle de référence.

---

## Projet

Portfolio one-page de **Dan Cohen**, Forward Deployed Engineer IA (déploiement IA embarqué + formation des équipes).
Promesse du hero : « Vos ambitions IA, transformées en résultats. »
URL : https://dancohen.fr/
Objectif : convertir un visiteur en prospect via un seul CTA — "Discutons de votre projet ✦" → scroll vers `#contact`.

---

## Stack

- **Framework** : Next.js 16 (App Router) + TypeScript
- **Style** : Tailwind CSS v4
- **Animations** : Framer Motion
- **Formulaire** : React Hook Form + Resend
- **Déploiement** : Vercel (CI/CD depuis GitHub)

---

## Structure

```
src/
├── app/
│   ├── layout.tsx        # Fonts, metadata, Analytics
│   ├── page.tsx          # Assemble toutes les sections
│   ├── globals.css       # Variables CSS + reset
│   └── api/upload/       # Route API contact
└── components/
    ├── Nav.tsx
    ├── Hero.tsx
    ├── Valeur.tsx
    ├── Projets.tsx
    ├── Process.tsx
    ├── Temoignage.tsx
    ├── About.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

---

## Design System — Direction C "Vibe Creator"

### Couleurs

```css
--violet:    #7C3AED;   /* Titres gradient, accents principaux */
--pink:      #DB2777;   /* Gradient (toujours avec violet) */
--cyan:      #06B6D4;   /* Liens, accents interactifs */
--bg:        #FAFAFA;   /* Background principal */
--bg2:       #F4F4F5;   /* Sections alternées */
--dark:      #18181B;   /* Hero et bandeau /experiences UNIQUEMENT (+ carte offre 01) */
--dark-text: #18181B;   /* Texte fort dans le corps */
--ink:       #2E1065;   /* Titres H1/H2 sur fond clair (.h-ink) */
--mid:       #3F3F46;   /* Corps */
--muted:     #71717A;   /* Sous-titres */
--border:    #E4E4E7;
```

### Titres de section
- Fond clair : `h2.h-ink` (encre #2E1065) + UN groupe de mots en violet via `<span className="h-accent">` — le verbe ou le résultat, jamais un mot de liaison.
- Seul le haut de page est sombre : hero (`#18181B` + `PrismBackground`) et bandeau de `/experiences`. Tout le reste est clair, y compris Process, Témoignages et Footer.

### Hero
- Pas d'effets superposés : pas de glitch, pas de blobs, pas de surface 3D (three.js retiré), pas de texte shimmer.
- Une seule animation à l'arrivée (`.hero-line`, `.hero-fade`), puis rien ne bouge.
- Un seul dégradé par écran : le CTA (+ le trait de 72 px sous le H1).
- `PrismBackground.tsx` est un rendu canvas provisoire : à remplacer par la photo Shutterstock licenciée (concept « faisceau à travers un prisme », zone calme à gauche) via `next/image` + voile.

### Gradient principal
```css
background: linear-gradient(135deg, #7C3AED, #DB2777);
```

### Typographies
| Usage | Police | Poids |
|---|---|---|
| Titres H1/H2, nav logo | Cabinet Grotesk | 800 |
| Corps | Bricolage Grotesque | 400/500/700/800 |
| Labels techniques, stack | Fira Code | 400/500 |

### Tailwind fonts
```ts
cabinet: ['"Cabinet Grotesk"', 'sans-serif']
bricolage: ['"Bricolage Grotesque"', 'sans-serif']
mono: ['"Fira Code"', 'monospace']
```

---

## Règles strictes

- **Langue** : textes visibles en français, code en anglais
- **Un seul CTA** : "Discutons de votre projet ✦" → `#contact`
- **Mobile-first** : responsive obligatoire (sm/md/lg)
- **Animations** : Framer Motion, discrètes, respecter `prefers-reduced-motion`, max 0.6s
- **Pas de lorem ipsum** — contenu réel uniquement (voir spec.md section 5)
- **Ne pas inventer** de projets ou clients autres que ceux de spec.md
- **Images** : `next/image` avec `priority` sur le hero
- **Fonts** : `display=swap`, preconnect sur Google Fonts + Fontshare

---

## Commandes

```bash
npm run dev       # Lancer en local (http://localhost:3000)
npm run build     # Build production
npm run lint      # Lint ESLint
```

---

## Agents disponibles

Utilise les agents selon la nature du travail :

| Agent | Usage |
|---|---|
| `@planner` | Avant tout travail — plan d'implémentation |
| `@front-builder` | UI React/Next.js, composants, styles |
| `@ui-ux-designer` | Feedback design, hiérarchie, conversion |
| `@seo` | SEO Google + GEO (visibilité LLM) |
| `@reviewer` | Review code avant commit |
| `@debugger` | Debugging systématique |
| `@security-auditor` | Audit sécurité |
| `@documenter` | Documentation |
| `@back-builder` | API routes, logique backend |

---

## Variables d'environnement

```bash
RESEND_API_KEY=...          # API Resend pour le formulaire contact
CONTACT_EMAIL=dan0588@gmail.com
NEXT_PUBLIC_SITE_URL=https://dancohen.fr
```

---

*Dernière mise à jour : Octobre 2026 (repositionnement FDE)*
