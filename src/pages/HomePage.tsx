import { List, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const opciones = [
    { nombre: "MI CUENTA", ruta: "/mi-cuenta" },
    { nombre: "INSCRIPCIÓN TORNEOS", ruta: "/inscripcion-torneos" },
    { nombre: "MIS TORNEOS", ruta: "/mis-concursos" },
    { nombre: "ALUMNOS", ruta: "/mis-ejemplares" },
    { nombre: "PUNTAJES", ruta: "/puntajes" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "65vh" }}>
      <List sx={{ width: "50%", maxWidth: 600, bgcolor: "background.paper" }}>
        {opciones.map((opcion, index) => (
          <ListItemButton key={index} onClick={() => navigate(opcion.ruta)} sx={{ textAlign: "center" }}>
            <ListItemText primary={opcion.nombre} sx={{ textAlign: "center" }} primaryTypographyProps={{ fontWeight: "bold" }} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default Menu;