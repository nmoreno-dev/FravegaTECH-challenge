import { useCallback, useEffect, useState, memo } from "react";
import debounce from "lodash.debounce";
import { useSearchGithubUsers } from "../../querys/useGitHubUsers.query";
import SearchResults from "../SearchResults";
import { queryClient } from "../../config/queryClient.config";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { XMarkIcon } from "@heroicons/react/16/solid";

const Searcher: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Hook para buscar usuarios filtrados
  const {
    data: filteredUsers,
    isLoading: isLoadingFilters,
    isError: isErrorFilters,
    refetch: refetchFilters,
  } = useSearchGithubUsers(searchQuery, { enabled: false });

  const debouncedSearch = useCallback(
    debounce((value) => {
      if (value) {
        refetchFilters();
      }
    }, 300),
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
          aria-label="Search GitHub users"
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
};

export default memo(Searcher);
