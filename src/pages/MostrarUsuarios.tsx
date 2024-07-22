import React from "react";

import { useEffect, useState } from "react";
import { RiEditFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { useRouter } from "next/router";

import { initialStateUsuario } from "@/initialStates/InitialStateUsuario";

import { Usuario } from "@/interface/InterfaceUsuario";
import {
  mostrarUsuario,
  recuperarUsuarios,
  actualizarUsuario,
  eliminarUsuario,
} from "@/firebase/Promesas";

import MenuPrincipal from "./MenuPrincipal";

const MostrarUsuarios = () => {
  const [usuario, setUsuario] = useState<Usuario[]>([]);
  const [usuarioSeleccionado, setUsuarioSeleccionado] =
    useState<Usuario>(initialStateUsuario);

  // modal de actualizacion
  const [mostrar, setMostrar] = useState(false);

  const cerrarModal = () => setMostrar(false);
  const mostrarModal = () => setMostrar(true);

  // modal de eliminacion
  const [modalEliminacion, setModalEliminacion] = useState(false);

  const cerrarModalEliminacion = () => setModalEliminacion(false);

  const mostrarModalConfirmacion = (usuario: Usuario) => {
    setUsuarioSeleccionado(usuario);
    setModalEliminacion(true);
  };

  // eliminacion de usuarios con modal
  const eliminar = () => {
    if (usuarioSeleccionado.key) {
      eliminarUsuario(usuarioSeleccionado).then(() => {
        console.log("usuario eliminado correctamente");
        cerrarModalEliminacion();
        recuperarUsuarios().then((usuarios) => {
          setUsuario(usuarios);
        });
      });
    }
  };

  const params = useRouter();
  useEffect(() => {
    console.log(params.query);
    const key = params.query.key;

    if (typeof key === "string") {
      mostrarUsuario(key).then((u) => {
        if (u != undefined) {
          setUsuarioSeleccionado(u);
        }
      });
    }
  }, []);

  useEffect(() => {
    recuperarUsuarios().then((usuarios) => {
      setUsuario(usuarios);
    });
  }, []);

  const validarLargoMinimo = (name: string, value: string) => {
    setUsuarioSeleccionado({ ...usuarioSeleccionado, [name]: value });
  };

  const modalEditar = (usuario: Usuario) => {
    setUsuarioSeleccionado(usuario);
    mostrarModal();
  };

  const modificarUsuario = () => {
    actualizarUsuario(usuarioSeleccionado).then(() => {
      console.log("se actualizó correctamente");
      cerrarModal();
      recuperarUsuarios().then((usuarios) => {
        setUsuario(usuarios);
      });
    });
  };

  return (
    <>
      <MenuPrincipal></MenuPrincipal>
      <Table>
        <thead>
          <tr>
            <th>nombre</th>
            <th>email</th>
            <th>edad</th>
            <th>direccion</th>
            <th>telefono</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {usuario.map((u) => {
            return (
              <tr key={u.key}>
                <td>{u.nombre}</td>
                <td>{u.apellido}</td>
                <td>{u.rut}</td>
                <td>{u.edad}</td>
                <td>{u.fechaNacimiento}</td>
                <td>{u.correo}</td>
                <td>
                  <Button variant="success" onClick={() => modalEditar(u)}>
                    <RiEditFill />
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => {
                      mostrarModalConfirmacion(u);
                    }}
                  >
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
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese Nombre"
                value={usuarioSeleccionado.nombre}
                name="nombre"
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
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese Apellido"
                value={usuarioSeleccionado.apellido}
                name="apellido"
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
              <Form.Label>Rut</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese Rut"
                value={usuarioSeleccionado.rut}
                name="rut"
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
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese Dirección"
                value={usuarioSeleccionado.edad}
                name="edad"
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
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control
                type="date"
                placeholder="Ingrese Teléfono"
                value={usuarioSeleccionado.fechaNacimiento}
                name="fechaNacimiento"
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
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese Correo"
                value={usuarioSeleccionado.correo}
                name="correo"
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
          <Button variant="primary" onClick={modificarUsuario}>
            guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalEliminacion} onHide={cerrarModalEliminacion}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar a {usuarioSeleccionado.nombre}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModalEliminacion}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={eliminar}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MostrarUsuarios;
