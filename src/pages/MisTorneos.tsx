import useUsers from "../hooks/useUsers";
import CardComp from "../components/CardComp";
import SelectTournamentComp from "../components/SelectTournamentComp";
import useTournaments from "../hooks/useTournaments";
import { Container, Spinner } from "react-bootstrap";
import FilterScoresComp from "../components/FilterScoresComp";
import useScores from "../hooks/useScores";
import type { FilterScores } from "../validation/filterScoresValidatorSchema";

function MisTorneos() {
  const { user } = useUsers();
  const { selectedTournament, setSelectedTournament, tournaments, loading } =
    useTournaments();
  const { handleGetScoresByGym } = useScores();

  const handleSubmit = (values: FilterScores) => {
    handleGetScoresByGym({ ...values, id_tournament: selectedTournament });
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-start min-vh-60 pt-5">
        <CardComp user={user} color="info" textColor="dark">
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
              tournaments={tournaments}
            />
          )}
        </CardComp>
      </div>
      <Container>
        {selectedTournament !== 0 && (
          <>
            <h3>Historial de torneos</h3>
            <hr />
            <FilterScoresComp
              submitFilter={handleSubmit}
              color="info"
              textColor="dark"
            />
          </>
        )}
      </Container>
    </>
  );
}

export default MisTorneos;
