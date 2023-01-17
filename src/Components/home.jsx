import React from "react";
import { Link } from "react-router-dom";


import "./home.css";

function Home() {
  return (
    <div className="dBody">
      <div className="FirstSection">
        <div className="PaddingP">
          <div>
            <h6>
              Desenvolvido por Marcela Fróes<br></br>
              Dentista Implantodontista, Radiologista e<br></br>
              Aspirante a Programadora.
            </h6>
          </div>
          <div>
            <h1>
              Olá Dentistas!<br></br>
              Esse e o seu espaço para estudar Anatomia!<br></br>
              Se aventure por esse WEB APP gratuito.<br></br>
            </h1>
          </div>

          <div className="center">
            <Link to="/escolha">
              <button className="centerbutton">Começar!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
