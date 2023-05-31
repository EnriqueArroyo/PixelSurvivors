import React, { useState } from "react";
import MapaUX from "../../design/Mapa/MapaUX";
import EstadosUX from "../../design/Estados/EstadosUX";
import EquipoUX from "../../design/Equipo/EquipoUX";
import EntornoAccionesUX from "../../design/EntornoAcciones/EntornoAccionesUX";
import EntornoItemsUX from "../../design/EntornoItems/EntornoItemsUX";
import EventosUX from "../../design/Eventos/EventosUX";

const Personaje = () => {
  const [salud, setSalud] = useState(100);
  const [hambre, setHambre] = useState(0);
  const [sed, setSed] = useState(0);
  const [temperatura, setTemperatura] = useState(37);

  const [defensaFisica, setDefensaFisica] = useState(0);
  const [defensaMagica, setDefensaMagica] = useState(0);
  const [defensaTermica, setDefensaTermica] = useState(0);

  const [fuerza, setFuerza] = useState(10);
  const [inteligencia, setInteligencia] = useState(10);
  const [sabiduria, setSabiduria] = useState(10);

  const [ubicacion, setUbicacion] = useState({ x: 0, y: 0 });
  const [interiorExterior, setInteriorExterior] = useState("Exterior");
  const [bajoTechoCielo, setBajoTechoCielo] = useState("Bajo Cielo");
  const [paradoSobre, setParadoSobre] = useState("");
  const [temperaturaAmbiente, setTemperaturaAmbiente] = useState(20);

  const [equipo, setEquipo] = useState({
    enMano: "Nada",
    enEspalda: "Mochila",
    slots: [],
  });

  const [ropaArmadura, setRopaArmadura] = useState({
    cabeza: "Nada",
    torso: "Nada",
    piernas: "Nada",
    pies: "Nada",
  });

  // Aquí puedes añadir tus funciones de manejo para cada acción que el personaje puede realizar.

  return (
    <div className="container">
      <div className="row row1">
        <EntornoAccionesUX />
        <MapaUX ubicacion={ubicacion} />
        <EntornoItemsUX />
      </div>
      <div className="row row2">
        <EstadosUX
          salud={salud}
          hambre={hambre}
          sed={sed}
          temperatura={temperatura}
        />
        <EquipoUX equipo={equipo} ropaArmadura={ropaArmadura} />
        <EventosUX />
      </div>
    </div>
  );
};

export default Personaje;
