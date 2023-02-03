import React from "react";
import "./modelidades.css";
import lesoes from "../Img/lesoes.png";
import lesoes2 from "../Img/lesoes2.png";
import lesoes3 from "../Img/lesoes3.png";
import l3d from "../Img/3d.png";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function Modelidades() {
  return (
    <>
      <div className="Principal">
        <div className="d1">
          <Link className="dd d1filho">
            <div className="">Lesões e Alterações Anatômicas</div>
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
            <div className="">Anatomia em Tomografia</div>
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
