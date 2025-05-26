import { Route, Routes } from "react-router-dom";
import LoginPage from '../pages/LoginPage';

const RoutesView = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default RoutesView;
