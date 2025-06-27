import { List, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";

const ADMIN_OPTIONS = [
  { nombre: "MI CUENTA", ruta: "/mi-cuenta" },
  { nombre: "INSCRIPCIÓN TORNEOS", ruta: "/inscripcion-torneos" },
  { nombre: "MIS TORNEOS", ruta: "/misTorneos" },
  { nombre: "ALUMNOS", ruta: "/alumnos" },
  { nombre: "PUNTAJES", ruta: "/puntajes" },
];

const GYM_OPTIONS = [
  {
    nombre: "MI CUENTA",
    ruta: "/mi-cuenta",
  },
  {
    nombre: "INSCRIPCIÓN TORNEOS",
    ruta: "/inscripcion-torneos",
  },
  {
    nombre: "MIS TORNEOS",
    ruta: "/misTorneos",
  },
  {
    nombre: "ALUMNOS",
    ruta: "/alumnos",
  },
];

const JUEZ_OPTIONS = [
  {
    nombre: "MI CUENTA",
    ruta: "/mi-cuenta",
  },
  {
    nombre: "PUNTAJES",
    ruta: "/puntajes",
  },
];

const Menu = () => {
  const navigate = useNavigate();

  const { user } = useUsers();

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "65vh" }}
    >
      <List
        sx={{ width: "50%", maxWidth: 800, bgcolor: "background.paper" }}
        className="rounded-4"
      >
        {user?.role === "Administrador"
          ? ADMIN_OPTIONS.map((opcion, index) => (
              <ListItemButton
                key={index}
                onClick={() => navigate(opcion.ruta)}
                sx={{ textAlign: "center" }}
              >
                <ListItemText
                  primary={opcion.nombre}
                  sx={{ textAlign: "center" }}
                  primaryTypographyProps={{ fontWeight: "bold" }}
                />
              </ListItemButton>
            ))
          : user?.role === "Gimnasio"
          ? GYM_OPTIONS.map((opcion, index) => (
              <ListItemButton
                key={index}
                onClick={() => navigate(opcion.ruta)}
                sx={{ textAlign: "center" }}
              >
                <ListItemText
                  primary={opcion.nombre}
                  sx={{ textAlign: "center" }}
                  primaryTypographyProps={{ fontWeight: "bold" }}
                />
              </ListItemButton>
            ))
          : user?.role === "Juez"
          ? JUEZ_OPTIONS.map((opcion, index) => (
              <ListItemButton
                key={index}
                onClick={() => navigate(opcion.ruta)}
                sx={{ textAlign: "center" }}
              >
                <ListItemText
                  primary={opcion.nombre}
                  sx={{ textAlign: "center" }}
                  primaryTypographyProps={{ fontWeight: "bold" }}
                />
              </ListItemButton>
            ))
          : ""}
      </List>
    </div>
  );
};

export default Menu;
