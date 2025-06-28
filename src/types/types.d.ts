interface LoginFormData {
  full_name: string;
  password: string;
}
interface RegisterFormData {
  full_name: string;
  password: string;
  id_role: number;
}
interface CreateMemberFormData {
  full_name: string;
  birth_date: string;
  dni: string;
  id_level: number;
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