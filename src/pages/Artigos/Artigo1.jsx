import React from "react";

import UserLayout from "../../layout/User";

const Artigo07 = () => {
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
                    src="/assets/blog/artigo.png"
                    alt="Capa do Artigo Projeto e Sustentabilidade"
                    width="100%"
                  />
                </div>
                <div class="blog_details">
                  <h2>Pitch, Bastidores e Feedbacks</h2>
                  <ul class="blog-info-link mt-3 mb-4">
                    <li>
                      <a href="#">
                        <i class="far fa-user"></i>EmoriÔ Digital, Projetos
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="far fa-comments"></i> 03 Comentários
                      </a>
                    </li>
                  </ul>
                  <p>
                    Confira a apresentação feita pelo Squad 53 na primeira
                    apresentação do projeto EmoriÔ Digital para o programa
                    RecodePro, no dia 21 de setembro.
                  </p>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/sQxlqDZXw2Y"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/0-oNwlBLTRg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/xac08ahWT5I"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div class="blog-author">
                  <div class="media align-items-center">
                    <img src="/assets/team/felipe.jpeg" alt="Felipe Morales" />
                    <div class="media-body">
                      <a href="#">
                        <h4>Felipe Morales</h4>
                      </a>
                      <p>
                        Batuquero e Entusiasta da Cultura Popular. Gestor de
                        Projetos e Programador na Agência EmoriÔ Digital.
                      </p>
                    </div>
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

export default Artigo07;
