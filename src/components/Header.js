import { Logo } from "./Logo.js";

export function Header() {
  const links = [
    ["Início", "#hero"],
    ["Sobre", "#about"],
    ["Serviços", "#services"],
    ["Portfólio", "#portfolio"],
    ["Diferenciais", "#differentials"],
    ["Contato", "#contact"]
  ];

  return `
    <header class="header">
      <div class="container header__inner">
        <a class="header__brand" href="#hero" aria-label="Gustavo Pelissari">
          ${Logo({ compact: true })}
        </a>

        <button class="header__toggle" type="button" aria-label="Abrir menu" data-nav-toggle>
          <span aria-hidden="true">Menu</span>
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
                Iniciar projeto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}
