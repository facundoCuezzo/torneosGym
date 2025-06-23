interface LoginFormData {
  full_name: string;
  password: string;
}
interface RegisterFormData {
  full_name: string;
  password: string;
  repeatPassword: string;
}
interface ErrorResponse {
  error: string;
}