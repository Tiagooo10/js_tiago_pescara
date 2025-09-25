import React from "react";

export const Luz = ({ color, activo }) => {
  const colorFinal = activo ? color : "gray"; // gris si está apagada
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundColor: colorFinal,
        margin: "10px auto",
      }}
    ></div>
  );
};
