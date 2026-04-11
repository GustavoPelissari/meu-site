const projects = [
  {
    kicker: "Clinicas e consultorios",
    title: "Um site pensado para transmitir cuidado, seguranca e organizacao.",
    description:
      "Ideal para negocios de saude, estetica e atendimento agendado que precisam parecer confiaveis logo no primeiro acesso. A proposta e passar clareza, cuidado e facilitar o contato para quem ja esta buscando ajuda.",
    stack:
      "Clinicas, consultorios, centros de estetica, terapias e atendimento com horario marcado.",
    deliverable:
      "Apresentacao de servicos, equipe, localizacao, perguntas frequentes e botoes claros para contato ou agendamento.",
    impact:
      "Mais seguranca para quem esta conhecendo o seu negocio e decidindo se entra em contato.",
    points: [
      "Visual limpo e premium para valorizar a experiencia do paciente ou cliente.",
      "Informacoes organizadas para reduzir duvidas e acelerar a decisao.",
      "Contato rapido por WhatsApp, formulario ou botao de agendamento.",
    ],
  },
  {
    kicker: "Escritorios e servicos",
    title: "Uma apresentacao mais forte para negocios que vivem de confianca.",
    description:
      "Para advogados, consultores, contadores e empresas de servico, o site precisa fazer o cliente sentir seguranca antes da primeira reuniao. O foco aqui e organizacao, autoridade e boa primeira impressao.",
    stack: "Escritorios, consultorias, servicos B2B, assessorias e atendimento profissional.",
    deliverable:
      "Home com proposta clara, paginas de servicos, diferenciais, depoimentos e canal direto para orcamento.",
    impact:
      "Mais autoridade percebida e uma imagem bem mais profissional para quem chega pela primeira vez.",
    points: [
      "Explica melhor o que a empresa faz e para quem ela atende.",
      "Ajuda o cliente a perceber valor antes de comparar somente por preco.",
      "Deixa o caminho para o contato mais simples e mais direto.",
    ],
  },
  {
    kicker: "Negocios locais e de bairro",
    title: "Mais confianca para lojas, padarias, restaurantes e servicos que vivem da reputacao local.",
    description:
      "Se o cliente encontra sua empresa pelo Instagram, Google, indicacao ou mapa, o site precisa mostrar rapidamente o que voce vende, onde atende e como entrar em contato. A proposta aqui e ser claro, confiavel e facil de consultar no celular.",
    stack: "Lojas, padarias, restaurantes, mercados de bairro, servicos locais e negocios familiares.",
    deliverable:
      "Pagina institucional com servicos ou produtos em destaque, horario ou area atendida, localizacao, provas de confianca e botoes fortes para contato.",
    impact:
      "Mais seguranca para quem esta comparando opcoes e quer decidir rapido pelo celular.",
    points: [
      "Ajuda seu negocio a parecer organizado mesmo quando a venda comeca pelo WhatsApp.",
      "Mostra o essencial sem exagero: o que voce faz, onde atende e como contratar.",
      "Funciona bem para quem precisa transmitir proximidade, clareza e profissionalismo.",
    ],
  },
  {
    kicker: "Profissionais premium",
    title: "Uma marca pessoal mais forte para quem vende conhecimento e confianca.",
    description:
      "Arquitetos, mentores, consultores e especialistas precisam de uma apresentacao que transmita nivel. Aqui a ideia e unir elegancia visual, clareza e uma presenca que valoriza o trabalho autoral.",
    stack:
      "Arquitetos, mentores, consultores, especialistas e profissionais com posicionamento premium.",
    deliverable:
      "Portfolio ou site pessoal com apresentacao, servicos, diferenciais e CTA para reuniao ou proposta.",
    impact:
      "Faz o seu trabalho parecer mais valioso antes mesmo da conversa com o cliente.",
    points: [
      "Ajuda a construir autoridade sem exagerar nas informacoes.",
      "Cria uma experiencia visual mais refinada e memoravel.",
      "Facilita o contato de quem gostou do seu trabalho e quer avancar.",
    ],
  },
];

const root = document.documentElement;
const body = document.body;
const topbar = document.querySelector(".topbar");
const navLinks = [...document.querySelectorAll('.topbar__nav a[href^="#"]')].filter(
  (link) => !link.classList.contains("button")
);
const contentSections = navLinks
  .map((link) => {
    const href = link.getAttribute("href");
    return href ? document.querySelector(href) : null;
  })
  .filter(Boolean);
const revealItems = [...document.querySelectorAll("[data-reveal]")];
const parallaxItems = [...document.querySelectorAll("[data-parallax]")];
const magneticItems = [...document.querySelectorAll(".magnetic")];
const hero = document.querySelector(".hero");
const footerHeadline = document.querySelector(".footer__headline");
const sliderTrack = document.querySelector("[data-slider-track]");
const sliderButtons = [...document.querySelectorAll("[data-slider]")];
const projectCards = [...document.querySelectorAll("[data-project]")];
const panel = document.querySelector(".project-panel");
const panelCloseTargets = [...document.querySelectorAll("[data-close-panel]")];
const cursor = document.querySelector(".cursor");
const cursorLabel = cursor?.querySelector("span");
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
const scrollState = {
  ticking: false,
};

const cursorState = {
  currentX: window.innerWidth / 2,
  currentY: window.innerHeight / 2,
  targetX: window.innerWidth / 2,
  targetY: window.innerHeight / 2,
};

const sliderState = {
  dragging: false,
  startX: 0,
  startScrollLeft: 0,
  dragDistance: 0,
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function prefersReducedMotion() {
  return reduceMotionQuery.matches;
}

function shouldToneDownEffects() {
  return prefersReducedMotion() || coarsePointerQuery.matches || window.innerWidth < 820;
}

function updateProgress(scrollY) {
  const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
  root.style.setProperty("--scroll-progress", (scrollY / maxScroll).toFixed(4));
}

function updateHeroFill(scrollY) {
  if (!hero) return;
  const fillProgress = clamp(scrollY / Math.max(hero.offsetHeight * 0.88, 1), 0.14, 1);
  root.style.setProperty("--hero-fill", fillProgress.toFixed(3));
}

function updateFooterDistortion() {
  if (!footerHeadline) return;
  const rect = footerHeadline.getBoundingClientRect();
  const progress = clamp(1 - rect.top / window.innerHeight, 0, 1);
  root.style.setProperty("--footer-distort", (progress * 0.7).toFixed(3));
}

function updateTopbar(scrollY) {
  topbar?.classList.toggle("is-condensed", scrollY > 36);
}

function updateActiveNav(scrollY) {
  if (!navLinks.length || !contentSections.length) return;

  const offset = window.innerWidth < 820 ? 148 : 132;
  const currentSection = [...contentSections]
    .reverse()
    .find((section) => scrollY + offset >= section.offsetTop);

  navLinks.forEach((link) => {
    const isActive = currentSection && link.getAttribute("href") === `#${currentSection.id}`;
    link.classList.toggle("is-active", Boolean(isActive));
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function updateReveals() {
  revealItems.forEach((item, index) => {
    if (item.classList.contains("is-visible")) return;
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      item.style.transitionDelay = `${Math.min(index * 0.03, 0.18)}s`;
      item.classList.add("is-visible");
    }
  });
}

function updateParallax() {
  if (shouldToneDownEffects()) {
    parallaxItems.forEach((item) => {
      item.style.setProperty("--parallax-shift", "0px");
      item.style.setProperty("--parallax-scale", "1");
    });
    return;
  }

  parallaxItems.forEach((item) => {
    const factor = Number(item.dataset.parallax || 0.12);
    const rect = item.getBoundingClientRect();
    const distance = rect.top + rect.height / 2 - window.innerHeight / 2;
    const shift = distance * -factor;
    const scaleBoost = 1 + (1 - clamp(Math.abs(distance) / window.innerHeight, 0, 1)) * 0.03;
    item.style.setProperty("--parallax-shift", `${shift.toFixed(2)}px`);
    item.style.setProperty("--parallax-scale", scaleBoost.toFixed(3));
  });
}

function syncScrollEffects() {
  const scrollY = window.scrollY;
  updateProgress(scrollY);
  updateHeroFill(scrollY);
  updateFooterDistortion();
  updateTopbar(scrollY);
  updateActiveNav(scrollY);
  updateReveals();
  updateParallax();
  scrollState.ticking = false;
}

function requestScrollUpdate() {
  if (scrollState.ticking) return;
  scrollState.ticking = true;
  window.requestAnimationFrame(syncScrollEffects);
}

function moveCursor() {
  if (!cursor || shouldToneDownEffects()) return;
  cursorState.currentX += (cursorState.targetX - cursorState.currentX) * 0.18;
  cursorState.currentY += (cursorState.targetY - cursorState.currentY) * 0.18;
  cursor.style.transform = `translate3d(${cursorState.currentX}px, ${cursorState.currentY}px, 0)`;
  window.requestAnimationFrame(moveCursor);
}

function setCursorLabel(text) {
  if (!cursorLabel) return;
  cursorLabel.textContent = text || "focus";
}

function initCursor() {
  if (!cursor || shouldToneDownEffects()) return;

  window.addEventListener("pointermove", (event) => {
    cursorState.targetX = event.clientX;
    cursorState.targetY = event.clientY;
    cursor.classList.add("is-visible");
  });

  window.addEventListener("pointerdown", () => cursor.classList.add("is-active"));
  window.addEventListener("pointerup", () => cursor.classList.remove("is-active"));
  window.addEventListener("blur", () => cursor.classList.remove("is-active"));

  const interactiveItems = [...document.querySelectorAll("a, button, [data-project], .portfolio-slider")];
  interactiveItems.forEach((item) => {
    item.addEventListener("pointerenter", () => {
      cursor.classList.add("is-active");
      setCursorLabel(item.dataset.cursor || "focus");
    });
    item.addEventListener("pointerleave", () => {
      cursor.classList.remove("is-active");
      setCursorLabel("focus");
    });
  });

  moveCursor();
}

function initMagnetic() {
  if (shouldToneDownEffects()) return;

  magneticItems.forEach((item) => {
    item.addEventListener("pointermove", (event) => {
      const rect = item.getBoundingClientRect();
      const offsetX = event.clientX - rect.left - rect.width / 2;
      const offsetY = event.clientY - rect.top - rect.height / 2;
      item.style.setProperty("--magnetic-x", `${(offsetX * 0.12).toFixed(2)}px`);
      item.style.setProperty("--magnetic-y", `${(offsetY * 0.12).toFixed(2)}px`);
    });

    item.addEventListener("pointerleave", () => {
      item.style.setProperty("--magnetic-x", "0px");
      item.style.setProperty("--magnetic-y", "0px");
    });
  });
}

function openProject(index) {
  if (!panel) return;
  const project = projects[index];
  if (!project) return;

  const assignText = (id, value) => {
    const target = document.getElementById(id);
    if (target) target.textContent = value;
  };

  assignText("project-kicker", project.kicker);
  assignText("project-title", project.title);
  assignText("project-description", project.description);
  assignText("project-stack", project.stack);
  assignText("project-deliverable", project.deliverable);
  assignText("project-impact", project.impact);

  const pointsTarget = document.getElementById("project-points");
  if (pointsTarget) {
    pointsTarget.innerHTML = "";
    project.points.forEach((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      pointsTarget.appendChild(item);
    });
  }

  panel.hidden = false;
  panel.setAttribute("aria-hidden", "false");
  body.classList.add("is-panel-open");
  window.requestAnimationFrame(() => panel.classList.add("is-open"));
}

function closeProject() {
  if (!panel) return;
  panel.classList.remove("is-open");
  panel.setAttribute("aria-hidden", "true");
  body.classList.remove("is-panel-open");
  window.setTimeout(() => {
    panel.hidden = true;
  }, 420);
}

function initProjectPanel() {
  projectCards.forEach((card) => {
    const activate = () => {
      if (Math.abs(sliderState.dragDistance) > 12) return;
      openProject(Number(card.dataset.project));
    };

    card.addEventListener("click", activate);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate();
      }
    });
  });

  panelCloseTargets.forEach((item) => item.addEventListener("click", closeProject));

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && panel && !panel.hidden) {
      closeProject();
    }
  });
}

function initSlider() {
  if (!sliderTrack) return;

  sliderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.slider === "next" ? 1 : -1;
      sliderTrack.scrollBy({
        left: sliderTrack.clientWidth * 0.74 * direction,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
    });
  });

  sliderTrack.addEventListener(
    "wheel",
    (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      sliderTrack.scrollLeft += event.deltaY;
    },
    { passive: false }
  );

  sliderTrack.addEventListener("pointerdown", (event) => {
    sliderState.dragging = true;
    sliderState.startX = event.clientX;
    sliderState.startScrollLeft = sliderTrack.scrollLeft;
    sliderState.dragDistance = 0;
    sliderTrack.classList.add("is-dragging");
  });

  sliderTrack.addEventListener("pointermove", (event) => {
    if (!sliderState.dragging) return;
    const delta = event.clientX - sliderState.startX;
    sliderState.dragDistance = delta;
    sliderTrack.scrollLeft = sliderState.startScrollLeft - delta;
  });

  const releaseDrag = () => {
    sliderTrack.classList.remove("is-dragging");
    window.setTimeout(() => {
      sliderState.dragDistance = 0;
    }, 80);
    sliderState.dragging = false;
  };

  sliderTrack.addEventListener("pointerup", releaseDrag);
  sliderTrack.addEventListener("pointerleave", releaseDrag);
  sliderTrack.addEventListener("pointercancel", releaseDrag);
}

function initAnchors() {
  const anchorLinks = [...document.querySelectorAll('a[href^="#"]')];
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      const destination = target.getBoundingClientRect().top + window.scrollY - (window.innerWidth < 820 ? 108 : 92);
      window.scrollTo({
        top: destination,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
    });
  });
}

function onResize() {
  requestScrollUpdate();
}

window.addEventListener("scroll", requestScrollUpdate, { passive: true });
window.addEventListener("resize", onResize);
reduceMotionQuery.addEventListener("change", onResize);
coarsePointerQuery.addEventListener("change", onResize);

initCursor();
initMagnetic();
initSlider();
initProjectPanel();
initAnchors();
requestScrollUpdate();
