import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { HeroSection } from "../sections/Hero.js";
import {
  AboutSection,
  PortfolioSection,
  DifferentialsSection,
  TestimonialsSection
} from "../sections/About.js";
import { ServicesSection } from "../sections/Services.js";
import { ContactSection } from "../sections/Contact.js";
import { initAnimations } from "./gsap-animations.js";

function renderApp() {
  const app = document.querySelector("#app");

  if (!app) {
    throw new Error("Elemento #app nao encontrado.");
  }

  try {
    app.innerHTML = `
      ${Header()}
      <main>
        ${HeroSection()}
        ${AboutSection()}
        ${ServicesSection()}
        ${PortfolioSection()}
        ${DifferentialsSection()}
        ${TestimonialsSection()}
        ${ContactSection()}
      </main>
      ${Footer()}
    `;

    const navToggle = document.querySelector("[data-nav-toggle]");
    const navMenu = document.querySelector("[data-nav-menu]");
    const navLinks = document.querySelectorAll(".header__link");

    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("is-open");
        const isOpen = navMenu.classList.contains("is-open");
        navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
      });

      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("is-open");
          navToggle.setAttribute("aria-label", "Abrir menu");
        });
      });
    }

    const contactButton = document.querySelector('button[type="button"]');

    if (contactButton) {
      contactButton.addEventListener("click", () => {
        const name = document.querySelector("#name")?.value?.trim() || "";
        const email = document.querySelector("#email")?.value?.trim() || "";
        const project = document.querySelector("#project")?.value?.trim() || "";
        const budget = document.querySelector("#budget")?.value?.trim() || "";
        const message = document.querySelector("#message")?.value?.trim() || "";

        if (!name) {
          document.querySelector("#name")?.focus();
          return;
        }

        const lines = [
          "Ola, Gustavo. Vim pelo seu site e quero iniciar um projeto.",
          `Nome: ${name}`,
          email ? `Email: ${email}` : "",
          project ? `Tipo de projeto: ${project}` : "",
          budget ? `Orcamento estimado: ${budget}` : "",
          message ? `Objetivo: ${message}` : ""
        ].filter(Boolean);

        const url = `https://wa.me/5551996255682?text=${encodeURIComponent(lines.join("\n"))}`;
        window.open(url, "_blank", "noopener");
      });
    }

    initAnimations();
  } catch (error) {
    console.error("Erro ao renderizar o app:", error);
    app.innerHTML = `
      <div style="padding: 2rem; background: #000; color: #fff; font-family: sans-serif;">
        <h1>Erro ao carregar o site</h1>
        <p>${error.message}</p>
        <p>Abra o console do navegador para mais detalhes.</p>
      </div>
    `;
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderApp);
} else {
  renderApp();
}
