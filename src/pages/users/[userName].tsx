import { useRouter } from "next/router";
import { useGetUserByUserName } from "../../querys/useGitHubUsers.query";
import { useFavorites } from "../../store/favorites.store";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import { queryClient } from "../../config/queryClient.config";
import { useGetUserReposByUserName } from "../../querys/useGitHubUsers.query";
import {
  Avatar,
  Box,
  Grid2,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import RepositoriesTabPannel from "../../components/RepositoriesTabPannel";
const User = () => {
  const router = useRouter();

  const [selectedTab, setSelectedTab] = useState(0);

  const { addToFavorites, removeFromFavorites, favorites } = useFavorites(
    (state) => state
  );

  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useGetUserByUserName(router.query.userName as string);

  const {
    data: userRepos,
    isLoading: isUserReposLoading,
    isError: isUserReposError,
  } = useGetUserReposByUserName(user?.login);

  useEffect(() => {
    return () => queryClient.removeQueries({ queryKey: ["gitHubUser"] });
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      {!isUserLoading && !isUserError && user && (
        <Grid2 container spacing={2} margin={"10px"}>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Box display={"flex"} alignItems={"center"}>
              <Avatar
                src={user.avatar_url}
                sx={{
                  width: 60,
                  height: 60,
                }}
              />
              <Box marginLeft={"10px"}>
                <Typography variant="h1" fontSize={"1.5rem"}>
                  {user.name}
                </Typography>
                <Typography variant="h3" fontSize={"1.3rem"}>
                  {user.login}
                </Typography>
              </Box>
            </Box>
            {user.bio && (
              <Paper>
                <Box
                  border={"1px solid"}
                  borderRadius={"4px"}
                  borderColor={"pimary.main"}
                  padding={"10px"}
                  marginTop={"10px"}
                >
                  <Typography variant="h3" fontSize={"1rem"}>
                    {user.bio}
                  </Typography>
                </Box>
              </Paper>
            )}
            {}
          </Grid2>
          <Grid2 flexDirection={"column"} size={{ xs: 12, md: 6 }}>
            <Box
              marginLeft={"10px"}
              sx={{
                maxWidth: { xs: 900 },
              }}
            >
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
              >
                <Tab label="Repositories" />
                <Tab label="Projects" />
                <Tab label="Organizations" />
              </Tabs>
            </Box>
            <div
              role="tabpanel"
              hidden={selectedTab !== 0}
              id={`simple-tabpanel-${0}`}
              aria-labelledby={`simple-tab-${0}`}
            >
              {selectedTab === 0 && (
                <RepositoriesTabPannel
                  repos={userRepos}
                  isError={isUserReposError}
                  isLoading={isUserReposLoading}
                />
              )}
            </div>
            <div
              role="tabpanel"
              hidden={selectedTab !== 1}
              id={`simple-tabpanel-${1}`}
              aria-labelledby={`simple-tab-${1}`}
            >
              {selectedTab === 1 && <Box sx={{ p: 3 }}>Projects</Box>}
            </div>
            <div
              role="tabpanel"
              hidden={selectedTab !== 2}
              id={`simple-tabpanel-${2}`}
              aria-labelledby={`simple-tab-${2}`}
            >
              {selectedTab === 2 && <Box sx={{ p: 3 }}>Organizations</Box>}
            </div>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Box display={"flex"} alignItems={"center"}>
              <Avatar
                src={user.avatar_url}
                sx={{
                  width: 60,
                  height: 60,
                }}
              />
              <Box marginLeft={"10px"}>
                <Typography variant="h1" fontSize={"1.5rem"}>
                  {user.name}
                </Typography>
                <Typography variant="h3" fontSize={"1.3rem"}>
                  {user.login}
                </Typography>
              </Box>
            </Box>
            {user.bio && (
              <Paper>
                <Box
                  border={"1px solid"}
                  borderRadius={"4px"}
                  borderColor={"pimary.main"}
                  padding={"10px"}
                  marginTop={"10px"}
                >
                  <Typography variant="h3" fontSize={"1rem"}>
                    {user.bio}
                  </Typography>
                </Box>
              </Paper>
            )}
          </Grid2>
        </Grid2>
      )}
    </>
  );
};

export default User;
