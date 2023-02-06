import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';

import "./home.css";

function Home() {
  return (
    <div className="dBody">
      <div className="FirstSection">
        <div className="PaddingP">
          <div className="F1">
            <h6>
              Desenvolvido por Marcela Fróes<br></br>
              Dentista Implantodontista, Radiologista e<br></br>
              Aspirante a Programadora.
            </h6>
            <InstagramIcon fontSize="large"/>
          </div>
          <div className="F2">
            <h1>¡RadioHelp!</h1>
            <h6>Esse é o primeiro Web App gratuito voltado para Dentistas e Radiologistas. Aproveitem! </h6>
          </div>

          <div className="F3">
            <Link to="/escolha">
              <button className="centerbutton">COMEÇAR</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
