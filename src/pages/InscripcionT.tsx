import useUsers from "../hooks/useUsers";
import CardComp from "../components/CardComp";
import useTournaments from "../hooks/useTournaments";
import { Form, Nav, Spinner } from "react-bootstrap";
import { useState } from "react";

export default function InscripcionTorneos() {
  const { user } = useUsers();
  const { tournaments, loading } = useTournaments();
  const [selectedTournament, setSelectedTournament] = useState(0);

  return (
    <>
      <div className="d-flex flex-column align-items-center min-vh-60 pt-5">
        <CardComp user={user} color="warning" textColor="dark">
          {loading ? (
            <div className="d-flex justify-content-center align-items-center gap-1">
              <Spinner animation="border" variant="light" size="sm" />
              <h6 className='text-white'>Cargando...</h6>
            </div>
          ) : !tournaments || tournaments.length === 0 ? (
            <p>No hay torneos disponibles</p>
          ) : (
            <Form>
              <Form.Select
                onChange={(ev) =>
                  setSelectedTournament(Number(ev.target.value))
                }
              >
                <option value={0}>Seleccione un torneo</option>
                {tournaments.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </Form.Select>
            </Form>
          )}
        </CardComp>
      </div>
      <Nav fill variant="tabs" defaultActiveKey="/registrados" className="mt-3">
        <Nav.Item>
          <Nav.Link eventKey={"/registrados"}>Alumnos registrados</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Alumnos para inscribir</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
