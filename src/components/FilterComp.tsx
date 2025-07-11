import { Button, Col, Form, Row } from "react-bootstrap";
import { Bookmark, PersonCircle, Search, TagFill } from "react-bootstrap-icons";
import { OneTwoThreeIcon } from "./Icons";
import { CATEGORIES, LEVELS } from "../constants/const";
import {
  filterMembersValidatorSchema,
  type FilterMembers,
} from "../validation/filterMembersValidatorSchema";
import { useFormik } from "formik";
import { FormikInputComp, FormikSelectComp } from "./FormikInputComp";

interface Props {
  submitFilter: (paramFilters: FilterMembers) => void;
  color: ColorType;
  textColor: "white" | "dark";
  setFilters: React.Dispatch<React.SetStateAction<FilterMembers | null>>;
  setLoadingFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterComp: React.FC<Props> = ({
  color,
  textColor,
  setFilters,
  submitFilter,
  setLoadingFilter
}) => {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      dni: "",
      id_category: 0,
      id_level: 0,
    },
    validationSchema: filterMembersValidatorSchema,
    onSubmit: (values) => {
      setFilters(values);
      setLoadingFilter(false);
      submitFilter(values);
    },
  });

  const { values, errors, handleChange, handleSubmit } = formik;

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <FormikInputComp
          as={Col}
          controlId="FilterNameId"
          label="Nombre completo (o parcial)"
          placeholder="Ej: Juan"
          icon={<PersonCircle />}
          value={values.full_name}
          onChange={handleChange}
          errors={errors.full_name}
          name="full_name"
        />
        <FormikInputComp
          as={Col}
          controlId="FilterDniId"
          label="DNI completo"
          placeholder="Ej: 12345678"
          icon={<OneTwoThreeIcon />}
          value={values.dni}
          onChange={handleChange}
          errors={errors.dni}
          name="dni"
        />
        <FormikSelectComp
          as={Col}
          controlId="FilterCategoryId"
          label="Categoría"
          options={CATEGORIES}
          icon={<Bookmark />}
          value={values.id_category}
          onChange={handleChange}
          errors={errors.id_category}
          name="id_category"
        />
        <FormikSelectComp
          as={Col}
          controlId="FilterLevelId"
          label="Nivel"
          options={LEVELS}
          icon={<TagFill />}
          value={values.id_level}
          onChange={handleChange}
          errors={errors.id_level}
          name="id_level"
        />
      </Row>
      <div className="d-flex justify-content-between align-items-center">
        <div className={`bg-${color} p-2 rounded-4 text-${textColor}`}>
          <h6 className="text-decoration-underline">¡Importante!</h6>
          <p>
            Si desea obtener todos sus alumnos, deje los campos en blanco y
            presione en <b>Filtrar 🔍</b>
          </p>
        </div>
        <Button
          type="submit"
          variant="dark"
          className="d-flex align-items-center gap-1"
        >
          <span>Filtrar</span>
          <Search />
        </Button>
      </div>
    </Form>
  );
};

export default FilterComp;
