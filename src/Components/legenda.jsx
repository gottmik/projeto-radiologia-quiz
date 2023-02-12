import React, { useState } from "react";
import "../Components/legenda.css";
import { DataLegenda } from "../data-legendas";
import Leg from "../Components/leg";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function Legenda() {
  const datas = DataLegenda ?? []; // PUXANDO O ARRAY DO DATABASE

  const [dados, setDados] = useState(datas);

  const filterOnChange = (event) => {
    let updatedList = [...datas];
    let busca = event.target.value;
    updatedList = updatedList.filter((item) => {
      return item.frase.toLowerCase().indexOf(busca.toLowerCase()) !== -1;
    });
    setDados(updatedList);
  };

  return (
    <div className="dBody">
      <div className="PrimeiraSection">
        <div className="legendapesquisar">
          <TextField
            onChange={filterOnChange}
            className="textfield"
            id="filled-basic"
            label="Pesquise aqui"
            variant="filled"
            size="large"
          />
        </div>
        <div className="panoramica">
          {dados.map((dado) => (
            <Leg dado={dado} />
          ))}
        </div>
        <div className="PanoramicaVoltar">
          <Link to="/escolha">
            <button className="voltarbutton">
              <KeyboardBackspaceIcon fontSize="large" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
