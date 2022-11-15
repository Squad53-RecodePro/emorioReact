import { Box, Container } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import api from "../../services/api";

import { toast } from "react-toastify";

import Cookies from "js-cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      username,
      password,
    };

    if (username === "admin@admin.com") {
      api
        .post("/api/login", data)
        .then((response) => {
          Cookies.set("token", response.data.token);
          Cookies.set("user", "admin");
          toast.success("Aproveite todo os conteúdos da Emoriô!");

          navigate("/");
        })
        .catch((error) => {
          console.log("Erro ao realizar o login", error);
          toast.error("Ocorreu um erro, tente novamente mais tarde!");
        });
    } else {
      api
        .post("/api/login", data)
        .then((response) => {
          console.log(response);
          Cookies.set("token", response.data.token);
          toast.success("Aproveite todo os conteúdos da Emoriô!");

          navigate("/");
        })
        .catch((error) => {
          console.log("Erro ao realizar o login", error);
          toast.error("Ocorreu um erro, tente novamente mais tarde!");
        });
    }
  };

  return (
    <Container maxWidth="sm">
      <Box my={2}>
        <div className="py-5 text-center">
          <NavLink to="/">
            <img
              className="d-block mx-auto mb-4"
              src="/assets/img/icone_emorio.ico"
              alt=""
              width="72"
              height="57"
            />
          </NavLink>
          <h2>Login Emoriô</h2>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group ">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Digite seu email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Senha</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
        </form>
      </Box>
      <NavLink to="/registrar">Não tem uma conta?</NavLink>
    </Container>
  );
};

export default Login;
