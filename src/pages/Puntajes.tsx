import Dropdown from "react-bootstrap/Dropdown";
import useUsers from "../hooks/useUsers";
import CardComp from "../components/CardComp";

export default function Puntajes() {
  const { user } = useUsers();
  return (
    <div
      className="d-flex justify-content-center align-items-start pt-5"
      style={{ minHeight: "60vh" }}
    >
      <CardComp user={user} color="light" textColor="dark">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Seleccione el Torneo
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </CardComp>
    </div>
  );
}
