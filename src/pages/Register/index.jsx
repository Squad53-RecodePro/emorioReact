import { Stack } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import api from "../../services/api";

import { toast } from "react-toastify";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cargo, setCargo] = useState("");
  const [biografia, setBiografia] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmitColaborador = (e) => {
    e.preventDefault();

    const data = {
      username,
      fullName: fullname,
      password,
      confirmPassword,
      cargo,
      biografia,
    };

    api
      .post("/api/register", data)
      .then((response) => {
        console.log(response);

        toast.success("Cadastrado efetuado com sucesso");
        navigate("/login");
      })
      .catch((error) => {
        toast.error("Ocorreu um erro, tente novamente mais tarde!");
        console.error("Erro ao cadastrar usuário", error);
      });
  };

  return (
    <div className="container my-5">
      <main>
        <div className="py-5 text-center">
          <NavLink to="/">
            <img
              className="d-block mx-auto mb-4"
              src="/assets/img/logoPrincipal.png"
              alt=""
              width="72"
              height="57"
            />
          </NavLink>
          <h2>Faça o seu cadastro na Emoriô Digital</h2>
          <p className="lead">
            Além de poder criar novos conteúdos e realizar comentários em nossos
            artigos, será possível participar de algum projeto ou fazer parte da
            nossa equipe.
          </p>
        </div>

        <div className="row g-5">
          <div className="col-md-7 col-lg-12">
            <h4 className="mb-3">Dados Pessoais</h4>
            <form
              className="needs-validation"
              onSubmit={handleSubmitColaborador}
            >
              <div className="row g-3">
                <div className="col-sm-12">
                  <label htmlFor="firstName" className="form-label">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">
                    Necessário preencher o campo.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="email@example.com"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Preencha o campo corretamente.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="password" className="form-label">
                    Senha
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="password"
                  />
                  <div className="invalid-feedback">Senha obrigatória.</div>
                </div>

                <div className="col-12">
                  <label htmlFor="password" className="form-label">
                    Confirme a Senha
                  </label>
                  <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="password"
                  />
                  <div className="invalid-feedback">Senha obrigatória.</div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Cargo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    required
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                  />
                  <div className="invalid-feedback">Digite o seu cargo</div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Biografia
                  </label>
                  <textarea
                    type="text"
                    className="form-control area"
                    id="address"
                    required
                    value={biografia}
                    onChange={(e) => setBiografia(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Fale um pouco sobre você
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <Stack
                justifyContent={"flex-end"}
                direction={"row"}
                spacing={5}
                width="100%"
              >
                <NavLink className="w-25 btn btn-danger btn-lg" to="/">
                  Cancelar
                </NavLink>

                <button className="w-25 btn btn-primary btn-lg" type="submit">
                  Registrar-se
                </button>
              </Stack>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
