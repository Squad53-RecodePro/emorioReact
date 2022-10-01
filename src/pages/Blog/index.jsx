import React from "react";

import primeiroPitch from "../../assets/img/blog/artigo7.png"
import arteSustentabilidade from "../../assets/img/blog/artesustentabilidade4.jpeg"
import imgGil from "../../assets/img/blog/gil_bayana.jpg"
import meninoViolao from "../../assets/img/blog/menino-violao.jpg"
import criancaRural from "../../assets/img/blog/criancaRural.jpg"
import estudoTech from "../../assets/img/blog/business.jpg"
import voNeto from "../../assets/img/blog/grandmother-1822564_1280.jpg"

const Blog = () => {
  return (
    <div>
      <section class="breadcrumb breadcrumb_bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb_iner text-center">
                <div class="breadcrumb_iner_item">
                  <h2>Nosso Blog</h2>
                  <p>
                    Início<span>/</span>Blog
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="blog_area section_padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mb-5 mb-lg-0">
              <div class="blog_left_sidebar">
                <article class="blog_item">
                  <div class="blog_item_img">
                    <img
                      class="card-img rounded-0" 
                      src={primeiroPitch} 
                      alt="Pitch Emorio"
                    />
                    <a href="#" class="blog_item_date">
                      <h3>21</h3>
                      <p>Julho</p>
                    </a>
                  </div>

                  <div class="blog_details">
                    <a class="d-inline-block" href="artigos/artigo007.html">
                      <h2>Pitch, Bastidores e Feedbacks</h2>
                    </a>
                    <p>
                      Confira a apresentação feita pelo Squad 53 na primeira
                      apresentação do projeto EmoriÔ Digital para o programa
                      RecodePro, no dia 21 de setembro.
                    </p>

                    <ul class="blog-info-link">
                      <li>
                        <a href="#">
                          <i class="far fa-user"></i> EmoriÔ Digital, Projetos
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="far fa-comments"></i> 03 Comentários
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>

                <article class="blog_item">
                  <div class="blog_item_img">
                    <img
                      class="card-img rounded-0"
                      src={arteSustentabilidade} 
                      alt="capaArteeSustentabilidade"
                    />
                    <a href="#" class="blog_item_date">
                      <h3>22</h3>
                      <p>Julho</p>
                    </a>
                  </div>

                  <div class="blog_details">
                    <a class="d-inline-block" href="artigos/artigo006.html">
                      <h2>
                        Projeto Arte e Sustentabilidade - Andréia Rodrigues
                      </h2>
                    </a>
                    <p>
                      O objetivo principal do projeto foi apresentar aos alunos
                      como a arte tem a função crítica, investigativa e
                      imaginativa na participação cultural e social de
                      diferentes povos em diferentes tempos e contextos. Na
                      situação de emergência atual em que se encontra nosso
                      planeta devido as alterações sofridas pela natureza e
                      estimuladas pela sociedade de consumo, a arte pode buscar
                      estímulos para reflexões, diálogos e práticas de respeito
                      à natureza. O produto final do projeto foi a exposição de
                      telas feitas com materiais recicláveis.
                    </p>

                    <ul class="blog-info-link">
                      <li>
                        <a href="#">
                          <i class="far fa-user"></i> Educação, Arte,
                          Sustentabilidade
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="far fa-comments"></i> 03 Comentários
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article class="blog_item">
                  <div class="blog_item_img">
                    <img
                      class="card-img rounded-0"
                      src={imgGil} 
                      alt="gil_bayana"
                    />
                    <a href="#" class="blog_item_date">
                      <h3>13</h3>
                      <p>Julho</p>
                    </a>
                  </div>

                  <div class="blog_details">
                    <a class="d-inline-block" href="artigos/artigo001.html">
                      <h2>
                        Emoriô: conheça a música que inspirou nossa agência.
                      </h2>
                    </a>
                    <p>
                      Em um dos episódios do referencial programa MPB Especial
                      (Ensaio) no ano de 1975, João Donato afirma que foi o
                      cantor e compositor Agostinho dos Santos quem o
                      incentivara, poucos anos antes, a cantar suas próprias
                      músicas, daí o lançamento em 1973 do antológico álbum
                      “Quem é quem” produzido por Marcos Valle e, de certa
                      forma, aquele que marcaria a volta de Donato de uma
                      temporada de uma década nos Estados Unidos, agora também
                      como cantor. No mesmo ano de 1975, é lançado o álbum
                      “Lugar Comum” que dá continuidade à sua veia de cantor,
                      sem deixar de lado a riqueza de seus arranjos e a
                      companhia do piano, onipresente. Neste disco a sua
                      parceria com Gilberto Gil, principalmente letrando suas
                      músicas, é selada definitivamente com o lançamento de
                      músicas que viraram grandes sucessos que marcam a sua
                      carreira e a música brasileira até hoje.
                    </p>

                    <ul class="blog-info-link">
                      <li>
                        <a href="#">
                          <i class="far fa-user"></i> Música, Show, Cultura
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="far fa-comments"></i> 03 Comments
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article class="blog_item">
                  <div class="blog_item_img">
                    <img
                      class="card-img rounded-0"
                      src={meninoViolao} 
                      alt=""
                    />
                    <a href="#" class="blog_item_date">
                      <h3>13</h3>
                      <p>Julho</p>
                    </a>
                  </div>

                  <div class="blog_details">
                    <a class="d-inline-block" href="artigos/artigo002.html">
                      <h2>Como A Música Auxilia Na Educação</h2>
                    </a>
                    <p>
                      O acesso às instituições de ensino e a alfabetização não
                      são uniformes no território brasileiro. Existem diferenças
                      significativas entre regiões, estados e municípios. A
                      diferença mais marcante é observada entre os indicadores
                      educacionais dos meios rural e urbano. O rural brasileiro
                      apresenta, segundo dados do censo demográfico de 2010
                      (IBGE, 2011), indicadores defasados em relação ao urbano.
                    </p>

                    <ul class="blog-info-link">
                      <li>
                        <a href="#">
                          <i class="far fa-user"></i> Educação, Cultura
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="far fa-comments"></i> 03 Comments
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>

                <article class="blog_item">
                  <div class="blog_item_img">
                    <img
                      class="card-img rounded-0"
                      src={criancaRural}  
                      alt="bg"
                    />
                    <a href="#" class="blog_item_date">
                      <h3>13</h3>
                      <p>Julho</p>
                    </a>
                  </div>

                  <div class="blog_details">
                    <a class="d-inline-block" href="artigos/artigo003.html">
                      <h2>Educação: Contraste entre meio urbano e rural</h2>
                    </a>
                    <p align="justify">
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

                    <ul class="blog-info-link">
                      <li>
                        <a href="#">
                          <i class="far fa-user"></i> Educação, Zona Rural
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="far fa-comments"></i> 03 Comments
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>

                <article class="blog_item">
                  <div class="blog_item_img">
                    <img
                      class="card-img rounded-0"
                      src={estudoTech} 
                      alt=""
                    />
                    <a href="#" class="blog_item_date">
                      <h3>15</h3>
                      <p>Jan</p>
                    </a>
                  </div>

                  <div class="blog_details">
                    <a class="d-inline-block" href="artigos/artigo004.html">
                      <h2>
                        07 dicas valiosas da Introdução de Web Sites que
                        funcionam:
                      </h2>
                    </a>
                    <p>
                      Basta percorrer o infindável atoleiro da World Wide Web –
                      arranha céus vazios, parques de diversões abandonados,
                      obscuros recantos quebrados ocasionalmente por locais
                      limpos e bem iluminados – para se ver que há alguma coisa
                      que separar os sites da Web que funcionam da atmosfera
                      morta. De onde vem um bom design da Web? Black acredita
                      que os princípios que nortearam a qualidade do design
                      impresso por centenas de anos são igualmente válidos
                      online; em alguns casos são ainda mais.
                    </p>
                    <ul class="blog-info-link">
                      <li>
                        <a href="#">
                          <i class="far fa-user"></i> Travel, Lifestyle
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="far fa-comments"></i> 03 Comments
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>

                <article class="blog_item">
                  <div class="blog_item_img">
                    <img
                      class="card-img rounded-0"
                      src={voNeto} 
                      alt="fundoimg"
                    />
                    <a href="#" class="blog_item_date">
                      <h3>15</h3>
                      <p>Jan</p>
                    </a>
                  </div>

                  <div class="blog_details">
                    <a class="d-inline-block" href="artigos/artigo005.html">
                      <h2>
                        Como a EmoriÔ Digital Auxilia na Erradicação do
                        Analfabetismo nas Zonas Rurais
                      </h2>
                    </a>
                    <p>
                      Analfabetismo vai além de não saber ler e escrever. A
                      falta de acesso à cultura, não compreender a realidade que
                      o cerca, falta de interpretação de textos e contextos, é
                      um problema grave ocasionado pela deficiência da educação
                      brasileira. “São chamados de analfabetos funcionais os
                      indivíduos que, embora saibam reconhecer incapazes de
                      compreender textos simples, bem como realizar operações
                      matemáticas mais elaboradas.”
                    </p>
                    <ul class="blog-info-link">
                      <li>
                        <a href="#">
                          <i class="far fa-user"></i> Travel, Lifestyle
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="far fa-comments"></i> 03 Comments
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>

                <nav class="blog-pagination justify-content-center d-flex">
                  <ul class="pagination">
                    <li class="page-item">
                      <a href="#" class="page-link" aria-label="Previous">
                        <i class="ti-angle-left"></i>
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">
                        1
                      </a>
                    </li>
                    <li class="page-item active">
                      <a href="#" class="page-link">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link" aria-label="Next">
                        <i class="ti-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="blog_right_sidebar">
                <aside class="single_sidebar_widget search_widget">
                  <form action="#">
                    <div class="form-group">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Pesquisar Palavra-Chave"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Pesquisar Palavra-Chave'"
                        />
                        <div class="input-group-append">
                          <button class="btn" type="button">
                            <i class="ti-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      class="button rounded-0 primary-bg text-white w-100 btn_1"
                      type="submit"
                    >
                      Pesquisar
                    </button>
                  </form>
                </aside>

                <aside class="single_sidebar_widget post_category_widget">
                  <h4 class="widget_title">Categorias</h4>
                  <ul class="list cat-list">
                    <li>
                      <a href="#" class="d-flex">
                        <p>Aprendizado</p>
                        <p>(37)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex">
                        <p>Cultura</p>
                        <p>(10)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex">
                        <p>Zonas Rurais</p>
                        <p>(03)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex">
                        <p>Tecnologia</p>
                        <p>(11)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex">
                        <p>Programação</p>
                        <p>(21)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex">
                        <p>Educação</p>
                        <p>(09)</p>
                      </a>
                    </li>
                  </ul>
                </aside>

                <aside class="single_sidebar_widget popular_post_widget">
                  <h3 class="widget_title">Artigos Recentes</h3>
                  <div class="media post_item">
                    <img src="img/post/post_1.png" alt="post" /> 
                    <div class="media-body">
                      <a href="single-blog.html">
                        <h3>From life was you fish...</h3>
                      </a>
                      <p>January 12, 2019</p>
                    </div>
                  </div>
                  <div class="media post_item">
                    <img src="img/post/post_2.png" alt="post" />
                    <div class="media-body">
                      <a href="single-blog.html">
                        <h3>The Amazing Hubble</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div class="media post_item">
                    <img src="img/post/post_3.png" alt="post" />
                    <div class="media-body">
                      <a href="single-blog.html">
                        <h3>Astronomy Or Astrology</h3>
                      </a>
                      <p>03 Hours ago</p>
                    </div>
                  </div>
                  <div class="media post_item">
                    <img src="img/post/post_4.png" alt="post" />
                    <div class="media-body">
                      <a href="single-blog.html">
                        <h3>Asteroids telescope</h3>
                      </a>
                      <p>01 Hours ago</p>
                    </div>
                  </div>
                </aside>
                <aside class="single_sidebar_widget tag_cloud_widget">
                  <h4 class="widget_title">Tags</h4>
                  <ul class="list">
                    <li>
                      <a href="#">Aprendizado</a>
                    </li>
                    <li>
                      <a href="#">Cultura</a>
                    </li>
                    <li>
                      <a href="#">Zonas Rurais</a>
                    </li>
                    <li>
                      <a href="#">Tecnologia</a>
                    </li>
                    <li>
                      <a href="#">Programação</a>
                    </li>
                    <li>
                      <a href="#">Educação</a>
                    </li>
                  </ul>
                </aside>

                <aside class="single_sidebar_widget instagram_feeds">
                  <h4 class="widget_title">Galeria</h4>
                  <ul class="instagram_row flex-wrap">
                    <li>
                      <a href="#">
                        <img
                          class="img-fluid"
                          src="img/post/post_5.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          class="img-fluid"
                          src="img/post/post_6.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          class="img-fluid"
                          src="img/post/post_7.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          class="img-fluid"
                          src="img/post/post_8.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          class="img-fluid"
                          src="img/post/post_9.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          class="img-fluid"
                          src="img/post/post_10.png"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
