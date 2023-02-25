import { useState } from "react";
import { PeriapicalDados } from "../../data-panoramica";
import Periapical from "./periapical";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./modal.css";

const PeriapicalPage = () => {
  const datas = PeriapicalDados ?? []; // PUXANDO O ARRAY DO DATABASE
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
    <div className="dBody" >
      <div className="Container">
        <div className="panoramicapesquisar">
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
            <Periapical dado={dado} key={dado.id}/>
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
};

export default PeriapicalPage;
