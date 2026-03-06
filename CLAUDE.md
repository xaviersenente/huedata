# HueData — Refonte du site vitrine

## Projet

Site vitrine pour HueData (huedata.fr), expert en marketing d'études, évènementiel et culturel. Fondateur : Stéphane Laurent (enseignant-chercheur, 15 ans d'expérience, +200 projets pilotés).

Refonte complète du site existant (WordPress + thème Colibri) vers une solution statique moderne.

Voir @docs/BRIEF.md pour le brief créatif complet et l'analyse du site existant.

## Stack technique

- **Framework** : Astro (SSG, zéro JS par défaut)
- **Contenu** : Astro Content Collections (Markdown/YAML dans `src/content/`)
- **Styling** : Tailwind CSS
- **Animations** : GSAP + ScrollTrigger (chargés en islands `client:visible`)
- **Déploiement** : Site statique (Netlify, Vercel ou équivalent)
- **CMS futur** : Keystatic peut être ajouté par-dessus les Content Collections si besoin

## Structure du projet

```
src/
├── content/          # Content Collections (Markdown)
│   ├── references/   # Études de cas / réalisations
│   ├── expertises/   # Pages d'expertise
│   └── temoignages/  # Témoignages clients
├── components/       # Composants Astro + composants Vue interactifs
│   ├── ui/           # Composants réutilisables (boutons, cards, etc.)
│   └── sections/     # Sections de pages (hero, stats, logos, etc.)
├── layouts/          # Layouts Astro
├── pages/            # Pages du site (file-based routing)
│   ├── index.astro
│   ├── expertises.astro
│   ├── references/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── a-propos.astro
│   └── contact.astro
├── styles/           # Styles globaux + config Tailwind
└── assets/           # Images, fonts, etc.
public/
├── images/           # Images statiques (logos clients, photos)
└── fonts/
```

## Deux directions créatives

Le client choisira entre deux propositions (ou un hybride). Les deux doivent être gardées en tête :

### Proposition A — « Hue Dada » (fun, colorée, ludique)
- Palette multi-teintes : magenta (#E94560), bleu électrique (#3A86FF), jaune (#FFBE0B), vert (#06D6A0)
- Typo display : Space Grotesk ou Clash Display (titres) + Inter (corps)
- Photos en duotone coloré, micro-animations GSAP, compteurs animés au scroll
- Ton tutoiement, enthousiaste

### Proposition B — « Data Culture » (moderne, visuelle, dynamique)
- Inspirations : designatives.com (typo XXL sombre, animations), mum.lu (vidéos intégrées, structure claire), crafto marketing (portfolio filtrable, texte rotatif)
- Palette sombre contrastée : noir charbon (#141414), blanc (#FFFFFF), bleu profond (#1B2E4A), accent corail (#FF4D4D), optionnel turquoise (#4ECDC4)
- Typo sans-serif bold XXL : Satoshi ou General Sans (titres 48-96px+), Inter (corps), uppercase + letter-spacing pour labels
- Hero plein écran sombre avec vidéo background ou photo immersive + titre animé texte rotatif GSAP
- Photos couleur naturelle GRANDES (festivals, foules, terrain), vidéos autoplay sur cartes projets
- Bandeau logos marquee infini, portfolio filtrable par tabs, chiffres XXL animés GSAP
- Ton vouvoiement dynamique et direct

## Références clients à mettre en avant

Ces références DOIVENT être visibles et valorisées sur le site :
- Les Eurockéennes
- La Filature de Mulhouse
- La Paille
- Peace and Lobe
- Rencontres & Racines
- No Logo Festival
- Le Moloco
- FC Sochaux Montbéliard
- Musée des Beaux-Arts de Besançon
- FEMA BFC

## Pages du site

1. **Accueil** : hero immersif, bandeau logos hiérarchisé, 3 pôles d'expertise, sélection projets phares, chiffres-clés animés, témoignages, CTA contact
2. **Expertises** : études quantitatives, analyses qualitatives, stratégie marketing, événementiel
3. **Références** : grille filtrable par domaine, projets phares en évidence
4. **Étude de cas** (template dynamique) : contexte → méthodologie → résultats → impact → témoignage
5. **À propos** : portrait de Stéphane, parcours, publications, valeurs
6. **Contact** : formulaire enrichi (type de projet, secteur, message), coordonnées, lien LinkedIn

## Commandes

- `npm run dev` : Serveur de développement Astro
- `npm run build` : Build statique
- `npm run preview` : Prévisualisation du build

## Conventions

- Composants interactifs (GSAP) en fichiers `.vue` ou scripts inline, hydratés avec `client:visible` ou `client:load`
- Images optimisées en WebP, lazy loading natif
- SEO : balises meta sur chaque page, schema.org (LocalBusiness, Service), sitemap auto Astro
- URLs propres : /references/no-logo-festival (pas de ?page_id=)
- Accessibilité : contraste WCAG AA minimum, navigation clavier, aria-labels
