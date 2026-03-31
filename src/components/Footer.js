export function Footer() {
  const year = new Date().getFullYear();

  return `
    <footer class="footer">
      <div class="container footer__inner">
        <p class="footer__brand">Gustavo Pelissari.</p>
        <p class="footer__slogan">
          Studio de um homem so para marcas que exigem <strong>performance, clareza e presenca.</strong>
          <br />
          <span>&copy; ${year} Todos os direitos reservados.</span>
        </p>
      </div>
    </footer>
  `;
}
