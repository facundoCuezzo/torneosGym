import { Container, Spinner } from "react-bootstrap";
import useUsers from "../hooks/useUsers";
import useMembers from "../hooks/useMembers";
import CardComp from "../components/CardComp";
import { MembersTableComp } from "../components/TableComp";
import CreateMemberComp from "../components/CreateMemberComp";
import Swal from "sweetalert2";
import FilterComp from "../components/FilterComp";
import type { FilterMembers } from "../validation/filterMembersValidatorSchema";

export default function Alumnos() {
  const { user } = useUsers();
  const { members, handleDeleteMember, handleGetMembers, loading } =
    useMembers();

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

  const submitFilter = async (values: FilterMembers) => {
    console.log(values);
    await handleGetMembers(values);
  };

  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-center">
        <CardComp user={user} color="danger" textColor="white" />
      </div>
      <div className="d-flex justify-content-between">
        <h3>Tabla de alumnos</h3>
        <CreateMemberComp />
      </div>
      <hr />
      <h4>Filtrar por:</h4>
      <FilterComp submitFilter={submitFilter} />
      <hr />
      {!members || members.length === 0 ? (
        <h4 className="text-center">No se encontraron alumnos</h4>
      ) : loading ? (
        <div className="d-flex flex-column align-items-center justify-content-center">
          <Spinner variant="dark" />
          <h4>Obteniendo alumnos...</h4>
        </div>
      ) : (
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
      )}
    </Container>
  );
}
