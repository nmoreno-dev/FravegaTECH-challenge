import cn from "classnames";
import { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import styles from "./styles.module.css";
import { useSearchGithubUsers } from "../../querys/useGitHubUsers.query";
import SearchResults from "../SearchResults";

interface SearcherProps {
  className?: string;
}

const Searcher: React.FC<SearcherProps> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Hook para buscar usuarios filtrados
  const {
    data: filteredUsers,
    isLoading: isLoadingFilters,
    isError: isErrorFilters,
    refetch: refetchFilters,
  } = useSearchGithubUsers(searchQuery, { enabled: false });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((value) => {
      if (value) {
        refetchFilters();
      }
    }, 1000),
    [refetchFilters]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    debouncedSearch(value);
  };

  const handleClear = () => {
    setSearchQuery("");
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);
  return (
    <div className={styles.outterContainer}>
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
          value={searchQuery} // Aseguramos que el valor del input esté controlado
          onChange={handleChange}
          placeholder="Ingresa el nombre del usuario"
          className={styles.input}
        />
        {searchQuery && (
          <button
            type="button"
            onClick={handleClear}
            className={styles.clearBTN}
          >
            ✕
          </button>
        )}
      </form>
      {searchQuery && !isLoadingFilters && !isErrorFilters && filteredUsers && (
        <div className={styles.resultsContainer}>
          <SearchResults data={filteredUsers} />
        </div>
      )}
    </div>
  );
};

export default Searcher;
