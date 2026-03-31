export function Header() {
  const links = [
    ["Início", "#hero"],
    ["Sobre", "#about"],
    ["Serviços", "#services"],
    ["Portfólio", "#portfolio"],
    ["Contato", "#contact"]
  ];

  return `
    <header class="header">
      <div class="container header__inner">
        <a class="header__brand" href="#hero" aria-label="Gustavo Pelissari">
          GUSTAVO PELISSARI<span>.</span>
        </a>

        <button class="header__toggle" type="button" aria-label="Abrir menu" data-nav-toggle>
          <span aria-hidden="true">☰</span>
        </button>

        <nav class="header__nav" data-nav-menu>
          <ul class="header__menu">
            ${links
              .map(
                ([label, href]) =>
                  `<li><a class="header__link" href="${href}">${label}</a></li>`
              )
              .join("")}
            <li>
              <a class="header__link header__link--accent" href="#contact">
                Vamos conversar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}