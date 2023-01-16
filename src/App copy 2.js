import React, { useState, useRef } from "react";
import { Anatomias } from "./data-panoramica.js";
import "./App.css";
import Anatomy from "./Components/anatomy.jsx";
import Modelidades from "./Components/modelidades.jsx";

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
    titleRef.current.scrollIntoView();
  }



  return (
    <div className="dBody">
      <div className="FirstSection">
        <div className="PaddingP">
          <div>
            <h6>
              Desenvolvido por Marcela Fróes<br></br>
              Dentista Implantodontista, Radiologista e<br></br>
              Aspirante a Programadora.
            </h6>
          </div>
          <div>
            <h1>
              Olá Dentistas!<br></br>
              Esse e o seu espaço para estudar Anatomia!<br></br>
              Se aventure por esse WEB APP gratuito.<br></br>
            </h1>
          </div>

          <div className="btnStart">
            <button onClick={scrollTo}>COMEÇAR</button>
          </div>
        </div>
      </div>

      <div ref={titleRef}>
      <Modelidades/>
      </div>
      

      <div  id="secondSec" className="SecondSection">
        <div className="Searching">
          <div className="icone-lupa">
            <span class="material-symbols-outlined">search</span>
          </div>
          <div className="icone-input">
            <input type="text" onChange={filterOnChange}></input>
          </div>
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
