import { Route, Routes } from "react-router-dom";
import LoginPage from '../pages/LoginPage';
import HomePage from "../pages/HomePage";

const RoutesView = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="*" element={<h1>404</h1>} />
      <Route path="HomePage" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesView;
