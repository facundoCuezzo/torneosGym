import SelectTournamentComp from "../components/SelectTournamentComp";
import useUsers from "../hooks/useUsers";
import CardComp from "../components/CardComp";
import useTournaments from "../hooks/useTournaments";
import FilterScoresComp from "../components/FilterScoresComp";
import { Container, Spinner } from "react-bootstrap";
import { useState } from "react";
import { MembersTournamentsTableComp } from "../components/TableComp";
import type { FilterScores } from "../validation/filterScoresValidatorSchema";

export default function Puntajes() {
  const { user } = useUsers();
  const {
    tournaments,
    selectedTournament,
    setSelectedTournament,
    loading,
    membersTournaments,
    handleGetMembersTournaments,
  } = useTournaments();
  const [loadingFilter, setLoadingFilter] = useState(true);

  const condition = selectedTournament !== 0 && loadingFilter === false;

  const handleFilter = (values: FilterScores) => {
    setLoadingFilter(false);
    handleGetMembersTournaments(values);
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center mt-5">
        <CardComp user={user} color="light" textColor="dark">
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
          <FilterScoresComp submitFilter={handleFilter} />
        )}
        {condition && (
          <>
            {loading ? (
              <div className="d-flex justify-content-center gap-1">
                <Spinner animation="border" variant="dark" />
                <h6 className="text-white">Cargando...</h6>
              </div>
            ) : membersTournaments && membersTournaments.length > 0 ? (
              <MembersTournamentsTableComp
                membersTournaments={membersTournaments}
                headers={[
                  "DNI del alumno",
                  "Nombre y apellido del alumno",
                  "Gimnasio",
                  "Acciones",
                ]}
                showPaidColumn={false}
                location="scores"
              />
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
}
