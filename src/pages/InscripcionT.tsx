import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import { useUsers } from "../hooks/useUsers";

export default function InscripcionTorneos() {
  const { user } = useUsers();
  return (
    <div className="d-flex justify-content-center align-items-start min-vh-60 pt-5">
      <Card
        bg="warning"
        text="dark"
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
            Numero de asociado: {user?.userId}
          </Card.Title>
          <Card.Text style={{ fontSize: "1.1rem" }}>Categoría:</Card.Text>
          <div className="d-flex justify-content-center mt-4">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Seleccione el Torneo
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
