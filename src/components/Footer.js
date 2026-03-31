export function Footer() {
  const year = new Date().getFullYear();

  return `
    <footer class="footer">
      <div class="container footer__inner">
        <p class="footer__brand">Gustavo Pelissari.</p>
        <p class="footer__slogan">
          Gustavo Pelissari - <strong>Código Limpo. Design Premium.</strong>
          <br />
          <span>© ${year} Todos os direitos reservados.</span>
        </p>
      </div>
    </footer>
  `;
}