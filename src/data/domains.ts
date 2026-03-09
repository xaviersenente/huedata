export const domainLabels: Record<string, string> = {
  festival: "Festival",
  salle: "Salle & SMAC",
  musee: "Musée & Patrimoine",
  sport: "Sport",
  collectivite: "Collectivité",
  association: "Association",
};

// --- Tokens de couleur par domaine (base) ---
type ColorToken = "magenta" | "electric" | "mustard" | "sage";

const domainToken: Record<string, ColorToken> = {
  festival: "magenta",
  salle: "electric",
  musee: "mustard",
  sport: "sage",
  collectivite: "electric",
  association: "sage",
};

// --- Styles domaine — page [slug].astro + sidebar ---
export interface DomainSlugStyle {
  text: string;
  bg: string;
  bgBadge: string;
  bgSubtle: string;
  bgSoft: string;
  borderLight: string;
  textLight: string;
  btnClass: string;
}

/**
 * Slug styles — written out explicitly so Tailwind can scan every class.
 *
 * text-magenta text-electric text-mustard text-sage
 * bg-magenta bg-electric bg-mustard bg-sage
 * bg-magenta/[0.08] bg-electric/[0.08] bg-mustard/[0.08] bg-sage/[0.08]
 * bg-magenta/[0.03] bg-electric/[0.03] bg-mustard/[0.03] bg-sage/[0.03]
 * bg-magenta/[0.06] bg-electric/[0.06] bg-mustard/[0.06] bg-sage/[0.06]
 * border-magenta/[0.19] border-electric/[0.19] border-mustard/[0.19] border-sage/[0.19]
 * text-magenta/[0.08] text-electric/[0.08] text-mustard/[0.08] text-sage/[0.08]
 * bg-magenta! bg-electric! bg-mustard! bg-sage!
 */
const slugStyleMap: Record<ColorToken, DomainSlugStyle> = {
  magenta: {
    text: "text-magenta",
    bg: "bg-magenta",
    bgBadge: "bg-magenta/[0.08]",
    bgSubtle: "bg-magenta/[0.03]",
    bgSoft: "bg-magenta/[0.06]",
    borderLight: "border-magenta/[0.19]",
    textLight: "text-magenta/[0.08]",
    btnClass: "bg-magenta!",
  },
  electric: {
    text: "text-electric",
    bg: "bg-electric",
    bgBadge: "bg-electric/[0.08]",
    bgSubtle: "bg-electric/[0.03]",
    bgSoft: "bg-electric/[0.06]",
    borderLight: "border-electric/[0.19]",
    textLight: "text-electric/[0.08]",
    btnClass: "bg-electric!",
  },
  mustard: {
    text: "text-mustard",
    bg: "bg-mustard",
    bgBadge: "bg-mustard/[0.08]",
    bgSubtle: "bg-mustard/[0.03]",
    bgSoft: "bg-mustard/[0.06]",
    borderLight: "border-mustard/[0.19]",
    textLight: "text-mustard/[0.08]",
    btnClass: "bg-mustard!",
  },
  sage: {
    text: "text-sage",
    bg: "bg-sage",
    bgBadge: "bg-sage/[0.08]",
    bgSubtle: "bg-sage/[0.03]",
    bgSoft: "bg-sage/[0.06]",
    borderLight: "border-sage/[0.19]",
    textLight: "text-sage/[0.08]",
    btnClass: "bg-sage!",
  },
};

export const domainSlugStyles: Record<string, DomainSlugStyle> =
  Object.fromEntries(
    Object.entries(domainToken).map(([k, c]) => [k, slugStyleMap[c]]),
  ) as Record<string, DomainSlugStyle>;

// --- Styles domaine — Card.astro ---
export interface DomainCardStyle {
  cardColor: string;
  cardBgFeatured: string;
  text: string;
  bgMuted: string;
  borderMuted: string;
  dot: string;
}

/**
 * Card styles — written out explicitly so Tailwind can scan every class.
 *
 * Classes used:
 * text-magenta text-electric text-mustard text-sage
 * bg-magenta bg-electric bg-mustard bg-sage
 * bg-magenta/8 bg-electric/8 bg-mustard/8 bg-sage/8
 * border-magenta/25 border-electric/25 border-mustard/25 border-sage/25
 * [--card-color:var(--color-magenta)] [--card-color:var(--color-electric)] [--card-color:var(--color-mustard)] [--card-color:var(--color-sage)]
 * [--card-bg:color-mix(in_srgb,var(--color-magenta)_5%,var(--color-noir))] [--card-bg:color-mix(in_srgb,var(--color-electric)_5%,var(--color-noir))] [--card-bg:color-mix(in_srgb,var(--color-mustard)_5%,var(--color-noir))] [--card-bg:color-mix(in_srgb,var(--color-sage)_5%,var(--color-noir))]
 */
const cardStyleMap: Record<ColorToken, DomainCardStyle> = {
  magenta: {
    cardColor: "[--card-color:var(--color-magenta)]",
    cardBgFeatured:
      "[--card-bg:color-mix(in_srgb,var(--color-magenta)_5%,var(--color-noir))]",
    text: "text-magenta",
    bgMuted: "bg-magenta/8",
    borderMuted: "border-magenta/25",
    dot: "bg-magenta",
  },
  electric: {
    cardColor: "[--card-color:var(--color-electric)]",
    cardBgFeatured:
      "[--card-bg:color-mix(in_srgb,var(--color-electric)_5%,var(--color-noir))]",
    text: "text-electric",
    bgMuted: "bg-electric/8",
    borderMuted: "border-electric/25",
    dot: "bg-electric",
  },
  mustard: {
    cardColor: "[--card-color:var(--color-mustard)]",
    cardBgFeatured:
      "[--card-bg:color-mix(in_srgb,var(--color-mustard)_5%,var(--color-noir))]",
    text: "text-mustard",
    bgMuted: "bg-mustard/8",
    borderMuted: "border-mustard/25",
    dot: "bg-mustard",
  },
  sage: {
    cardColor: "[--card-color:var(--color-sage)]",
    cardBgFeatured:
      "[--card-bg:color-mix(in_srgb,var(--color-sage)_5%,var(--color-noir))]",
    text: "text-sage",
    bgMuted: "bg-sage/8",
    borderMuted: "border-sage/25",
    dot: "bg-sage",
  },
};

export const domainCardStyles: Record<string, DomainCardStyle> =
  Object.fromEntries(
    Object.entries(domainToken).map(([k, c]) => [k, cardStyleMap[c]]),
  ) as Record<string, DomainCardStyle>;

// --- Styles domaine — references/index filtres actifs ---
// bg-magenta bg-electric bg-mustard bg-sage text-noir border-magenta border-electric border-mustard border-sage
export const domainActiveClass: Record<string, string> = {
  festival: "bg-magenta text-noir border-magenta",
  salle: "bg-electric text-noir border-electric",
  musee: "bg-mustard text-noir border-mustard",
  sport: "bg-sage text-noir border-sage",
  collectivite: "bg-electric text-noir border-electric",
  association: "bg-sage text-noir border-sage",
};

// --- Styles domaine — dot marquee (LogoCloud) ---
export const domainDotClass: Record<string, string> = {
  festival: "bg-magenta",
  salle: "bg-electric",
  musee: "bg-mustard",
  sport: "bg-sage",
  collectivite: "bg-electric",
  association: "bg-sage",
};

// --- Styles domaine — Stats text color ---
export const colorTextClass: Record<string, string> = {
  magenta: "text-magenta",
  electric: "text-electric",
  mustard: "text-mustard",
  sage: "text-sage",
};

// --- Styles expertises cards (page détail) ---
export interface ExpertiseCardStyle {
  text: string;
  bgPanel: string;
  bgIcon: string;
  topGradient: string;
  dot: string;
  numberText: string;
}

/**
 * Expertise card styles — explicit for Tailwind scanning.
 *
 * text-magenta text-electric text-mustard text-sage
 * bg-magenta/3 bg-electric/3 bg-mustard/3 bg-sage/3
 * bg-magenta/15 bg-electric/15 bg-mustard/15 bg-sage/15
 * bg-linear-to-r from-magenta from-electric from-mustard from-sage to-transparent
 * bg-magenta bg-electric bg-mustard bg-sage
 * text-magenta/15 text-electric/15 text-mustard/15 text-sage/15
 */
export const expertiseCardStyles: Record<string, ExpertiseCardStyle> = {
  electric: {
    text: "text-electric",
    bgPanel: "bg-electric/3",
    bgIcon: "bg-electric/15",
    topGradient: "bg-linear-to-r from-electric to-transparent",
    dot: "bg-electric",
    numberText: "text-electric/15",
  },
  magenta: {
    text: "text-magenta",
    bgPanel: "bg-magenta/3",
    bgIcon: "bg-magenta/15",
    topGradient: "bg-linear-to-r from-magenta to-transparent",
    dot: "bg-magenta",
    numberText: "text-magenta/15",
  },
  mustard: {
    text: "text-mustard",
    bgPanel: "bg-mustard/3",
    bgIcon: "bg-mustard/15",
    topGradient: "bg-linear-to-r from-mustard to-transparent",
    dot: "bg-mustard",
    numberText: "text-mustard/15",
  },
  sage: {
    text: "text-sage",
    bgPanel: "bg-sage/3",
    bgIcon: "bg-sage/15",
    topGradient: "bg-linear-to-r from-sage to-transparent",
    dot: "bg-sage",
    numberText: "text-sage/15",
  },
};

// --- Styles expertises preview (accueil) ---
export interface ExpertisePreviewStyle {
  text: string;
  textMuted: string;
  bgMuted: string;
  glow: string;
  hoverText: string;
}

/**
 * Expertise preview styles — explicit for Tailwind scanning.
 *
 * text-magenta text-electric text-mustard text-sage
 * text-magenta/15 text-electric/15 text-mustard/15 text-sage/15
 * bg-magenta/15 bg-electric/15 bg-mustard/15 bg-sage/15
 * group-hover:text-magenta group-hover:text-electric group-hover:text-mustard group-hover:text-sage
 */
export const expertisePreviewStyles: Record<string, ExpertisePreviewStyle> = {
  electric: {
    text: "text-electric",
    textMuted: "text-electric/15",
    bgMuted: "bg-electric/15",
    glow: "bg-[radial-gradient(ellipse_at_top_left,color-mix(in_srgb,var(--color-electric)_8%,transparent),transparent_60%)]",
    hoverText: "group-hover:text-electric",
  },
  magenta: {
    text: "text-magenta",
    textMuted: "text-magenta/15",
    bgMuted: "bg-magenta/15",
    glow: "bg-[radial-gradient(ellipse_at_top_left,color-mix(in_srgb,var(--color-magenta)_8%,transparent),transparent_60%)]",
    hoverText: "group-hover:text-magenta",
  },
  mustard: {
    text: "text-mustard",
    textMuted: "text-mustard/15",
    bgMuted: "bg-mustard/15",
    glow: "bg-[radial-gradient(ellipse_at_top_left,color-mix(in_srgb,var(--color-mustard)_8%,transparent),transparent_60%)]",
    hoverText: "group-hover:text-mustard",
  },
  sage: {
    text: "text-sage",
    textMuted: "text-sage/15",
    bgMuted: "bg-sage/15",
    glow: "bg-[radial-gradient(ellipse_at_top_left,color-mix(in_srgb,var(--color-sage)_8%,transparent),transparent_60%)]",
    hoverText: "group-hover:text-sage",
  },
};
