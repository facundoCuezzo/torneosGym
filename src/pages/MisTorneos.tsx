import Card from 'react-bootstrap/Card';

function MisTorneos() {
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
        'Info',
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
    </div>
  );
}

export default MisTorneos;