import env from "../config/env";
import { refreshAccessToken } from "./authQueries";

const URL = `${env.URL_BACK_LOCAL}/puntajes`;

export const getScoresByLevelAndCategory = async ({
  id_category,
  id_level,
  id_tournament,
}: FilterScoresData): Promise<GetScoresByLevelAndCategoryResponse> => {
  const response = await fetch(
    `${URL}/tournament/${id_tournament}/category/${id_category}/level/${id_level}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  if (response.status === 401) {
    await refreshAccessToken();
    return getScoresByLevelAndCategory({
      id_category,
      id_level,
      id_tournament,
    });
  }
  if (!response.ok) {
    const error = await response.json();
    throw error;
  }
  const res: GetScoresByLevelAndCategoryResponse = await response.json();
  return res;
};
export const getScoresByLevelCategoryAndGym = async ({
  id_category,
  id_level,
  id_tournament,
  id_gym,
}: FilterScoresData): Promise<GetScoresByLevelAndCategoryResponse> => {
  const response = await fetch(
    `${URL}/tournament/${id_tournament}/category/${id_category}/level/${id_level}/gym/${id_gym}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  if (response.status === 401) {
    await refreshAccessToken();
    return getScoresByLevelAndCategory({
      id_category,
      id_level,
      id_tournament,
      id_gym,
    });
  }
  if (!response.ok) {
    const error = await response.json();
    throw error;
  }
  const res: GetScoresByLevelAndCategoryResponse = await response.json();
  return res;
};


/* POST -----------------------------------------------  */
export const createScore = async (data: {
  id_tournament: number;
  id_category: number;
  id_level: number;
  puntaje: number;
  
}): Promise<any> => {
  const response = await fetch(`${URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (response.status === 401) {
    await refreshAccessToken();
    return createScore(data);
  }

  if (!response.ok) {
    const error = await response.json();
    throw error;
  }

  const res = await response.json();
  return res.score;
};
