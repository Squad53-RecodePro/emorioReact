import React from "react";

import UserLayout from "../../layout/User";

const Artigo04 = () => {
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
                    src="/assets/blog/business.jpg"
                    alt=""
                    width="100%"
                  />
                </div>
                <div class="blog_details">
                  <h2>
                    07 dicas valiosas da Introdução de Web Sites que funcionam:
                  </h2>
                  <ul class="blog-info-link mt-3 mb-4">
                    <li>
                      <a href="#">
                        <i class="far fa-user"></i>Dicas de leitura, Programação
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="far fa-comments"></i> 03 Comentários
                      </a>
                    </li>
                  </ul>
                  <p class="excert">
                    “Basta percorrer o infindável atoleiro da World Wide Web –
                    arranha céus vazios, parques de diversões abandonados,
                    obscuros recantos quebrados ocasionalmente por locais limpos
                    e bem iluminados – para se ver que há alguma coisa que
                    separar os sites da Web que funcionam da atmosfera morta. De
                    onde vem um bom design da Web? Black acredita que os
                    princípios que nortearam a qualidade do design impresso por
                    centenas de anos são igualmente válidos online; em alguns
                    casos são ainda mais. Eis, então, aqui ..." 7 dicas valiosas
                    da Introdução de Web Sites que funcionam:
                  </p>
                  <p>
                    <ol>
                      <li>
                        Incentivar o visitante a encontrar o que está por trás
                        da primeira camada.
                      </li>
                      <li>Precisamos entreter e informar. </li>
                      <li>
                        Permitir que pulem de um item para o próximo com a
                        máxima facilidade.
                      </li>
                      <li>
                        Bom design significa ter informações pertinentes.{" "}
                      </li>
                      <li>Bom design significa conteúdo.</li>
                      <li>Não diga ao usuário o que fazer.</li>
                      <li>
                        É melhor não se desviar muito das tradições que
                        funcionam.
                      </li>
                    </ol>
                  </p>
                  <div class="quote-wrapper">
                    <div class="quotes">
                      Roger Black, em Websites que Funcionam. Livro usado na
                      pesquisa para a agência Emoriô Digital.
                    </div>
                  </div>

                  <p>
                    <figure>
                      <img
                        src="../img/blog/bgCapa.jpeg"
                        alt="Capa do Livro Web Sites que Funcionam"
                      />
                      <figcaption>
                        Dica de leitura! Livro Web Sites que Funcionam, de Roger
                        Black.
                      </figcaption>
                    </figure>
                  </p>
                </div>
              </div>
              <div class="navigation-top">
                <div class="d-sm-flex justify-content-between text-center">
                  <p class="like-info">
                    <span class="align-middle">
                      <i class="far fa-heart"></i>
                    </span>
                    4 pessoas curtiram esse post
                  </p>
                  <div class="col-sm-4 text-center my-2 my-sm-0">
                    <p class="comment-count">
                      <span class="align-middle">
                        <i class="far fa-comment"></i>
                      </span>{" "}
                      06 Comments
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
                  <img src="/assets/team/felipe.jpeg" alt="Felipe" />
                  <div class="media-body">
                    <a href="#">
                      <h4>Felipe Morales</h4>
                    </a>
                    <p>
                      Integrante do Squad 053 no programa Recode Pro em 2022.
                      Interessado em BackEnd e Gestão de Projetos.
                    </p>
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

export default Artigo04;
