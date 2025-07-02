import { toast } from "sonner";
import useTournamentsContext from "./useTournamentsContext";
import useUsers from "./useUsers";
import {
  createTournament,
  deleteTournament,
  getTournaments,
} from "../helpers/tournamentsQueries";
import { useCallback, useEffect, useState } from "react";

const useTournaments = () => {
  const { tournaments, setTournaments } = useTournamentsContext();
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
    loading,
  };
};

export default useTournaments;
