import React from "react";
import { Link } from "react-router-dom";

import logoPrincipal from "../../assets/logo/logoPrincipal.png";

const Header = () => {
  const navbarLinks = [
    {
      id: 1,
      nome: "Início",
      link: "/",
    },
    {
      id: 2,
      nome: "Blog",
      link: "/blog",
    },
    {
      id: 3,
      nome: "Sobre",
      link: "/sobre",
    },
    {
      id: 4,
      nome: "Equipe",
      link: "/equipe",
    },
    {
      id: 5,
      nome: "Contato",
      link: "/contato",
    },
  ];
  return (
    <header className="main_menu home_menu">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand" to="/">
                <img id="logoPrincipal" src={logoPrincipal} alt="Logo Emoriô" />
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse main-menu-item justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav align-items-center">
                  {navbarLinks.map((item) => (
                    <li key={item.id} className="nav-item active">
                      <Link className="nav-link" to={item.link}>
                        {item.nome}
                      </Link>
                    </li>
                  ))}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Projetos
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a
                        className="dropdown-item"
                        href="projetos\flordecactos"
                        target="_blank"
                      >
                        Flor de Cactos
                      </a>
                      <a
                        className="dropdown-item"
                        href="projetos\curaamazonica"
                        target="_blank"
                      >
                        Cura Amazônica
                      </a>
                      <p className="dropdown-item">
                        Espaço Cultural Marielle Franco
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
