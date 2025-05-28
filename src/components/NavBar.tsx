import { Navbar, Container, Nav } from 'react-bootstrap';

function NavbarComp() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Mi Cuenta</Nav.Link>
            <Nav.Link href="#pricing">Registrar Usuario</Nav.Link>
            <Nav.Link href="#logout">Cerrar sesión</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    
    </>
  );
}

export default NavbarComp;