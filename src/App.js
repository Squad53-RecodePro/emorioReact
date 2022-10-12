import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Inicio from "./pages/Inicio";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";
import Equipe from "./pages/Equipe";
import Sobre from "./pages/Sobre";
import Artigo001 from "./pages/Artigos/Artigo001";
import Artigo002 from "./pages/Artigos/Artigo002";
import Artigo003 from "./pages/Artigos/Artigo003";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Artigo001" element={< Artigo001 />} />
        <Route path="/Artigo002" element={< Artigo002 />} />
        <Route path="/Artigo003" element={< Artigo003 />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
