import { Box, Card, CardActions, CardHeader, Typography } from "@mui/material";
import { Repository } from "../../interfaces/gitHubRepository.interface";
import {
  ExclamationCircleIcon,
  ShareIcon,
  StarIcon,
} from "@heroicons/react/16/solid";

interface RepositoriesTabPannelProps {
  repos?: Repository[];
  isLoading?: boolean;
  isError?: boolean;
}

const RepositoriesTabPannel = ({
  repos,
  isError,
  isLoading,
}: RepositoriesTabPannelProps) => {
  return (
    <Box
      sx={{ p: 2 }}
      display={"flex"}
      flexWrap={"wrap"}
      gap={4}
      justifyContent={"space-evenly"}
    >
      {isError ? (
        <Typography>Error getting repositories</Typography>
      ) : isLoading ? (
        <Typography>Loading repositories</Typography>
      ) : (
        repos &&
        repos.map((repo) => (
          <Card key={repo.id} sx={{ width: "250px" }}>
            <CardHeader
              sx={{
                "& .MuiCardHeader-content": {
                  overflow: "hidden",
                },
              }}
              titleTypographyProps={{
                noWrap: true,
                textOverflow: "ellipsis",
              }}
              title={repo.name}
              subheader={`Last Updated: ${new Date(
                repo.updated_at
              ).toLocaleDateString("es-AR")}`}
            />
            <CardActions>
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <ShareIcon width={24} height={24} />
                <Typography>{repo.forks_count}</Typography>
              </Box>
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <ExclamationCircleIcon width={24} height={24} />
                <Typography>{repo.open_issues_count}</Typography>
              </Box>
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <StarIcon width={24} height={24} />
                <Typography>{repo.stargazers_count}</Typography>
              </Box>
            </CardActions>
          </Card>
        ))
      )}
    </Box>
  );
};

export default RepositoriesTabPannel;
