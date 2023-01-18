import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import "./App.css";


import Modelidades from "./Components/modelidades.jsx";
import Home from "./Components/home.jsx"
import AnatomyPage from "./Components/Anatomy/anatomypage";
import TomografiaPage from "./Components/Anatomy/tomografiapage";
import AlteracoesPage from "./Components/Anatomy/alteracoespage";

function App() {

 


  return (
  <div>
    
    <Router>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/escolha" element={<Modelidades/>}/>
        <Route path="/panoramica" element={<AnatomyPage/>}/>
        <Route path="/tomografiar" element={<TomografiaPage/>}/>
        <Route path="/alteracoes" element={<AlteracoesPage/>}/>
        
        
    
      </Routes>

    </Router>
    

  </div>
    
  );
}

export default App;
