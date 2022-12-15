import "./anatomy.css";
import React from "react";
import { useState } from "react";

function Anatomy(props) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHeader = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="anatomyComponent">
      <div className="anatomyHeader">
        <h2 className="anatomyName">{props.tittle}</h2>
        <div onClick={onClickHeader} className="menu-button-container">
          <div className="triangulo-para-baixo"></div>
        </div>
      </div>
      <div
        className={`anatomyContain ${isOpen ? "anatomyContain-active" : ""}`}
      >
        <div className="anatomyImage">
          <img src={props.image} alt="Alguma imagem" />
        </div>
        <div className="infos">
          <div className="infos-1">
            <h5>{props.text}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anatomy;
