import useMembersContext from "./useMembersContext";
import useUsers from "./useUsers";
import {
  createMember,
  deleteMember,
  getMembersByGym,
  updateMember,
} from "../helpers/membersQueries";
import { toast } from "sonner";
import { parseMember } from "../utils/extraFunctions";
import type { CreateMemberFormData } from "../validation/createMemberValidatorSchema";
import { useState } from "react";

const useMembers = () => {
  const { members, setMembers } = useMembersContext();
  const { user, handleLogout } = useUsers();
  const [loading, setLoading] = useState(false);

  const handleGetMembers = async (params: Params) => {
    try {
      if (user) {
        setLoading(true);
        const res = await getMembersByGym(params, user.userId);
        setMembers(res.members);
      }
    } catch (error) {
      const err = error as ErrorResponse;
      toast.error(err.error);
      if (err.redirect) {
        await handleLogout();
      }
    } finally {
      setLoading(false);
    }
  };

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
      if (error.redirect) {
        await handleLogout();
      }
    }
  };

  const handleUpdateMember = async (
    id: number,
    member: CreateMemberFormData
  ) => {
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
      const res = await updateMember(id, FullMemberData);
      toast.success(res.message);

      const updatedParsedMember = parseMember(res.member, user);
      setMembers(
        (members ?? []).map((m) =>
          m.id === updatedParsedMember.id ? updatedParsedMember : m
        )
      );
      return res;
    } catch (err) {
      const error = err as ErrorResponse;
      toast.error(error.error);
      if (error.redirect) {
        await handleLogout();
      }
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
      if (error.redirect) {
        await handleLogout();
      }
    }
  };
  return {
    members,
    setMembers,
    handleCreateMember,
    handleDeleteMember,
    handleGetMembers,
    handleUpdateMember,
    loading,
  };
};

export default useMembers;
