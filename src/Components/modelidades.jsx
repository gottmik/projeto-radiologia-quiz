import React from "react";
import "./modelidades.css";
import Mandibula from "../Img/mandibula.png"


import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function Modelidades() {
  return (
    <>
      <div className="Principal">
        <div className="d1">
          <Link className="dd d1filho">
            <div className="">Lesões e Alterações<br></br> Anatômicas</div>
          </Link>
        </div>
        <div className="d2">
          <Link className="dd d2filho d2-0filho" to="/panoramica">
            <div className="">Anatomia em Panorâmica</div>
          </Link>
          <Link className="dd d2filho d2-1filho" to="/periapical">
          <div className="">Anatomia em Periapical</div>
          </Link>
        </div>
        <div className="d3">
          <Link className="dd d3filho" to="/">
            <div className="">Anatomia em <br></br> Tomografia</div>
            <div><img className="mandibulaimg" src={Mandibula} alt="" />
            </div>
          </Link>
        </div>
        <div className="d4">
          <Link className="dd d4-0filho" to="/">
            <div className="">Legendas de Laudos</div>
          </Link>
          <Link className="dd d4-1filho" to="/">
            <div className="">
              <KeyboardBackspaceIcon fontSize="large" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
