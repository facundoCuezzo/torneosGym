import SelectTournamentComp from "../components/SelectTournamentComp";
import useUsers from "../hooks/useUsers";
import CardComp from "../components/CardComp";
import useTournaments from "../hooks/useTournaments";
import { Spinner } from "react-bootstrap";
import FilterComp from "../components/FilterComp";

export default function Puntajes() {
  const { user } = useUsers();
  const {
    tournaments,
    selectedTournament,
    setSelectedTournament,
    loading,
    membersTournaments
  } = useTournaments();

  return (
    <div className="d-flex flex-column align-items-center pt-5" style={{ minHeight: "60vh" }}>
     
      <CardComp user={user} color="light" textColor="dark">
        {loading ? (
          <div className="d-flex justify-content-center gap-1">
            <Spinner animation="border" variant="light" size="sm" />
            <h6 className="text-white">Cargando...</h6>
          </div>
        ) : !tournaments || tournaments.length === 0 ? (
          <p>No hay torneos disponibles</p>
        ) : (
          <SelectTournamentComp
            selectedTournament={selectedTournament}
            setSelectedTournament={setSelectedTournament}
            tournaments={tournaments || []}
          />
        )}
      </CardComp>
  
      {selectedTournament !== 0 && (
        <div className="mt-3 w-100" style={{ maxWidth: 600 }}>
          <FilterComp
  color="light"
  textColor="dark"
  submitFilter={(filtro) => {
    console.log("Filtro enviado:", filtro);
  }}
/>
           <table className="table mt-3">
      <thead>
        <tr>
          <th>DNI</th>
          <th>Nombre</th>
          <th>Categoría</th>
          <th>Nivel</th>
        </tr>
      </thead>
      <tbody>
        {/* Reemplaza esto por el array filtrado si tienes lógica de filtro */}
        {membersTournaments && membersTournaments.map((alumno) => (
          <tr key={alumno.id_member}>
            <td>{alumno.dni}</td>
            <td>{alumno.gym}</td>
            <td>{alumno.member}</td>
            <td>{alumno.id_tournament}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
      )}
    
    </div>
  );
}