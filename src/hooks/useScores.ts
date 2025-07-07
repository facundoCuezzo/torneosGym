import { toast } from "sonner";
import useScoresContext from "./useScoresContext";
import useUsers from "./useUsers";
import {
  getScoresByLevelAndCategory,
  getScoresByLevelCategoryAndGym,
} from "../helpers/scoresQueries";
import { useState } from "react";
import { createScore } from "../helpers/scoresQueries";
import useTournaments from "./useTournaments";

const useScores = () => {
  const { scores, setScores } = useScoresContext();
  const { setMembersTournaments } = useTournaments();
  const { user, handleLogout } = useUsers();
  const [loading, setLoading] = useState(false);

  const handleGetScoresByCategoryAndLevel = async (data: FilterScoresData) => {
    if (!user) {
      toast.error("Debe iniciar sesión para ver los puntajes");
      return;
    }
    try {
      setLoading(true);
      const res = await getScoresByLevelAndCategory(data);
      setScores(res.scores);
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

  const handleGetScoresByGym = async (data: FilterScoresData) => {
    if (!user) {
      toast.error("Debe iniciar sesión para ver los puntajes");
      return;
    }
    try {
      setLoading(true);
      const res = await getScoresByLevelCategoryAndGym({
        ...data,
        id_gym: user.userId,
      });
      setScores(res.scores);
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

  const handleCreateScore = async (
    puntaje: number,
    member: MembersTournaments
  ) => {
    if (!user) {
      toast.error("Debe iniciar sesión para crear un puntaje");
      return;
    }
    try {
      setLoading(true);
      const res = await createScore({
        id_member: member.id_member,
        id_tournament: member.id_tournament,
        puntaje,
      });
      setMembersTournaments((prevState) =>
        (prevState ?? []).filter((m) => m.id_member !== member.id_member)
      );
      toast.success(res.message);
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

  return {
    scores,
    handleGetScoresByCategoryAndLevel,
    handleGetScoresByGym,
    handleCreateScore,
    loading,
  };
};

export default useScores;
