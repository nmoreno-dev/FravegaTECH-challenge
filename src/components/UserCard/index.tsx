import { GitHubUser } from "@/interfaces/gitHubUser.interface";
import Image from "next/image";
import styles from "./styles.module.css";

const UserCard = ({ user }: { user: GitHubUser }) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.profilePicture}
        src={user.avatar_url}
        alt={user.login}
        width={50}
        height={50}
      />
      <div className={styles.userNameContainer}>
        <h3 className={styles.userName}>{user.login}</h3>
      </div>
    </div>
  );
};

export default UserCard;
