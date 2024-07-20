import React, { useState } from "react";
import { Usuario } from "@/interface/interfaceUsuario";

import { registrarUsuario } from "@/firebase/Promesas";

import { Button, Form } from "react-bootstrap";

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
        alert("no se ha podido registrar");
        console.log(error);
      });
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese Nombre"
            name="nombre"
            onChange={(e) => {
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value);
            }}
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese Apellido"
            name="apellido"
            onChange={(e) => {
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value);
            }}
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese Edad"
            name="edad"
            onChange={(e) => {
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value);
            }}
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Rut</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese Rut"
            name="rut"
            onChange={(e) => {
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value);
            }}
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese Correo"
            name="correo"
            onChange={(e) => {
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value);
            }}
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control
            type="date"
            placeholder="Ingrese Fecha de Nacimiento"
            name="fechaNacimiento"
            onChange={(e) => {
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value);
            }}
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Button variant="success" onClick={registrar}>
          Registrar
        </Button>
      </Form>
    </>
  );
};

export default RegistrarUsuario;
