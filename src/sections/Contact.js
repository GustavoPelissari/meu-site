import { Button } from "../components/Button.js";

export function ContactSection() {
  return `
    <section class="section contact" id="contact">
      <div class="container contact__grid">
        <div class="contact__copy reveal">
          <div class="section__eyebrow">Contato</div>
          <h2 class="section__title">
            Pronto para elevar o nível da sua marca?
          </h2>
          <p class="section__subtitle">
            Me conta o que você quer construir. Eu retorno com visão de produto, direção visual e um caminho técnico objetivo.
          </p>
        </div>

        <div class="contact__panel reveal">
          <form class="form">
            <div class="form__grid">
              <div class="form__field">
                <label class="form__label" for="name">Nome</label>
                <input class="form__input" id="name" name="name" type="text" placeholder="Seu nome" />
              </div>

              <div class="form__field">
                <label class="form__label" for="email">E-mail</label>
                <input class="form__input" id="email" name="email" type="email" placeholder="voce@empresa.com" />
              </div>
            </div>

            <div class="form__field">
              <label class="form__label" for="project">Projeto</label>
              <input class="form__input" id="project" name="project" type="text" placeholder="Site institucional, landing page, portfólio..." />
            </div>

            <div class="form__field">
              <label class="form__label" for="message">Mensagem</label>
              <textarea class="form__textarea" id="message" name="message" placeholder="Me conte seu objetivo, seu prazo e o que você imagina para o projeto."></textarea>
            </div>

            <div class="form__actions">
              ${Button({
                label: "Enviar briefing",
                href: "#",
                variant: "primary",
                type: "button"
              })}
              <span class="form__note">Resposta com direção clara e proposta objetiva.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  `;
}