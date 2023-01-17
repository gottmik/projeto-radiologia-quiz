import React from "react";
import "./modelidades.css";
import lesoes from "../Img/lesoes.png";
import lesoes2 from "../Img/lesoes2.png";
import lesoes3 from "../Img/lesoes3.png";
import l3d from "../Img/3d.png";
import { Link } from "react-router-dom";

export default function Modelidades() {
  return (
    <>
      <div className="thirdSectionHeader">
        <h3>Comece o estudo por onde preferir</h3>
      </div>
      <div className="thirdSection">
        <Link className="liink">
          <div className="quadrado">
            <div className="quadrado-img-div">
              <img src={lesoes} alt="" />
              <img src={lesoes2} alt="" />
              <img src={lesoes3} alt="" />
            </div>
            <h1>Lesões e Alterações Anatômicas.</h1>
            <h5 className="testess2">Clique aqui</h5>
          </div>
        </Link>
        <div className="quadradoSec">
          <Link className="liink" to="/panoramica">
            <div className="quadradinho quadradinho1">
              <h3>Anatomia em Panorâmica</h3>
              <h5 className="testess">Clique aqui</h5>
            </div>
          </Link>
          <Link className="liink">
            <div className="quadradinho quadradinho2">
              <h3>Anatomia em Periapical</h3>
              <h5 className="testess">Clique aqui</h5>
            </div>
          </Link>
        </div>
        <Link className="liink">
          <div className="retangulo">
            <h2>Anatomia em TOMOGRAFIA</h2>
            <img src={l3d} alt="" />
            <h5 className="testess2">Click aqui</h5>
          </div>
        </Link>
      </div>
    </>
  );
}
