import { Navbar, Container, Nav } from 'react-bootstrap';

function NavbarComp() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/HomePage">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/mi-cuenta">Mi Cuenta</Nav.Link>
            <Nav.Link href="/register">Registrar Usuario</Nav.Link>
            <Nav.Link href="/">Cerrar sesión</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    
    </>
  );
}

export default NavbarComp;