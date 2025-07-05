import { Button, Col, Form, Row } from "react-bootstrap";
import { Bookmark, Search, TagFill } from "react-bootstrap-icons";
import { CATEGORIES, LEVELS } from "../constants/const";
import { useFormik } from "formik";
import { FormikSelectComp } from "./FormikInputComp";
import {
  filterScoresValidatorSchema,
  type FilterScores,
} from "../validation/filterScoresValidatorSchema";

interface Props {
  submitFilter: (values: FilterScores) => void;
  color: ColorType;
  textColor: "white" | "dark";
}

const FilterScoresComp: React.FC<Props> = ({
  submitFilter,
  color,
  textColor,
}) => {
  const formik = useFormik({
    initialValues: {
      id_category: 0,
      id_level: 0,
    },
    validationSchema: filterScoresValidatorSchema,
    onSubmit: (values) => {
      submitFilter(values);
    },
  });

  const { values, errors, handleSubmit, setFieldValue } = formik;

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="justify-content-center">
        <FormikSelectComp
          as={Col}
          controlId="FilterCategoryId"
          label="Categoría"
          options={CATEGORIES}
          icon={<Bookmark />}
          value={values.id_category}
          onChange={(ev) => {
            setFieldValue("id_category", Number(ev.target.value));
          }}
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
          onChange={(ev) => {
            setFieldValue("id_level", Number(ev.target.value));
          }}
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

export default FilterScoresComp;
