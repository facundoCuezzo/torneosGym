import React from "react";
import { Button, Form } from "react-bootstrap";
import InputComp from "./InputComp";
import { EnvelopeAtFill, LockFill, PersonCircle } from "react-bootstrap-icons";
import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { Link } from "react-router-dom";


interface Props<T extends LoginFormData | RegisterFormData> {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  handleSubmit: UseFormHandleSubmit<T>;
}

export const RegisterFormComp: React.FC<Props<RegisterFormData>> = ({
  register,
  errors,
  handleSubmit,
}) => {
  return (
    <>
      <Form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="bg-light p-3 rounded-4 mt-3"
      >
        <h5>Crear una nueva cuenta</h5>
        <hr />
        <InputComp
          controlId="FullNameId"
          label="Nombre completo"
          placeholder="Ej: Juan Pérez"
          icon={<PersonCircle />}
          register={register("fullname")}
          error={errors.fullname?.message}
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
        <InputComp
          controlId="RegisterRepeatPasswordId"
          label="Repetir contraseña"
          placeholder="************"
          type="password"
          icon={<LockFill />}
          register={register("repeatPassword")}
          error={errors.repeatPassword?.message}
        />
        <div className="d-flex justify-content-end">
          <Button type="submit" variant="dark">
            Registrarse
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
}) => {
  return (
    <>
      <Form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="bg-light p-3 rounded-4 mt-3"
      >
        <h5>Iniciar sesión</h5>
        <hr />
        <InputComp
          controlId="LoginFullnameId"
          label="Nombre completo"
          placeholder="Juan Pérez"
          icon={<EnvelopeAtFill />}
          register={register("fullname")}
          error={errors.fullname?.message}
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
          <Button type="submit" variant="dark">
            Iniciar sesión
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
