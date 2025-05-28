import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';

export default function Puntajes() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "60vh",
        paddingTop: "90px"
      }}
    >
      <Card
        bg="light"
        text="dark"
        style={{ width: '35rem' }}
        className="mb-2"
      >
        <Card.Header className="text-center" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Socio: NIEVA, TOMAS RODRIGO
        </Card.Header>
        <Card.Body className="text-center">
          <Card.Title style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            Numero Socio: 905
          </Card.Title>
          <Card.Text style={{ fontSize: "1.1rem" }}>
            Categoría: Adherente / Activo
          </Card.Text>
          <Card.Text style={{ fontSize: "1.1rem" }}>
            Estado: Activo / Desactivo
          </Card.Text>
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