import { GitHubUserListItem } from "@/interfaces/gitHubUser.interface";
import Link from "next/link";
import { useFavorites } from "../../store/favorites.store";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/16/solid";
import {
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
        width: "200px",
      }}
    >
      <CardHeader
        title={
          <Link href={`/users/${user.login}`}>
            <Typography variant="h2" fontSize={"1.3rem"} noWrap>
              {user.login}
            </Typography>
          </Link>
        }
        sx={{
          paddingBottom: 0,
          display: "flex",
          overflow: "hidden",
          "& .MuiCardHeader-content": {
            overflow: "hidden",
          },
        }}
      />
      <CardContent
        sx={{
          paddingBottom: 0,
        }}
      >
        <Link href={`/users/${user.login}`}>
          <CardMedia
            component="img"
            image={user.avatar_url}
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
