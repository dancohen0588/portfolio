# Portfolio Dan Cohen — Context Claude Code

> Lis ce fichier en entier avant de toucher au code. Lis aussi `../spec.md` pour le PRD complet et `../portfolio-C-vibe-creator.html` pour la maquette visuelle de référence.

---

## Projet

Portfolio one-page de **Dan Cohen**, Expert Vibe Coding & Développement IA.
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
--dark:      #18181B;   /* Process, footer, témoignage */
--dark-text: #18181B;   /* Titres */
--mid:       #3F3F46;   /* Corps */
--muted:     #71717A;   /* Sous-titres */
--border:    #E4E4E7;
```

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

*Dernière mise à jour : Mai 2026*
