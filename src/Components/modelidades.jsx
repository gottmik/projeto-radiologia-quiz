import React from "react";
import "./modelidades.css";

import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function Modelidades() {
  return (
    <div className="dBody">
      <div className="PrimeiraSection">
        <div className="Principal">
          <div className="online">
            <div className="btn-pisca"></div>
            <div className="online2">Online</div>
          </div>
          <div className="d1">
            <Link className="dd d1filho" to="/lesoes">
              <div className="">
                <label>Lesões e Alterações</label> Anatômicas
              </div>
            </Link>
          </div>
          <div className="d2">
            <Link className="dd d2filho d2-0filho" to="/panoramica">
              <div className="">
                Anatomia em <label className="labeel">Panorâmica</label>
              </div>
            </Link>
            <Link className="dd d2filho d2-1filho" to="/periapical">
              <div className="">
                Anatomia em <label className="labeel">Periapical</label>
              </div>
            </Link>
          </div>
          <div className="d3">
            <Link className="dd d3filho" to="/tomografia">
              <div className="">
                Anatomia em <label>Tomografia</label>
              </div>
            </Link>
          </div>
          <div className="d4">
            <Link className="dd d4-0filho" to="/legenda">
              <div className="">Legendas</div>
            </Link>
            <Link className=" d4-1filho" to="/">
              <div className="voltarespecial">
                <KeyboardBackspaceIcon fontSize="large" />
              </div>
            </Link>
          </div>
          <div className="d5">
            <Link className="dd d3filho" to="/descricao">
              <div className="">
                Descrição de <label className="labeel">Alterações</label>
              </div>
              <div></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
