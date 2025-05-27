import * as yup from "yup";

const registerValidatorSchema = yup.object().shape({
  email: yup
    .string()
    .email("Formato de correo electrónico inválido")
    .required("El correo electrónico es requerido"),
  password: yup
    .string()
    .required("La contraseña es requerida")
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
  repeatPassword: yup
    .string()
    .required("La repetición de la contraseña es requerida")
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
});

export default registerValidatorSchema;
