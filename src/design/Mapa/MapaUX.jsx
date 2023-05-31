import React from 'react'

const MapaUX = (props) => {
  const { x = 0, y = 0 } = props.ubicacion || {};
  return (
      <div className='mapa'>Mapa
          <p>Ubicación: {x}, {y}</p>
      </div>
  );
}
export default MapaUX