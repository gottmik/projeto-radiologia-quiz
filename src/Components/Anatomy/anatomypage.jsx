import { useState } from "react";
import { Panoramica } from "../../data-panoramica";
import Anatomy from "./anatomy";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./anatomypage.css"

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
      <div className="panoramicapesquisar">
        <TextField onChange={filterOnChange} className="textfield" id="filled-basic" label="Pesquise aqui" variant="filled" size="large"/>
      </div>

      <div className="panoramica">
        {dados.map((dado) => (
          <Anatomy dado={dado} />
        ))}
      </div>
      <div className="PanoramicaVoltar">
        <Link to="/escolha">
          <button className="voltarbutton" ><KeyboardBackspaceIcon fontSize="large"/></button>
        
        </Link>
      </div>
    </>
  );
};

export default AnatomyPage;
