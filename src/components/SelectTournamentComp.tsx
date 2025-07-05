import { Form } from "react-bootstrap";

interface Props {
  selectedTournament: number;
  setSelectedTournament: React.Dispatch<React.SetStateAction<number>>;
  tournaments: Tournament[];
}

const SelectTournamentComp: React.FC<Props> = ({
  selectedTournament,
  setSelectedTournament,
  tournaments,
}) => {
  return (
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
  );
};

export default SelectTournamentComp;
