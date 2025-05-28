import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import registerValidatorSchema from '../validation/registerValidatorSchema';
import { RegisterFormComp } from '../components/FormComp';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerValidatorSchema),
  });

  return (
    <Container className="my-5 d-flex justify-content-center flex-column align-items-center">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Image src="/logo_negro.png" alt="Logo de torneos" fluid />
        <h3>Administración de torneos - Federación Tucumana de Gimnasia</h3>
      </div>
      <div className="w-75">
        <RegisterFormComp 
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      </div>
    </Container>
  );
};

export default RegisterPage;
