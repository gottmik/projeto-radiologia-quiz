import React from "react";
import { Link } from "react-router-dom";

import "./home.css";



function Home() {
  // const datas = Anatomias ?? []; // PUXANDO O ARRAY DO DATABASE
  // // const [busca, setBusca] = useState('');

  // const [dados, setDados] = useState(datas);

  

  // const getNameFromDatas = datas.map(valor => valor.name) ISSO PEGA O VALOR DA CHAVE NOME E RETORNA EM ARRAY

  // const filterOnChange = (event) => {
  //   let updatedList = [...datas];
  //   let busca = event.target.value;
  //   updatedList = updatedList.filter((item) => {
  //     return item.name.toLowerCase().indexOf(busca.toLowerCase()) !== -1;
  //   });
  //   setDados(updatedList);
  // };

  // const titleRef = useRef();

  // function scrollTo() {
  //   titleRef.current.scrollIntoView();
  // }



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
            <Link to="/escolha">
            <button>COMEÇAR</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
