import { toast } from "sonner";
import useTournamentsContext from "./useTournamentsContext";
import useUsers from "./useUsers";
import {
  createTournament,
  deleteTournament,
  getMembersNotInTournament,
  getMembersTournaments,
  getTournaments,
} from "../helpers/tournamentsQueries";
import { useCallback, useEffect, useState } from "react";
import useMembersTournamentsContext from "./useMembersTournamentsContext";

const useTournaments = () => {
  const { tournaments, setTournaments } = useTournamentsContext();
  const {
    membersTournaments,
    setMembersTournaments,
    membersNotInTournament,
    setMembersNotInTournament,
  } = useMembersTournamentsContext();

  const { handleLogout, user } = useUsers();
  const [loading, setLoading] = useState(false);

  const handleGetTournaments = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getTournaments();
      setTournaments(res.tournaments);
    } catch (err) {
      const error = err as ErrorResponse;
      toast.error(error.error);
      if (error.redirect) {
        await handleLogout();
      }
    } finally {
      setLoading(false);
    }
  }, [handleLogout, setTournaments]);

  const handleGetMembersTournaments = useCallback(
    async (id_tournament: number) => {
      if (!user) {
        toast.error(
          "Debe iniciar sesión para ver los alumnos registrados a este torneo"
        );
        return;
      }
      try {
        setLoading(true);
        const resMT = await getMembersTournaments(id_tournament, user.userId);
        setMembersTournaments(resMT.membersTournaments);
        const resMNT = await getMembersNotInTournament(
          id_tournament,
          user.userId
        );
        setMembersNotInTournament(resMNT.members);
      } catch (err) {
        const error = err as ErrorResponse;
        toast.error(error.error);
        if (error.redirect) {
          await handleLogout();
        }
      } finally {
        setLoading(false);
      }
    },
    [handleLogout, setMembersTournaments, setMembersNotInTournament, user]
  );

  useEffect(() => {
    if (user && tournaments === null) {
      handleGetTournaments();
    }
  }, [user, tournaments, handleGetTournaments]);

  const handleCreateTournament = async (tournament: CreateTournament) => {
    if (!user || user.role !== "Administrador") {
      toast.error(
        "Debe iniciar sesión y ser Administrador para crear un torneo"
      );
      return;
    }
    try {
      const newTournament = await createTournament(tournament);
      toast.success(newTournament.message);
      setTournaments([...(tournaments || []), newTournament.tournament]);
      return true;
    } catch (err) {
      const error = err as ErrorResponse;

      toast.error(error.error);
      if (error.redirect) {
        handleLogout();
      }
    }
  };

  const handleDeleteTournament = async (id: number) => {
    try {
      const res = await deleteTournament(id);
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
    tournaments,
    handleCreateTournament,
    handleDeleteTournament,
    handleGetMembersTournaments,
    membersTournaments,
    membersNotInTournament,
    loading,
  };
};

export default useTournaments;
