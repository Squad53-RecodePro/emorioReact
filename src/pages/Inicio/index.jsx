import { Box } from "@mui/material";
import React from "react";

import bgSobre from "../../assets/img/home/learning_img.png";
import bgAdvance from "../../assets/img/home/advance_feature_img.png";

const Inicio = () => {
  return (
    <Box>
      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-xl-6">
              <div className="banner_text">
                <div className="banner_text_iner">
                  <h5>Empoderamento digital e visibilidade</h5>
                  <h1>
                    Aliando tecnologia à cultura, conectamos projetos do campo
                    ao mundo virtual
                  </h1>
                  <p>
                    Vamos dar visibilidade e ecoar projetos socioculturais que
                    atuem no campo, em zonas rurais, áreas afastadas do centro
                    urbano e tecnológico. Criar pontes para facilitar o acesso à
                    educação, à dignidade humana, o empoderamento digital.
                  </p>
                  <a href="/blog" className="btn_1">
                    Saiba Mais
                  </a>
                  <a href="projects.html" className="btn_2">
                    Projetos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature_part">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xl-3 align-self-center">
              <div className="single_feature_text">
                <h2>
                  Transformar <br />
                  em Realidade
                </h2>
                <p>
                  Alfabetizar jovens e adultos não é uma tarefa simples, mas ela
                  precisa ser feita. A educação, como prevê a nossa
                  Constituição, é um direito de todos.
                </p>
                <a href="#" className="btn_1">
                  Saiba Mais
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="single_feature_part">
                  <span className="single_feature_icon">
                    <i className="ti-layers"></i>
                  </span>
                  <h4>Futuro Melhor</h4>
                  <p>
                    É um dever do estado e da família oferecer, em colaboração
                    com a sociedade, uma educação que faça as pessoas se
                    desenvolverem plenamente ao longo da vida.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="single_feature_part">
                  <span className="single_feature_icon">
                    <i className="ti-new-window"></i>
                  </span>
                  <h4>Ações Importantes</h4>
                  <p>
                    A situação do analfabetismo não só nas zonas rurais, mas em
                    todo Brasil, só será erradicada com a ajuda de todos para um
                    bem maior e para um Brasil que dê importância para educação.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="single_feature_part single_feature_part_2">
                  <span className="single_service_icon style_icon">
                    <i className="ti-light-bulb"></i>
                  </span>
                  <h4>Oportunidades de Aprendizado</h4>
                  <p>
                    Milhões de pessoas ainda sofrem com o analfabetismo, a
                    Emoriô Digital oferece oportunidades para diversas
                    comunidades rurais
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="learning_part">
        <div className="container">
          <div className="row align-items-sm-center align-items-lg-stretch">
            <div className="col-md-7 col-lg-7">
              <div className="learning_img">
                <img src={bgSobre} alt="IlustraçãoSobre" />
              </div>
            </div>
            <div className="col-md-5 col-lg-5">
              <div className="learning_member_text">
                <h5>Sobre Nós</h5>
                <h2>Aprendendo com amor e riso</h2>
                <p>
                  <strong>Aprender</strong>, palavra que nos define desde o
                  nosso nascimento, é a base de todas pessoas e de onde podemos
                  realizar nossos objetivos de vida.
                </p>
                <ul>
                  <li>
                    <span className="ti-pencil-alt"></span>Acreditamos em um
                    futuro melhor e que a educação salva vidas
                  </li>
                  <li>
                    <span className="ti-ruler-pencil"></span>Materiais
                    disponibilizados por nossos parceiros
                  </li>
                </ul>
                <a href="#" className="btn_1">
                  Consulte Mais Informação
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="member_counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single_member_counter">
                <span className="counter">04</span>
                <h4>Projetos Apoiados</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single_member_counter">
                <span className="counter">242</span>
                <h4>Pessoas Alcançadas</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single_member_counter">
                <span className="counter">04</span>
                <h4>Estados Atingidos</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single_member_counter">
                <span className="counter">26</span>
                <h4>Profissionais Envolvidos</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="advance_feature learning_part">
        <div className="container">
          <div className="row align-items-sm-center align-items-xl-stretch">
            <div className="col-md-6 col-lg-6">
              <div className="learning_member_text">
                <h5>Educação e Tecnologia</h5>
                <h2>Tecnologia e Cultura Mudando os Rumos da Educação</h2>
                <p>
                  Uma das principais relações entre tecnologia e cultura na vida
                  das pessoas é vista no desenvolvimento das relações
                  interpessoais. Isso porque, antes das inovações tecnológicas,
                  as relações – tanto de amizade quanto amorosas – eram formadas
                  em um espaço mais restrito e com poucas alternativas de
                  comunicação.
                </p>
                <div className="row">
                  <div className="col-sm-6 col-md-12 col-lg-6">
                    <div className="learning_member_text_iner">
                      <span className="ti-pencil-alt"></span>
                      <h4>Aprenda em qualquer lugar</h4>
                      <p>
                        Graças ao avanço da tecnologia, a educação pode chegar
                        em diversos lugares, por mais díficil acesso que seja!
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-12 col-lg-6">
                    <div className="learning_member_text_iner">
                      <span className="ti-stamp"></span>
                      <h4>Seja um Agente Transformador</h4>
                      <p>
                        Cada pessoa pode constribuir com um simples gesto de
                        empatia, uma atitude pode mudar o percurso da vida de
                        quem necessita.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="learning_img">
                <img src={bgAdvance} alt="Ilustração" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial_part">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="section_tittle text-center">
                <p>Conheça nossas parcerias</p>
                <h2>Participantes</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="textimonial_iner owl-carousel">
                <div className="testimonial_slider">
                  <div className="row">
                    <div className="col-lg-8 col-xl-4 col-sm-8 align-self-center">
                      <div className="testimonial_slider_text">
                        <p>
                          Psicóloga formada pela PUC-SP, com especialização em
                          Saúde Materno-Infantil pela UNIFESP. Tem experiência
                          com atendimento de gestantes e puérperas e questões
                          relacionadas a parentalidade. Trabalha a partir da
                          Fenomenologia-Existencial Crítica e atualmente tenho
                          como foco o público feminino, negro e lgbtqia+.
                        </p>
                        <h4>Alessandra Marques</h4>
                        <h5>Psicóloga e Graduanda em Pedagogia</h5>
                      </div>
                    </div>
                    <div className="col-lg-4 col-xl-2 col-sm-4">
                      <div className="testimonial_slider_img">
                        <img src="img\about\Alessandra.jpg" alt="Alessandra" />
                      </div>
                    </div>
                    <div className="col-xl-4 d-none d-xl-block">
                      <div className="testimonial_slider_text">
                        <p>
                          Tatiane Fernandes é Engenheira de Produção Cultural.
                          Membro Fundadora do Forum Potiguar de Cultura, atua na
                          produção através de sua produtora a Mapa Realizações
                          Culturais, passou pela experiência de membro do
                          Conselho Municipal de Políticas Culturais de Natal e
                          foi gestora técnica na Fundação José Augusto por 2
                          anos.
                        </p>
                        <h4>Tatiane Fernandes</h4>
                        <h5>Engenheira de Produção Cultural</h5>
                      </div>
                    </div>
                    <div className="col-xl-2 d-none d-xl-block">
                      <div className="testimonial_slider_img">
                        <img src="img\about\Tatiane.jpeg" alt="#" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial_slider">
                  <div className="row">
                    <div className="col-lg-8 col-xl-4 col-sm-8 align-self-center">
                      <div className="testimonial_slider_text">
                        <p>
                          Eric Max, é um ator, artevista, produtor, artista
                          visual, diretor cinematográfico e performer,
                          amazonense. Estudante de Licenciatura em Teatro pela
                          UFBA, fundador da Org. Cura Amazônica e Borboleta Azul
                          Filmes.
                        </p>
                        <h4>Eric Max</h4>
                        <h5>Artivista, Ator e Produtor Cultural</h5>
                      </div>
                    </div>
                    <div className="col-lg-4 col-xl-2 col-sm-4">
                      <div className="testimonial_slider_img">
                        <img src="img\about\Eric.jpeg" alt="#" />
                      </div>
                    </div>
                    <div className="col-xl-4 d-none d-xl-block">
                      <div className="testimonial_slider_text">
                        <p>
                          Bacharel em Ciências Sociais - Universidade de São
                          Paulo (USP) e estudante de pós-graduação em Gestão e
                          Análise Estratégica de Dados - Pontifícia Universidade
                          Católica de Minas Gerais (PUC - MInas). Tem
                          experiência em institutos de investigação e empresas
                          multinacionais, atuando na análise de dados sobre
                          negócios, produtos e mercado.
                        </p>
                        <h4>Gabriela Amorim</h4>
                        <h5>Data Analyst</h5>
                      </div>
                    </div>
                    <div className="col-xl-2 d-none d-xl-block">
                      <div className="testimonial_slider_img">
                        <img src="img\about\Gabriela.jpeg" alt="#" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial_slider">
                  <div className="row">
                    <div className="col-lg-8 col-xl-4 col-sm-8 align-self-center">
                      <div className="testimonial_slider_text">
                        <p>
                          Doutora em Engenharia de Produção pela Universidade de
                          São Paulo (USP). Atua como professora na Universidade
                          Federal do Rio Grande do Norte (UFRN). Tem experiência
                          e publicações na área de Engenharia de Produção,
                          atuando, principalmente, nos seguintes temas: Data
                          Envelopment Analysis (DEA), Indice Malmquist,
                          Portfolios, Inovação tecnológica, Pequena empresa,
                          Programas governamentais, Projetos de investimentos,
                          Economia e custos industriais/ governamentais.
                        </p>
                        <h4>Mariana Almeida</h4>
                        <h5>Professora de Engenharia Econômica</h5>
                      </div>
                    </div>
                    <div className="col-lg-4 col-xl-2 col-sm-4">
                      <div className="testimonial_slider_img">
                        <img src="img\about\MarianaAlmeida.jpg" alt="#" />
                      </div>
                    </div>
                    <div className="col-xl-4 d-none d-xl-block">
                      <div className="testimonial_slider_text">
                        <p>
                          Cursei Jornalismo porque amava ouvir e contar
                          histórias, conhecer pessoas e cenários diferentes para
                          mostrá-los ao mundo. No caminho, me encontrei na área
                          de Marketing. Mais do que conhecer, eu quero agir, ver
                          os ponteiros certos mexendo. Sim, estratégia, porque
                          que eu gosto mesmo é de pensar, testar e evoluir. Para
                          isso, acredito que a chave seja ouvir as pessoas,
                          interpretar os dados e construir histórias relevantes.
                        </p>
                        <h4>Mariana Zancanaro</h4>
                        <h5>Brand Strategist</h5>
                      </div>
                    </div>
                    <div className="col-xl-2 d-none d-xl-block">
                      <div className="testimonial_slider_img">
                        <img src="img\about\Mariana.jpeg" alt="#" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog_part section_padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="section_tittle text-center">
                <p>Nosso Blog</p>
                <h2>Artigos</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <div className="single-home-blog">
                <div className="card">
                  <img
                    src="img/home/gil_bayana.jpg"
                    className="card-img-top"
                    alt="blog"
                  />
                  <div className="card-body">
                    <p className="btn_4">Música</p>
                    <a href="artigos/artigo001.html">
                      <h5 className="card-title">
                        Emoriô: conheça a música que inspirou nossa agência.
                      </h5>
                    </a>
                    <p align="justify">
                      Dentre as várias obras primas contidas neste disco, o
                      destaque aqui é dado para a música “Emoriô” (Gilberto
                      Gil/João Donato) que ganhou literalmente o mundo a partir
                      de diferentes intérpretes além do próprio Donato.
                    </p>
                    <ul>
                      <li>
                        <span className="ti-comments"></span>2 Comentários
                      </li>
                      <li>
                        <span className="ti-heart"></span>2k Curtidas
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <div className="single-home-blog">
                <div className="card">
                  <img
                    src="img/imgs/grandmother-1822564_1280.jpg"
                    className="card-img-top"
                    alt="blog"
                  />
                  <div className="card-body">
                    <p className="btn_4">Analfabetismo</p>
                    <a href="artigos/artigo005.html">
                      <h5 className="card-title">
                        Como a EmoriÔ Digital Auxilia na Erradicação do
                        Analfabetismo nas Zonas Rurais
                      </h5>
                    </a>
                    <p align="justify">
                      Enxergamos que apoiar projetos socioculturais que atuem no
                      campo, zonas rurais e florestas é uma ótima forma de
                      melhorar a educação, a sociedade e o mundo.
                    </p>
                    <ul>
                      <li>
                        <span className="ti-comments"></span>2 Comentários
                      </li>
                      <li>
                        <span className="ti-heart"></span>2k Curtidas
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <div className="single-home-blog">
                <div className="card">
                  <img
                    src="img/blog/criancaRural.jpg"
                    className="card-img-top"
                    alt="blog"
                  />
                  <div className="card-body">
                    <p className="btn_4">Tecnologia</p>
                    <a href="artigos/artigo003.html">
                      <h5 className="card-title">
                        Como a música auxilia na educação
                      </h5>
                    </a>
                    <p align="justify">
                      O alfabetismo é visto a partir da valorização da cultura
                      escrita, ou seja, elementos da leitura e da escrita que
                      fazem parte da vida do aluno e da prática social.
                    </p>
                    <ul>
                      <li>
                        <span className="ti-comments"></span>2 Comentários
                      </li>
                      <li>
                        <span className="ti-heart"></span>2k Curtidas
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default Inicio;
