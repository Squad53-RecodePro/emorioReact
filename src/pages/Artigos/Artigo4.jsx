import React from "react";

import UserLayout from "../../layout/User";

const Artigo03 = () => {
  return (
    <UserLayout>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb_iner text-center">
                <div class="breadcrumb_iner_item">
                  <h1 class="titulo-blog">Blog</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="blog_area single-post-area section_padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 posts-list">
              <div class="single-post">
                <div class="feature-img">
                  <img
                    class="img-fluid"
                    src="/assets/blog/menino-violao.jpg"
                    alt=""
                    width="100%"
                  />
                </div>
                <div class="blog_details">
                  <h2>Como a música auxilia na educação</h2>
                  <ul class="blog-info-link mt-3 mb-4">
                    <li>
                      <a href="#">
                        <i class="far fa-user"></i> Educação, Cultura e Música
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="far fa-comments"></i> 03 Comentários
                      </a>
                    </li>
                  </ul>
                  <p class="excert">
                    O alfabetismo é visto a partir da valorização da cultura
                    escrita, ou seja, elementos da leitura e da escrita que
                    fazem parte da vida do aluno e da prática social. Nessa
                    abordagem, a música é um dos gêneros textuais que podem
                    contribuir para o processo de alfabetização e letramento,
                    quando estudada dentro de uma sala de aula, desperta uma
                    curiosidade e um interesse pelo conteúdo administrado em
                    qualquer aula, além da estimulação do desenvolvimento
                    afetivo, estético, cognitivo, sensorial e musical
                    específico.
                  </p>
                  <p>
                    A música é uma colaboração para a prática da linguagem, seja
                    ela verbal ou não verbal e para as diversas outras áreas do
                    conhecimento dentro da educação básica é de extrema
                    importância. O ato de cantar, dançar, ler uma letra de
                    música, é a combinação que faz a junção entre a prática de
                    ler e escrever com a presença do contexto cultural.
                  </p>
                  <div class="quote-wrapper">
                    <div class="quotes">
                      Música é um dos gêneros textuais que podem contribuir para
                      o processo de alfabetização e letramento, quando estudada
                      dentro de uma sala de aula.
                    </div>
                  </div>
                  <p>
                    É uma forma totalmente voltada para a criança que está recém
                    dialogando com o grafema e o fonema. Deste modo, se
                    utilizada em toda a educação básica, pode auxiliar o
                    aprendizado dos conteúdos propostos, numa perspectiva
                    dinamizadora, interativa, participativa e animada.
                  </p>
                  <a
                    target="_blank"
                    href="http://repositorio.ipea.gov.br/bitstream/11058/9661/1/BRUA21_Ensaio5.pdf"
                  >
                    Fonte: FEIER, E. S.; GEDOZ S. Relação entre música,
                    alfabetização e letramento. Escrito para apresentação na
                    XIII JORNADA CIENTÍFICA DA UNIVEL “Conflitos Mundiais: do
                    local ao global” 28 e 29 de outubro de 2015 – UNIVEL – CPE –
                    Cascavel-PR.
                  </a>
                </div>
              </div>
              <div class="navigation-top">
                <div class="d-sm-flex justify-content-between text-center">
                  <p class="like-info">
                    <span class="align-middle">
                      <i class="far fa-heart"></i>
                    </span>
                    123 pessoas curtiram esse post
                  </p>
                  <div class="col-sm-4 text-center my-2 my-sm-0">
                    <p class="comment-count">
                      <span class="align-middle">
                        <i class="far fa-comment"></i>
                      </span>{" "}
                      06 Commentários
                    </p>
                  </div>
                  <ul class="social-icons">
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="blog-author">
                <div class="media align-items-center">
                  <img src="/assets/team/poliana.jpeg" alt="Foto Poliana" />
                  <div class="media-body">
                    <a href="#">
                      <h4>Poliana Yukie</h4>
                    </a>
                    <p>Full Stack</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

export default Artigo03;
