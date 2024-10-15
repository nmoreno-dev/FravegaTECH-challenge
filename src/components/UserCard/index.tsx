import { GitHubUserListItem } from "@/interfaces/gitHubUser.interface";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { useFavorites } from "../../store/favorites.store";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/16/solid";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";

const UserCard = ({ user }: { user: GitHubUserListItem }) => {
  const { favorites } = useFavorites((state) => state);

  return (
    <Card>
      <CardContent>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={2}
          flexGrow={1}
          width={"275px"}
        >
          <Avatar
            src={user.avatar_url}
            sx={{ height: "70px", width: "70px" }}
          />
          <Typography variant="h3" fontSize={"2rem"}>
            {user.login}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Link
      href={`/users/${user.login}`}
      key={user.id}
      className={styles.container}
    >
      <div className={styles.innerContainer}>
        <Image
          className={styles.profilePicture}
          src={user.avatar_url}
          alt={user.login}
          width={50}
          height={50}
        />
        <div className={styles.userNameContainer}>
          <h3 className={styles.userName}>{user.login}</h3>
          {favorites.some((element) => element.id === user.id) && (
            <HeartIconSolid
              color="crimson"
              className={styles.favicon}
              width={30}
              height={30}
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
