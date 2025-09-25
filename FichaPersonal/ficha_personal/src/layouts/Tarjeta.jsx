import { useRef, useState, Fragment } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { SelectButton } from "primereact/selectbutton";
import { Checkbox } from 'primereact/checkbox';
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Swal from "sweetalert2";

const opcionesColor = [
  { label: "Rojo", value: "red" },
  { label: "Amarillo", value: "yellow" },
  { label: "Verde", value: "green" },
];

const Tarjeta = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [terminos, setTerminos] = useState(false);
  const [color, setColor] = useState("gray");
  const toast = useRef(null);

  const guardarEnLocalStorage = (persona) => {
    const existente = localStorage.getItem("personas");
    const lista = existente ? JSON.parse(existente) : [];
    lista.push(persona);
    localStorage.setItem("personas", JSON.stringify(lista));
    console.log(lista);
  };

  const isFormValid = email.includes("@") && email !== "" && nombre !== "" && terminos === true;

  const confirmarFormulario = () => {
    Swal.fire({
      title: "¿Desea confirmar los datos?",
      text: `Nombre: ${nombre || "Sin nombre"} 
             Email: ${email || "Sin email"} | 
             Color: ${
               color !== "gray"
                 ? opcionesColor.find((item) => item.value === color).label
                 : "Gris"
             }`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Si, guardar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        guardarEnLocalStorage({
          nombre: nombre || "Sin nombre",
          color: color || "Sin color",
          email: email || "Sin email",
          terminos : terminos,
          createdAt: new Date(),
        });

        toast.current?.show({
          severity: "success",
          summary: "Guardado",
          detail: "Tarjeta de presentación guardada",
        });
      }
    });
  };

  return (
    <Fragment>
      <Toast ref={toast}></Toast>

      <div className="flex justify-center items-center min-h-screen">
        <Card title="Tarjeta" className="w-full max-w-md">
          {/* Inputs */}
          <div className="p-fluid gap-24 p-8">
              <InputText
                id="nombre"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            

              <InputText
                id="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginBottom: "1.5rem" }}
              />
            

            
              <small>Color de fondo</small>
              <SelectButton
                value={color}
                onChange={(e) => setColor(e.value)}
                options={opcionesColor}
                style={{ marginBottom: "1.5rem" }}
              />

              <Checkbox
              value={terminos}
              onChange={(e) => setTerminos(e.checked)}
              checked = {terminos} 
              style={{ marginBottom: "1.5rem"}}
              >
              </Checkbox>
            
          </div>

          <div className="flex justify-center gap-3 mt-4">
            <Button
              label="Guardar"
              icon="pi pi-check"
              severity="success"
              disabled={!isFormValid}
              onClick={() => confirmarFormulario()}
            />
            <Button
              label="Limpiar"
              icon="pi pi-eraser"
              severity="secondary"
              onClick={() => {
                setNombre("");
                setEmail("");
                setColor("gray");
                setTerminos(false);
              }}
            />
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default Tarjeta;
