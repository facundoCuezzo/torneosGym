import type { ReactNode } from "react";
import { Form, InputGroup } from "react-bootstrap";
import type { UseFormRegisterReturn } from "react-hook-form";

interface Option {
  value: number;
  label: string;
}

interface Props {
  options: Option[];
  controlId: string;
  label: string;
  icon: ReactNode;
  register: UseFormRegisterReturn;
  error?: string;
}

const SelectComp: React.FC<Props> = ({
  label,
  options,
  controlId,
  error,
  icon,
  register,
}) => {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label>{label}</Form.Label>
      <InputGroup>
        <InputGroup.Text id={`InputGroup${controlId}`}>{icon}</InputGroup.Text>
        <Form.Select {...register} isInvalid={!!error}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </Form.Select>
      </InputGroup>
      <small className="text-danger">{error}</small>
    </Form.Group>
  );
};

export default SelectComp;
