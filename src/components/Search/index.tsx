import cn from "classnames";
import { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import styles from "./styles.module.css";
import { useSearchGithubUsers } from "../../querys/useGitHubUsers.query";
import SearchResults from "../SearchResults";
import { queryClient } from "../../config/queryClient.config";
import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/16/solid";

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
    queryClient.removeQueries({ queryKey: ["gitHubFilteredUsers"] });
    setSearchQuery("");
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <Box
      width={"100vw"}
      display={"flex"}
      justifyContent={"center"}
      padding={"20px"}
    >
      <Box
        maxWidth={"650px"}
        flexGrow={1}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        position={"relative"}
      >
        <TextField
          variant="outlined"
          label="Search by user name"
          placeholder="Start typing..."
          fullWidth
          onChange={handleChange}
          value={searchQuery}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClear}>
                    <XMarkIcon width={25} height={25} />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        {searchQuery &&
          !isLoadingFilters &&
          !isErrorFilters &&
          filteredUsers && <SearchResults data={filteredUsers} />}
      </Box>
    </Box>
  );

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
        <div className={styles.resultsOutterContaienr}>
          <div className={styles.resultsContainer}>
            <SearchResults data={filteredUsers} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Searcher;
