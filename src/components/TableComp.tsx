import React from "react";
import { Button, Table } from "react-bootstrap";
import { Trash3Fill } from "react-bootstrap-icons";
import CreateMemberComp from "./CreateMemberComp";

interface MembersProps {
  members: FullMemberInfo[] | null;
  headers: string[];
  onClickDelete: (id: number) => void;
}

interface TournamentsProps {
  tournaments: Tournament[] | null;
  headers: string[];
  onClickDelete: (id: number) => void;
}

export const MembersTableComp: React.FC<MembersProps> = ({
  members,
  headers,
  onClickDelete,
}) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr className="text-center">
          {headers.map((option) => (
            <th key={option}>{option}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {members?.map((member) => (
          <tr key={member.id}>
            <td>{member.dni}</td>
            <td>{member.full_name}</td>
            <td>
              {member.birth_date} | {member.age} años
            </td>
            <td>{member.gym}</td>
            <td>{member.category}</td>
            <td className="text-center">{member.level}</td>
            <td>
              <div className="d-flex justify-content-evenly">
                <CreateMemberComp member={member} />
                <Button
                  variant="danger"
                  className="d-flex align-items-center gap-1"
                  onClick={() => onClickDelete(member.id)}
                >
                  <Trash3Fill />
                  <span>Eliminar</span>
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export const TournamentsTableComp: React.FC<TournamentsProps> = ({
  tournaments,
  headers,
  onClickDelete,
}) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr className="text-center">
          {headers.map((option) => (
            <th key={option}>{option}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tournaments?.map((tournament) => (
          <tr key={tournament.id}>
            <td>{tournament.name}</td>
            <td className='text-center'>{tournament.date_range}</td>
            <td className='text-center'>{tournament.inscription_date_end}</td>
            <td>
              <div className="d-flex justify-content-center">
                <Button
                  variant="danger"
                  className="d-flex align-items-center gap-1"
                  onClick={() => onClickDelete(tournament.id)}
                >
                  <Trash3Fill />
                  <span>Eliminar</span>
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
