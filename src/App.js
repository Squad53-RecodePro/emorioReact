import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";
import Equipe from "./pages/Equipe";
import Sobre from "./pages/Sobre";
<<<<<<< HEAD
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

import Artigo01 from "./pages/Artigos/Artigo01";
import Artigo02 from "./pages/Artigos/Artigo02";
import Artigo03 from "./pages/Artigos/Artigo03";
import Artigo04 from "./pages/Artigos/Artigo04";
import Artigo05 from "./pages/Artigos/Artigo05";
import Artigo06 from "./pages/Artigos/Artigo06";
import Artigo07 from "./pages/Artigos/Artigo07";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "./hooks/useAuth";

import { Navigate } from "react-router-dom";
=======
import Artigo001 from "./pages/Artigos/Artigo001";
import Artigo002 from "./pages/Artigos/Artigo002";
import Artigo003 from "./pages/Artigos/Artigo003";
>>>>>>> 966e4a5a9c02e2a93116bcf7071cb8c3ab40017e

const App = () => {
  const { auth, loading, user } = useAuth();

  return (
    <BrowserRouter>
      <ToastContainer autoClose={5000} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/blog" element={<Blog />} />
<<<<<<< HEAD
        <Route path="/artigo1" element={<Artigo07 />} />
        <Route path="/artigo2" element={<Artigo06 />} />
        <Route path="/artigo3" element={<Artigo01 />} />
        <Route path="/artigo4" element={<Artigo03 />} />
        <Route path="/artigo5" element={<Artigo02 />} />
        <Route path="/artigo6" element={<Artigo05 />} />
        <Route path="/artigo7" element={<Artigo04 />} />

=======
        <Route path="/Artigo001" element={< Artigo001 />} />
        <Route path="/Artigo002" element={< Artigo002 />} />
        <Route path="/Artigo003" element={< Artigo003 />} />
>>>>>>> 966e4a5a9c02e2a93116bcf7071cb8c3ab40017e
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
