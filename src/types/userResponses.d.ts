interface User {
    id: number;
    full_name: string;
    role: string;
}

interface CreateUserData {
    full_name: string;
    password: string;
    id_role: number;
}

interface LoginResponse {
  message: string;
  userId: number;
  logged: boolean;
}
interface GetAllUsersResponse {
    message: string;
    users: User[];
}
interface CreateUserResponse {
    message: string;
    user: Omit<User, "role"> & { id_role: number };
}