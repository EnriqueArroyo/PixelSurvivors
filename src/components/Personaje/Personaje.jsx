import React, { useState, useEffect } from "react";
import MapaUX from "../../design/Mapa/MapaUX";
//import EstadosUX from "../../design/Estados/EstadosUX";
import EquipoUX from "../../design/Equipo/EquipoUX";
import EntornoAccionesUX from "../../design/EntornoAcciones/EntornoAccionesUX";
import EntornoItemsUX from "../../design/EntornoItems/EntornoItemsUX";
import EventosUX from "../../design/Eventos/EventosUX";

const Personaje = ({ lugar }) => {
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

  // funciones
  //Salud ❤️
  const recibirDano = (cantidad) => {
    setSalud((prevSalud) => {
      const nuevaSalud = prevSalud - cantidad;
      return Math.max(0, nuevaSalud);
    });
  };

  const recibirSalud = (cantidad) => {
    setSalud((prevSalud) => {
      const nuevaSalud = prevSalud + cantidad;
      return Math.min(100, nuevaSalud);
    });
  };

   // Hambre 🍗
   const aumentarHambre = (cantidad) => {
    setHambre((prevHambre) => prevHambre + cantidad);
  };

  const reducirHambre = (cantidad) => {
    setHambre((prevHambre) => Math.max(0, prevHambre - cantidad));
  };

  // Sed 💧
  const aumentarSed = (cantidad) => {
    setSed((prevSed) => prevSed + cantidad);
  };

  const reducirSed = (cantidad) => {
    setSed((prevSed) => Math.max(0, prevSed - cantidad));
  };

  // Temperatura ❄️🔥
  const aumentarTemperatura = (cantidad) => {
    setTemperatura((prevTemperatura) => prevTemperatura + cantidad);
  };

  const reducirTemperatura = (cantidad) => {
    setTemperatura((prevTemperatura) => Math.max(0, prevTemperatura - cantidad));
  };

  // Defensas 🛡️
  const aumentarDefensaFisica = (cantidad) => {
    setDefensaFisica((prevDefensa) => prevDefensa + cantidad);
  };

  const aumentarDefensaMagica = (cantidad) => {
    setDefensaMagica((prevDefensa) => prevDefensa + cantidad);
  };

  const aumentarDefensaTermica = (cantidad) => {
    setDefensaTermica((prevDefensa) => prevDefensa + cantidad);
  };

  // Fuerza, Inteligencia, Sabiduría 💪🏻🧠🧾
  const aumentarFuerza = (cantidad) => {
    setFuerza((prevFuerza) => prevFuerza + cantidad);
  };

  const aumentarInteligencia = (cantidad) => {
    setInteligencia((prevInteligencia) => prevInteligencia + cantidad);
  };

  const aumentarSabiduria = (cantidad) => {
    setSabiduria((prevSabiduria) => prevSabiduria + cantidad);
  };

  //Posición 🗺️
  const handleKeyPress = (event) => {
    const { key } = event;
    const movimiento = 1; // Valor para ajustar la distancia del movimiento

    // Actualizar la ubicación según la tecla presionada
    switch (key) {
      case "w":
        setUbicacion((prevUbicacion) => ({
          ...prevUbicacion,
          y: prevUbicacion.y - movimiento,
        }));
        break;
      case "a":
        setUbicacion((prevUbicacion) => ({
          ...prevUbicacion,
          x: prevUbicacion.x - movimiento,
        }));
        break;
      case "s":
        setUbicacion((prevUbicacion) => ({
          ...prevUbicacion,
          y: prevUbicacion.y + movimiento,
        }));
        break;
      case "d":
        setUbicacion((prevUbicacion) => ({
          ...prevUbicacion,
          x: prevUbicacion.x + movimiento,
        }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // Agregar el evento de teclado al componente
    window.addEventListener("keydown", handleKeyPress);

    // Eliminar el evento de teclado al desmontar el componente
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // fin funciones
  //return
  switch (lugar) {
    case "Salud":
      return (
        <div>
          <div>
            <p>{salud}❤️</p>
            <button onClick={() => recibirDano(10)}>Fajar 🗡️</button>
            <button onClick={() => recibirSalud(10)}>Potear 💊</button>
          </div>
        </div>
      );
    case "Ubicacion":
      return (
        <div>
          {
            <p>
              Ubicación: {ubicacion.x}, {ubicacion.y}
            </p>
          }
        </div>
      );
    case "lugar3":
      return (
        <div>
          <p>Lugar 3</p>
          {/* Contenido específico para el lugar 3 */}
        </div>
      );
    // Añadir los demás casos para los demás lugares
    case "lugar4":
      return (
        <div>
          <p>Lugar 4</p>
          {/* Contenido específico para el lugar 4 */}
        </div>
      );
    case "lugar5":
      return (
        <div>
          <p>Lugar 5</p>
          {/* Contenido específico para el lugar 5 */}
        </div>
      );
    case "lugar6":
      return (
        <div>
          <p>Lugar 6</p>
          {/* Contenido específico para el lugar 6 */}
        </div>
      );
    default:
      return (
        <div>
          <p>Lugar desconocido</p>
          {/* Contenido predeterminado en caso de lugar desconocido */}
        </div>
      );
  }
};

export default Personaje;
