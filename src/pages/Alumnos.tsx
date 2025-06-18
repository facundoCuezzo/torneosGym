import { Card, Button } from "react-bootstrap";

export default function Alumnos() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Centra la card
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
            Gimnasio: 
          </Card.Header>
          <Card.Body className="text-center">
            <Card.Title style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
              Numero Asociado: 
            </Card.Title>
            <Card.Text style={{ fontSize: "1.1rem" }}>
              Categoría: 
            </Card.Text>
          </Card.Body>
        </Card>
      ))}

      <div style={{ width: "100%", maxWidth: "110rem", display: "flex", justifyContent: "flex-start", padding: "30px" }}>
        <Button variant="danger">Añadir alumno</Button>
      </div>
    </div>
  );
}