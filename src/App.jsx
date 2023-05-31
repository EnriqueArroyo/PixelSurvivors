import { useState } from "react";
import Personaje from "./components/Personaje/Personaje";
import MapaUX from "./design/Mapa/MapaUX";
import EstadosUX from "./design/Estados/EstadosUX";
import EquipoUX from "./design/Equipo/EquipoUX";
import EntornoAccionesUX from "./design/EntornoAcciones/EntornoAccionesUX";
import EntornoItemsUX from "./design/EntornoItems/EntornoItemsUX";
import EventosUX from "./design/Eventos/EventosUX";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="row row1">
        <EntornoAccionesUX />
        <MapaUX/>
        <EntornoItemsUX />
      </div>
      <div className="row row2">
        <EstadosUX/>
        <EquipoUX/>
        <EventosUX />
      </div>
    </div>
  );
}

export default App;
