import React from "react";

const Comentários = () => {
  return (
    <div>
      <div class="comment-form">
        <h4>Deixe seu comentário</h4>
        <form class="form-contact comment_form" action="#" id="commentForm">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <textarea
                  class="form-control w-100"
                  name="comment"
                  id="comment"
                  cols="30"
                  rows="9"
                  placeholder="Escrever Comentário"
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
                  placeholder="Nome"
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
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <input
                  class="form-control"
                  name="website"
                  id="website"
                  type="text"
                  placeholder="Rede Social"
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <button type="submit" class="button btn_1 button-contactForm">
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comentários;
