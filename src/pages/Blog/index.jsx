import React from "react";

import UserLayout from "../../layout/User";

import { listaBlog } from "../../utils/listaBlog";

import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const Blog = () => {
  return (
<<<<<<< HEAD
    <UserLayout>
      <section class="breadcrumb breadcrumb_bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb_iner text-center">
                <div class="breadcrumb_iner_item">
=======
    <div>
      <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
>>>>>>> 966e4a5a9c02e2a93116bcf7071cb8c3ab40017e
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

<<<<<<< HEAD
      <section class="blog_area section_padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mb-5 mb-lg-0">
              <div class="blog_left_sidebar">
                {listaBlog.map((item) => (
                  <article key={item.ID} class="blog_item">
                    <div class="blog_item_img">
                      <img
                        class="card-img rounded-0"
                        src={item.IMAGEM}
                        alt={item.TITULO}
                      />
                    </div>

                    <div class="blog_details">
                      <a class="d-inline-block" href={`/artigo${item.ID}`}>
                        <h2>{item.TITULO}</h2>
                      </a>
                      <p>{item.DESCRICAO}</p>

                      <ul class="blog-info-link">
                        <li>
                          <i class="far fa-user">{item.TAGS}</i>
                        </li>
                      </ul>
                    </div>
                  </article>
                ))}
=======
      <section className="blog_area section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                <article className="blog_item">
                  <div className="blog_item_img">
                    <img
                      className="card-img rounded-0" 
                      src={primeiroPitch} 
                      alt="Pitch Emorio"
                    />
                    <a href="#" className="blog_item_date">
                      <h3>21</h3>
                      <p>Julho</p>
                    </a>
                  </div>

                  <div className="blog_details">
                    <a className="d-inline-block" href="artigos/artigo007.html">
                      <h2>Pitch, Bastidores e Feedbacks</h2>
                    </a>
                    <p>
                      Confira a apresentação feita pelo Squad 53 na primeira
                      apresentação do projeto EmoriÔ Digital para o programa
                      RecodePro, no dia 21 de setembro.
                    </p>

                    <ul className="blog-info-link">
                      <li>
                        <a href="#">
                          <i className="far fa-user"></i> EmoriÔ Digital, Projetos
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments"></i> 03 Comentários
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>

                <article className="blog_item">
                  <div className="blog_item_img">
                    <img
                      className="card-img rounded-0"
                      src={arteSustentabilidade} 
                      alt="capaArteeSustentabilidade"
                    />
                    <a href="#" className="blog_item_date">
                      <h3>22</h3>
                      <p>Julho</p>
                    </a>
                  </div>

                  <div className="blog_details">
                    <a className="d-inline-block" href="artigos/artigo006.html">
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

                    <ul className="blog-info-link">
                      <li>
                        <a href="#">
                          <i className="far fa-user"></i> Educação, Arte,
                          Sustentabilidade
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments"></i> 03 Comentários
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="blog_item">
                  <div className="blog_item_img">
                    <img
                      className="card-img rounded-0"
                      src={imgGil} 
                      alt="gil_bayana"
                    />
                    <div className="blog_item_date">
                      <h3>13</h3>
                      <p>Julho</p>
                    </div>
                  </div>

                  <div className="blog_details">
                  <Link to="/Artigo001">
                      <h2>
                        Emoriô: conheça a música que inspirou nossa agência.
                      </h2>
                    {/* <a className="d-inline-block" href="artigos/artigo001.html"> */}

                  </Link>
                     
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

                    <ul className="blog-info-link">
                      <li>
                        <a href="#">
                          <i className="far fa-user"></i> Música, Cultura
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments"></i> 03 Comentários
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="blog_item">
                  <div className="blog_item_img">
                    <img
                      className="card-img rounded-0"
                      src={meninoViolao} 
                      alt=""
                    />
                    <a href="#" className="blog_item_date">
                      <h3>13</h3>
                      <p>Julho</p>
                    </a>
                  </div>

                  <div className="blog_details">
                    <Link className="d-inline-block" to="/Artigo003">
                      <h2>Como A Música Auxilia Na Educação</h2>
                  
                    </Link>
                    <p>
                      O acesso às instituições de ensino e a alfabetização não
                      são uniformes no território brasileiro. Existem diferenças
                      significativas entre regiões, estados e municípios. A
                      diferença mais marcante é observada entre os indicadores
                      educacionais dos meios rural e urbano. O rural brasileiro
                      apresenta, segundo dados do censo demográfico de 2010
                      (IBGE, 2011), indicadores defasados em relação ao urbano.
                    </p>

                    <ul className="blog-info-link">
                      <li>
                        <a href="#">
                          <i className="far fa-user"></i> Educação, Cultura
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments"></i> 03 Comentários
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>

                <article className="blog_item">
                  <div className="blog_item_img">
                    <img
                      className="card-img rounded-0"
                      src={criancaRural}  
                      alt="bg"
                    />
                    <div className="blog_item_date">
                      <h3>13</h3>
                      <p>Julho</p>
                    </div>
                  </div>

                  <div className="blog_details">
                    <Link className="d-inline-block" to="/Artigo002">
                      <h2>Educação: Contraste entre meio urbano e rural</h2>
                    </Link>
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

                    <ul className="blog-info-link">
                      <li>
                        <a href="#">
                          <i className="far fa-user"></i> Educação, Zona Rural
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments"></i> 03 Comentários
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>

                <article className="blog_item">
                  <div className="blog_item_img">
                    <img
                      className="card-img rounded-0"
                      src={estudoTech} 
                      alt=""
                    />
                    <a href="#" className="blog_item_date">
                      <h3>15</h3>
                      <p>Jan</p>
                    </a>
                  </div>

                  <div className="blog_details">
                    <a className="d-inline-block" href="artigos/artigo004.html">
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
                    <ul className="blog-info-link">
                      <li>
                        <a href="#">
                          <i className="far fa-user"></i> Tecnologia
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments"></i> 03 Comentários
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>

                <article className="blog_item">
                  <div className="blog_item_img">
                    <img
                      className="card-img rounded-0"
                      src={voNeto} 
                      alt="fundoimg"
                    />
                    <a href="#" className="blog_item_date">
                      <h3>15</h3>
                      <p>Jan</p>
                    </a>
                  </div>

                  <div className="blog_details">
                    <a className="d-inline-block" href="artigos/artigo005.html">
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
                    <ul className="blog-info-link">
                      <li>
                        <a href="#">
                          <i className="far fa-user"></i> Educação, Zona Rural, EmoriÔ Digital
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments"></i> 03 Comentários
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>

                <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Previous">
                        <i className="ti-angle-left"></i>
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a href="#" className="page-link">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Next">
                        <i className="ti-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
>>>>>>> 966e4a5a9c02e2a93116bcf7071cb8c3ab40017e
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                  <form action="#">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Pesquisar Palavra-Chave"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Pesquisar Palavra-Chave'"
                        />
                        <div className="input-group-append">
                          <button className="btn" type="button">
                            <i className="ti-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      className="button rounded-0 primary-bg text-white w-100 btn_1"
                      type="submit"
                    >
                      Pesquisar
                    </button>
                  </form>
                </aside>

                {/* <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title">Categorias</h4>
                  <ul className="list cat-list">
                    <li>
                      <a href="#" className="d-flex">
                        <p>Aprendizado</p>
                        <p>(37)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Cultura</p>
                        <p>(10)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Zonas Rurais</p>
                        <p>(03)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Tecnologia</p>
                        <p>(11)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Programação</p>
                        <p>(21)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Educação</p>
                        <p>(09)</p>
                      </a>
                    </li>
                  </ul>
                </aside> */}

<<<<<<< HEAD
                <aside class="single_sidebar_widget tag_cloud_widget">
                  <h4 class="widget_title">Tags</h4>
                  <ul class="list">
=======
                {/* <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title">Artigos Recentes</h3>
                  <div className="media post_item">
                    <img src="img/post/post_1.png" alt="post" /> 
                    <div className="media-body">
                      <a href="single-blog.html">
                        <h3>From life was you fish...</h3>
                      </a>
                      <p>January 12, 2019</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="img/post/post_2.png" alt="post" />
                    <div className="media-body">
                      <a href="single-blog.html">
                        <h3>The Amazing Hubble</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="img/post/post_3.png" alt="post" />
                    <div className="media-body">
                      <a href="single-blog.html">
                        <h3>Astronomy Or Astrology</h3>
                      </a>
                      <p>03 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="img/post/post_4.png" alt="post" />
                    <div className="media-body">
                      <a href="single-blog.html">
                        <h3>Asteroids telescope</h3>
                      </a>
                      <p>01 Hours ago</p>
                    </div>
                  </div>
                </aside> */}
                <aside className="single_sidebar_widget tag_cloud_widget">
                  <h4 className="widget_title">Tags</h4>
                  <ul className="list">
>>>>>>> 966e4a5a9c02e2a93116bcf7071cb8c3ab40017e
                    <li>
                      <a href="#">EmoriÔ Digital</a>
                    </li>
                    <li>
                      <a href="#">Cultura</a>
                    </li>
                    <li>
                      <a href="#">Zona Rural</a>
                    </li>
                    <li>
                      <a href="#">Tecnologia</a>
                    </li>
                    <li>
                      <a href="#">Arte</a>
                    </li>
                    <li>
                      <a href="#">Educação</a>
                    </li>
<<<<<<< HEAD
                    <li>
                      <a href="#">Música</a>
                    </li>
                    <li>
                      <a href="#">Sustentabilidade</a>
=======
                    <li>
                      <a href="#">Música</a>
                    </li>
                    <li>
                      <a href="#">Sustentabilidade</a>
                    </li>
                  </ul>
                </aside>

                {/* <aside className="single_sidebar_widget instagram_feeds">
                  <h4 className="widget_title">Galeria</h4>
                  <ul className="instagram_row flex-wrap">
                    <li>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/post/post_5.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/post/post_6.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/post/post_7.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/post/post_8.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/post/post_9.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="img/post/post_10.png"
                          alt=""
                        />
                      </a>
>>>>>>> 966e4a5a9c02e2a93116bcf7071cb8c3ab40017e
                    </li>
                  </ul>
                </aside> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

export default Blog;
