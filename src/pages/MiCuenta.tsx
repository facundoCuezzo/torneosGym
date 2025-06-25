import { Card } from "react-bootstrap";
import { useUsers } from "../hooks/useUsers";

export default function MiCuenta() {
  const { user } = useUsers();

  return (
    <div className="d-flex justify-content-center align-items-start min-vh-60 pt-5">
      <Card
        bg="success"
        text="white"
        style={{ width: "35rem" }}
        className="mb-2"
      >
        <Card.Header
          className="text-center"
          style={{ fontSize: "1.5rem", fontWeight: "bold" }}
        >
          Nombre completo: {user?.full_name}
        </Card.Header>
        <Card.Body className="text-center">
          <Card.Title style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            Número de asociado: {user?.userId}
          </Card.Title>
          <Card.Text style={{ fontSize: "1.1rem" }}>Categoría:</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
