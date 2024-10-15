import { GitHubUserListItem } from "@/interfaces/gitHubUser.interface";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

const UserCard = ({ user }: { user: GitHubUserListItem }) => {
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
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
