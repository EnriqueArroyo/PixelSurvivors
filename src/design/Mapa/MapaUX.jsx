import React from 'react'
import Personaje from '../../components/Personaje/Personaje';

const MapaUX = (props) => {
  const { x = 0, y = 0 } = props.ubicacion || {};
  return (
      <div className='mapa'>Mapa
         <Personaje lugar={"Ubicacion"}/>
      </div>
  );
}
export default MapaUX