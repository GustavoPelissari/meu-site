import { Button } from "../components/Button.js";

export function ContactSection() {
  return `
    <section class="section contact" id="contact">
      <div class="container contact__grid">
        <div class="contact__copy reveal">
          <div class="section__eyebrow">Contato</div>
          <h2 class="section__title">
            Pronto para elevar o nivel da sua marca?
          </h2>
          <p class="section__subtitle">
            Me conte o que voce quer construir. Eu retorno com visao de produto, direcao visual e um caminho tecnico objetivo para o seu proximo site.
          </p>
          <a
            class="button button--ghost contact__whatsapp"
            href="https://wa.me/5551996255682?text=Ola%2C%20Gustavo.%20Quero%20iniciar%20meu%20projeto."
            target="_blank"
            rel="noreferrer"
          >
            Chamar no WhatsApp
          </a>
        </div>

        <div class="contact__panel reveal">
          <form class="form" data-contact-form>
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
              <label class="form__label" for="project">Tipo de projeto</label>
              <input class="form__input" id="project" name="project" type="text" placeholder="Site institucional, landing page, portal comunitario..." />
            </div>

            <div class="form__field">
              <label class="form__label" for="budget">Orcamento estimado</label>
              <input class="form__input" id="budget" name="budget" type="text" placeholder="Ex.: R$ 2.500 a R$ 5.000" />
            </div>

            <div class="form__field">
              <label class="form__label" for="message">Objetivo do projeto</label>
              <textarea class="form__textarea" id="message" name="message" placeholder="Me conte seu objetivo, seu prazo e o que voce imagina para o projeto."></textarea>
            </div>

            <div class="form__actions">
              ${Button({
                label: "Enviar briefing",
                variant: "primary",
                type: "button"
              })}
              <span class="form__note">Resposta com direcao clara, proposta objetiva e proximo passo definido.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  `;
}
