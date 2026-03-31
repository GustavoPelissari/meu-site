export function initAnimations() {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;

  if (!gsap) {
    console.warn("GSAP não foi carregado.");
    return;
  }

  if (ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion) {
    gsap.from(".hero .reveal", {
      opacity: 0,
      y: 32,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out"
    });

    gsap.from(".header", {
      opacity: 0,
      y: -20,
      duration: 0.7,
      ease: "power2.out"
    });

    const sections = gsap.utils.toArray(".section");

    sections.forEach((section) => {
      const items = section.querySelectorAll(".reveal");
      if (!items.length) return;

      gsap.from(items, {
        scrollTrigger: {
          trigger: section,
          start: "top 78%"
        },
        opacity: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out"
      });
    });

    const parallax = document.querySelector("[data-parallax]");
    if (parallax && ScrollTrigger) {
      gsap.to(parallax, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: parallax,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8
        }
      });
    }

    gsap.utils.toArray(".card--portfolio").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { y: -8, duration: 0.28, ease: "power2.out" });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, { y: 0, duration: 0.28, ease: "power2.out" });
      });
    });

    gsap.utils.toArray(".button").forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, { scale: 1.02, duration: 0.22, ease: "power2.out" });
      });
      button.addEventListener("mouseleave", () => {
        gsap.to(button, { scale: 1, duration: 0.22, ease: "power2.out" });
      });
    });
  }
}