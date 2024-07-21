import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  const [eUsuario, setUsuario] = useState("");
  const [eContraseña, setContraseña] = useState("");
  const [eLongitud, setLongitud] = useState("");

  // hook para moverme de pagina
  const router = useRouter();

  // actualizo los estados
  const guardarUsuario = (e: any) => {
    setUsuario(e.currentTarget.value);
  };

  const guardarContraseña = (e: any) => {
    setContraseña(e.currentTarget.value);
  };

  // validacion de longitud de la contraseña
  const validarLongitud = (valor: string) => {
    if (valor.length < 4) {
      setLongitud("debes ingresar al menos 4 letras");
    } else {
      setLongitud("");
    }
  };

  // validar que el login sea admin admin y reedireccionar al menu principal
  const validarUsuario = () => {
    if (eUsuario === "admin" && eContraseña === "admin") {
      router.push("/MenuPrincipal");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese usuario"
            value={eUsuario}
            onChange={guardarUsuario}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese contraseña"
            value={eContraseña}
            onChange={(c) => {
              validarLongitud(c.currentTarget.value);
              guardarContraseña(c);
            }}
          />
          <Form.Text>{eLongitud}</Form.Text>
        </Form.Group>

        <Button variant="outline-dark" onClick={validarUsuario}>
          Iniciar Sesión
        </Button>
      </Form>
    </div>
  );
};

export default Login;
