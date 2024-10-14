import { useFormik } from "formik";

interface SearcherProps {
  onSearch: (query: string) => void; // Callback para devolver la query
}

const Searcher: React.FC<SearcherProps> = ({ onSearch }) => {
  const formik = useFormik({
    initialValues: {
      query: "", // Valor inicial vacío
    },
    onSubmit: (values) => {
      // Llamamos al callback cuando se hace submit
      onSearch(values.query);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="query">Buscar usuario</label>
      <input
        id="query"
        name="query"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.query}
        placeholder="Ingresa el nombre del usuario"
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Searcher;
