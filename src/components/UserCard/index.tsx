import { GitHubUserListItem } from "@/interfaces/gitHubUser.interface";
import Link from "next/link";
import { useFavorites } from "../../store/favorites.store";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/16/solid";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { memo, useMemo } from "react";

const UserCard = ({
  user,
  isLoading,
}: {
  user?: GitHubUserListItem;
  isError?: boolean;
  isLoading?: boolean;
}) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites(
    (state) => state
  );

  const isFavorite = useMemo(
    () => favorites.some((element) => element.id === user?.id),
    [favorites, user?.id]
  );

  return (
    <Paper sx={{ p: 1, m: 1 }} data-testid="user-card">
      {isLoading && (
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <Skeleton variant="circular" width={60} height={50} />
          <Skeleton variant="text" width={200} />
          <Skeleton variant="rectangular" width={40} height={40} />
        </Stack>
      )}
      {user && (
        <Link href={`/users/${user.login}`} passHref>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Box display={"flex"} alignItems={"center"} gap={1} width={"80%"}>
              <Avatar
                src={user.avatar_url}
                sx={{
                  width: 60,
                  height: 60,
                }}
                alt={`${user.login}'s avatar`}
                imgProps={{
                  onError: () => console.log("Error loading image"),
                  alt: "User avatar",
                  loading: "lazy",
                }}
              />
              <Tooltip title={user.login}>
                <Typography variant="h2" fontSize={"1.3rem"} noWrap>
                  {user.login}
                </Typography>
              </Tooltip>
            </Box>
            <Tooltip
              title={
                favorites.some((element) => element.id === user.id)
                  ? "remove from favorites"
                  : "add to favorites"
              }
            >
              {isFavorite ? (
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromFavorites(user.id);
                  }}
                >
                  <HeartIconSolid color="crimson" width={30} height={30} />
                </IconButton>
              ) : (
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    addToFavorites(user.id);
                  }}
                >
                  <HeartIconOutline color="crimson" width={30} height={30} />
                </IconButton>
              )}
            </Tooltip>
          </Box>
        </Link>
      )}
    </Paper>
  );
};

export default memo(UserCard);
