import { type ReactNode } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { Form, InputGroup } from "react-bootstrap";

interface Props {
  controlId: string;
  label: string;
  type?: string;
  placeholder: string;
  icon: ReactNode;
  register: UseFormRegisterReturn;
  error?: string;
}

const InputComp: React.FC<Props> = ({
  controlId,
  label,
  type = "text",
  placeholder,
  icon,
  register,
  error,
}) => {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <InputGroup>
        <InputGroup.Text id={`InputGroup${controlId}`}>{icon}</InputGroup.Text>
        <Form.Control
          placeholder={placeholder}
          type={type}
          {...register}
          isInvalid={!!error}
        />
      </InputGroup>
      <small className="text-danger">{error}</small>
    </Form.Group>
  );
};

export default InputComp;
