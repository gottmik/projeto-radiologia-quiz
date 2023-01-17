import { useState } from "react";
import { Panoramica } from "../../data-panoramica";
import Anatomy from "./anatomy";
import "./anatomypage.css";
import { TextField } from "@mui/material";

const AnatomyPage = () => {
  const datas = Panoramica ?? []; // PUXANDO O ARRAY DO DATABASE
  // const [busca, setBusca] = useState('');

  const [dados, setDados] = useState(datas);

  const filterOnChange = (event) => {
    let updatedList = [...datas];
    let busca = event.target.value;
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().indexOf(busca.toLowerCase()) !== -1;
    });
    setDados(updatedList);
  };

  return (
    <>
      <div className="S2">
        <TextField onChange={filterOnChange} className="textfield" id="filled-basic" label="Pesquise aqui" variant="filled" size="large"/>
      </div>

      <div className="anatomypage">
        {dados.map((dado) => (
          <Anatomy dado={dado} />
        ))}
      </div>
    </>
  );
};

export default AnatomyPage;
