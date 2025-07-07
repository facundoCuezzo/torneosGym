import { toast } from "sonner";
import useTournamentsContext from "./useTournamentsContext";
import useUsers from "./useUsers";
import {
  createTournament,
  deleteTournament,
  getMembersNotInTournament,
  getMembersTournaments,
  getMembersTournamentsByGym,
  getTournaments,
  updatePayMemberTournament,
} from "../helpers/tournamentsQueries";
import { useCallback, useEffect, useState } from "react";
import useMembersTournamentsContext from "./useMembersTournamentsContext";
import type { FilterScores } from "../validation/filterScoresValidatorSchema";

const useTournaments = () => {
  const { tournaments, setTournaments } = useTournamentsContext();
  const {
    membersTournaments,
    setMembersTournaments,
    membersNotInTournament,
    setMembersNotInTournament,
    selectedTournament,
    setSelectedTournament,
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

  const handleGetMembersTournaments = async (dataIds: FilterScores) => {
    try {
      setLoading(true);
      const resMT = await getMembersTournaments({
        ...dataIds,
        id_tournament: selectedTournament,
      });
      setMembersTournaments(resMT.membersTournaments);
    } catch (err) {
      const error = err as ErrorResponse;
      toast.error(error.error);
      if (error.redirect) {
        await handleLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGetMembersTournamentsByGym = async (dataIds: FilterScores) => {
    if (!user) {
      toast.error(
        "Debe iniciar sesión para ver los alumnos registrados a este torneo"
      );
      return;
    }
    try {
      setLoading(true);
      const resMT = await getMembersTournamentsByGym({
        ...dataIds,
        id_gym: user.userId,
        id_tournament: selectedTournament,
      });
      setMembersTournaments(resMT.membersTournaments);
      const resMNT = await getMembersNotInTournament({
        ...dataIds,
        id_gym: user.userId,
        id_tournament: selectedTournament,
      });
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
  };

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
      setTournaments([...(tournaments ?? []), newTournament.tournament]);
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

  const handleUpdatePayMemberTournament = async (
    data: UpdatePayMemberTournamentData
  ) => {
    try {
      const res = await updatePayMemberTournament(data);
      setMembersTournaments((prevState) =>
        (prevState ?? []).map((mt) =>
          mt.id_member === data.id_member &&
          mt.id_tournament === data.id_tournament
            ? { ...mt, paid: data.paid }
            : mt
        )
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
    tournaments,
    handleCreateTournament,
    handleDeleteTournament,
    handleGetMembersTournaments,
    handleGetMembersTournamentsByGym,
    handleUpdatePayMemberTournament,
    membersTournaments,
    membersNotInTournament,
    loading,
    selectedTournament,
    setSelectedTournament,
    setMembersTournaments,
  };
};

export default useTournaments;
