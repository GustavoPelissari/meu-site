import { Card } from "../components/Card.js";

const icons = {
  institucional: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 21h16"/>
      <path d="M6 21V7l6-4 6 4v14"/>
      <path d="M10 21v-6h4v6"/>
    </svg>
  `,
  landing: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 5h16v14H4z"/>
      <path d="M8 9h8"/>
      <path d="M8 13h5"/>
    </svg>
  `,
  comunidade: `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/>
      <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
      <path d="M20 8v6"/>
      <path d="M23 11h-6"/>
    </svg>
  `
};

export function ServicesSection() {
  const services = [
    {
      title: "Sites Institucionais",
      text: "A vitrine definitiva para sua empresa, com design sob medida, leitura fluida e autoridade desde o primeiro segundo.",
      meta: "Identidade + confiança",
      icon: icons.institucional
    },
    {
      title: "Landing Pages",
      text: "Páginas com um único objetivo: transformar visita em lead, conversa ou venda com narrativa visual afiada.",
      meta: "Conversão + clareza",
      icon: icons.landing
    },
    {
      title: "Sites para Comunidades",
      text: "Plataformas organizadas, acolhedoras e informativas para movimentos, paróquias e grupos que precisam centralizar a comunicação.",
      meta: "Engajamento + comunidade",
      icon: icons.comunidade
    }
  ];

  return `
    <section class="section services" id="services">
      <div class="container">
        <div class="section__eyebrow">Serviços</div>
        <h2 class="section__title reveal">O que eu entrego para transformar presença digital em ativo de marca.</h2>
        <p class="section__subtitle reveal">
          Cada formato foi pensado para unir estética premium, velocidade real e estrutura estratégica de conversão.
        </p>

        <div class="services__grid">
          ${services
            .map(
              (service) => `
                ${Card({
                  modifier: "service",
                  title: service.title,
                  text: service.text,
                  meta: service.meta,
                  icon: service.icon
                })}
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}
