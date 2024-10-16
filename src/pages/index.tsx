import { useListGithubUsers } from "../querys/useGitHubUsers.query";
import UserCard from "../components/UserCard";
import Searcher from "../components/Search";
import { Box, Grid2 } from "@mui/material";

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

        {isLoadingList && <p>Cargando datos...</p>}

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
