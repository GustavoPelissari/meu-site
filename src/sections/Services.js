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
      text: "Presença digital sólida, elegante e com arquitetura que transmite autoridade em segundos.",
      meta: "Identidade + confiança",
      icon: icons.institucional
    },
    {
      title: "Landing Pages",
      text: "Páginas focadas em conversão, com narrativa visual e técnica alinhadas para vender mais.",
      meta: "Conversão + clareza",
      icon: icons.landing
    },
    {
      title: "Sites para Comunidades",
      text: "Ambientes digitais para projetos, grupos e comunidades com ritmo, valor e senso de pertencimento.",
      meta: "Engajamento + comunidade",
      icon: icons.comunidade
    }
  ];

  return `
    <section class="section services" id="services">
      <div class="container">
        <div class="section__eyebrow">Serviços</div>
        <h2 class="section__title reveal">Uma estrutura leve, afiada e feita sob medida.</h2>
        <p class="section__subtitle reveal">
          Os serviços foram desenhados para resolver o que mais importa: posicionamento, clareza e performance visual.
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