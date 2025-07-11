import useUsers from "../hooks/useUsers";
import CardComp from "../components/CardComp";
import SelectTournamentComp from "../components/SelectTournamentComp";
import useTournaments from "../hooks/useTournaments";
import { Container, Spinner } from "react-bootstrap";
import FilterScoresComp from "../components/FilterScoresComp";
import useScores from "../hooks/useScores";
import type { FilterScores } from "../validation/filterScoresValidatorSchema";
import { useState } from "react";
import { ScoresTableComp } from "../components/TableComp";
import PaginationComp from "../components/PaginationComp";

const HistorialPuntajes = () => {
  const { user } = useUsers();
  const {
    selectedTournament,
    setSelectedTournament,
    pastTournaments,
    loading,
  } = useTournaments();
  const {
    handleGetScoresByCategoryAndLevel,
    scores,
    loading: loadingScores,
    scoresPagination,
  } = useScores();
  const [loadingFilter, setLoadingFilter] = useState(true);
  const [actualPage, setActualPage] = useState(1);
  const [filters, setFilters] = useState<FilterScores | null>(null);

  const condition = selectedTournament !== 0 && loadingFilter === false;

  const handleSubmit = (values: FilterScores) => {
    setLoadingFilter(false);
    handleGetScoresByCategoryAndLevel(
      {
        ...values,
        id_tournament: selectedTournament,
      },
      actualPage
    );
  };

  const handlePageChange = async (page: number) => {
    if (filters) {
      await handleGetScoresByCategoryAndLevel(
        { ...filters, id_tournament: selectedTournament },
        page
      );
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-start min-vh-60 pt-5">
        <CardComp user={user} color="dark" textColor="white">
          <SelectTournamentComp
            selectedTournament={selectedTournament}
            setSelectedTournament={setSelectedTournament}
            tournaments={pastTournaments}
            loading={loading}
          />
        </CardComp>
      </div>
      <Container>
        {selectedTournament !== 0 && (
          <FilterScoresComp
            submitFilter={handleSubmit}
            setFilters={setFilters}
          />
        )}
        {condition && (
          <>
            {loadingScores ? (
              <div className="d-flex justify-content-center gap-1">
                <Spinner animation="border" variant="dark" />
                <h6 className="text-white">Cargando...</h6>
              </div>
            ) : scores && scores.length > 0 ? (
              <>
                <ScoresTableComp
                  scores={scores}
                  headers={[
                    "DNI del alumno",
                    "Nombre y apellido del alumno",
                    "Gimnasio",
                    "Puntaje",
                  ]}
                />
                {scoresPagination && (
                  <PaginationComp
                    pagination={scoresPagination}
                    setActualPage={setActualPage}
                    handlePageChange={handlePageChange}
                  />
                )}
              </>
            ) : (
              <h5 className="text-center">
                No hay alumnos registrados en este torneo
              </h5>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default HistorialPuntajes;
