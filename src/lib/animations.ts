import { gsap, ScrollTrigger } from "./gsap";

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

interface RevealOptions {
  y?: number;
  x?: number;
  duration?: number;
  start?: string;
  stagger?: number;
  delay?: number;
}

/**
 * Fade-in + slide reveal on scroll.
 * Skips animation and shows immediately when prefers-reduced-motion is active.
 */
export function scrollReveal(
  target: gsap.TweenTarget,
  trigger: string | Element,
  options: RevealOptions = {},
) {
  const {
    y = 40,
    x = 0,
    duration = 0.8,
    start = "top 75%",
    stagger = 0.15,
    delay,
  } = options;

  if (reduced) {
    gsap.set(target, { opacity: 1, y: 0, x: 0 });
    return;
  }

  gsap.fromTo(
    target,
    { opacity: 0, y, x },
    {
      opacity: 1,
      y: 0,
      x: 0,
      duration,
      ease: "power3.out",
      stagger,
      delay,
      scrollTrigger: { trigger, start, once: true },
    },
  );
}

/**
 * Simple fade-in (no scroll trigger). Useful for page-load animations.
 */
export function fadeIn(
  target: gsap.TweenTarget,
  options: Omit<RevealOptions, "start"> = {},
) {
  const { y = 20, x = 0, duration = 0.5, stagger, delay } = options;

  if (reduced) {
    gsap.set(target, { opacity: 1, y: 0, x: 0 });
    return;
  }

  gsap.fromTo(
    target,
    { opacity: 0, y, x },
    { opacity: 1, y: 0, x: 0, duration, ease: "power3.out", stagger, delay },
  );
}
