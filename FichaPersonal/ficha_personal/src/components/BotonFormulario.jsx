export default function BotonFormulario({onClick}) {
  return (
    <button
      onClick={onClick} 
      style={{
        padding: "10px 20px",
        backgroundColor: "black",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
    >
      Ir a formulario
    </button>
  );
}
