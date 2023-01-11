import React from 'react'
import "./modelidades.css";
import lesoes from "../Img/lesoes.png";
import lesoes2 from "../Img/lesoes2.png"
import lesoes3 from "../Img/lesoes3.png"
import l3d from "../Img/3d.png"

export default function Modelidades() {
    
  return (

    
    <div  className='thirdSection'>
        <div className='thirdSectionHeader'>
            <h1>Escolha o seu estudo</h1>
        </div>
        <div className='quadrado'>
            <div className='quadrado-img-div'>
                <img src={lesoes} alt="" />
                <img src={lesoes2} alt="" />
                <img src={lesoes3} alt="" />
                
            </div>
            <h1>Lesões e Alterações Anatômicas.</h1>
        </div>
        <div className='quadradoSec'>
            <div className='quadradinho quadradinho1'>
               <h3>Anatomia em Panorâmica</h3> 
               
            </div>
            <div className='quadradinho quadradinho2'>
                <h3>Anatomia em Periapical</h3>
            </div>
        </div>
        <div className='retangulo'>
            <h2>Anatomia em TOMOGRAFIA. </h2>
            <img src={l3d} alt="" />
            
        </div>
    </div>
  )
}
