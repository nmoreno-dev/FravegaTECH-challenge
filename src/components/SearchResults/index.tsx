import { GitHubUserListItem } from "../../interfaces/gitHubUser.interface";
import UserCard from "../UserCard";
import { Box, Grid2 } from "@mui/material";

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
        <Grid2 container>
          {data.map((user) => (
            <Grid2 key={user.id} size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <UserCard user={user} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default SearchResults;
