import { toast } from "sonner";
import useScoresContext from "./useScoresContext";
import useUsers from "./useUsers";
import {
  getScoresByLevelAndCategory,
  getScoresByLevelCategoryAndGym,
} from "../helpers/scoresQueries";
import { useState } from "react";

const useScores = () => {
  const { scores, setScores } = useScoresContext();
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

  return {
    scores,
    handleGetScoresByCategoryAndLevel,
    handleGetScoresByGym,
    loading,
  };
};

export default useScores;
