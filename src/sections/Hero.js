import { Button } from "../components/Button.js";

export function HeroSection() {
  return `
    <section class="section hero" id="hero">
      <div class="container hero__grid">
        <div class="hero__content">
          <div class="hero__eyebrow reveal">Sites estáticos de alta performance</div>
          <h1 class="hero__title reveal">
            Não construo apenas sites.
            <strong>Construo o ativo mais valioso da sua marca na internet.</strong>
          </h1>
          <p class="hero__subtitle reveal">
            Design exclusivo, velocidade extrema e foco total em conversão para marcas que precisam parecer grandes, funcionar rápido e vender com elegância.
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
              <span class="hero__metric-value">100%</span>
              <span class="hero__metric-label">foco em performance</span>
            </div>
            <div class="hero__metric">
              <span class="hero__metric-value">UI/UX</span>
              <span class="hero__metric-label">premium e conversão</span>
            </div>
            <div class="hero__metric">
              <span class="hero__metric-value">SEO</span>
              <span class="hero__metric-label">estruturado de ponta a ponta</span>
            </div>
          </div>
        </div>

        <div class="hero__visual reveal">
          <div class="hero__panel u-glow-pulse">
            <div class="hero__orbit"></div>
            <div class="hero__card hero__card--top u-float-soft">
              <span class="hero__card-label">Tempo de carregamento</span>
              <div class="hero__card-value">Minimalismo com impacto</div>
            </div>
            <div class="hero__card hero__card--bottom u-float-soft">
              <span class="hero__card-label">Posicionamento</span>
              <div class="hero__card-value">Studio/Agência de um homem só</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}