import React from "react";

const Contato = () => {
  return (
    <div>
      <section class="breadcrumb breadcrumb_bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb_iner text-center">
                <div class="breadcrumb_iner_item">
                  <h2>Contato</h2>
                  <p>
                    Início<span></span>Contato
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-section section_padding">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="contact-title">Entrar em Contato</h2>
            </div>
            <div class="col-lg-8">
              <form
                class="form-contact contact_form"
                action="contact_process.php"
                method="post"
                id="contactForm"
                novalidate="novalidate"
              >
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <textarea
                        class="form-control w-100"
                        name="message"
                        id="message"
                        cols="30"
                        rows="9"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Message'"
                        placeholder="Digite a Mensagem"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="name"
                        id="name"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your name'"
                        placeholder="Digite seu Nome"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="email"
                        id="email"
                        type="email"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email address'"
                        placeholder="Insira seu Email"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="subject"
                        id="subject"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Subject'"
                        placeholder="Digite o Assunto"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <button type="submit" class="button button-contactForm btn_1">
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
            <div class="col-lg-4">
              <div class="media contact-info">
                <h3>
                  <a
                    href="https://www.linkedin.com/company/emori%C3%B4-digital/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p>
                      <span> Linkedin: </span>
                      EmoriÔ Digital
                    </p>
                  </a>
                </h3>
              </div>
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <i class="ti-home"></i>
                </span>
                <div class="media-body">
                  <h3>Manaus, Amazonas</h3>
                  <p>Rua do Aprendizado | N° 1000</p>
                </div>
              </div>
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <i class="ti-tablet"></i>
                </span>
                <div class="media-body">
                  <h3>(092) 98202-7275</h3>
                  <p>De Seg-Sexta | 08h às 18h</p>
                </div>
              </div>
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <i class="ti-email"></i>
                </span>
                <div class="media-body">
                  <h3>squad53.recodepro@gmail.com</h3>
                  <p>Envie-nos a sua consulta a qualquer momento!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
