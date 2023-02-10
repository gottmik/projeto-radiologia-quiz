import React, { useState } from "react";
import "./descricao.css";
import CopyToClipBoard from "react-copy-to-clipboard";

export default function Descricao() {
  let radiolucida = "radiolucida, ";
  let radiopaca = "radiopaca, ";
  let bemdelimitada = "bem delimitada, ";
  let maldelimitada = "mal delimitada, ";
  let regular = "de formato regular, ";
  let irregular = "de formato irregular, ";
  let corticalizada = "com borda corticalizada, ";
  let semcortical = "sem borda corticalizada, ";
  let hipodenso = "hipodensa, ";
  let hiperdenso = "hiperdensa, ";
  let unilocular = "unilocular, ";
  let multilocular = "multilocular, ";

  let [valor, setValor] = useState("");

  function HandleOnChange(e) {
    setValor((valor += e.target.value));
    console.log(setValor);
  }

  function Zerar() {
    setValor((valor = " "));
  }

  function Formatar(frase){
    return frase.charAt(0).toUpperCase().slice(1);
  }

  return (
    <>
      <div className="Container">
        <div className="paragrafo">
          <p value={valor}>{valor}</p>
        </div>
        <div className="d-lesoes">
          <div className="d-lesoes-filho">
            <button
              className="buttonn"
              onClick={HandleOnChange}
              value={radiolucida}
            >
              {radiolucida}
            </button>

            <button
              className="buttonn"
              onClick={HandleOnChange}
              value={radiopaca}
            >
              {radiopaca}
            </button>
          </div>
        </div>
        <div className="d-lesoes">
          <div className="d-lesoes-filho">
            <button
              className="buttonn"
              onClick={HandleOnChange}
              value={unilocular}
            >
              {unilocular}
            </button>
            <button
              className="buttonn"
              onClick={HandleOnChange}
              value={multilocular}
            >
              {multilocular}
            </button>
          </div>
        </div>
        <div className="d-lesoes">
          <div className="d-lesoes-filho">
            <button
              className="buttonn"
              onClick={HandleOnChange}
              value={bemdelimitada}
            >
              {bemdelimitada}
            </button>
            <button
              className="buttonn"
              onClick={HandleOnChange}
              value={maldelimitada}
            >
              {maldelimitada}
            </button>
          </div>
        </div>
        <div className="d-lesoes">
          <div className="d-lesoes-filho">
            <button
              className="buttonn"
              onClick={HandleOnChange}
              value={regular}
            >
              {regular}
            </button>
            <button
              className="buttonn"
              onClick={HandleOnChange}
              value={irregular}
            >
              {irregular}
            </button>
          </div>
        </div>
        <div className="d-lesoes">
          <div className="d-lesoes-filho">
            <button
              className="buttonn"
              onClick={HandleOnChange}
              value={corticalizada}
            >
              {corticalizada}
            </button>
            <button
              className="buttonn"
              onClick={HandleOnChange}
              value={semcortical}
            >
              {semcortical}
            </button>
          </div>
        </div>
        <div className="d-lesoes">
          <div className="d-lesoes-filho">
            <button
              className="buttonn"
              onClick={HandleOnChange}
              value={hipodenso}
            >
              {hipodenso}
            </button>
            <button
              className="buttonn"
              onClick={HandleOnChange}
              value={hiperdenso}
            >
              {hiperdenso}
            </button>
          </div>
        </div>
        <div className="botoess">
          <button className="copiar" onClick={Zerar}>
            ZERAR
          </button>
          <CopyToClipBoard text={Formatar(valor)}>
            <button className="copiar">COPIAR</button>
          </CopyToClipBoard>
        </div>
      </div>
    </>
  );
}
