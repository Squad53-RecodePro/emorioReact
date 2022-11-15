import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";
import Equipe from "./pages/Equipe";
import Sobre from "./pages/Sobre";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

import Artigo01 from "./pages/Artigos/Artigo1";
import Artigo02 from "./pages/Artigos/Artigo2";
import Artigo03 from "./pages/Artigos/Artigo3";
import Artigo04 from "./pages/Artigos/Artigo4";
import Artigo05 from "./pages/Artigos/Artigo5";
import Artigo06 from "./pages/Artigos/Artigo6";
import Artigo07 from "./pages/Artigos/Artigo7";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "./hooks/useAuth";

import { Navigate } from "react-router-dom";

const App = () => {
  const { auth, loading, user } = useAuth();

  return (
    <BrowserRouter>
      <ToastContainer autoClose={5000} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/artigo1" element={<Artigo01 />} />
        <Route path="/artigo2" element={<Artigo02 />} />
        <Route path="/artigo3" element={<Artigo03 />} />
        <Route path="/artigo4" element={<Artigo04 />} />
        <Route path="/artigo5" element={<Artigo05 />} />
        <Route path="/artigo6" element={<Artigo06 />} />
        <Route path="/artigo7" element={<Artigo07 />} />

        <Route path="/contato" element={<Contato />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route
          path="/dashboard"
          element={user === "admin" ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!auth ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/registrar"
          element={!auth ? <Register /> : <Navigate to="/" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
