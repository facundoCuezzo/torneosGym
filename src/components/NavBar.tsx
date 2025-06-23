import { useEffect, useState } from "react";
import { Navbar, Container, Nav, Button, Image } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useUsers } from '../hooks/useUsers';

function NavbarComp() {
  const navigate = useNavigate();

  const { handleLogout } = useUsers();
  const [userLogged, setUserLogged] = useState({
    userId: 0,
    logged: false,
  });
  const loggedLS = localStorage.getItem("logged");
  const userIdLS = localStorage.getItem("userId");

  useEffect(() => {
    if (loggedLS && userIdLS) {
      setUserLogged({
        userId: JSON.parse(userIdLS),
        logged: JSON.parse(loggedLS),
      });
    }
  }, [loggedLS, userIdLS]);

  const logout = async () => {
    await handleLogout()

    localStorage.removeItem("logged");
    localStorage.removeItem("userId");
    setUserLogged({
      userId: 0,
      logged: false,
    });

    navigate("/")
  }

  return (
    <Navbar className="navColor" data-bs-theme="dark" fixed="top">
      <Container>
        <Nav className="d-flex justify-content-between align-items-center gap-2 w-100">
          <NavLink to="/HomePage" className={"text-white text-decoration-none"}>
            <Image src="/logo_blanco.png" alt="Logo de torneos" width={50} />
          </NavLink>
          <div className="d-flex gap-3">
            {userLogged.logged && userLogged.userId > 0 ? (
              <>
                <NavLink
                  to="/mi-cuenta"
                  className={"text-decoration-none btn btn-outline-light"}
                >
                  Mi Cuenta
                </NavLink>
                <Button
                  onClick={logout}
                  variant='outline-light'
                >
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
