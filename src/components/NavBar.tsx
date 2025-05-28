import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarComp() {
  return (
    <Navbar className="navColor" data-bs-theme="dark" fixed="top">
      <Container>
        <Nav className="d-flex justify-content-between align-items-center gap-2 w-100">
          <NavLink to="/HomePage" className={"text-white text-decoration-none"}>
            <h4>Inicio</h4>
          </NavLink>
          <div className="d-flex gap-3">
            <NavLink
              to="/mi-cuenta"
              className={"text-decoration-none btn btn-outline-light"}
            >
              Mi Cuenta
            </NavLink>
            <NavLink
              to="/"
              className={"text-decoration-none btn btn-outline-light"}
            >
              Iniciar sesión
            </NavLink>
            <NavLink
              to="/register"
              className={"text-decoration-none btn btn-outline-light"}
            >
              Registrar usuario
            </NavLink>
            <NavLink to="*" className={"text-decoration-none btn btn-outline-light"}>
              Cerrar sesión
            </NavLink>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
