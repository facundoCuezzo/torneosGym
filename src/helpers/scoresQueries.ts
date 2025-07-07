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

export const createScore = async (
  data: CreateScoreData
): Promise<CreateScoreResponse> => {
  const response = await fetch(
    `${URL}/${data.id_member}/tournament/${data.id_tournament}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ puntaje: data.puntaje }),
    }
  );
  if (response.status === 401) {
    await refreshAccessToken();
    return createScore(data);
  }
  if (!response.ok) {
    const error = await response.json();
    throw error;
  }
  const res: CreateScoreResponse = await response.json();
  return res;
};
