import React from "react";
import { Button, Table } from "react-bootstrap";

interface Props {
  members: FullMemberInfo[] | null;
  headers: string[];
}

export const MembersTableComp: React.FC<Props> = ({ members, headers }) => {
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
            <td>
              {member.category}
            </td>
            <td className='text-center'>{member.level}</td>
            <td>
              <div className='d-flex justify-content-evenly'>
                <Button variant="info">Editar</Button>
                <Button variant="danger">Eliminar</Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
