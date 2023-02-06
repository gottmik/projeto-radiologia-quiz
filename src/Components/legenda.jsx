import React, { useState } from "react";
import "../Components/legenda.css";
import { DataLegenda } from "../data-legendas";
import Leg from "../Components/leg";
import { TextField } from "@mui/material";

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
    <div>
      <div className="legendapesquisar">
        <TextField
          onChange={filterOnChange}
          className="textfield"
          id="filled-basic"
          label="Pesquise aqui"
          variant="filled"
          size="large"
        />
        <div className="panoramica">
          {dados.map((dado) => (
            <Leg dado={dado} />
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}
