import React, { useState } from "react";
import { Luz } from "./Luz";

export const Semaforo = () => {
  // Estado del semáforo
  const [colorActivo, setColorActivo] = useState("rojo");

  return (
    <div
      style={{
        display: "flex",               // usa flexbox
        flexDirection: "column",       // apila las luces verticalmente
        alignItems: "center",          // centra horizontalmente
        justifyContent: "center",      // centra verticalmente
        height: "100vh",               // ocupa toda la altura de la ventana
        backgroundColor: "#222",       // opcional, para contraste
      }}
    >
      {/* Luces */}
      <Luz color="red" activo={colorActivo === "rojo"} />
      <Luz color="yellow" activo={colorActivo === "amarillo"} />
      <Luz color="green" activo={colorActivo === "verde"} />

      {/* Botones */}
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button disabled={colorActivo === "rojo"} onClick={() => setColorActivo("rojo")}>Rojo</button>
        <button disabled={colorActivo === "amarillo"} onClick={() => setColorActivo("amarillo")}>Amarillo</button>
        <button disabled={colorActivo === "verde"} onClick={() => setColorActivo("verde")}>Verde</button>
      </div>
    </div>
  );
};
