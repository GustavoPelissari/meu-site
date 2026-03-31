import { Button } from "../components/Button.js";

export function HeroSection() {
  return `
    <section class="section hero" id="hero">
      <div class="container hero__content hero__content--full">
        <div class="hero__eyebrow reveal">Studio premium para sites estaticos de alta performance</div>
        <h1 class="hero__title reveal">
          Presenca digital de alto nivel.
          <strong>Performance que gera resultados.</strong>
        </h1>
        <p class="hero__subtitle reveal">
          Design exclusivo, velocidade extrema e foco total em conversao para empresas e comunidades que exigem excelencia.
        </p>

        <div class="hero__actions reveal">
          ${Button({
            label: "Iniciar meu projeto",
            href: "#contact",
            variant: "primary"
          })}
          ${Button({
            label: "Ver portfolio",
            href: "#portfolio",
            variant: "ghost"
          })}
        </div>

        <div class="hero__metrics reveal" aria-label="Indicadores de valor">
          <div class="hero__metric">
            <span class="hero__metric-value">&lt; 1s</span>
            <span class="hero__metric-label">primeira impressao rapida e sem atrito</span>
          </div>
          <div class="hero__metric">
            <span class="hero__metric-value">100%</span>
            <span class="hero__metric-label">design sob medida, sem template generico</span>
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
