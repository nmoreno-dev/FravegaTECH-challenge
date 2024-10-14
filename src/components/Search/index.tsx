import cn from "classnames";
import { useRef, useCallback, useState } from "react";
import debounce from "lodash.debounce";
import styles from "./styles.module.css";

interface SearcherProps {
  onSearch: (query: string) => void;
  onClear: () => void;
  className?: string;
}

const Searcher: React.FC<SearcherProps> = ({
  onSearch,
  onClear,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasValue, setHasValue] = useState(false); // Controla si el input tiene algún valor

  // Función debounced
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      onSearch(value);
    }, 300),
    [onSearch]
  );

  const handleChange = () => {
    if (inputRef.current) {
      const value = inputRef.current.value;
      setHasValue(value.length > 0); // Actualiza el estado del botón clear
      debouncedSearch(value);
    }
  };

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = ""; // Limpiar el input manualmente
      setHasValue(false); // Oculta el botón clear
      onClear(); // Llamar a la función onClear
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={cn(styles.container, className)}
    >
      <input
        id="query"
        name="query"
        type="text"
        ref={inputRef}
        onChange={handleChange}
        placeholder="Ingresa el nombre del usuario"
        className={styles.input}
      />
      {hasValue && (
        <button type="button" onClick={handleClear} className={styles.clearBTN}>
          ✕
        </button>
      )}
    </form>
  );
};

export default Searcher;
