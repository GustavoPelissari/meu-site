export function AboutSection() {
  return `
    <section class="section about" id="about">
      <div class="container about__grid">
        <div class="about__media reveal" data-parallax>
          <div class="about__portrait">
            <img
              class="about__image"
              src="./assets/images/Gustavo%20Pelissari%20Oenning.jpg.jpeg"
              alt="Retrato de Gustavo Pelissari Oenning"
              loading="lazy"
            />
          </div>
          <div class="about__stamp">
            <strong>Gustavo Pelissari Oenning</strong>
            <span>Front-end, web design e sites estáticos de alta performance</span>
          </div>
        </div>

        <div class="about__copy reveal">
          <div class="section__eyebrow">Sobre</div>
          <h2 class="section__title">
            Mais do que código, entrego presença premium com estratégia.
          </h2>
          <p class="section__subtitle">
            Sou Gustavo Pelissari Oenning. Ajudo negócios a se destacarem no digital com projetos estáticos de altíssima performance. Mais do que código, entrego soluções visuais que conectam sua marca ao público ideal.
          </p>

          <ul class="about__list">
            <li class="about__item">
              <span class="about__bullet"></span>
              <div>
                <strong>Design com intenção</strong>
                Cada bloco existe para construir percepção de valor, confiança e desejo de ação.
              </div>
            </li>
            <li class="about__item">
              <span class="about__bullet"></span>
              <div>
                <strong>Velocidade extrema</strong>
                Código enxuto, estrutura limpa e foco nas métricas que realmente mudam a experiência.
              </div>
            </li>
            <li class="about__item">
              <span class="about__bullet"></span>
              <div>
                <strong>Conversão antes da vaidade</strong>
                A estética impressiona, mas a estratégia sempre guia a decisão do usuário.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

export function PortfolioSection() {
  const projects = [
    {
      name: "Geo Guincho",
      tag: "Landing page de altíssima conversão e resposta rápida para serviços de resgate 24h.",
      accent: "Conversão"
    },
    {
      name: "Movimento Cursilho",
      tag: "Portal comunitário focado em clareza de informações e design acolhedor.",
      accent: "Comunidade"
    },
    {
      name: "Setup Gamer / Creator",
      tag: "Identidade visual e hub digital para criadores com linguagem forte e atmosfera premium.",
      accent: "Branding"
    }
  ];

  return `
    <section class="section portfolio" id="portfolio">
      <div class="container">
        <div class="section__eyebrow">Portfólio</div>
        <h2 class="section__title reveal">Apresentação impecável para projetos que precisam transmitir confiança.</h2>
        <p class="section__subtitle reveal">
          Cards grandes, mockups conceituais e uma leitura visual pensada para dar peso de marca desde o primeiro olhar.
        </p>

        <div class="portfolio__grid">
          ${projects
            .map(
              (project, index) => `
                <article class="card card--portfolio reveal">
                  <div class="card__visual" aria-hidden="true">
                    <div class="card__screen">
                      <div class="card__screen-bar"></div>
                      <div class="card__screen-content card__screen-content--${index + 1}">
                        <span>${project.accent}</span>
                        <strong>${project.name}</strong>
                      </div>
                    </div>
                  </div>
                  <div class="card__project">
                    <h3 class="card__title">${project.name}</h3>
                    <p class="card__text">${project.tag}</p>
                    <span class="card__meta">Projeto conceitual ${String(index + 1).padStart(2, "0")}</span>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function DifferentialsSection() {
  const items = [
    ["01", "Velocidade Extrema", "Sites estáticos que carregam rápido, prendem a atenção e reforçam confiança logo no primeiro acesso."],
    ["02", "Design Único", "Nada de template pronto. Sua marca recebe uma identidade visual pensada para o seu contexto."],
    ["03", "SEO Estruturado", "Semântica, hierarquia e base técnica organizadas para facilitar a descoberta e a indexação."],
    ["04", "Zero Dor de Cabeça", "Hospedagem simples, segurança alta e manutenção descomplicada para você focar no negócio."]
  ];

  return `
    <section class="section differentials" id="differentials">
      <div class="container">
        <div class="section__eyebrow">Diferenciais</div>
        <h2 class="section__title reveal">O premium aparece nos detalhes, mas se prova no resultado.</h2>
        <p class="section__subtitle reveal">
          Menos peso, mais presença. Menos ruído, mais clareza. Menos site comum, mais ativo digital para a sua marca.
        </p>

        <div class="differentials__grid">
          ${items
            .map(
              ([number, title, text]) => `
                <article class="differentials__item reveal">
                  <span class="differentials__number">${number}</span>
                  <h3 class="differentials__title">${title}</h3>
                  <p class="differentials__text">${text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function TestimonialsSection() {
  const testimonials = [
    ["O site ficou incrivelmente rápido, e o design superou nossas expectativas. O profissionalismo do Gustavo fez toda a diferença.", "Cliente modelo", "Founder / marca premium"],
    ["A página trouxe autoridade logo no primeiro acesso. Tudo parece mais claro, mais sofisticado e mais confiável.", "Cliente modelo", "Diretora comercial"],
    ["Foi uma entrega objetiva, bonita e muito estratégica. Nada sobrou e nada faltou.", "Cliente modelo", "Gestor de marketing"],
    ["Conseguimos centralizar nossa comunicação com um visual acolhedor e muito mais organizado.", "Cliente modelo", "Coordenador de comunidade"]
  ];

  const repeated = [...testimonials, ...testimonials];

  return `
    <section class="section testimonials">
      <div class="container">
        <div class="section__eyebrow">Depoimentos</div>
        <h2 class="section__title reveal">Estrutura de prova social pronta para crescer junto com o portfólio.</h2>
        <p class="section__subtitle reveal">
          Um carrossel contínuo e suave para reforçar confiança sem perder a limpeza visual da página.
        </p>
      </div>

      <div class="testimonials__shell u-marquee reveal">
        <div class="testimonials__marquee">
          <div class="testimonials__track u-marquee__track">
            ${repeated
              .map(
                ([quote, name, role]) => `
                  <article class="testimonials__card">
                    <p class="testimonials__quote">&ldquo;${quote}&rdquo;</p>
                    <div class="testimonials__author">
                      <span class="testimonials__avatar" aria-hidden="true"></span>
                      <div>
                        <p class="testimonials__name">${name}</p>
                        <p class="testimonials__role">${role}</p>
                      </div>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}
