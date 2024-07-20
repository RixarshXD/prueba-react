import { Guitarra } from "@/interface/InterfaceGuitarra";
import { registrarGuitarra } from "@/firebase/Promesas";

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const initialStateGuitarra: Guitarra = {
  modelo: "",
  cuerdas: 0,
  trastes: 0,
  puente: 0,
  color: "",
};

const RegistroGuitarra = () => {
  const [Guitarra, setGuitarra] = useState<Guitarra>(initialStateGuitarra);

  const validarLargoMinimo = (name: string, value: string) => {
    setGuitarra({ ...Guitarra, [name]: value });
  };

  const registrar = () => {
    registrarGuitarra(Guitarra)
      .then(() => {
        alert("se ha registrado la guitarra con exito!");
      })
      .catch((error) => {
        alert("no se ha podido registrar la guitarra");
        console.log(error);
      });
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>modelo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese modelo"
            name="modelo"
            onChange={(e) => {
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value);
            }}
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>cuerdas</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese cuerdas"
            name="cuerdas"
            onChange={(e) => {
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value);
            }}
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>trastes</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese trastes"
            name="trastes"
            onChange={(e) => {
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value);
            }}
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>puente</Form.Label>
          <Form.Control
            type="string"
            placeholder="Ingrese puente"
            name="puente"
            onChange={(e) => {
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value);
            }}
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>color</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese color"
            name="color"
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

export default RegistroGuitarra;
