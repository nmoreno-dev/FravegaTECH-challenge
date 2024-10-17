import { useListGithubUsers } from "../querys/useGitHubUsers.query";
import UserCard from "../components/UserCard";
import Searcher from "../components/Searcher";
import { Box, Grid2, Skeleton, Stack, Typography } from "@mui/material";

export default function Home() {
  const {
    data: usersData,
    isLoading: isLoadingList,
    isError: isErrorList,
  } = useListGithubUsers();

  return (
    <>
      <Box component="main" data-testid="main-container">
        <Searcher data-testid="searcher-component" />

        {isLoadingList && (
          <Grid2 container spacing={2} data-testid="loading-skeleton-container">
            {new Array(18).fill("").map((_, i) => (
              <Grid2 key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  width={"100%"}
                  gap={1}
                  sx={{ m: 1, p: 1 }}
                >
                  <Skeleton
                    variant="circular"
                    width={60}
                    height={60}
                    data-testid="loading-skeleton-avatar"
                  />
                  <Skeleton
                    variant="text"
                    width={"100%"}
                    data-testid="loading-skeleton-text"
                  />
                  <Skeleton
                    variant="rectangular"
                    width={40}
                    height={40}
                    data-testid="loading-skeleton-icon"
                  />
                </Stack>
              </Grid2>
            ))}
          </Grid2>
        )}

        {isErrorList && (
          <Typography data-testid="error-message">
            Error getting list of users.
          </Typography>
        )}

        {!isLoadingList && !isErrorList && usersData && (
          <Grid2 container spacing={2} data-testid="user-list-container">
            {usersData.map((user) => (
              <Grid2
                key={user.id}
                size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
                data-testid="user-card-grid"
              >
                <UserCard user={user} />
              </Grid2>
            ))}
          </Grid2>
        )}
      </Box>
    </>
  );
}
