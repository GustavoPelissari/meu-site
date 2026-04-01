import { Logo } from "./Logo.js";

export function Footer() {
  const year = new Date().getFullYear();

  return `
    <footer class="footer">
      <div class="container footer__inner">
        <div class="footer__brand">${Logo()}</div>
        <p class="footer__slogan">
          Estúdio de uma pessoa só para marcas que exigem <strong>performance, clareza e presença.</strong>
          <br />
          <span>&copy; ${year} Todos os direitos reservados.</span>
        </p>
      </div>
    </footer>
  `;
}
