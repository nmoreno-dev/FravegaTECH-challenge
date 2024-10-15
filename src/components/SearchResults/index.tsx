import cn from "classnames";
import { GitHubUserListItem } from "../../interfaces/gitHubUser.interface";
import UserCard from "../UserCard";
import styles from "./styles.module.css";

interface SearchResultsProps {
  data: GitHubUserListItem[];
  className?: string;
}

const SearchResults = ({ data, className = "" }: SearchResultsProps) => {
  return (
    <div className={cn(styles.container, className)}>
      {data.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default SearchResults;
