import { useState } from "react";
import Personaje from "./components/Personaje/Personaje";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Personaje />
    </div>
  );
}

export default App;
