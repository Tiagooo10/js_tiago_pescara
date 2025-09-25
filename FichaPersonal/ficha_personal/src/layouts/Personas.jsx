import { useEffect, useState } from "react";

const Personas = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("personas");
    if (data) {
      setPersonas(JSON.parse(data));
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem" }}>
      <h2>Personas</h2>

      {personas.length > 0 ? (
        <table border="1" style={{ borderCollapse: "collapse", marginTop: "1rem" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {personas.map((p, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{p.nombre}</td>
                <td>{p.email}</td>
                <td>{p.color}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay personas guardadas</p>
      )}
    </div>
  );
};

export default Personas;


