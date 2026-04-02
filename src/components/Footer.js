export function Footer() {
  const year = new Date().getFullYear();

  return `
    <footer class="footer">
      <div class="container footer__inner">
        <p class="footer__brand">Gustavo Pelissari<span>.</span></p>
        <p class="footer__slogan">
          Estúdio de uma pessoa só para marcas que exigem <strong>performance, clareza e presença.</strong>
          <br />
          <span>&copy; ${year} Todos os direitos reservados.</span>
        </p>
      </div>
    </footer>
  `;
}
