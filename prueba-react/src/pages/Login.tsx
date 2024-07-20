import React, { useState, FormEvent } from "react";
import { useRouter } from "next/router";
import { Button, Form, FloatingLabel } from "react-bootstrap";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const router = useRouter();

  const guardarUsuario = (e: any) => {
    setUsuario(e.currentTarget.value);
  };

  const guardarContraseña = (e: any) => {
    setContraseña(e.currentTarget.value);
  };

  const validarUsuario = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usuario === "admin" && contraseña === "admin") {
      router.push("/MenuPrincipal");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div>
      <Form onSubmit={validarUsuario}>
        <Form.Group>
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese usuario"
            value={usuario}
            onChange={guardarUsuario}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese contraseña"
            value={contraseña}
            onChange={guardarContraseña}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    </div>
  );
};

export default Login;
