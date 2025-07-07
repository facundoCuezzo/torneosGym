import { Form, Spinner } from "react-bootstrap";

interface Props {
  selectedTournament: number;
  setSelectedTournament: React.Dispatch<React.SetStateAction<number>>;
  tournaments: Tournament[] | null;
  loading: boolean;
}

const SelectTournamentComp: React.FC<Props> = ({
  selectedTournament,
  setSelectedTournament,
  tournaments,
  loading,
}) => {
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center gap-1">
          <Spinner animation="border" variant="light" size="sm" />
          <h6 className="text-white">Cargando...</h6>
        </div>
      ) : !tournaments || tournaments.length === 0 ? (
        <p>No hay torneos disponibles</p>
      ) : (
        <Form>
          <Form.Select
            value={selectedTournament}
            onChange={(ev) => setSelectedTournament(Number(ev.target.value))}
          >
            <option value={0}>Seleccione un torneo</option>
            {tournaments.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </Form.Select>
        </Form>
      )}
    </>
  );
};

export default SelectTournamentComp;
