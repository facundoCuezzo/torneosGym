export default function MiCuenta() {
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
      <div className="card text-bg-primary mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-header">Socio: NIEVA, TOMAS RODRIGO</div>
        <div className="card-body">
          <h5 className="card-title">Numero Socio: 905</h5>
          <p className="card-text">
            Categoria: adherente /activo
          </p>
           <p className="card-text">
            Estado:Activo / desactivo
          </p>
        </div>
      </div>
    </div>
  );
}

/*Numero Socio: ejemplo 905
Socio: ejemplo NIEVA, TOMAS RODRIGO
Categoria: ejemplo ADHERENTE /activo
Estado: ejemplo ACTIVO /desactivo */