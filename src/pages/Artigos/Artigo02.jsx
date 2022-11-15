import React from "react";

import UserLayout from "../../layout/User";

const Artigo02 = () => {
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
                    src="/assets/blog/arte-sustentavel.jpeg"
                    alt="Bg"
                    width="100%"
                  />
                </div>
                <div class="blog_details">
                  <h2>Educação: Contraste entre meio urbano e rural</h2>
                  <ul class="blog-info-link mt-3 mb-4">
                    <li>
                      <a href="#">
                        <i class="far fa-user"></i> Educação, Cultura
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="far fa-comments"></i> 03 Comentários
                      </a>
                    </li>
                  </ul>
                  <p class="excert">
                    O acesso às instituições de ensino e a alfabetização não são
                    uniformes no território brasileiro. Existem diferenças
                    significativas entre regiões, estados e municípios. A
                    diferença mais marcante é observada entre os indicadores
                    educacionais dos meios rural e urbano. O rural brasileiro
                    apresenta, segundo dados do censo demográfico de 2010 (IBGE,
                    2011), indicadores defasados em relação ao urbano.
                  </p>
                  <p>
                    Segundo pesquisas os dados de analfabetismo para os estados
                    brasileiros mostram a grande diferença entre os meios rural
                    e o urbano. A taxa de analfabetismo no Brasil em 2010 foi de
                    10,2%, porém com 7,54% de analfabetos no meio urbano e
                    24,64% no meio rural. Essa diferença é ainda maior quando se
                    desagrega a informação por estados. Os estados do Nordeste
                    apresentaram as maiores taxas com relação a essa variável,
                    com destaque negativo para Alagoas (26%), Piauí (24,5%) e
                    Paraíba (23,4%). Ao desagregar para as áreas urbana e rural,
                    todos os estados apresentaram taxa superior a 30%, porém os
                    piores resultados foram também em Alagoas (41,7%), Piauí
                    (38,7%) e Paraíba (37,5%), para o rural. Na região Norte,
                    apenas Rondônia e Amapá apresentaram taxa de analfabetismo
                    menor que a média nacional para esta taxa no agregado, ao
                    passo que os demais estados do Norte apresentaram taxas
                    superiores, com destaque para o Acre (17,8%). Todos os
                    estados do Centro-Oeste, Sudeste e Sul apresentaram taxa de
                    analfabetismo inferior à média nacional.
                  </p>
                  <div class="quote-wrapper">
                    <div class="quotes">
                      É nítida a diferença entre as regiões do Brasil, os
                      principais fatores para a baixa produtividade do ensino na
                      área rural é expressa nos altos níveis de evasão e
                      repetência, na precariedade das instalações escolares, a
                      falta de acessibilidade, material e equipamentos, baixo
                      salário das professoras, crianças desmotivadas e
                      desnutridas (reflexo da baixa renda familiar em tantas
                      regiões rurais brasileiras), crianças que precisam
                      trabalhar para auxiliar a família e professoras que
                      ministram as aulas em suas próprias residências.
                    </div>
                  </div>
                  <p>
                    A educação de qualidade da população de um país é amplamente
                    apontada como fator de grande relevância com relação ao
                    processo de desenvolvimento social, científico, cultural e
                    econômico de um povo, de uma nação. Oferecer condições
                    mínimas de desenvolvimento, considerando a liberdade e o
                    direito de obterem para si mesmas um padrão de vida melhor,
                    inicia-se pelo oferecimento de uma educação básica de
                    qualidade desde os primeiros anos da infância e ao longo da
                    vida, o que demanda políticas públicas especificas e
                    eficientes e que considerem as especificidades de cada
                    região do Brasil.
                  </p>
                  <p>
                    Fonte: PEREIRA, C. N.; CASTRO; C. N. EDUCAÇÃO: CONTRASTE
                    ENTRE O MEIO URBANO E O MEIO RURAL NO BRASIL. Boletim
                    regional, regional e urbano. Julho de 2019, IPEA - Brasília
                    – DF. Artigo completo dísponivel em:
                    http://repositorio.ipea.gov.br/bitstream/11058/9661/1/BRUA21_Ensaio5.pdf
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
                  <img src="../img/team-6.jpeg" alt="Gabriela" />
                  <div class="media-body">
                    <a href="#">
                      <h4>Gabriela Godoi</h4>
                    </a>
                    <p>Full Stack Developer</p>
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

export default Artigo02;
