import { useRouter } from "next/router";
import { useGetUserByUserName } from "../../querys/useGitHubUsers.query";
import { useFavorites } from "../../store/favorites.store";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import {
  CalendarIcon,
  HeartIcon as HeartIconSolid,
  MapPinIcon,
} from "@heroicons/react/16/solid";
import { useEffect } from "react";
import { queryClient } from "../../config/queryClient.config";
import { useGetUserReposByUserName } from "../../querys/useGitHubUsers.query";
import {
  Avatar,
  Box,
  Grid2,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import Repositories from "../../components/Repositories";
const User = () => {
  const router = useRouter();

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

  return (
    <>
      {!isUserLoading && !isUserError && user && (
        <Grid2 container spacing={2} margin={"10px"}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Box display={"flex"} alignItems={"center"}>
              <Avatar
                src={user.avatar_url}
                sx={{
                  width: 60,
                  height: 60,
                }}
              />
              <Box
                marginLeft={"10px"}
                display={"flex"}
                gap={"10px"}
                alignContent={"center"}
              >
                <Box>
                  <Typography variant="h1" fontSize={"1.5rem"}>
                    {user.name}
                  </Typography>
                  <Typography variant="h3" fontSize={"1.3rem"}>
                    {user.login}
                  </Typography>
                </Box>
                <Tooltip
                  title={
                    favorites.some((element) => element.id === user.id)
                      ? "remove from favorites"
                      : "add to favorites"
                  }
                >
                  <IconButton>
                    {favorites.some((element) => element.id === user.id) ? (
                      <HeartIconSolid
                        color="crimson"
                        width={40}
                        height={40}
                        onClick={() => removeFromFavorites(user.id)}
                      />
                    ) : (
                      <HeartIconOutline
                        color="crimson"
                        width={40}
                        height={40}
                        onClick={() => addToFavorites(user.id)}
                      />
                    )}
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
            <Box
              sx={{ p: 1 }}
              display={"flex"}
              gap={1}
              width={"100%"}
              justifyContent={"start"}
            >
              <Box display={"flex"} gap={1}>
                <MapPinIcon width={20} height={20} />{" "}
                <Typography>{user.location ?? "N/A"}</Typography>
              </Box>
              <Box display={"flex"} gap={1}>
                <CalendarIcon width={20} height={20} />{" "}
                <Typography>
                  {new Date(user.created_at).toLocaleDateString("es-AR")}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ p: 1 }}
              display={"flex"}
              gap={1}
              width={"100%"}
              justifyContent={"start"}
            >
              <Box display={"flex"} gap={1}>
                <Typography fontWeight={"bold"}>{user.followers}</Typography>
                <Typography>Followers</Typography>
              </Box>
              <Box display={"flex"} gap={1}>
                <Typography fontWeight={"bold"}>{user.following}</Typography>
                <Typography>Following</Typography>
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
          <Grid2 flexDirection={"column"} size={{ xs: 12, md: 8 }} container>
            <Grid2 size={12}>
              <Typography variant="h2" sx={{ p: 1 }}>
                Repositories
              </Typography>
            </Grid2>
            <Grid2 size={12} overflow={"hidden"}>
              <Repositories
                repos={userRepos}
                isError={isUserReposError}
                isLoading={isUserReposLoading}
              />
            </Grid2>
          </Grid2>
        </Grid2>
      )}
    </>
  );
};

export default User;
