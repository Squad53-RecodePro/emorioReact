import React from "react";

import UserLayout from "../../layout/User";

import { listaBlog } from "../../utils/listaBlog";

const Blog = () => {
  return (
    <UserLayout>
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

                <aside class="single_sidebar_widget tag_cloud_widget">
                  <h4 class="widget_title">Tags</h4>
                  <ul class="list">
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
                    <li>
                      <a href="#">Música</a>
                    </li>
                    <li>
                      <a href="#">Sustentabilidade</a>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

export default Blog;
