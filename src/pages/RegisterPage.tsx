import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { registerValidatorSchema, type RegisterFormData } from "../validation/registerValidatorSchema";
import { RegisterFormComp } from "../components/FormComp";
import useUsers from "../hooks/useUsers";
import { toast } from "sonner";

const RegisterPage = () => {
  const { handleCreateUser } = useUsers();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerValidatorSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    const res = await handleCreateUser(data);
    if (res?.user) {
      toast.success(res.message);
      reset({
        full_name: "",
        password: "",
        id_role: 0,
      });
    }
  };

  return (
    <Container className="my-5 d-flex justify-content-center flex-column align-items-center">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Image src="/logo_negro.png" alt="Logo de torneos" width={300} />
        <h3>Administración de torneos - Federación Tucumana de Gimnasia</h3>
      </div>
      <div className="w-75">
        <RegisterFormComp
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </div>
    </Container>
  );
};

export default RegisterPage;
