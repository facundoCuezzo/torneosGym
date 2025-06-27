import useUsers from "../hooks/useUsers";
import CardComp from "../components/CardComp";

function MisTorneos() {
  const { user } = useUsers();
  return (
    <div className="d-flex justify-content-center align-items-start min-vh-60 pt-5">
      <CardComp user={user} color="info" textColor="dark" />
    </div>
  );
}

export default MisTorneos;
