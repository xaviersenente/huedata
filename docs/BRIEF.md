# Brief de refonte HueData — Document de contexte détaillé

## 1. Analyse du site existant (huedata.fr)

### Ce qui fonctionne
- Positionnement niche clair : marketing d'études pour l'événementiel et le culturel
- Profil fondateur riche : Stéphane Laurent, 15 ans enseignement marketing, chercheur associé (labo ELLIADD), ~200 projets pilotés, 12 colloques, articles en revue A
- Références solides : FC Sochaux, No Logo, Musée des Beaux-Arts de Besançon, FEMA BFC, Le Moloco, Rencontres & Racines
- Chiffres parlants : fichiers de 20 000 à 44 000 lignes, 600 à 1 900 réponses/étude

### Ce qui ne fonctionne pas
- **Design** : thème Colibri générique, palette bichrome rouge/noir restrictive, hiérarchie visuelle faible, aucun visuel immersif
- **Contenu** : références sous-exploitées (logos en grille sans contexte), page réalisations = liste plate chronologique, seulement 2 témoignages cachés en sous-page, pas de page services dédiée, jeu de mots "Hue Dada" totalement ignoré
- **Technique** : URLs ?page_id= (SEO mauvais), formulaire limité 180 caractères, un seul CTA, footer minimaliste sans LinkedIn ni mentions légales

### Références clientes actuelles (sur le site)
- No Logo Festival (Fraisans) — études annuelles depuis 2015 (billetterie 20k lignes, 1200-1900 réponses/an)
- FEMA BFC — diagnostics COVID 2019 & 2022
- La Poudrière (Belfort) — étude diversité/égalité 2022
- Necronomi'Con (Belfort) — gestion événement + étude satisfaction, 9000 visiteurs
- BUG Days (Besançon) — étude satisfaction, 7000 visiteurs
- On Tours (Dole) — étude journal des ventes sur 10 ans, 44 000 lignes
- Musée des Beaux-Arts de Besançon — billetterie 40k lignes, étude satisfaction 600 réponses, rapport 50 pages
- Semi-marathon du Lion — satisfaction 1000 réponses / 5000 compétiteurs
- Rencontres & Racines (Audincourt) — billetterie + satisfaction + impact économique
- Le Moloco (Audincourt) — satisfaction 2016 et 2019
- FC Sochaux Montbéliard — étude spectateurs + cartographie
- Croc Beer — étude de faisabilité

### Références à ajouter (demande client)
- Les Eurockéennes
- La Filature de Mulhouse
- La Paille
- Peace and Lobe

### Témoignages existants
- Florent Sanseigne (No Logo) : recommande l'analyse des données pour la réussite événementielle
- David Demange (Le Moloco) : souligne l'importance des données pour faire évoluer le projet et argumenter auprès des partenaires

---

## 2. Profil du fondateur — Stéphane Laurent

- Créateur d'entreprise (skateshop) après ses études
- Booker/manager de groupes, organisateur de concerts et grands événements
- Président de 2 associations, trésorier d'une 3ème
- Enseignant marketing depuis 15 ans, ~200 projets IUT pilotés
- Chercheur associé (labo ELLIADD) depuis 2013, recherche appliquée culture/festivals
- 12 colloques, demi-douzaine d'articles dont certains en revue A
- Domaines d'expertise : datamining, stratégie data-driven, études marketing quanti/quali, événementiel grand public, gestion de projets associatifs

---

## 3. Proposition A — « Hue Dada »

### Concept
"Hue" (couleur) + "Data" (données) = "Hue dada" (cheval de bataille, passion). La rigueur des données rencontre l'énergie vibrante de la culture.

**Manifeste** : « Nos données ont des couleurs. Votre public a une histoire. On la raconte ensemble. »

### Palette
- Magenta vif : #E94560 → Festivals & musiques actuelles
- Bleu électrique : #3A86FF → Data, analyse, chiffres
- Jaune moutarde : #FFBE0B → Culture, musées, patrimoine
- Vert sauge : #06D6A0 → Sport, associatif, terrain
- Fond : noir profond #0D0D0D ou blanc cassé selon sections

### Typographie
- Titres : Space Grotesk ou Clash Display (géométrique, moderne, légèrement décalée)
- Corps : Inter ou DM Sans

### Design
- Micro-animations GSAP : compteurs au scroll, graphiques qui se dessinent
- Photos en duotone coloré (filtre bichrome magenta/bleu)
- Formes géométriques colorées en arrière-plan (data viz abstraites)
- Grille références filtrable avec code couleur par domaine
- Cartes projets phares avec badge « Projet phare »
- Timeline interactive du parcours de Stéphane sur la page À propos

### Ton éditorial
Tutoiement ou "on". Accessible, enthousiaste, pointes d'humour.
- « 44 000 lignes de données ? On adore. C'est là qu'on trouve les pépites. »
- « Du No Logo aux Eurockéennes, on décrypte vos publics. »

---

## 4. Proposition B — « Data Culture » (version modernisée)

### Concept
HueData positionné comme un partenaire agile et moderne pour le secteur culturel et événementiel. Un design contemporain, visuel et dynamique qui inspire confiance sans tomber dans l'institutionnel. L'idée : montrer l'énergie du terrain (festivals, foules, scènes) à travers une mise en page moderne et aérée.

**Manifeste** : « La donnée au service de la culture. L'expertise au service de vos décisions. »

### Sources d'inspiration
- **designatives.com** : aspect sombre immersif, typographie sans-serif bold en très grand format, animations fluides, mise en page asymétrique et moderne
- **mum.lu** : vidéos intégrées dès le hero, carrousel projets avec vignettes vidéo, structure claire par services, texte rotatif animé, ton pro mais accessible
- **crafto.themezaa.com/marketing** : bandeau logos défilants, texte rotatif dans les titres, sections alternées photo/texte, portfolio filtrable, mise en avant vidéo "play" sur les projets

### Palette
Palette sombre et contrastée, moderne, avec un accent chaud :
- Noir charbon : #141414 → Fond principal hero et sections d'impact (pas un noir plat : légère texture ou dégradé subtil)
- Blanc pur : #FFFFFF → Textes sur fond sombre, fonds de sections alternées
- Gris clair : #F5F5F5 → Fond de sections secondaires
- Bleu profond : #1B2E4A → Couleur secondaire, blocs d'expertise, footer
- Accent corail/rouge vif : #FF4D4D → CTA, liens actifs, badges, éléments interactifs. Apporte l'énergie sans le côté multicolore de la proposition A
- Optionnel — accent secondaire froid : #4ECDC4 (turquoise) pour du contraste sur certains chiffres/graphiques

### Typographie
Exit les serifs classiques. Tout en sans-serif contemporain, bold et affirmé :
- Titres : Satoshi, General Sans, ou Manrope — sans-serif géométrique moderne, en graisse Bold ou Black, utilisé en TRÈS grande taille (clamp responsive de 48px à 96px+). Effet d'impact visuel comme Designatives
- Corps : Inter ou DM Sans — lisibilité maximale, neutre et moderne
- Accents textuels : titres en uppercase avec letter-spacing large pour les labels de section (comme MUM.lu : "Strategy", "Creation", etc.)

### Design & mise en page
**Hero plein écran immersif :**
- Fond sombre (noir charbon ou vidéo background en loop : montage rapide de festivals, foules, coulisses data)
- Titre XXL en blanc, animé avec texte rotatif (comme MUM : "simple / attrayant / efficace" ou Crafto : "strategy / approach / planning"). Exemple : « On analyse vos [publics / données / événements] »
- Sous-titre court + double CTA (bouton principal corail + bouton secondaire outline)
- Scroll indicator animé

**Sections à forte charge visuelle :**
- Photos GRANDES, pleine largeur ou en grille asymétrique (pas de petites vignettes perdues). Photos couleur naturelle (pas de N&B), montrant les festivals, les foules, les coulisses, Stéphane sur le terrain
- Intégrations vidéo : courtes vidéos autoplay (muted) sur les cartes projets, comme MUM.lu. Au hover, la vidéo joue. Bouton "play" pour les vidéos longues (témoignages, making-of)
- Alternance sections fond blanc / fond sombre pour le rythme visuel

**Bandeau logos clients :**
- Logos en défilement horizontal infini (marquee animé GSAP), en monochrome blanc sur fond sombre ou monochrome foncé sur fond clair
- Les logos phares (Eurockéennes, Filature, La Paille, Peace and Lobe) légèrement plus grands

**Section projets / références :**
- Grille moderne style portfolio : cartes avec image de couverture en plein, overlay sombre au hover révélant le titre + chiffre-clé + bouton "Voir l'étude"
- Filtres par domaine (tabs horizontaux, pas de dropdown)
- Les 5 projets phares en cartes plus grandes en haut, éventuellement avec vignette vidéo autoplay

**Chiffres-clés :**
- Section fond sombre, chiffres en typographie XXL Bold blanc, avec compteur GSAP au scroll. Accent corail sur les unités
- Layout horizontal en 4 colonnes ou layout décalé asymétrique

**Témoignages :**
- Pas de carrousel classique. Citation en pleine largeur, grande typographie, avec logo client à côté. Défilement au scroll ou navigation par points
- Éventuellement format vidéo : extrait court du client qui parle

**Page À propos :**
- Grande photo portrait de Stéphane en situation (sur un festival, en présentation). Pas une photo studio classique
- Parcours présenté en blocs visuels thématiques avec icônes/illustrations inline : "L'Enseignant" / "Le Chercheur" / "L'Homme de Terrain" / "L'Analyste"
- Section publications/colloques présentée sobrement mais valorisée

**Footer :**
- Fond noir, grande typographie pour l'email de contact, liens réseaux sociaux (LinkedIn notamment), mentions légales, petit formulaire newsletter optionnel

### Animations & interactions (GSAP + ScrollTrigger)
- Texte rotatif/typewriter sur le hero (GSAP TextPlugin ou SplitText)
- Fade-in + léger slide-up au scroll pour les sections (ScrollTrigger)
- Compteurs chiffres-clés animés au scroll
- Marquee horizontal infini pour les logos clients
- Hover sur cartes projets : scale léger image + overlay reveal
- Vidéos autoplay au scroll (IntersectionObserver ou ScrollTrigger)
- Transitions de page douces (Astro View Transitions API)
- PAS d'animations gadgets (pas de curseur custom, pas de parallaxe lourde). Tout reste fluide, rapide, utile

### Ton éditorial
Vouvoiement, mais dynamique et direct. Pas de jargon, phrases courtes, affirmatives. L'énergie du terrain transparaît dans les mots.
- « Depuis 10 ans, nous transformons vos données en décisions. »
- « 1 900 réponses. 40 pages d'analyse. Une stratégie sur mesure. »
- « Du festival au musée, nous décryptons vos publics. »

---

## 5. Structure des Content Collections

### references (src/content/references/)
```yaml
# Exemple : no-logo-festival.md
---
title: "Festival No Logo"
slug: "no-logo-festival"
client: "No Logo"
location: "Fraisans"
year: "depuis 2015"
domain: "festival"  # festival | salle | musee | sport | collectivite | association
featured: true       # Projet phare à mettre en avant
logo: "/images/logos/no-logo.png"
cover: "/images/references/no-logo-cover.jpg"
stats:
  - label: "lignes de billetterie"
    value: "20 000"
  - label: "réponses/an"
    value: "1 900"
  - label: "années de collaboration"
    value: "10+"
services:
  - "Étude de billetterie + cartographie"
  - "Étude descriptive et de satisfaction"
  - "Étude d'impact économique (2017)"
testimonial:
  author: "Florent Sanseigne"
  role: "No Logo Festival"
  quote: "En 2022 l'analyse et la connaissance des acteurs de son événement est un moyen de réussite !"
---

Contenu libre en Markdown : contexte, méthodologie, résultats, impact...
```

### expertises (src/content/expertises/)
```yaml
---
title: "Études quantitatives & data mining"
slug: "etudes-quantitatives"
icon: "chart-bar"  # ou chemin vers icône SVG
order: 1
color: "#3A86FF"   # pour proposition A
---
```

### temoignages (src/content/temoignages/)
```yaml
---
author: "David Demange"
role: "Directeur"
organization: "Le Moloco"
logo: "/images/logos/moloco.png"
featured: true
---
Le travail sur les datas avec Stéphane a été très important dans le regard que le Moloco porte sur sa propre activité...
```
