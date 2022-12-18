import React from 'react'
import "./modelidades.css";

export default function Modelidades() {
  return (
    <div className='thirdSection'>
        <div className='quadrado'>
            <h1>Lesões e Alterações Anatomicas.</h1>
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
            <h4>Em breve.</h4>
        </div>
    </div>
  )
}
