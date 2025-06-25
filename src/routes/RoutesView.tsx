import { Route, Routes } from "react-router-dom";
import LoginPage from '../pages/LoginPage';
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import InscripcionT from "../pages/InscripcionT";
import MisTorneos from "../pages/MisTorneos";
import Alumnos from "../pages/Alumnos";
import Puntajes from "../pages/Puntajes";
import MiCuenta from "../pages/MiCuenta";

const RoutesView = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/crear-usuario" element={<RegisterPage />} />
      <Route path="*" element={<h1>404</h1>} />
      <Route path="/inicio" element={<HomePage />} />

      <Route path="/mi-cuenta" element={<MiCuenta />} />
      <Route path="/inscripcion-torneos" element={<InscripcionT />} />
      <Route path="/misTorneos" element={<MisTorneos />} />
      <Route path="/alumnos" element={<Alumnos />} />
      <Route path="/puntajes" element={<Puntajes />} />
      


    </Routes>
  );
};

export default RoutesView;
