import SelectTournamentComp from "../components/SelectTournamentComp";
import useUsers from "../hooks/useUsers";
import CardComp from "../components/CardComp";
import useTournaments from "../hooks/useTournaments";
import { Spinner } from "react-bootstrap";
import FilterComp from "../components/FilterComp";
import { useState } from "react";

export default function Puntajes() {
  const { user } = useUsers();
  const {
    tournaments,
    selectedTournament,
    setSelectedTournament,
    loading,
    membersTournaments,
  } = useTournaments();

  const [showModal, setShowModal] = useState(false);
  const [selectedAlumno, setSelectedAlumno] = useState<MembersTournaments | null>(null);
  const [puntajes, setPuntajes] = useState<(number | string)[]>([]);

  const handleOpenModal = (alumno: MembersTournaments) => {
    setSelectedAlumno(alumno);
    setPuntajes(["", "", "", ""]);
    setShowModal(true);
  };

  const handleChangePuntaje = (index: number, value: number | "") => {
    setPuntajes((prev) => {
      const nuevos = [...prev];
      nuevos[index] = value === "" ? "" : Number(value);
      return nuevos;
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAlumno(null);
    setPuntajes(["", "", "", ""]);
  };

  const handleSavePuntaje = () => {
    alert(
      `Puntajes guardados para ${selectedAlumno?.member} (DNI: ${selectedAlumno?.dni}): ${puntajes.join(", ")}`
    );
    handleCloseModal();
  };

  return (
    <div className="d-flex flex-column align-items-center pt-5" style={{ minHeight: "60vh" }}>
      <CardComp user={user} color="light" textColor="dark">
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
            tournaments={tournaments || []}
          />
        )}
      </CardComp>

      {selectedTournament !== 0 && (
        <div className="mt-3 w-100" style={{ maxWidth: 900 }}>
          <FilterComp
            color="light"
            textColor="dark"
            submitFilter={(filtro) => {
              console.log("Filtro enviado:", filtro);
            }}
          />
          <table className="table mt-3">
            <thead>
              <tr>
                <th>DNI</th>
                <th>Nombre</th>
                <th>Gimnasio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {membersTournaments && membersTournaments.length > 0 ? (
                membersTournaments.map((alumno: MembersTournaments) => (
                  <tr key={alumno.id_member}>
                    <td>{alumno.dni}</td>
                    <td>{alumno.member}</td>
                    <td>{alumno.gym}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => handleOpenModal(alumno)}
                      >
                        Puntuar alumno
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center">
                    No hay alumnos registrados en este torneo
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {showModal && selectedAlumno && (
        <div className="modal show d-block" tabIndex={-1} style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Puntuar alumno</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Puntuar a <b>{selectedAlumno.member}</b> (DNI: {selectedAlumno.dni})
                </p>
                <div className="row">
                  {[0, 1, 2, 3].map((i) => (
                    <div className="col-6 mb-2" key={i}>
                      <input
                        type="number"
                        className="form-control"
                        placeholder={`Puntaje ${i + 1}`}
                        value={puntajes[i]}
                        min={0}
                        max={100}
                        onChange={(e) =>
                          handleChangePuntaje(i, e.target.value === "" ? "" : Number(e.target.value))
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSavePuntaje}
                  disabled={puntajes.some((p) => p === "" || isNaN(Number(p as number)))}
                >
                  Guardar puntajes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}