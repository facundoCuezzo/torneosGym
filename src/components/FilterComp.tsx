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
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

interface Gimnasio {
  id_gimnasio: number;
  full_name: string;
}


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
      id_gimnasio: 0,
    },
    validationSchema: filterMembersValidatorSchema,
    onSubmit: (values) => {
      setFilters(values);
      setLoadingFilter(false);
      submitFilter(values);
    },
  });




  const { values, errors, handleChange, handleSubmit } = formik;


  const [gimnasios, setGimnasios] = useState<Gimnasio[]>([]);


  
useEffect(() => {
  const fetchGimnasios = async () => {
    try {
      const { data: gimnasiosData } = await axios.get("/api/gimnasios");
      setGimnasios(gimnasiosData);

      const gimnasioIds = gimnasiosData.map((g: Gimnasio) => g.id_gimnasio);

      const { data: alumnosData } = await axios.post("/api/alumnos", { ids: gimnasioIds });

      console.log("Alumnos de todos los gimnasios:", alumnosData);

    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  fetchGimnasios();
}, []);
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
        <FormikSelectComp
          as={Col}
          controlId="FilterGymId"
          label="Gimnasio"
          options={gimnasios.map((g) => ({ value: g.id_gimnasio, label: g.full_name }))}
          icon={<PersonCircle />}
          value={values.id_gimnasio}
          onChange={handleChange}
          errors={errors.id_gimnasio}
          name="id_gimnasio"
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
