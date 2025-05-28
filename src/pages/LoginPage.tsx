import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Image } from "react-bootstrap";
import loginValidatorSchema from "../validation/loginValidatorSchema";
import { useForm } from 'react-hook-form';
import { LoginFormComp } from '../components/FormComp';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginValidatorSchema),
  });

  return (
    <Container className="my-5 d-flex justify-content-center flex-column align-items-center">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Image src="/logo_negro.png" alt="Logo de torneos" width={300}/>
        <h3>Administración de torneos - Federación Tucumana de Gimnasia</h3>
      </div>
      <div className="w-75">
        <LoginFormComp
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      </div>
    </Container>
  );
};

export default LoginPage;
