import { Button, Container } from "react-bootstrap";
import useUsers from "../hooks/useUsers";
import useMembers from "../hooks/useMembers";
import CardComp from "../components/CardComp";
import { MembersTableComp } from "../components/TableComp";

export default function Alumnos() {
  const { user } = useUsers();
  const { members } = useMembers();
  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-center">
        <CardComp user={user} color="danger" textColor="white" />
      </div>
      <div className="d-flex justify-content-between">
        <h3>Alumnos</h3>
        <Button variant="danger">Añadir alumno</Button>
      </div>
      <hr />
      <MembersTableComp
        members={members}
        options={[
          "DNI",
          "Nombre",
          "Fecha de nacimiento | Edad",
          "Gimnasio",
          "Categoría",
          "Acciones",
        ]}
      />
    </Container>
  );
}
