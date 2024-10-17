import { useCallback, useEffect, useState, memo } from "react";
import debounce from "lodash.debounce";
import { useSearchGithubUsers } from "../../querys/useGitHubUsers.query";
import SearchResults from "../SearchResults";
import {
  Box,
  Grid2,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { XMarkIcon } from "@heroicons/react/16/solid";
import UserCard from "../UserCard";
import { useQueryClient } from "@tanstack/react-query";

const Searcher: React.FC = () => {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const {
    data: filteredUsers,
    isLoading: isLoadingFilters,
    isRefetching: isRefetchingFilters,
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
    queryClient.removeQueries({
      queryKey: ["gitHubFilteredUsers"],
    });
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
      data-testid="searcher-container"
    >
      <Box
        maxWidth={"650px"}
        flexGrow={1}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        position={"relative"}
        data-testid="search-box-container"
      >
        <TextField
          variant="outlined"
          label="Search by user name"
          placeholder="Start typing..."
          fullWidth
          onChange={handleChange}
          value={searchQuery}
          aria-label="Search GitHub users"
          data-testid="search-input"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment
                  position="end"
                  data-testid="clear-button-adornment"
                >
                  <IconButton onClick={handleClear} data-testid="clear-button">
                    <XMarkIcon width={25} height={25} />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        {searchQuery && !isErrorFilters && (
          <SearchResults data-testid="search-results">
            <Grid2 container data-testid="results-grid">
              {(filteredUsers && !isLoadingFilters && !isRefetchingFilters
                ? filteredUsers
                : new Array(6).fill(null)
              ).map((user, i, array) => (
                <Grid2
                  key={user ? user.id : i}
                  size={{ xs: 12, sm: array.length > 1 ? 6 : 12 }}
                  width={"100%"}
                  data-testid="user-card-grid"
                >
                  <UserCard
                    user={user}
                    isLoading={isLoadingFilters || isRefetchingFilters}
                  />
                </Grid2>
              ))}
            </Grid2>
          </SearchResults>
        )}
      </Box>
    </Box>
  );
};

export default memo(Searcher);
