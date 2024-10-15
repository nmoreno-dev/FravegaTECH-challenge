import { GitHubUserListItem } from "@/interfaces/gitHubUser.interface";
import Link from "next/link";
import { useFavorites } from "../../store/favorites.store";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/16/solid";
import { Avatar, Box, Paper, Typography } from "@mui/material";

const UserCard = ({ user }: { user: GitHubUserListItem }) => {
  const { favorites } = useFavorites((state) => state);

  return (
    <Link href={`/users/${user.login}`}>
      <Paper>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={2}
          width={"300px"}
          padding={"10px"}
        >
          <Avatar
            src={user.avatar_url}
            sx={{ height: "70px", width: "70px" }}
          />
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Typography variant="h2" fontSize={"1.3rem"} noWrap>
              {user.login}
            </Typography>
            {favorites.some((element) => element.id === user.id) && (
              <HeartIconSolid color="crimson" width={40} height={40} />
            )}
          </Box>
        </Box>
      </Paper>
    </Link>
  );
};

export default UserCard;
