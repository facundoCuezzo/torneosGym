import { Container } from "react-bootstrap";
import useUsers from "../hooks/useUsers";
import useMembers from "../hooks/useMembers";
import CardComp from "../components/CardComp";
import { MembersTableComp } from "../components/TableComp";
import CreateMemberComp from "../components/CreateMemberComp";
import Swal from "sweetalert2";

export default function Alumnos() {
  const { user } = useUsers();
  const { members, handleDeleteMember } = useMembers();

  const onClickDelete = (id: number) => {
    Swal.fire({
      title: "¿Está seguro de eliminar este alumno?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16b800",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await handleDeleteMember(id);
      }
    });
  };

  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-center">
        <CardComp user={user} color="danger" textColor="white" />
      </div>
      <div className="d-flex justify-content-between">
        <h3>Alumnos</h3>
        <CreateMemberComp />
      </div>
      <hr />
      <MembersTableComp
        members={members}
        headers={[
          "DNI",
          "Nombre y apellido",
          "Fecha de nacimiento",
          "Gimnasio",
          "Categoría",
          "Nivel",
          "Acciones",
        ]}
        onClickDelete={onClickDelete}
      />
    </Container>
  );
}
