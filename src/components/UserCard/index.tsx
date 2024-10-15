import { GitHubUserListItem } from "@/interfaces/gitHubUser.interface";
import Link from "next/link";
import { useFavorites } from "../../store/favorites.store";
import {
  EllipsisVerticalIcon,
  HeartIcon as HeartIconSolid,
} from "@heroicons/react/16/solid";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { HeartIcon } from "@heroicons/react/24/outline";

const UserCard = ({ user }: { user: GitHubUserListItem }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites(
    (state) => state
  );

  return (
    <Card
      sx={{
        width: "275px",
      }}
    >
      <CardHeader
        action={
          <IconButton>
            <EllipsisVerticalIcon width={20} height={20} color="black" />
          </IconButton>
        }
        title={
          <Link href={`/users/${user.login}`}>
            <Typography variant="h2" fontSize={"1.3rem"}>
              {user.login}
            </Typography>
          </Link>
        }
      />
      <CardContent>
        <Link href={`/users/${user.login}`}>
          <CardMedia
            component="img"
            image={user.avatar_url}
            width={100}
            sx={{
              objectFit: "contain",
            }}
          />
        </Link>
      </CardContent>
      <CardActions>
        <IconButton>
          {favorites.some((element) => element.id === user.id) ? (
            <HeartIconSolid
              color="crimson"
              width={40}
              height={40}
              onClick={() => removeFromFavorites(user.id)}
            />
          ) : (
            <HeartIcon
              color="crimson"
              width={40}
              height={40}
              onClick={() => addToFavorites(user.id)}
            />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default UserCard;
