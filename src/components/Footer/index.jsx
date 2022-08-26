import React from "react";

import logoPrincipal from "../../assets/logo/logoPrincipal.png";
import logoRecode from "../../assets/logo/recode.jpeg";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="teste">
          <div className="col-sm-6 col-md-4 col-xl-4">
            <div className="single-footer-widget footer_1">
              <a href="index.html">
                <img src={logoPrincipal} alt="logoEmoriô" />
              </a>
              <p>
                Vamos dar visibilidade e ecoar projetos socioculturais que atuem
                no campo, em zonas rurais, áreas afastadas do centro urbano e
                tecnológico. Criar pontes para facilitar o acesso à educação, à
                dignidade humana, o empoderamento digital.
              </p>
              <p>Somos inovadores, diversos e plurais. Somos a EmoriÔ.</p>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-md-4">
            <div className="single-footer-widget footer_2">
              <h4>Contato</h4>
              <div className="contact_info">
                <p>
                  <p className="link">
                    <span> Email: </span>agencia@emoriodigital.com.br
                    squad53.recodepro@gmail.com
                  </p>
                  <p>
                    <span> Instagram:</span>
                    <a
                      href="https://www.instagram.com/emorio.digital/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @EmoriÔ.Digital
                    </a>
                  </p>
                  <p>
                    <span> LinkedIn: </span>
                    <a
                      href="https://www.linkedin.com/company/emori%C3%B4-digital/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      EmoriÔ Digital
                    </a>
                  </p>
                  <p>
                    <span> Youtube: </span>
                    <a
                      href="https://www.youtube.com/channel/UCuyc7RRXDP7AGq38V5vItGQ"
                      target="_blank"
                      rel="noreferrer"
                    >
                      EmoriÔ Digital
                    </a>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright_part_text text-center">
              <div className="row">
                <div className="col-lg-12">
                  <p className="footer-text m-0">
                    Este Projeto foi Desenvolvido pelo
                    <a
                      href="https://emoriodigital.com.br/team.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SQUAD 053
                    </a>
                    <a
                      href="https://recodepro.org.br/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="logoSmall"
                        src={logoRecode}
                        alt="logo-recode"
                      />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
