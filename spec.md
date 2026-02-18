# Portfolio Dan Cohen — Product Requirements Document

> **Pour Cursor** : Ce fichier est la référence principale du projet. Lis-le intégralement avant de générer du code. Le fichier `portfolio-C-vibe-creator.html` à la racine est la maquette visuelle de référence — reproduis-en fidèlement le design.

---

## 1. Vue d'ensemble du projet

### Qui
**Dan Cohen** — Expert Vibe Coding & Développement IA, basé à Suresnes (Île-de-France).
Ingénieur ISEP (spécialisation IA) + 15 ans de Product Management chez Monoprix, Tapptic (TF1, Bouygues Telecom, Sarenza), Wavestone/Solucom.

### Quoi
Un portfolio one-page en Next.js 15, déployé sur Vercel, qui sert d'outil de conversion pour décrocher des missions freelance via MALT et LinkedIn.

### Objectif principal
Transformer un visiteur en prospect : **un seul CTA** — "Discutons de votre projet ✦" — qui renvoie vers la section Contact.

### Positionnement
"Je livre en jours ce qu'un dev classique livre en semaines." — combinaison unique de rigueur ingénieur (ISEP + IA) + expérience PM grands comptes + maîtrise des outils vibe coding (Cursor, Codex, Claude).

---

## 2. Stack technique

| Brique | Choix | Raison |
|---|---|---|
| Framework | Next.js 15 (App Router) | SEO natif, Server Components, déployable Vercel en 1 clic |
| Langage | TypeScript | Typage, autocomplétion, robustesse |
| Style | Tailwind CSS v3 | Classes utilitaires, cohérence, pas de CSS custom sauf exceptions |
| Animations | Framer Motion | Scroll animations, hover effects, transitions de page |
| Formulaire | React Hook Form + Resend | Zéro backend à maintenir, emails directs |
| Déploiement | Vercel | CI/CD automatique depuis GitHub, HTTPS, CDN mondial |
| Analytics | Vercel Analytics | Gratuit, privacy-first, intégré natif |
| Fonts | Google Fonts + Fontshare | Cabinet Grotesk (Fontshare), Bricolage Grotesque + Fira Code (Google) |

### Commandes d'initialisation
```bash
npx create-next-app@latest . --typescript --tailwind --app --eslint --src-dir
npm install framer-motion react-hook-form @react-hook/resize-observer
npm install lucide-react
npm install resend
```

---

## 3. Design System — Direction C "Vibe Creator"

> Le fichier `portfolio-C-vibe-creator.html` à la racine est la maquette de référence. Respecte-le pixel pour pixel.

### 3.1 Palette de couleurs

```css
/* Couleurs principales */
--violet:    #7C3AED;   /* Couleur principale, titres gradients, accents */
--pink:      #DB2777;   /* Accent gradient (toujours avec violet) */
--cyan:      #06B6D4;   /* Liens, accents interactifs, step-time */

/* Backgrounds */
--bg:        #FAFAFA;   /* Background principal */
--bg2:       #F4F4F5;   /* Background sections alternées */
--white:     #FFFFFF;   /* Cards, formulaires */
--dark:      #18181B;   /* Section process, footer, section témoignage */

/* Texte */
--dark-text: #18181B;   /* Titres */
--mid:       #3F3F46;   /* Corps de texte */
--muted:     #71717A;   /* Sous-titres, légendes, placeholders */

/* UI */
--border:    #E4E4E7;   /* Bordures cards, inputs */
--violet-l:  #F5F3FF;   /* Background chips violet clair */
--cyan-l:    #ECFEFF;   /* Background chips cyan clair */
```

### 3.2 Gradient principal
```css
/* Utilisé sur les titres H1/H2 (gradient text), boutons primaires, avatars */
background: linear-gradient(135deg, #7C3AED, #DB2777);
/* Pour gradient text */
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### 3.3 Typographies

| Usage | Police | Poids | Import |
|---|---|---|---|
| Titres H1, H2, nav logo | Cabinet Grotesk | 800 (Black) | Fontshare |
| Corps, paragraphes, labels | Bricolage Grotesque | 400, 500, 700, 800 | Google Fonts |
| Labels techniques, stack, numéros | Fira Code | 400, 500 | Google Fonts |

```html
<!-- Dans layout.tsx <head> -->
<link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
```

```js
// tailwind.config.ts
fontFamily: {
  cabinet: ['"Cabinet Grotesk"', 'Bricolage Grotesque', 'sans-serif'],
  bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
  mono: ['"Fira Code"', 'monospace'],
}
```

### 3.4 Échelles typographiques

| Élément | Taille desktop | Poids | Police |
|---|---|---|---|
| H1 hero | clamp(48px, 8vw, 96px) | 800 | Cabinet Grotesk |
| H2 section | clamp(30px, 4.5vw, 52px) | 800 | Cabinet Grotesk |
| Nav logo | 20px | 800 | Cabinet Grotesk |
| Section label | 11px | 500 | Fira Code |
| Corps | 16px | 400 | Bricolage Grotesque |
| Card titre | 19-20px | 800 | Cabinet Grotesk |
| Project tagline | 11px | 400 | Fira Code |
| Stack tech | 11px | 400 | Fira Code |

### 3.5 Espacements et rayons

```css
border-radius cards:     20px
border-radius buttons:   100px (pill)
border-radius chips:     100px (pill)
border-radius inputs:    12px
section padding:         120px 56px (desktop) / 80px 20px (mobile)
container max-width:     1100px
gap cards grid:          20px
```

### 3.6 Ombres et effets hover

```css
/* Hover card standard */
box-shadow: 0 20px 60px rgba(124, 58, 237, 0.10);
transform: translateY(-6px);
border-color: #7C3AED;

/* Hover bouton primary */
box-shadow: 0 12px 36px rgba(124, 58, 237, 0.30);
transform: translateY(-2px);

/* Focus input */
border-color: #7C3AED;
box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.10);
```

---

## 4. Architecture des composants

```
app/
├── layout.tsx          # Fonts, metadata, Analytics
├── page.tsx            # Assemble toutes les sections
└── globals.css         # Reset minimal + variables CSS

components/
├── Nav.tsx             # Navigation sticky avec backdrop blur
├── Hero.tsx            # Above the fold — titre + CTA + métriques
├── Valeur.tsx          # 3 cards (Livraison, Métier, Rigueur)
├── Projets.tsx         # 3 project cards en grid
├── Process.tsx         # 4 étapes sur fond gradient violet→rose
├── Temoignage.tsx      # Blockquote centré sur fond dark
├── About.tsx           # Bio + skills cloud
├── Contact.tsx         # Formulaire 3 champs + CTA
└── Footer.tsx          # Ligne de bas de page dark
```

---

## 5. Contenu — Section par section

### 5.1 Métadonnées SEO (layout.tsx)

```ts
export const metadata = {
  title: 'Dan Cohen — Expert Vibe Coding & Développement IA',
  description: 'Je vibe code votre prochain outil digital en quelques jours. Sites web, dashboards, apps mobiles sur mesure. Ingénieur ISEP + 15 ans Product chez Monoprix, TF1, Bouygues.',
  keywords: ['vibe coding', 'développement IA', 'freelance', 'Next.js', 'Cursor', 'MALT'],
  openGraph: {
    title: 'Dan Cohen — Expert Vibe Coding',
    description: 'Je vibe code votre prochain outil. En jours.',
    url: 'https://dancohen.dev',
    locale: 'fr_FR',
    type: 'website',
  },
}
```

---

### 5.2 Nav

- **Logo** : "Dan**.**Cohen" — "Dan" en `#7C3AED`, "." en `#DB2777`, "Cohen" en `#18181B`
- **Liens** : Valeur · Projets · Process · À propos (scroll smooth vers section)
- **CTA** : bouton pill gradient "Discutons ✦" → scroll vers `#contact`
- **Comportement** : `position: fixed`, `backdrop-filter: blur(16px)`, `background: rgba(250,250,250,0.88)`, `border-bottom: 1px solid #E4E4E7`
- **Mobile** : les liens disparaissent, le bouton CTA reste visible

---

### 5.3 Hero

**Tag** (badge animé pulsé) :
> Expert Vibe Coding & Développement IA

**H1** (gradient sur "vibe code") :
> Je **vibe code**
> votre prochain
> outil. **En jours.**

"vibe code" = gradient violet→rose
"En jours." = couleur cyan `#06B6D4`

**Sous-titre** :
> Sites web, dashboards, apps mobiles sur mesure. Ingénieur + 15 ans Product chez Monoprix, TF1, Bouygues — livré 5× plus vite avec les meilleurs outils IA.

**CTA principal** : "Discutons de votre projet ✦" → scroll `#contact`
**CTA secondaire** : "Voir mes projets ↓" → scroll `#projets`

**Métriques** (3 blocs côte à côte, chiffres en gradient) :
- `5×` — plus rapide qu'un dev classique
- `15` — ans en Product Management
- `3j` — délai moyen de livraison

**Logos clients** (chips Fira Code) :
- Monoprix · Bouygues Telecom · TF1 · Sarenza

**Blobs de fond** :
- Blob 1 : radial-gradient violet 8% opacity, top right, 700×700px
- Blob 2 : radial-gradient rose 6% opacity, bottom left, 500×500px

---

### 5.4 Valeur

**Section label** : `// pourquoi moi`
**H2** : "Un dev IA, pas juste **un dev**" (gradient sur "un dev")

**3 cards** (grid 3 colonnes) :

| Card | Icône | Titre | Métrique | Corps |
|---|---|---|---|---|
| 1 | ⚡ | Livraison express | → 5× plus rapide | J'utilise les meilleurs outils IA du marché — Cursor, Codex, Claude — pour coder en jours ce qu'un dev classique prend des semaines à livrer. |
| 2 | 🎯 | Compréhension métier | → 15 ans Product | PM chez Monoprix, TF1, Bouygues — je transforme des besoins complexes en produits qui marchent, sans réunion inutile ni spécifications interminables. |
| 3 | 🔒 | Rigueur ingénieur | → ISEP · IA Sherbrooke | Formation ingénieur + spécialisation IA : chaque ligne est validée pour la sécurité, la performance et la maintenabilité à long terme. |

---

### 5.5 Projets

**Section label** : `// projets récents`
**H2** : "Trois outils, **trois délais tenus**" (gradient sur "trois délais tenus")

**3 project cards** (grid 3 colonnes, flex-col) :

#### Projet 01 — Le Tournoi des Frérots
- Numéro : `01 / padel`
- Emoji : 🎾
- Titre : "Le Tournoi des Frérots"
- Tagline (Fira Code) : `→ livrée en 5 jours`
- Description : "30 équipes à gérer par WhatsApp. J'ai construit une plateforme complète : inscriptions, tirage au sort automatique, résultats en temps réel."
- Stack (Fira Code) : `VSCode · Codex · Next.js · PostgreSQL · Vercel`
- Badge résultat : "✦ 50+ équipes · 0 gestion manuelle"
- Lien : "Voir le projet →" en cyan

#### Projet 02 — Monop'Foot
- Numéro : `02 / entreprise`
- Emoji : ⚽
- Titre : "Monop'Foot"
- Tagline : `→ livrée en 4 jours`
- Description : "Le club de foot interne Monoprix sans outil digital. App complète : planification, classements, notifications — remplace les feuilles Excel."
- Stack : `Cursor · Claude Opus 4.5 · Next.js · Supabase`
- Badge résultat : "✦ 52 équipes · 0 feuille Excel"
- Lien : "Voir le projet →" en cyan

#### Projet 03 — Club de Belote de Suresnes
- Numéro : `03 / associatif`
- Emoji : 🃏
- Titre : "Club de Belote de Suresnes"
- Tagline : `→ livrée en 4 jours`
- Description : "Association locale sans présence digitale. Site vitrine + espace membres + calendrier. Autonomie complète pour le bureau, 0€/mois."
- Stack : `Bolt.new · Next.js · Neon · Resend · Vercel`
- Badge résultat : "✦ 47 membres · 0€/mois"
- Lien : "Voir le projet →" en cyan

---

### 5.6 Process

**Background** : `linear-gradient(135deg, #2E0087, #7C3AED, #DB2777)` avec motif SVG pointillé en overlay opacity 3%
**Section label** : `// ma méthode` (blanc 50%)
**H2** : "4 étapes, **0 surprise**" (blanc)

**4 étapes** (grid 4 colonnes, séparées par `border-right: 1px solid rgba(255,255,255,0.1)`) :

| Step | Titre | Temps (Fira Code cyan) | Description |
|---|---|---|---|
| STEP 01 / | Brief | Jour 0 · 1h | Un appel pour comprendre votre besoin, vos contraintes et votre délai. Pas de jargon technique. |
| STEP 02 / | Prototype | J+1 à J+2 | Un premier prototype cliquable pour valider les parcours avant de coder la solution finale. |
| STEP 03 / | Build | J+3 à J+7 | Construction complète, feature par feature. Partage d'avancement quotidien via message. |
| STEP 04 / | Livraison | J+5 à J+10 | Déploiement en ligne, formation rapide, et 30 jours de support inclus après la mise en production. |

---

### 5.7 Témoignage

**Background** : `#18181B`
**Tag** (badge Fira Code cyan) : `// testimonial`

**Blockquote** (Cabinet Grotesk Bold, blanc) :
> "Dan a livré notre outil en 4 jours. Ce qui m'a frappé, c'est qu'il a compris notre besoin métier immédiatement — sans qu'on ait besoin de tout expliquer."

**Auteur** :
- Avatar : cercle gradient violet→rose, initiale "M"
- Nom : "Marie D."
- Rôle : "Responsable Marketing · Monoprix"

---

### 5.8 About

**Section label** : `// à propos`
**H2** : "Ingénieur + PM + **Vibe Coder**" (gradient sur "Vibe Coder")

**Texte bio** (grid 2 colonnes, colonne gauche) :
> Ingénieur de formation (ISEP, spécialisation IA), je passe ma carrière à transformer des idées complexes en produits digitaux qui fonctionnent.
>
> Après 15 ans à piloter des apps mobiles pour Monoprix, TF1 et Bouygues, j'ai adopté les meilleurs outils d'IA générative pour livrer des solutions sur mesure 5× plus vite — sans sacrifier la qualité.
>
> Le vibe coding n'est pas un raccourci. C'est une méthode. Et ma formation technique garantit que ce qui est livré est solide, sécurisé et maintenable.

**Skills cloud** (colonne droite, flex-wrap) :

| Chip | Couleur |
|---|---|
| Cursor, OpenAI Codex, Claude | violet (`#7C3AED`) |
| Lovable, Bolt.new, v0.dev | rose (`#DB2777`) |
| Next.js, React, Tailwind | cyan (`#06B6D4`) |
| Supabase, PostgreSQL, Vercel, Figma, Framer Motion, n8n | gris neutre |

---

### 5.9 Contact

**Background** : `#FFFFFF`
**Section label** : `// contact`
**H2** : "Parlons de votre **prochain outil ✦**" (gradient)
**Sous-titre** : "Premier appel de 30 min gratuit — je vous dis si et comment je peux vous aider."

**Formulaire** (centré, max-width 640px) :
- Champ : Prénom
- Champ : Société
- Champ : Email
- Textarea : "Décrivez votre projet en quelques lignes..."
- Bouton : "Envoyer le message ✦" (pill gradient, centré)
- Note footer : "⚡ Réponse sous 24h · Suresnes, Île-de-France"

**Gestion formulaire** : React Hook Form + Resend API. En cas de succès, affiche un message "✦ Message envoyé ! Je reviens vers vous sous 24h." sans rechargement de page.

---

### 5.10 Footer

**Background** : `#18181B`
**Contenu** : "Dan Cohen · Expert Vibe Coding · Suresnes, France"
"Expert Vibe Coding" en gradient violet→rose

---

## 6. Animations (Framer Motion)

### Règles générales
- Toutes les animations doivent respecter `prefers-reduced-motion`
- Aucune animation ne doit dépasser 0.6s
- Les animations de scroll sont déclenchées par `whileInView` avec `viewport: { once: true }`

### Animations spécifiques

```ts
// Fade-up standard (sections)
initial: { opacity: 0, y: 24 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.5, ease: 'easeOut' }

// Stagger enfants (cards, steps)
variants: {
  container: { transition: { staggerChildren: 0.1 } },
  item: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
}

// Blob hero (flottement continu)
animate: { y: [0, -20, 0], scale: [1, 1.05, 1] }
transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' }

// Tag hero (pulse du point vert)
animate: { opacity: [1, 0.3, 1] }
transition: { duration: 2, repeat: Infinity }

// Hover card
whileHover: { y: -6, transition: { duration: 0.2 } }
```

---

## 7. Responsive (Mobile-first)

### Breakpoints Tailwind utilisés
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px

### Adaptations mobiles critiques

| Composant | Desktop | Mobile |
|---|---|---|
| Nav | Logo + liens + CTA | Logo + CTA uniquement (liens masqués) |
| Hero H1 | 96px | 44px (clamp) |
| Cards valeur | grid 3 colonnes | grid 1 colonne |
| Projects | grid 3 colonnes | grid 1 colonne |
| Process | grid 4 colonnes | grid 1 colonne avec bordure bottom |
| About | grid 2 colonnes | grid 1 colonne |
| Contact form | 2 champs côte à côte | 1 colonne |
| Section padding | 120px 56px | 80px 20px |

---

## 8. Performance & SEO

- **Images** : utiliser `next/image` avec `priority` sur le hero
- **Fonts** : `display=swap` sur toutes les polices, preconnect sur Google Fonts et Fontshare
- **LCP** : le Hero doit s'afficher en moins de 2.5s
- **Pas de JS inutile** : les sections statiques (Process, Footer) n'ont pas besoin de Framer Motion
- **Sitemap** : généré automatiquement par Next.js App Router
- **robots.txt** : `Allow: /`

---

## 9. Variables d'environnement (.env.local)

```bash
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=dan0588@gmail.com
NEXT_PUBLIC_SITE_URL=https://dancohen.dev
```

---

## 10. Fichiers de configuration

### .cursorrules (à créer à la racine)
```
Tu travailles sur le portfolio de Dan Cohen, Expert Vibe Coding & Développement IA.
Lis spec.md pour le contexte complet du projet.
Lis portfolio-C-vibe-creator.html pour la référence visuelle.

RÈGLES STRICTES :
- Stack : Next.js 15 App Router · TypeScript · Tailwind CSS · Framer Motion
- Design : Direction C "Vibe Creator" — voir spec.md section 3 pour les couleurs et typos exactes
- Langue : français pour tous les textes visibles, anglais pour le code
- Un seul CTA : "Discutons de votre projet ✦" → scroll vers #contact
- Mobile-first : chaque composant doit être responsive selon spec.md section 7
- Animations : Framer Motion uniquement, discrètes, respecter prefers-reduced-motion
- Jamais de lorem ipsum — utiliser uniquement le contenu de spec.md section 5
- Ne pas inventer de projets ou de clients autres que ceux listés dans spec.md
- Toujours vérifier que le rendu mobile est correct avant de valider un composant
```

### tailwind.config.ts (extrait)
```ts
theme: {
  extend: {
    fontFamily: {
      cabinet: ['"Cabinet Grotesk"', 'Bricolage Grotesque', 'sans-serif'],
      bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
      mono: ['"Fira Code"', 'monospace'],
    },
    colors: {
      violet: '#7C3AED',
      pink: '#DB2777',
      cyan: '#06B6D4',
    },
  },
}
```

---

## 11. Ordre de développement recommandé

1. `layout.tsx` — fonts, metadata, globals.css
2. `Nav.tsx` — navigation sticky (visible sur toutes les sections)
3. `Hero.tsx` — la section la plus importante, avec blobs et animations
4. `Valeur.tsx` — 3 cards statiques, simple
5. `Projets.tsx` — 3 project cards avec hover
6. `Process.tsx` — section gradient, 4 steps
7. `Temoignage.tsx` — blockquote centré, fond dark
8. `About.tsx` — bio + skills cloud
9. `Contact.tsx` — formulaire + intégration Resend
10. `Footer.tsx` — une ligne
11. **Deploy sur Vercel** — dès l'étape 4, avant que ce soit fini
12. Tests mobile sur vrai device

---

*Dernière mise à jour : Février 2026 — Dan Cohen*
