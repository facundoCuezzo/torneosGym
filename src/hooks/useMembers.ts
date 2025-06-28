import { useEffect } from "react";
import useMembersContext from "./useMembersContext";
import useUsers from "./useUsers";
import {
  createMember,
  deleteMember,
  getMembersByGym,
} from "../helpers/membersQueries";
import { toast } from "sonner";
import { parseMember } from '../utils/parseFunctions';

const useMembers = () => {
  const { members, setMembers } = useMembersContext();
  const { user } = useUsers();

  useEffect(() => {
    if (user && members === null) {
      getMembersByGym(user.userId)
        .then((res) => setMembers(res.members))
        .catch((err) => {
          const error = err as ErrorResponse;
          toast.error(error.error);
        });
    }
  }, [user, members, setMembers]);

  const handleCreateMember = async (member: CreateMemberFormData) => {
    try {
      if (!user) {
        toast.error("Debe iniciar sesión para crear un miembro");
        return;
      }
      const FullMemberData: CreateMember = {
        ...member,
        id_gym: user.userId,
        dni: Number(member.dni),
      };
      const res = await createMember(FullMemberData);
      toast.success(res.message);

      const parsedMember = parseMember(res.member, user);      
      setMembers([...(members ?? []), parsedMember]);
      return res;
    } catch (err) {
      const error = err as ErrorResponse;
      toast.error(error.error);
    }
  };

  const handleDeleteMember = async (id: number) => {
    try {
      const res = await deleteMember(id);
      toast.success(res.message);

      const filteredMembers = members?.filter((member) => member.id !== id);
      if (!filteredMembers || filteredMembers?.length === 0) {
        toast.error(
          "Hubo un error al actualizar la lista de alumnos, por favor recargue la pagina"
        );
        return;
      }
      setMembers(filteredMembers);
    } catch (err) {
      const error = err as ErrorResponse;
      toast.error(error.error);
    }
  };
  return { members, setMembers, handleCreateMember, handleDeleteMember };
};

export default useMembers;
