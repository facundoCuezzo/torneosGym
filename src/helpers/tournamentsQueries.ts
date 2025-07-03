import env from "../config/env";
import { refreshAccessToken } from "./authQueries";

const URL = `${env.URL_BACK_LOCAL}/tournaments`;

export const getTournaments = async (): Promise<GetTournamentsResponse> => {
  const response = await fetch(`${URL}/date`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (response.status === 401) {
    await refreshAccessToken();
    return getTournaments();
  }
  if (!response.ok) {
    const error: ErrorResponse = await response.json();
    throw error;
  }
  const data: GetTournamentsResponse = await response.json();
  return data;
};

export const createTournament = async (
  tournament: CreateTournament
): Promise<CreateTournamentResponse> => {
  const response = await fetch(`${URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tournament),
    credentials: "include",
  });
  if (response.status === 401) {
    await refreshAccessToken();
    return createTournament(tournament);
  }
  if (!response.ok) {
    const error: ErrorResponse = await response.json();
    throw error;
  }
  const data: CreateTournamentResponse = await response.json();
  return data;
};

export const deleteTournament = async (
  id: number
): Promise<{ message: string }> => {
  const response = await fetch(`${URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (response.status === 401) {
    await refreshAccessToken();
    return deleteTournament(id);
  }
  if (!response.ok) {
    const error: ErrorResponse = await response.json();
    throw error;
  }
  const data: { message: string } = await response.json();
  return data;
};

export const getMembersTournaments = async (
  id_tournament: number,
  id_gym: number
): Promise<GetMembersTournamentsResponse> => {
  const response = await fetch(`${URL}/${id_tournament}/gym/${id_gym}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (response.status === 401) {
    await refreshAccessToken();
    return getMembersTournaments(id_tournament, id_gym);
  }
  if (!response.ok) {
    const error: ErrorResponse = await response.json();
    throw error;
  }
  const res: GetMembersTournamentsResponse = await response.json();
  return res;
};

export const getMembersNotInTournament = async (
  id_tournament: number,
  id_gym: number
): Promise<GetMembersByGymResponse> => {
  const response = await fetch(`${URL}/not-in/${id_tournament}/gym/${id_gym}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (response.status === 401) {
    await refreshAccessToken();
    return getMembersNotInTournament(id_tournament, id_gym);
  }
  if (!response.ok) {
    const error: ErrorResponse = await response.json();
    throw error;
  }
  const res: GetMembersByGymResponse = await response.json();
  return res;
};
