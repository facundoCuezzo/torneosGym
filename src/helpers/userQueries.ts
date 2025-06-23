import env from "../config/env";

const URL = `${env.URL_BACK_LOCAL}/users`;

export const login = async (data: LoginFormData) => {
  const response = await fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error: ErrorResponse = await response.json();
    throw error;
  }
  const res: LoginResponse = await response.json();
  return res;
};

export const getUsers = async () => {
    const response = await fetch(`${URL}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const error: ErrorResponse = await response.json();
      throw error;
    }
    const res: GetAllUsersResponse = await response.json();
    return res;
}

export const createUser = async (user: CreateUserData) => {
  const response = await fetch(`${URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
    credentials: "include",
  });
  if (!response.ok) {
    const error: ErrorResponse = await response.json();
    throw error;
  }
  const res: CreateUserResponse = await response.json();
  return res;
};

export const deleteUser = async () => {
  const response = await fetch(`${URL}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (!response.ok) {
    const error: ErrorResponse = await response.json();
    throw error;
  }
  const res: { message: string } = await response.json();
  return res;
}