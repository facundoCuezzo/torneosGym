import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import { useUsers } from '../hooks/useUsers';

export default function Puntajes() {
  const { user } = useUsers();
  return (
    <div
      className="d-flex justify-content-center align-items-start pt-5"
      style={{ minHeight: "60vh" }}
    >
      <Card bg="light" text="dark" className="mb-2" style={{ width: "35rem" }}>
        <Card.Header className="text-center fw-bold fs-4">Juez: {user?.full_name}</Card.Header>
        <Card.Body className="text-center">
          <Card.Title className="fw-bold fs-5">Número de asociado: {user?.userId}</Card.Title>

          <div className="d-flex justify-content-center mt-4">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Seleccione el torneo
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
