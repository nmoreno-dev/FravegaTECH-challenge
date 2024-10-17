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
import { useGetUserReposByUserName } from "../../querys/useGitHubUsers.query";
import {
  Avatar,
  Box,
  Grid2,
  IconButton,
  Paper,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Repositories from "../../components/Repositories";
import Head from "next/head";
import { useQueryClient } from "@tanstack/react-query";

const User = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

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
    return () => {
      queryClient.removeQueries({
        queryKey: ["gitHubUser", "userRepos"],
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>{user ? `${user.login} - GitHub Profile` : "Loading..."}</title>
        <meta
          name="description"
          content={
            user
              ? `View ${user.login}'s GitHub profile, including repositories, bio, and more.`
              : "Loading GitHub user profile..."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content={
            user ? `${user.login} - GitHub Profile` : "GitHub User Profile"
          }
        />
        <meta
          property="og:description"
          content={
            user
              ? `Explore ${user.login}'s GitHub profile with details on followers, following, and repositories.`
              : "Loading GitHub user profile..."
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={user?.avatar_url ?? "/default-avatar.jpg"}
        />
        <meta
          property="og:url"
          content={`https://tu-dominio.com/users/${router.query.userName}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!isUserError && (
        <Grid2 container spacing={2} margin={"10px"}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            {isUserLoading ? (
              <>
                <Stack spacing={1}>
                  <Stack display={"flex"} direction={"row"} gap={1}>
                    {/* For variant="text", adjust the height via font-size */}
                    {/* For other variants, adjust the size with `width` and `height` */}
                    <Skeleton variant="circular" width={40} height={40} />
                    {
                      // MARK: User Skeleton
                    }
                    <Stack flexGrow={1}>
                      <Skeleton
                        variant="text"
                        sx={{ fontSize: "1rem", width: "100%" }}
                      />
                      <Skeleton
                        variant="text"
                        sx={{ fontSize: "1rem", width: "100%" }}
                      />
                    </Stack>
                    <Skeleton variant="rectangular" width={60} height={60} />
                  </Stack>
                  <Stack gap={1} flexGrow={1}>
                    <Skeleton variant="rectangular" height={60} />
                    <Skeleton variant="rounded" height={60} />
                  </Stack>
                </Stack>
              </>
            ) : (
              user && (
                // MARK: User
                <Box>
                  <Box display={"flex"} alignItems={"center"}>
                    <Avatar
                      src={user.avatar_url}
                      alt={`${user.login}'s avatar`}
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
                          {favorites.some(
                            (element) => element.id === user.id
                          ) ? (
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
                      <MapPinIcon width={20} height={20} color="orangeRed" />
                      <Typography>{user.location ?? "N/A"}</Typography>
                    </Box>
                    <Box display={"flex"} gap={1}>
                      <CalendarIcon width={20} height={20} />
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
                      <Typography fontWeight={"bold"}>
                        {user.followers}
                      </Typography>
                      <Typography>Followers</Typography>
                    </Box>
                    <Box display={"flex"} gap={1}>
                      <Typography fontWeight={"bold"}>
                        {user.following}
                      </Typography>
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
                </Box>
              )
            )}
          </Grid2>
          <Grid2 flexDirection={"column"} size={{ xs: 12, md: 8 }} container>
            <Grid2 size={12}>
              {/*
                MARK: Repositories
              */}
              <Typography variant="h2" sx={{ p: 1 }}>
                Repositories
              </Typography>
            </Grid2>
            <Grid2 size={12} overflow={"hidden"}>
              <Repositories
                repos={userRepos}
                isError={isUserReposError}
                isLoading={isUserReposLoading || isUserLoading}
              />
            </Grid2>
          </Grid2>
        </Grid2>
      )}
    </>
  );
};

export default User;
