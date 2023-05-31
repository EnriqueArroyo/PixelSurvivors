import React from "react";
import Personaje from '../../components/Personaje/Personaje';


const EstadosUX = (props) => {
  return (
    <div className="estados">
    <h2>EstadosUX</h2>
    <p>Salud: {props.salud}</p>
    <p>Hambre: {props.hambre}</p>
    <p>Sed: {props.sed}</p>
    <p>Temperatura: {props.temperatura}</p>
    <Personaje lugar={"Salud"}/>
    {/* ... */}
  </div>
  );
}

export default EstadosUX;
