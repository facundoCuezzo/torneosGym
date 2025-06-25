import { Card, Button } from "react-bootstrap";
import { useUsers } from '../hooks/useUsers';

export default function Alumnos() {
  const { user } = useUsers();
  return (
    <div
      className="d-flex flex-column align-items-center pt-5"
      style={{ minHeight: "60vh" }}
    >
      <Card
        bg="danger"
        text="white"
        style={{ width: "35rem" }}
        className="mb-2"
      >
        <Card.Header
          className="text-center"
          style={{ fontSize: "1.5rem", fontWeight: "bold" }}
        >
          Gimnasio: {user?.full_name}
        </Card.Header>
        <Card.Body className="text-center">
          <Card.Title style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            Número de asociado: {user?.userId}
          </Card.Title>
          <Card.Text style={{ fontSize: "1.1rem" }}>Categoría:</Card.Text>
        </Card.Body>
      </Card>

      <div className="w-100" style={{ maxWidth: "110rem", padding: "30px" }}>
        <div className="d-flex justify-content-start">
          <Button variant="danger">Añadir alumno</Button>
        </div>
      </div>
    </div>
  );
}
