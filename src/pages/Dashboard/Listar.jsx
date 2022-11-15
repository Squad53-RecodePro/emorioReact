import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

const Listar = () => {
  const [artigos, setArtigos] = useState([]);

  const excluirPost = (id) => {
    api.delete(`/api/artigos/${id}`).then((response) => {
      console.log(response);
      toast.success("Artigo excluido com sucesso");
    });
  };

  useEffect(() => {
    api
      .get("/api/artigos")
      .then((response) => {
        setArtigos(response.data);
      })
      .catch((error) => console.log(error));
  }, [artigos]);

  return (
    <div>
      {artigos.map((item) => (
        <article key={item.id} class="blog_item">
          <div class="blog_item_img">
            <img
              class="card-img rounded-0"
              src={item.url_imagem}
              alt={item.titulo}
            />
          </div>
          <div class="blog_details">
            <a class="d-inline-block" href={`/artigo${item.ID}`}>
              <h2>{item.titulo}</h2>
            </a>

            <p>{item.descricao}</p>

            <ul class="blog-info-link">
              <li>
                <i class="far fa-user">{item.tag}</i>
              </li>
              <button
                className="alert-danger"
                onClick={() => excluirPost(item.id)}
              >
                Excluir POST
              </button>
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Listar;
