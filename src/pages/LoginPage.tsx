import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Form, Image } from "react-bootstrap";
import { EnvelopeAtFill, LockFill } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import loginValidatorSchema from "../validation/loginValidatorSchema";
import InputComp from "../components/InputComp";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginValidatorSchema),
  });

  return (
    <Container className="mt-5 d-flex justify-content-center flex-column align-items-center">
      <Image alt="Logo de torneos" fluid />
      <div className="w-75">
        <Form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="bg-light p-3 rounded-4"
        >
          <InputComp
            controlId="LoginEmailId"
            label="Correo electrónico"
            placeholder="example@email.com"
            icon={<EnvelopeAtFill />}
            register={register("email")}
            error={errors.email?.message}
          />
          <InputComp
            controlId="LoginPasswordId"
            label="Contraseña"
            placeholder="************"
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
      </div>
    </Container>
  );
};

export default LoginPage;
