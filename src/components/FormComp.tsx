import React from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import InputComp from "./InputComp";
import { EnvelopeAtFill, LockFill, PersonCircle } from "react-bootstrap-icons";
import type {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { Link } from "react-router-dom";
import SelectComp from "./SelectComp";

interface Props<T extends LoginFormData | RegisterFormData> {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  handleSubmit: UseFormHandleSubmit<T>;
  onSubmit: SubmitHandler<T>;
  loading?: boolean;
}

const loadingSpinner = (
  <div className="d-flex align-items-center justify-content-center gap-2">
    <Spinner animation="border" variant="dark" />
    <span>Cargando...</span>
  </div>
);

export const RegisterFormComp: React.FC<Props<RegisterFormData>> = ({
  register,
  errors,
  handleSubmit,
  loading,
  onSubmit,
}) => {
  const OPTIONS = [
    { label: "Sin seleccionar rol", value: 0 },
    { label: "Administrador", value: 1 },
    { label: "Gimnasio", value: 2 },
    { label: "Juez", value: 3 },
  ];
  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-light p-3 rounded-4 mt-3"
      >
        <h5>Crear una nueva cuenta</h5>
        <hr />
        <InputComp
          controlId="FullNameId"
          label="Nombre completo"
          placeholder="Ej: Juan Pérez"
          icon={<PersonCircle />}
          register={register("full_name")}
          error={errors.full_name?.message}
        />
        <InputComp
          controlId="RegisterPasswordId"
          label="Contraseña"
          placeholder="************"
          type="password"
          icon={<LockFill />}
          register={register("password")}
          error={errors.password?.message}
        />
        <SelectComp
          controlId="RegisterRoleId"
          options={OPTIONS}
          label="Rol del usuario"
          icon={<PersonCircle />}
          register={register("id_role")}
          error={errors.id_role?.message}
        />
        <div className="d-flex justify-content-end">
          <Button type="submit" variant="dark" disabled={loading}>
            {loading ? loadingSpinner : "Crear cuenta"}
          </Button>
        </div>
      </Form>
      <div className="text-center mt-2">
        <Link to={"/"} className="">
          <Button variant="outline-dark">
            ¿Ya tenés cuenta? Inicia sesión aquí
          </Button>
        </Link>
      </div>
    </>
  );
};
export const LoginFormComp: React.FC<Props<LoginFormData>> = ({
  register,
  errors,
  handleSubmit,
  loading,
  onSubmit,
}) => {
  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-light p-3 rounded-4 mt-3"
      >
        <h5>Iniciar sesión</h5>
        <hr />
        <InputComp
          controlId="LoginFullnameId"
          label="Nombre completo"
          placeholder="Juan Pérez"
          icon={<EnvelopeAtFill />}
          register={register("full_name")}
          error={errors.full_name?.message}
        />
        <InputComp
          controlId="LoginPasswordId"
          label="Contraseña"
          placeholder="************"
          type="password"
          icon={<LockFill />}
          register={register("password")}
          error={errors.password?.message}
        />
        <div className="d-flex justify-content-end">
          <Button type="submit" variant="dark" disabled={loading}>
            {loading ? loadingSpinner : "Iniciar sesión"}
          </Button>
        </div>
      </Form>
      <div className="text-center mt-2">
        <Link to={"/register"} className="">
          <Button variant="outline-dark">
            ¿Todavía no tenés cuenta? Registrate aquí
          </Button>
        </Link>
      </div>
    </>
  );
};
