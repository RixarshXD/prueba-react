import React from "react";

import { Button } from "react-bootstrap";
import MenuPrincipal from "./MenuPrincipal";

const MostrarRegistros = () => {
  return (
    <div className="d-grid gap-2">
      <MenuPrincipal></MenuPrincipal>
      <Button variant="outline-dark" size="lg" href="/MostrarUsuarios">
        Listado de Usuarios
      </Button>
      <Button variant="outline-dark" size="lg" href="/MostrarGuitarras">
        Listado de Guitarras
      </Button>
    </div>
  );
};

export default MostrarRegistros;
