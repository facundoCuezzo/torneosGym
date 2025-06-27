interface LoginFormData {
  full_name: string;
  password: string;
}
interface RegisterFormData {
  full_name: string;
  password: string;
  id_role: number;
}
interface ErrorResponse {
  error: string;
  redirect?: boolean;
}

type UserRole = "Administrador" | "Gimnasio" | "Juez";

interface UserInfo {
  userId: number;
  role: UserRole;
  full_name: string;
}