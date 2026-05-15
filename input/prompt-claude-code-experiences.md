# Prompt Claude Code — Page Expériences

Copie-colle ce prompt dans Claude Code (VS Code) pour développer la fonctionnalité.

---

## Prompt

```
## Contexte

Je développe mon site portfolio Next.js (dancohen.fr). Je veux ajouter une page /experiences qui présente chronologiquement toutes mes missions professionnelles passées (hors projets freelance/vibe coding qui sont déjà dans la section "Projets" de la home).

## Maquette de référence

Utilise ce fichier HTML comme maquette de référence pour le design, la structure, les données et le comportement :
file:///Users/dancohen/Documents/Travail/IA/Porfolio/portfolio (1)/proposition-page-experiences.html

Respecte fidèlement :
- La structure : KPIs en haut → filtres → blocs entreprise avec cards missions
- Les couleurs, typographies et variables CSS de la maquette (gradient violet/magenta, Cabinet Grotesk, Bricolage Grotesque, Fira Code)
- Le style des cards (border-radius 16px, shadow subtile, barre gradient au hover, stack tags)
- Le filtrage par secteur (Tout / Retail / Média / Télécoms / Industrie) avec animation
- Le responsive (grille 1 col mobile, auto-fill desktop)

## Tâches à réaliser

### 1. Logos clients

Télécharge les logos des entreprises suivantes et place-les dans `/public/logos/` :
- monoprix.svg (ou .png)
- bouygues-telecom.svg
- tf1.svg
- m6.svg
- sarenza.svg
- la-poste.svg
- alstom.svg
- air-liquide.svg
- psa.svg (Peugeot Citroën / Stellantis)
- amf.svg (Autorité des Marchés Financiers)
- bnp-paribas.svg
- sfr.svg
- wavestone.svg
- tapptic.svg (ou riplee)
- beijaflore.svg

Pour chaque logo :
- Privilégie les versions SVG monochromes ou très épurées
- Si SVG indisponible, utilise un PNG de bonne qualité (min 128px, fond transparent)
- Si un logo est introuvable ou trop complexe à récupérer, crée un composant placeholder (initiales de la boîte dans un cercle avec le gradient du site)

### 2. Intégration des logos dans les cards

Dans chaque mission-card, remplace les emojis (📺, 👟, 🛒, 📦, 🚆, 🔬, 🚗, ⚖️, 🏦, 📡) par le logo correspondant :
- Taille : 24x24px dans le card-top, à gauche du nom du client
- Style : opacity 0.6 au repos, opacity 1 au hover de la card → les logos doivent rester discrets
- Filtre CSS en grayscale(1) au repos, grayscale(0) au hover pour un effet subtil
- Si le logo est en couleur, applique un filtre pour qu'il s'intègre au design monochrome

### 3. Création de la page /experiences

Crée une nouvelle page Next.js accessible à la route `/experiences` :
- Analyse les composants existants du projet (Header, Footer, layout, etc.) et réutilise-les
- Convertis le HTML de la maquette en composants React/Next.js en respectant l'architecture du projet
- Utilise Tailwind CSS (les classes du projet existant) plutôt que du CSS inline
- Les données des missions doivent être dans un fichier séparé (`data/experiences.ts` ou similaire) pour faciliter la maintenance
- Le filtrage doit fonctionner en React (useState) avec une animation de transition (opacity + transform)
- Chaque logo doit être importé via next/image pour l'optimisation

### 4. CTA dans la section About

Dans la section "À propos" de la page d'accueil, ajoute un bouton "Mes expériences →" à côté du bouton existant "Voir mon CV" :
- Style : bouton secondaire (bordure, fond transparent, texte sombre)
- Lien : `/experiences`
- Le bouton doit être cohérent visuellement avec "Voir mon CV"
- Ne modifie PAS la navigation du header (pas de nouvelle entrée nav)

### 5. Vérification

- Vérifie que la page est responsive (mobile, tablette, desktop)
- Vérifie que les filtres fonctionnent correctement
- Vérifie que la navigation entre la home et /experiences fonctionne
- Lance un build (`npm run build`) pour vérifier qu'il n'y a pas d'erreurs
```

---

**Note :** Si Claude Code te demande confirmation pour télécharger les logos, accepte. S'il n'arrive pas à trouver certains logos, il créera des placeholders avec les initiales — c'est le comportement attendu.
