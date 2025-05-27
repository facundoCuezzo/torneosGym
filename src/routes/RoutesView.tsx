import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import LoginPage from '../pages/LoginPage';
import HomePage from "../pages/HomePage";
=======
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
>>>>>>> 074808f0c6a9aa0b352d361f433fd4b2d7399992

const RoutesView = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<h1>404</h1>} />
      <Route path="HomePage" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesView;
