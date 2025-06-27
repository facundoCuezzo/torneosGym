import env from "../config/env";
import { refreshAccessToken } from "./authQueries";

const URL = `${env.URL_BACK_LOCAL}/members`;

export const getMembersByGym = async (
  gymId: number
): Promise<GetMembersByGymResponse> => {
  const response = await fetch(`${URL}/${gymId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  if (response.status === 401) {
    await refreshAccessToken();
    return getMembersByGym(gymId);
  }
  if (!response.ok) {
    const error: ErrorResponse = await response.json();
    throw error;
  }
  const res: GetMembersByGymResponse = await response.json();
  console.log(res);
  return res;
};

export const createMember = async (
  member: CreateMember, gymId: number
): Promise<CreateMemberResponse> => {
  const response = await fetch(`${URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(member),
    credentials: "include",
  });
  if (response.status === 401) {
    await refreshAccessToken();
    return createMember(member, gymId);
  }
  if (!response.ok) {
    const error: ErrorResponse = await response.json();
    throw error;
  }
  const res: CreateMemberResponse = await response.json();
  return res;
};
