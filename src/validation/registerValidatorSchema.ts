import * as yup from "yup";

const registerValidatorSchema = yup.object().shape({
  full_name: yup.string().required("El nombre completo es requerido"),
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