interface User {
    id: number;
    full_name: string;
    role: string;
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