interface User {
    id: number;
    full_name: string;
    role: string;
}
interface LoginResponse {
  message: string;
  userInfo: { userId: number; logged: boolean; role: string; full_name: string };
}
interface GetAllUsersResponse {
    message: string;
    users: User[];
}
interface GetOneUserResponse {
    message: string;
    user: User;
}
interface CreateUserResponse {
    message: string;
    user: Omit<User, "role"> & { id_role: number };
}