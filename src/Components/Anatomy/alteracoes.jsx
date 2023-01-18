import "./tomografia.css";
import React from "react";
import { useState } from "react";


function Alteracoes(props) {

  const [isOpen, setIsOpen] = useState(false);
  // dados.map(dado => {
  //   setIsOpen({...isOpen, [dado.id]: false})
  // })

  const onClickHeader = () => {
    setIsOpen(!isOpen);
  };


  

  return (
    <>
    
    <div className="anatomyComponent" key={props.dado.id}>
      <div className="anatomyHeader" onClick={onClickHeader}>
        <h2 className="anatomyName">{props.dado.name}</h2>
        <div  className="menu-button-container">
        </div>
      </div>
      <div
        id={props.dado.id}
        className={`${isOpen ? "anatomyContain-active" : "anatomyContain" }`}
      >
        <div className="anatomyImage">
          <img src={props.dado.img} alt="Alguma imagem" />
        </div>
        <div className="infos">
          <div className="infos-1">
            <h5>{props.dado.texto}</h5>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Alteracoes;
