import { Card } from "react-bootstrap";
export default function Alumnos() {
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
      {[
           'Danger',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
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
              Estado: Activo /Desactivo
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}