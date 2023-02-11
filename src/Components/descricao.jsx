import React, { useState } from "react";
import "./descricao.css"
import CopyToClipBoard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function Descricao() {
  let radiolucida = "radiolucida";
  let radiopaca = "radiopaca";
  let bemdelimitada = "bem delimitada";
  let maldelimitada = "mal delimitada";
  let regular = "de formato regular";
  let irregular = "de formato irregular";
  let corticalizada = "com borda corticalizada";
  let semcortical = "sem borda corticalizada";
  let hipodenso = "hipodensa";
  let hiperdenso = "hiperdensa";
  let unilocular = "unilocular";
  let multilocular = "multilocular";

  let [valor, setValor] = useState("");

  function HandleOnChange(e) {
    setValor((valor += e.target.value + ", "));
    console.log(setValor);
  }

  function Zerar() {
    setValor("");
  }

  function Formatar(frase) {
    let result = frase.slice(0, -2) + ".";
    let resultUppercase = result.charAt(0).toUpperCase() + result.slice(1);
    return resultUppercase;
  }

  return (
    <>
      <div className="Container">
        <div className="paragrafo">
          <p value={valor}>{valor}</p>
        </div>
        <div className="Container-botoes">
          <div className="Botoes-pai">
            <div className="buttonn btn1">
              <button
                className="buttonnn "
                onClick={HandleOnChange}
                value={radiolucida}
              >
                Radiolucida
              </button>
            </div>

            <div className="buttonn2 btn2">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={radiopaca}
              >
                Radiopaca
              </button>
            </div>
          </div>

          <div className="Botoes-pai">
            <div className="buttonn btn1">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={unilocular}
              >
                Unilocular
              </button>
            </div>
            <div className="buttonn btn2">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={multilocular}
              >
                Multilocular
              </button>
            </div>
          </div>

          <div className="Botoes-pai">
            <div className="buttonn btn1">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={bemdelimitada}
              >
                Bem delimitada
              </button>
            </div>
            <div className="buttonn btn2">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={maldelimitada}
              >
                Mal delimitada
              </button>
            </div>
          </div>

          <div className="Botoes-pai">
            <div className="buttonn btn1">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={regular}
              >
                Regular
              </button>
            </div>
            <div className="buttonn btn2">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={irregular}
              >
                Irregular
              </button>
            </div>
          </div>

          <div className="Botoes-pai">
            <div className="buttonn btn1">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={corticalizada}
              >
                Com borda corticalizada
              </button>
            </div>
            <div className="buttonn btn2">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={semcortical}
              >
                Sem borda corticalizada
              </button>
            </div>
          </div>

          <div className="Botoes-pai">
            <div className="buttonn btn1">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={hipodenso}
              >
                Hipodenso
              </button>
            </div>
            <div className="buttonn btn2">
              <button
                className="buttonnn"
                onClick={HandleOnChange}
                value={hiperdenso}
              >
                Hiperdenso
              </button>
            </div>
          </div>
          <div className="Botoex">
            <div className="botoess">
              <button className="copiar" onClick={Zerar}>
                ZERAR
              </button>
            </div>
            <div className="botoess">
              <CopyToClipBoard text={Formatar(valor)}>
                <button className="copiar">COPIAR</button>
              </CopyToClipBoard>
            </div>
          </div>
        </div>
      </div>
      <div className="PanoramicaVoltar">
        <Link to="/escolha">
          <button className="voltarbutton" ><KeyboardBackspaceIcon fontSize="large"/></button>
        
        </Link>
      </div>
    </>
  );
}
