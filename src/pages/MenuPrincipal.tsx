import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const MenuPrincipal = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/MenuPrincipal">Menu</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/RegistrarUsuario">Registrar Usuario</Nav.Link>
              <Nav.Link href="/RegistroGuitarra">Registrar Guitarra</Nav.Link>
              <Nav.Link href="MostrarRegistros">Ver Registros</Nav.Link>
              <Nav.Link href="/Login">Salir</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuPrincipal;
