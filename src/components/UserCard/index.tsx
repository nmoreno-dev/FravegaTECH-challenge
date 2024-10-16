import { GitHubUserListItem } from "@/interfaces/gitHubUser.interface";
import Link from "next/link";
import { useFavorites } from "../../store/favorites.store";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/16/solid";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { memo, useMemo } from "react";

const UserCard = ({ user }: { user: GitHubUserListItem }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites(
    (state) => state
  );

  const isFavorite = useMemo(
    () => favorites.some((element) => element.id === user.id),
    [favorites, user.id]
  );

  return (
    <Paper sx={{ p: 1, m: 1 }}>
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
            <IconButton>
              {isFavorite ? (
                <HeartIconSolid
                  color="crimson"
                  width={30}
                  height={30}
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromFavorites(user.id);
                  }}
                />
              ) : (
                <HeartIconOutline
                  color="crimson"
                  width={30}
                  height={30}
                  onClick={(e) => {
                    e.preventDefault();
                    addToFavorites(user.id);
                  }}
                />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </Link>
    </Paper>
  );
};

export default memo(UserCard);
