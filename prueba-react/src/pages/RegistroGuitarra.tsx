import { Guitarra } from "@/interface/InterfaceGuitarra";
import { registrarGuitarra } from "@/firebase/Promesas";
import { initialStateGuitarra } from "@/initialStates/InitialStateGuitarras";

import React, { useState } from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";

import MenuPrincipal from "./MenuPrincipal";

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
      <MenuPrincipal></MenuPrincipal>
      <Form>
        <Form.Label>Modelo</Form.Label>
        <FloatingLabel label="Modelo">
          <Form.Control
            type="text"
            placeholder=""
            name="modelo"
            onChange={(e) =>
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)
            }
          />
          <Form.Text></Form.Text>
        </FloatingLabel>

        <Form.Label>Cuerdas</Form.Label>
        <FloatingLabel label="Cuerdas">
          <Form.Control
            type="number"
            placeholder=""
            name="cuerdas"
            onChange={(e) =>
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)
            }
          />
          <Form.Text></Form.Text>
        </FloatingLabel>

        <Form.Label>Trastes</Form.Label>
        <FloatingLabel label="Trastes">
          <Form.Control
            type="number"
            placeholder=""
            name="trastes"
            onChange={(e) =>
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)
            }
          />
          <Form.Text></Form.Text>
        </FloatingLabel>

        <Form.Label>Puente</Form.Label>
        <FloatingLabel label="Puente">
          <Form.Control
            type="text"
            placeholder=""
            name="puente"
            onChange={(e) =>
              validarLargoMinimo(e.currentTarget.name, e.currentTarget.value)
            }
          />
          <Form.Text></Form.Text>
        </FloatingLabel>

        <Form.Label>Color</Form.Label>
        <FloatingLabel label="Color">
          <Form.Control
            type="text"
            placeholder=""
            name="color"
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

export default RegistroGuitarra;
