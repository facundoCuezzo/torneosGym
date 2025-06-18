import * as yup from "yup";

const loginValidatorSchema = yup.object().shape({
  fullname: yup
    .string()
    .required("El nombre completo es requerido"),
  password: yup
    .string()
    .required("La contraseña es requerida")
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
});

export default loginValidatorSchema;
