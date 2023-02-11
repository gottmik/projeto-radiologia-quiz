import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Modelidades from "./Components/modelidades.jsx";
import Home from "./Components/home.jsx";
import PanoramicaPage from "./Components/Anatomy/panoramicapage";
import TomografiaPage from "./Components/Anatomy/tomografiapage";

import Legenda from "./Components/legenda";
import Descricao from "./Components/descricao";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/escolha" element={<Modelidades />} />
          <Route path="/panoramica" element={<PanoramicaPage />} />
          <Route path="/tomografia" element={<TomografiaPage />} />
          
          <Route path="/legenda" element={<Legenda />} />
          <Route path="/descricao" element={<Descricao />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
