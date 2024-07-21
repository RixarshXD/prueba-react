import React, { useState } from "react";
import { Usuario } from "@/interface/InterfaceUsuario";

import { registrarUsuario } from "@/firebase/Promesas";

import { Button, Form, FloatingLabel } from "react-bootstrap";

import MenuPrincipal from "./MenuPrincipal";

const initialStateUsuario: Usuario = {
  nombre: "",
  apellido: "",
  rut: "",
  edad: 0,
  fechaNacimiento: "",
  correo: "",
};

const RegistrarUsuario = () => {
  const [Usuario, setUsuario] = useState<Usuario>(initialStateUsuario);

  const validarLargoMinimo = (name: string, value: string) => {
    setUsuario({ ...Usuario, [name]: value });
  };

  const registrar = () => {
    registrarUsuario(Usuario)
      .then(() => {
        alert("se ha registrado con exito");
      })
      .catch((error) => {
        alert("no se ha podido registrar el usuario");
        console.log(error);
      });
  };

  return (
    <>
      <MenuPrincipal></MenuPrincipal>
      <Form>
        <Form.Label>Nombre</Form.Label>
        <FloatingLabel label="Nombre">
          <Form.Control
            type="text"
            placeholder="Ingrese Nombre"
            name="nombre"
            onChange={(e) =>
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)
            }
          />
          <Form.Text></Form.Text>
        </FloatingLabel>

        <Form.Label>Apellido</Form.Label>
        <FloatingLabel label="Apellido">
          <Form.Control
            type="text"
            placeholder="Ingrese Apellido"
            name="apellido"
            onChange={(e) =>
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)
            }
          />
          <Form.Text></Form.Text>
        </FloatingLabel>

        <Form.Label>Edad</Form.Label>
        <FloatingLabel label="Edad">
          <Form.Control
            type="number"
            placeholder="Ingrese Edad"
            name="edad"
            onChange={(e) =>
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)
            }
          />
          <Form.Text></Form.Text>
        </FloatingLabel>

        <Form.Label>Rut</Form.Label>
        <FloatingLabel label="Rut">
          <Form.Control
            type="number"
            placeholder="Ingrese Rut"
            name="rut"
            onChange={(e) =>
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)
            }
          />
          <Form.Text></Form.Text>
        </FloatingLabel>

        <Form.Label>Correo</Form.Label>
        <FloatingLabel label="Correo">
          <Form.Control
            type="email"
            placeholder="Ingrese Correo"
            name="correo"
            onChange={(e) =>
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)
            }
          />
          <Form.Text></Form.Text>
        </FloatingLabel>

        <Form.Label>Fecha de nacimiento</Form.Label>
        <FloatingLabel label="Fecha de Nacimiento">
          <Form.Control
            type="date"
            placeholder="Ingrese Fecha de Nacimiento"
            name="fechaNacimiento"
            onChange={(e) =>
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)
            }
          />
          <Form.Text></Form.Text>
        </FloatingLabel>

        <Button variant="success" onClick={registrar}>
          Registrar
        </Button>
      </Form>
    </>
  );
};

export default RegistrarUsuario;
