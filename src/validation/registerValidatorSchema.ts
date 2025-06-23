import * as yup from "yup";

const registerValidatorSchema = yup.object().shape({
  full_name: yup.string().required("El nombre completo es requerido"),
  password: yup
    .string()
    .required("La contraseña es requerida")
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
  id_role: yup
    .number()
    .typeError("El rol es requerido")
    .moreThan(0, "El rol es requerido")
    .required("El rol es requerido"),
});

export default registerValidatorSchema;
