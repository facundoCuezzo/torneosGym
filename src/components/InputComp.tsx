import { useState, type ReactNode } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";

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
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <InputGroup>
        <InputGroup.Text id={`InputGroup${controlId}`}>{icon}</InputGroup.Text>
        <Form.Control
          placeholder={placeholder}
          type={inputType}
          {...register}
          isInvalid={!!error}
        />
        {isPassword && (
          <Button
            variant="outline-secondary"
            onClick={() => setShowPassword((prevState) => !prevState)}
            type="button"
            tabIndex={-1}
          >
            {showPassword ? <EyeSlash /> : <Eye />}
          </Button>
        )}
      </InputGroup>
      <small className="text-danger">{error}</small>
    </Form.Group>
  );
};

export default InputComp;
