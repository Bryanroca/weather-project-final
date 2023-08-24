import { useEffect, useState } from 'react';
import '../styles_components/targeta.css';
import React from 'react';
import "../styles_components/columna-derecha.css"
const Targeta = ({ dia, imagen, gradosMax, gradosMin, celciusMaxRedondeado, celciusMinredondeado }) => {

  return (
    <>
      <div className="container-targeta">
        <h2>{dia ? dia : "Mañana"}</h2>
        <img className="imagen" src={imagen} alt="" />
        <div className='datos'>
          <h3 id='grados-maximos-F' className="grados-maximos-F"> {gradosMax}<span id="F°">F°</span></h3>
          <h3 id='grados-maximos-C' className="grados-maximos-C"> {celciusMaxRedondeado}<span id="F°">C°</span></h3>
          <h3 id='grados-minimos-F' className="grados-minimos-F"> {gradosMin}<span id="F°">F°</span></h3>
          <h3 id='grados-minimos-C' className="grados-minimos-C"> {celciusMinredondeado}<span id="F°">C°</span></h3>
        </div>
      </div>
    </>
  );
};

export default Targeta;
