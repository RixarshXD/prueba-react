import React, { useEffect, useState } from "react";
import {
  recuperarGuitarras,
  mostrarGuitarra,
  actualizarGuitarra,
} from "@/firebase/Promesas";
import { Guitarra } from "@/interface/InterfaceGuitarra";
import { RiEditFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { initialStateGuitarra } from "@/initialStates/InitialStateGuitarras";

import { Button, Table, Modal, Form } from "react-bootstrap";
import { useRouter } from "next/router";

const MostrarGuitarras = () => {
  const [guitarra, setGuitarra] = useState<Guitarra[]>([]);
  const [GuitarraSeleccionada, setGuitarraSeleccionada] =
    useState<Guitarra>(initialStateGuitarra);

  //mostrar modal de modificar
  const [mostrar, setMostrar] = useState(false);

  const cerrarModal = () => setMostrar(false);
  const mostrarModal = () => setMostrar(true);

  const params = useRouter();
  useEffect(() => {
    console.log(params.query);
    const key = params.query.key;

    if (typeof key === "string") {
      mostrarGuitarra(key).then((g) => {
        if (g != undefined) {
          setGuitarraSeleccionada(g);
        }
      });
    }
  }, []);

  useEffect(() => {
    recuperarGuitarras().then((guitarras) => {
      setGuitarra(guitarras);
    });
  }, []);

  const validarLargoMinimo = (name: string, value: string) => {
    setGuitarraSeleccionada({ ...GuitarraSeleccionada, [name]: value });
  };

  const modalEditar = (guitarra: Guitarra) => {
    setGuitarraSeleccionada(guitarra);
    mostrarModal();
  };

  const modificar = () => {
    actualizarGuitarra(GuitarraSeleccionada).then(() => {
      console.log("se actualizó correctamente");
      cerrarModal();
      recuperarGuitarras().then((guitarras) => {
        setGuitarra(guitarras);
      });
    });
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>modelo</th>
            <th>cuerdas</th>
            <th>trastes</th>
            <th>puente</th>
            <th>color</th>

            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {guitarra.map((p) => {
            return (
              <tr key={p.key}>
                <td>{p.modelo}</td>
                <td>{p.cuerdas}</td>
                <td>{p.trastes}</td>
                <td>{p.puente}</td>
                <td>{p.color}</td>

                <td>
                  <Button variant="success" onClick={() => modalEditar(p)}>
                    <RiEditFill />
                  </Button>

                  <Button variant="danger">
                    <MdDeleteForever />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Modal show={mostrar} onHide={cerrarModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Modelo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese Modelo"
                value={GuitarraSeleccionada.modelo}
                name="modelo"
                onChange={(e) => {
                  validarLargoMinimo(
                    e.currentTarget.name,
                    e.currentTarget.value
                  );
                }}
              />
              <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Cuerdas</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese Cuerdas"
                value={GuitarraSeleccionada.cuerdas}
                name="cuerdas"
                onChange={(e) => {
                  validarLargoMinimo(
                    e.currentTarget.name,
                    e.currentTarget.value
                  );
                }}
              />
              <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Trastes</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese Trastes"
                value={GuitarraSeleccionada.trastes}
                name="trastes"
                onChange={(e) => {
                  validarLargoMinimo(
                    e.currentTarget.name,
                    e.currentTarget.value
                  );
                }}
              />
              <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Puente</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese Puente"
                value={GuitarraSeleccionada.puente}
                name="puente"
                onChange={(e) => {
                  validarLargoMinimo(
                    e.currentTarget.name,
                    e.currentTarget.value
                  );
                }}
              />
              <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese Color"
                value={GuitarraSeleccionada.color}
                name="color"
                onChange={(e) => {
                  validarLargoMinimo(
                    e.currentTarget.name,
                    e.currentTarget.value
                  );
                }}
              />
              <Form.Text></Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModal}>
            cerrar
          </Button>
          <Button variant="primary" onClick={modificar}>
            guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default MostrarGuitarras;
