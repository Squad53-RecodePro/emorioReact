import { useState } from "react";

import api from "../../services/api";

const Pesquisar = () => {
  const [artigo, setArtigo] = useState("");
  const [numero, setNumero] = useState("");

  const pesquisar = () => {
    api
      .get(`/api/artigos/${numero}`)
      .then((response) => {
        setArtigo(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div class="input-group mb-3">
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
          onClick={pesquisar}
        >
          Pesquisar
        </button>
        <input
          type="number"
          class="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
      </div>
      <div>
        {artigo && (
          <article class="blog_item">
            <div class="blog_item_img">
              <img
                class="card-img rounded-0"
                src={artigo.url_imagem}
                alt={artigo.titulo}
              />
            </div>
            <div class="blog_details">
              <a class="d-inline-block" href={`/artigo${artigo.ID}`}>
                <h2>{artigo.titulo}</h2>
              </a>

              <p>{artigo.descricao}</p>

              <ul class="blog-info-link">
                <li>
                  <i class="far fa-user">{artigo.tag}</i>
                </li>
              </ul>
            </div>
          </article>
        )}
      </div>
    </div>
  );
};

export default Pesquisar;
