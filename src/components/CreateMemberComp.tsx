import { useState } from "react";
import {
  CalendarDate,
  PersonAdd,
  PersonCircle,
  Tag,
} from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputComp from "./InputComp";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectComp from "./SelectComp";
import useMembers from "../hooks/useMembers";
import { createMemberValidatorSchema, type CreateMemberFormData } from '../validation/createMemberValidatorSchema';
import { OneTwoThreeIcon } from './Icons';

const CreateMemberComp = () => {
  const { handleCreateMember } = useMembers();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<CreateMemberFormData>({
    resolver: yupResolver(createMemberValidatorSchema),
  });

  const onSubmit = async (data: CreateMemberFormData) => {
    const res = await handleCreateMember(data);
    if (res?.member) {
      reset({
        full_name: "",
        birth_date: "",
        dni: "",
        id_level: 0,
      });
      handleClose();
    }
  };

  return (
    <>
      <Button
        variant="danger"
        onClick={handleShow}
        className="d-flex align-items-center gap-2"
      >
        <PersonAdd />
        <span>Añadir alumno</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear nuevo alumno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputComp
              controlId="MemberFullNameId"
              label="Nombre completo"
              placeholder="Ej: Juan Perez"
              icon={<PersonCircle />}
              register={register("full_name")}
              error={errors.full_name?.message}
            />
            <InputComp
              controlId="MemberBirthDateId"
              label="Fecha de nacimiento"
              placeholder="YYYY-MM-DD"
              icon={<CalendarDate />}
              register={register("birth_date")}
              error={errors.birth_date?.message}
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                let value = ev.target.value.replace(/[^0-9]/g, "");

                if (value.length > 4)
                  value = `${value.slice(0, 4)}-${value.slice(4)}`;
                if (value.length > 7)
                  value = `${value.slice(0, 7)}-${value.slice(7, 9)}`;

                setValue("birth_date", value);
              }}
              value={watch("birth_date") || ""}
            />
            <InputComp
              controlId="MemberDniId"
              label="DNI"
              placeholder="Ej: 12345678"
              icon={<OneTwoThreeIcon />}
              register={register("dni")}
              error={errors.dni?.message}
            />
            <SelectComp
              label="Nivel"
              options={[
                { label: "Sin seleccionar nivel", value: 0 },
                { label: "1", value: 1 },
                { label: "1-B", value: 2 },
                { label: "2", value: 3 },
                { label: "3", value: 4 },
                { label: "4", value: 5 },
                { label: "5", value: 6 },
                { label: "6", value: 7 },
                { label: "7", value: 8 },
                { label: "8", value: 9 },
                { label: "9", value: 10 },
                { label: "10", value: 11 },
              ]}
              controlId="MemberLevelId"
              icon={<Tag />}
              register={register("id_level")}
              error={errors.id_level?.message}
            />

            <Button variant="dark" type="submit" className="w-100">
              Crear alumno
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateMemberComp;
