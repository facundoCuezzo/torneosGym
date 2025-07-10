import useMembersContext from "./useMembersContext";
import useUsers from "./useUsers";
import {
  createMember,
  deleteMember,
  getMembersByGym,
  registerToTournament,
  updateMember,
} from "../helpers/membersQueries";
import { toast } from "sonner";
import { parseMember } from "../utils/extraFunctions";
import type { CreateMemberFormData } from "../validation/createMemberValidatorSchema";
import { useState } from "react";
import useMembersTournamentsContext from "./useMembersTournamentsContext";

const useMembers = () => {
  const { members, setMembers, membersPagination, setMembersPagination } =
    useMembersContext();
  const {
    selectedTournament,
    setMembersNotInTournament,
    setMembersTournaments,
  } = useMembersTournamentsContext();
  const { user, handleLogout } = useUsers();
  const [loading, setLoading] = useState(false);

  const handleGetMembers = async (params: Params, page: number) => {
    try {
      if (user) {
        setLoading(true);
        const res = await getMembersByGym(params, user.userId, page);
        console.log(res);
        setMembers(res.members);
        setMembersPagination(res.pagination);
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

      if (members && members.length < 20) {
        const parsedMember = parseMember(res.member, user);
        setMembers([...(members ?? []), parsedMember]);
      } else if (members && members.length === 20 && membersPagination) {
        setMembersPagination({
          ...membersPagination,
          total: membersPagination.total + 1,
          totalPages: membersPagination.totalPages + 1,
        });
      }
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

  const handleRegisterToTournament = async (member: FullMemberInfo) => {
    if (!user) {
      toast.error("Debe iniciar sesión para inscribir un alumno a un torneo");
      return;
    }
    try {
      const res = await registerToTournament({
        id_member: member.id,
        id_tournament: selectedTournament,
      });

      const newMember: MembersTournaments = {
        id_gym: user?.userId,
        id_member: member.id,
        id_tournament: res.member.id_tournament,
        member: member.full_name,
        gym: member.gym,
        paid: res.member.paid,
        dni: member.dni,
      };
      setMembersTournaments((prevState) => [...(prevState ?? []), newMember]);
      setMembersNotInTournament((prevState) =>
        (prevState ?? []).filter((m) => m.id !== member.id)
      );
      toast.success(res.message);
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
    handleRegisterToTournament,
    loading,
    membersPagination,
    setMembersPagination,
  };
};

export default useMembers;
