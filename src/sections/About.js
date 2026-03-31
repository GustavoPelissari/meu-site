export function AboutSection() {
  return `
    <section class="section about" id="about">
      <div class="container about__grid">
        <div class="about__media reveal" data-parallax>
          <div class="about__portrait"></div>
        </div>

        <div class="about__copy reveal">
          <div class="section__eyebrow">Sobre</div>
          <h2 class="section__title">
            Design, velocidade e conversão — sem excesso, sem ruído, sem enrolação.
          </h2>
          <p class="section__subtitle">
            Sou o Gustavo Pelissari Oenning, desenvolvedor front-end e web designer focado em criar sites estáticos com presença premium, estrutura limpa e performance de elite.
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
                Código enxuto, sem dependência desnecessária e com foco em métricas de performance reais.
              </div>
            </li>
            <li class="about__item">
              <span class="about__bullet"></span>
              <div>
                <strong>Conversão antes da vaidade</strong>
                A estética é premium, mas a estratégia vem sempre com a mão no volante.
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
      tag: "Site institucional com presença forte e rota clara para contato.",
      accent: "GP"
    },
    {
      name: "Movimento Cursilho",
      tag: "Página com estrutura acolhedora, leitura leve e navegação intuitiva.",
      accent: "MC"
    },
    {
      name: "Setup Gamer / Creator",
      tag: "Visual moderno, linguagem digital e vibração de comunidade premium.",
      accent: "SG"
    }
  ];

  return `
    <section class="section portfolio" id="portfolio">
      <div class="container">
        <div class="section__eyebrow">Portfólio</div>
        <h2 class="section__title reveal">Projetos pensados para parecer caros e converter como devem.</h2>
        <p class="section__subtitle reveal">
          Mockups com hover sofisticado, brilho sutil e estrutura visual feita para valorizar a marca sem pesar na experiência.
        </p>

        <div class="portfolio__grid">
          ${projects
            .map(
              (project, index) => `
                <article class="card card--portfolio reveal">
                  <div class="card__visual" aria-hidden="true">
                    <div class="card__project">
                      <p class="card__project-name">${project.accent}</p>
                      <p class="card__project-tag">Mockup conceitual ${String(index + 1).padStart(2, "0")}</p>
                    </div>
                  </div>
                  <div class="card__project">
                    <h3 class="card__title">${project.name}</h3>
                    <p class="card__text">${project.tag}</p>
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
    ["01", "Velocidade Extrema", "Estrutura leve, performance afiada e experiência fluida do primeiro ao último scroll."],
    ["02", "Design Único", "Identidade visual sob medida, com atmosfera sofisticada e estética memorável."],
    ["03", "SEO Estruturado", "Base técnica organizada para ajudar sua marca a ser encontrada com clareza."],
    ["04", "Zero Dor de Cabeça", "Processo direto, comunicação objetiva e entrega sem novela."]
  ];

  return `
    <section class="section differentials" id="differentials">
      <div class="container">
        <div class="section__eyebrow">Diferenciais</div>
        <h2 class="section__title reveal">O que faz esse trabalho soar premium de verdade.</h2>
        <p class="section__subtitle reveal">
          A proposta é simples: menos peso, mais presença. Menos ruído, mais clareza. Menos site comum, mais ativo digital.
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
    ["Entrega impecável e presença absurda.", "Cliente fictício", "Founder / Marca premium"],
    ["Design com cara de marca grande.", "Cliente fictício", "Diretor de projeto"],
    ["Rápido, elegante e muito estratégico.", "Cliente fictício", "Gestor de marketing"],
    ["A página ficou leve e com muita autoridade.", "Cliente fictício", "Empreendedor digital"]
  ];

  const repeated = [...testimonials, ...testimonials];

  return `
    <section class="section testimonials">
      <div class="container">
        <div class="section__eyebrow">Depoimentos</div>
        <h2 class="section__title reveal">Prova social com acabamento de galeria.</h2>
        <p class="section__subtitle reveal">
          Um carrossel infinito para dar sensação de movimento contínuo e reforçar credibilidade sem quebrar a estética.
        </p>
      </div>

      <div class="testimonials__shell u-marquee reveal">
        <div class="testimonials__marquee">
          <div class="testimonials__track u-marquee__track">
            ${repeated
              .map(
                ([quote, name, role]) => `
                  <article class="testimonials__card">
                    <p class="testimonials__quote">“${quote}”</p>
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