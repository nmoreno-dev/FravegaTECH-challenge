import { useListGithubUsers } from "../querys/useGitHubUsers.query";
import UserCard from "../components/UserCard";
import Searcher from "../components/Search";
import { Box, Grid2, Skeleton, Stack } from "@mui/material";

export default function Home() {
  const {
    data: usersData,
    isLoading: isLoadingList,
    isError: isErrorList,
  } = useListGithubUsers();

  return (
    <>
      <Box component="main">
        <Searcher />

        {isLoadingList && (
          <Grid2 container spacing={2}>
            {new Array(18).fill("").map((_, i) => (
              <Grid2 key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  width={"100%"}
                  gap={1}
                  sx={{ m: 1, p: 1 }}
                >
                  <Skeleton variant="circular" width={60} height={60} />
                  <Skeleton variant="text" width={"100%"} />
                  <Skeleton variant="rectangular" width={40} height={40} />
                </Stack>
              </Grid2>
            ))}
          </Grid2>
        )}

        {isErrorList && <p>Error al obtener los usuarios</p>}

        {!isLoadingList && !isErrorList && usersData && (
          <Grid2 container spacing={2}>
            {usersData.map((user) => (
              <Grid2
                key={user.id}
                size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
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
