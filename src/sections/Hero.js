import { Button } from "../components/Button.js";

export function HeroSection() {
  return `
    <section class="section hero" id="hero">
      <div class="container hero__content hero__content--full">
        <div class="hero__eyebrow reveal">Estúdio premium para sites estáticos de alta performance</div>
        <h1 class="hero__title reveal">
          Presença digital de alto nível.
          <strong>Performance que gera resultados.</strong>
        </h1>
        <p class="hero__subtitle reveal">
          Design exclusivo, velocidade extrema e foco total em conversão para empresas e comunidades que exigem excelência.
        </p>

        <div class="hero__actions reveal">
          ${Button({
            label: "Iniciar meu projeto",
            href: "#contact",
            variant: "primary"
          })}
          ${Button({
            label: "Ver portfólio",
            href: "#portfolio",
            variant: "ghost"
          })}
        </div>

        <div class="hero__metrics reveal" aria-label="Indicadores de valor">
          <div class="hero__metric">
            <span class="hero__metric-value">&lt; 1s</span>
            <span class="hero__metric-label">primeira impressão rápida e sem atrito</span>
          </div>
          <div class="hero__metric">
            <span class="hero__metric-value">100%</span>
            <span class="hero__metric-label">design sob medida, sem template genérico</span>
          </div>
          <div class="hero__metric">
            <span class="hero__metric-value">SEO</span>
            <span class="hero__metric-label">base pronta para crescer com clareza</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
