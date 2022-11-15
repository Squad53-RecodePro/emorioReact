import React from "react";

import UserLayout from "../../layout/User";
const Artigo05 = () => {
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
                    src="/assets/blog/avo-crianca.jpg"
                    alt=""
                    width="100%"
                  />
                </div>
                <div class="blog_details">
                  <h2>
                    Como a EmoriÔ Digital Auxilia na Erradicação do
                    Analfabetismo nas Zonas Rurais
                  </h2>
                  <ul class="blog-info-link mt-3 mb-4">
                    <li>
                      <a href="#">
                        <i class="far fa-user"></i>Sobre, Tema, Erradicação
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="far fa-comments"></i> 03 Comentários
                      </a>
                    </li>
                  </ul>
                  <p class="excert">
                    Analfabetismo vai além de não saber ler e escrever. A falta
                    de acesso à cultura, não compreender a realidade que o
                    cerca, falta de interpretação de textos e contextos, é um
                    problema grave ocasionado pela deficiência da educação
                    brasileira. “São chamados de analfabetos funcionais os
                    indivíduos que, embora saibam reconhecer incapazes de
                    compreender textos simples, bem como realizar operações
                    matemáticas mais elaboradas.”
                  </p>
                  <p>
                    A melhor cura para auxiliar a educação nesse combate aos
                    analfabetismos que existem é a Cultura. Estudos comprovam
                    que envolvimento de jovens, crianças e adultos com
                    atividades artísticas melhora seu intelecto, capacidade de
                    raciocínio, habilidades interpessoais. No caso de crianças e
                    jovens ainda auxilia em uma melhora na disciplina e no
                    desempenho acadêmico. Por isso enxergamos que apoiar
                    projetos socioculturais que atuem no campo, zonas rurais e
                    florestas é a melhor forma de melhorar a educação, a
                    sociedade e o mundo.
                  </p>
                  <div class="quote-wrapper">
                    <div class="quotes">
                      Nossa agência tem a missão de dar visibilidade para esses
                      projetos, criar sua identidade virtual e abrir as portas
                      do mundo da internet. Criamos um site personalizado para
                      nossos projetos apoiados, de acordo com as suas
                      necessidades, de forma a melhorar sua atuação local e
                      global.
                    </div>
                  </div>
                  <p>
                    Ao abrir as portas da World Wide Web para esses projetos,
                    abrimos um mundo de possibilidades, novas parceirias surgem,
                    novas caminhos se abrem. O projeto se solidifica, ganha
                    visibilidade e força.
                  </p>
                  <p>
                    A EmoriÔ Digital coloca toda sua potência lado a lado das
                    nossas organizações parceiras, projetos apoiados, para
                    avançarmos juntos rumo à construção de uma realidade onde
                    todos saibam ler, escrever, resolver problemas matemáticos,
                    apreciar uma boa música, peças de teatro, cinema. Um mundo
                    plural e diverso, sem ignorância e sem obscurantismo.
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
                  <img src="/assets/team/felipe.jpeg" alt="" />
                  <div class="media-body">
                    <a href="#">
                      <h4>Felipe Morales</h4>
                    </a>
                    <p>BackEnd e Gestão de Projetos.</p>
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

export default Artigo05;
