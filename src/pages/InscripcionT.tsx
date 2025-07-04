import useUsers from "../hooks/useUsers";
import CardComp from "../components/CardComp";
import useTournaments from "../hooks/useTournaments";
import { Container, Form, Nav, Spinner } from "react-bootstrap";
import { useState } from "react";
import {
  MembersTableComp,
  MembersTournamentsTableComp,
} from "../components/TableComp";
import useMembers from "../hooks/useMembers";

export default function InscripcionTorneos() {
  const { user } = useUsers();
  const { handleRegisterToTournament } = useMembers();
  const {
    tournaments,
    loading,
    selectedTournament,
    setSelectedTournament,
    membersTournaments,
    membersNotInTournament,
    handleUpdatePayMemberTournament,
  } = useTournaments();
  const [activeKey, setActiveKey] = useState("registrados");

  const handlePaid = async (
    id_member: number,
    id_tournament: number,
    paid: boolean
  ) => {
    await handleUpdatePayMemberTournament({ paid, id_tournament, id_member });
  };

  const registerToTournament = (member: FullMemberInfo) => {
    handleRegisterToTournament(member);
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center min-vh-60 pt-5">
        <CardComp user={user} color="warning" textColor="dark">
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
                onChange={(ev) =>
                  setSelectedTournament(Number(ev.target.value))
                }
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
        </CardComp>
      </div>
      {selectedTournament !== 0 && (
        <Nav fill variant="tabs" defaultActiveKey={activeKey} className="mt-3">
          <Nav.Item>
            <Nav.Link
              eventKey={"registrados"}
              onClick={() => setActiveKey("registrados")}
            >
              Alumnos registrados
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey={"/inscribir"}
              onClick={() => setActiveKey("inscribir")}
            >
              Alumnos para inscribir
            </Nav.Link>
          </Nav.Item>
        </Nav>
      )}
      <Container>
        {selectedTournament !== 0 && activeKey === "registrados" ? (
          <div className="mt-3">
            {loading ? (
              <div className="d-flex justify-content-center gap-1">
                <Spinner animation="border" variant="dark" />
                <h4 className="text-white">Cargando...</h4>
              </div>
            ) : !membersTournaments || membersTournaments.length === 0 ? (
              <h4 className="text-center mt-3">
                No hay alumnos registrados en este torneo
              </h4>
            ) : (
              <MembersTournamentsTableComp
                headers={[
                  "DNI del alumno",
                  "Nombre y apellido del alumno",
                  "Gimnasio",
                  "Pagado",
                  "Acciones",
                ]}
                membersTournaments={membersTournaments}
                onClickPaid={handlePaid}
              />
            )}
          </div>
        ) : selectedTournament !== 0 && activeKey === "inscribir" ? (
          <div className="mt-3">
            {loading ? (
              <div className="d-flex justify-content-center gap-1">
                <Spinner animation="border" variant="dark" />
                <h4 className="text-white">Cargando...</h4>
              </div>
            ) : !membersNotInTournament ||
              membersNotInTournament.length === 0 ? (
              <h4 className="text-center mt-3">
                No hay alumnos para inscribir al torneo
              </h4>
            ) : (
              <MembersTableComp
                headers={[
                  "DNI",
                  "Nombre",
                  "Fecha de nacimiento",
                  "Gimnasio",
                  "Categoría",
                  "Nivel",
                  "Acciones",
                ]}
                members={membersNotInTournament}
                onClickDelete={() => {}}
                onClickRegister={registerToTournament}
                actions
              />
            )}
          </div>
        ) : (
          ""
        )}
      </Container>
    </>
  );
}
