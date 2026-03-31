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
                throw new Error("Elemento #app não encontrado.");
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
                const nameField = document.querySelector("#name");
                if (nameField) nameField.focus();
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