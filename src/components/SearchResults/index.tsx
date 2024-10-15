import { GitHubUserListItem } from "../../interfaces/gitHubUser.interface";
import UserCard from "../UserCard";
import { Box } from "@mui/material";

interface SearchResultsProps {
  data: GitHubUserListItem[];
}

const SearchResults = ({ data }: SearchResultsProps) => {
  return (
    <Box overflow={"hidden"}>
      <Box
        boxSizing={"border-box"}
        position={"absolute"}
        width={"100%"}
        border={"1px solid white"}
        top={56}
        zIndex={99}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={"10px"}
        padding={"20px"}
        bgcolor={"primary.main"}
        maxHeight={"500px"}
        sx={{
          boxShadow: 6,
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        {data.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Box>
    </Box>
  );
};

export default SearchResults;
