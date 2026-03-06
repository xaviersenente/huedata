# HueData — Site vitrine

Site vitrine de **HueData** ([huedata.fr](https://huedata.fr)), cabinet expert en marketing d'études pour l'événementiel et le culturel. Fondateur : Stéphane Laurent, enseignant-chercheur, 15 ans d'expérience, +200 projets pilotés.

## Stack technique

| Outil | Rôle |
|---|---|
| [Astro](https://astro.build) | Framework SSG (génération statique) |
| [Tailwind CSS](https://tailwindcss.com) | Styles |
| [GSAP](https://gsap.com) | Animations et ScrollTrigger |
| [Keystatic](https://keystatic.com) | CMS — édition de contenu via GitHub |
| [Netlify](https://netlify.com) | Hébergement + formulaire de contact + fonctions serverless |

## Structure du projet

```
src/
├── content/          # Content Collections (Markdown)
│   ├── references/   # Études de cas / réalisations
│   ├── expertises/   # Pages d'expertise
│   └── temoignages/  # Témoignages clients
├── components/
│   ├── ui/           # Composants réutilisables (Button, etc.)
│   └── sections/     # Sections de pages (Hero, Stats, LogoCloud…)
├── layouts/          # Layout principal
├── pages/            # Routing fichier-based
│   ├── index.astro
│   ├── expertises.astro
│   ├── references/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── a-propos.astro
│   └── contact.astro
└── styles/           # Styles globaux
public/
└── images/           # Logos clients, photos
```

## Développement local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # Build statique dans dist/
npm run preview   # Prévisualiser le build
```

## CMS — Keystatic

Le contenu est éditable via l'interface Keystatic :

- **En local** : `http://localhost:4321/keystatic`
- **En production** : `https://huedata.netlify.app/keystatic`

Les modifications via Keystatic créent des commits directement sur le repo GitHub, ce qui déclenche un rebuild automatique sur Netlify.

### Collections disponibles
- **Références** — études de cas clients (`src/content/references/`)
- **Expertises** — pages de services (`src/content/expertises/`)
- **Témoignages** — citations clients (`src/content/temoignages/`)

## Déploiement

Le site est déployé automatiquement sur Netlify à chaque push sur `main`.

### Variables d'environnement requises (Netlify)

| Variable | Description |
|---|---|
| `KEYSTATIC_GITHUB_CLIENT_ID` | Client ID de la GitHub App |
| `KEYSTATIC_GITHUB_CLIENT_SECRET` | Client Secret de la GitHub App |
| `KEYSTATIC_SECRET` | Secret aléatoire pour les sessions (`openssl rand -hex 32`) |

### GitHub App (Keystatic)

L'authentification Keystatic utilise une **GitHub App** (pas une OAuth App). La GitHub App doit avoir :
- Callback URL : `https://huedata.netlify.app/api/keystatic/github/oauth/callback`
- Permission : Repository > Contents > Read & write
- Option : Expire user authorization tokens ✅

## Formulaire de contact

Le formulaire utilise **Netlify Forms**. Les soumissions sont visibles dans Netlify > Forms > contact. Les notifications email se configurent depuis le dashboard Netlify.
