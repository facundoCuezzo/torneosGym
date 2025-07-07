import useUsers from "../hooks/useUsers";
import CardComp from "../components/CardComp";
import SelectTournamentComp from "../components/SelectTournamentComp";
import useTournaments from "../hooks/useTournaments";
import { Container } from "react-bootstrap";
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
          <SelectTournamentComp
            selectedTournament={selectedTournament}
            setSelectedTournament={setSelectedTournament}
            tournaments={tournaments}
            loading={loading}
          />
        </CardComp>
      </div>
      <Container>
        {selectedTournament !== 0 && (
          <FilterScoresComp submitFilter={handleSubmit} />
        )}
      </Container>
    </>
  );
}

export default MisTorneos;
