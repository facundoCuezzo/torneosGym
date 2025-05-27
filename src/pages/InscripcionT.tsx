import Dropdown from 'react-bootstrap/Dropdown';

export default function InscripcionT() {
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
      <div className="card text-bg-warning mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-header">Socio: NIEVA, TOMAS RODRIGO</div>
        <div className="card-body">
          <h5 className="card-title">Numero Socio: 905</h5>
          <p className="card-text">
            Categoria: adherente /activo
          </p>
          <p className="card-text">
            Estado:Activo / desactivo
          </p>
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
      </div>
    </div>
  );
}