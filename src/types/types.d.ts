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
interface UserInfo {
  userId: number;
  role: string;
  full_name: string;
}