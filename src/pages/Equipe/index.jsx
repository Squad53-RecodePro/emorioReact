import { Box } from "@mui/material";
import React from "react";

import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

import { equipe } from "../../utils/listaEquipe";
import { parceiros } from "../../utils/listaParceiros";

import UserLayout from "../../layout/User";

const Equipe = () => {
  return (
    <UserLayout>
      <Box>
        <section className="breadcrumb breadcrumb_bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb_iner text-center">
                  <div className="breadcrumb_iner_item">
                    <h2>Equipe</h2>
                    <p>
                      Início<span>/</span>Equipe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial_part section_padding">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-5">
                <div className="section_tittle text-center">
                  <p>Equipe</p>
                  <h2>Nosso Time</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="container-fluid pt-5">
                  <div className="container">
                    <div className="row">
                      {equipe.map((item) => (
                        <div
                          key={item.id}
                          className="col-md-6 col-lg-4 text-center team mb-5"
                        >
                          <div
                            style={{ borderRadius: "100%" }}
                            className="position-relative overflow-hidden mb-4"
                          >
                            <img
                              className="img-fluid w-100"
                              src={item.imagem}
                              alt={item.nome}
                            />
                            <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                              <a
                                hidden={!item.instagram}
                                className="btn btn-outline-light text-center mr-2 px-10"
                                target="_blank"
                                href={item.instagram}
                                rel="noreferrer"
                              >
                                <BsInstagram />
                              </a>
                              <a
                                className="btn btn-outline-light text-center mr-2 px-10"
                                target="_blank"
                                href={item.github}
                                rel="noreferrer"
                              >
                                <BsGithub />
                              </a>
                              <a
                                className="btn btn-outline-light text-center px-10"
                                target="_blank"
                                href={item.linkedin}
                                rel="noreferrer"
                              >
                                <BsLinkedin />
                              </a>
                            </div>
                          </div>
                          <h4>{item.nome}</h4>
                          <i>{item.cargo}</i>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial_part section_padding">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="section_tittle text-center">
                <p>Conheça quem apoia</p>
                <h2>Parcerias</h2>
              </div>
            </div>
          </div>

          <div className="containerCard">
            {parceiros.map((item) => (
              <div key={item.id} className="box">
                <div className="imgBox">
                  <img src={item.imagem} alt={item.nome} />
                </div>
                <div className="content">
                  <h2>{item.nome}</h2>
                  <span>{item.cargo}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Box>
    </UserLayout>
  );
};

export default Equipe;
