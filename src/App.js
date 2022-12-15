import React, { useState, useRef } from "react";
import { Anatomias } from "../src/data.js";
import "./App.css";
import Anatomy from "../src/Components/anatomy.jsx";

function App() {
  const datas = Anatomias ?? []; // PUXANDO O ARRAY DO DATABASE
  // const [busca, setBusca] = useState('');

  const [dados, setDados] = useState(datas);

  // const getNameFromDatas = datas.map(valor => valor.name) ISSO PEGA O VALOR DA CHAVE NOME E RETORNA EM ARRAY

  const filterOnChange = (event) => {
    let updatedList = [...datas];
    let busca = event.target.value;
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().indexOf(busca.toLowerCase()) !== -1;
    });
    setDados(updatedList);
  };

  const titleRef = useRef();

  function scrollTo() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="dBody">
      <div className="FirstSection">
        <div className="PaddingP">
          <div>
            <h6>
              Desenvolvido por Marcela Froes<br></br>
              Dentista Implantodontista, Radiologista e<br></br>
              Aspirante a programadora.
              
            </h6>
          </div>
          <div>
            <h1>
              Ola Dentistas!<br></br>
              Esse e o seu espaco para estudar Anatomia!<br></br>
              Se aventure por esse WEB APP gratuito.<br></br>
            </h1>
          </div>

          <div className="btnStart">
            <button onClick={scrollTo}>COMECAR</button>
          </div>
        </div>
      </div>

      <div ref={titleRef} id="secondSec" className="SecondSection">
        <div className="Searching">
          <span class="material-symbols-outlined">search</span>

          <input type="text" onChange={filterOnChange}></input>
        </div>
        <div>
          {dados.map((datas) => (
            <Anatomy
              key={datas.id}
              tittle={datas.name}
              image={datas.img}
              text={datas.texto}
              corte={datas.corte}
              info={datas.info}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
