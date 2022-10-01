import React from "react";

import imgMissao from "../../assets/img/about/missao.jpg"
import imgVisao from "../../assets/img/about/visao.jpg"
import imgValores from "../../assets/img/about/valores.jpg"
import imgDoacao from "../../assets/img/about/doacao.jpg"

const Sobre = () => {
  return (
    <div>
      <section class="breadcrumb breadcrumb_bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb_iner text-center">
                <div class="breadcrumb_iner_item">
                  <h2>Sobre Nós</h2>
                  <p>
                    Início<span>/</span>Sobre Nós
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr class="featurette-divider" />
      <div class="row justify-content-center">
        <div class="col-xl-5">
          <div class="section_tittle text-center">
            <p>Apresentação</p>
            <h2>Conheça a EmoriÔ</h2>
          </div>
        </div>
      </div>
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1">
            Missão.
            <span class="text-muted">Apoiar projetos sócio culturais.</span>
          </h2>
          <p class="lead">
            Ajudar na erradicação do analfabetismo através de ferramentas
            digitais, apoiando iniciativas em zonas rurais, para melhoria da
            qualidade de vida, garantir direitos e bem estar.
          </p>
        </div>
        <div class="col-md-5">
          <img src={imgMissao} alt="Imagem Missão" /> 
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading fw-normal lh-1">
            Visão.
            <span class="text-muted">
              Contribuir com iniciativas transformadoras.
            </span>
          </h2>
          <p class="lead">
            Nosso projeto pretende apoiar 05 projetos em zonas rurais, campos e
            florestas. Atingir 300 pessoas diretamente e contribuir na formação
            de 3.000 usuários do blog.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img src={imgVisao} alt="Imagem Visão" />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1">
            Valores.
            <span class="text-muted">Construção de um Mundo melhor.</span>
          </h2>
          <p class="lead">
            Cidadania, Ética, Equidade, Inovação, Transparência,
            Responsabilidade social, Democratização da informação, Diversidade e
            Pluralidade.
          </p>
        </div>
        <div class="col-md-5">
          <img src={imgValores} alt="Imagem Valores" />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row justify-content-center">
        <div class="col-xl-5">
          <div class="section_tittle text-center">
            <p>Aliadas</p>
            <h2>Ações Utilizadas</h2>
          </div>
        </div>
      </div>

      <div class="cardAbout">
        <section class="feature_part single_feature_padding">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 align-self-center"></div>
              <div class="col-sm-6 col-xl-3">
                <div class="single_feature">
                  <div class="single_feature_part">
                    <span class="single_feature_icon">
                      <i class="ti-layers"></i>
                    </span>
                    <h4>Cultura</h4>
                    <p>
                      Nossa agência disponibiliza diversos projetos culturais
                      que visam a melhoria da vida de cada um.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-xl-3">
                <div class="single_feature">
                  <div class="single_feature_part">
                    <span class="single_feature_icon">
                      <i class="ti-new-window"></i>
                    </span>
                    <h4>Qualificações</h4>
                    <p>
                      Por conta das parcerias, podemos oferecer também
                      qualificações para aqueles que estão dando esse primeiro
                      passo.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-xl-3">
                <div class="single_feature">
                  <div class="single_feature_part single_feature_part_2">
                    <span class="single_service_icon style_icon">
                      <i class="ti-light-bulb"></i>
                    </span>
                    <h4>Empregabilidade</h4>
                    <p>
                      Após a participação e aprendizado, é verificado quais dos
                      participantes já estão aptos para ingressar no mercado de
                      trabalho.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-xl-3">
                <div class="single_feature">
                  <div class="single_feature_part single_feature_part_2">
                    <span class="single_service_icon style_icon">
                      <i class="ti-light-bulb"></i>
                    </span>
                    <h4>Tecnologia</h4>
                    <p>
                      A tecnologia é uma de nossas maiores aliadas no combate ao
                      analfabetismo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section class="learning_part">
        <div class="container">
          <div class="row align-items-sm-center align-items-lg-stretch">
            <div class="col-md-7 col-lg-7">
              <div class="learning_img">
                <img src={imgDoacao} alt="Doações" />
              </div>
            </div>
            <div class="col-md-5 col-lg-5">
              <div class="learning_member_text">
                <h5>Seja um parceiro</h5>
                <h2>Apoiar nossa agência na mudança de vidas</h2>
                <p>
                  Só podemos melhorar o futuro de todos, com a ajuda de todos!
                  Estamos em uma sociedade que luta pela sobrivência e as
                  pessoas que precisam de ajuda, acabam sofrendo com esse tipo
                  de pensamento.
                </p>
                <ul>
                  <li>
                    <span class="ti-pencil-alt"></span>Ajude por meio de doações
                  </li>
                  <li>
                    <span class="ti-ruler-pencil"></span>Enviando cestas básicas
                    e materiais escolares
                  </li>
                  <li>
                    <span class="ti-ruler-pencil"></span>Gravando vídeos aulas e
                    cursos para a plataforma
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
