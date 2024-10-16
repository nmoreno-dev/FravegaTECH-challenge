import {
  Box,
  Card,
  CardActions,
  CardHeader,
  Grid2,
  Tooltip,
  Typography,
} from "@mui/material";
import { Repository } from "../../interfaces/gitHubRepository.interface";
import {
  ExclamationCircleIcon,
  ShareIcon,
  StarIcon,
} from "@heroicons/react/16/solid";

interface RepositoriesProps {
  repos?: Repository[];
  isLoading?: boolean;
  isError?: boolean;
}

const Repositories = ({ repos, isError, isLoading }: RepositoriesProps) => {
  return (
    <Box
      sx={{ p: 1 }}
      display={"flex"}
      flexWrap={"wrap"}
      gap={4}
      justifyContent={"space-between"}
    >
      {isError ? (
        <Typography>Error getting repositories</Typography>
      ) : isLoading ? (
        <Typography>Loading repositories</Typography>
      ) : repos ? (
        <Grid2 container>
          {repos.map((repo) => (
            <Grid2 key={repo.id} size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}>
              <Card sx={{ margin: 1 }}>
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
                  <Tooltip title="Forks">
                    <Box display={"flex"} alignItems={"start"}>
                      <ShareIcon width={20} height={20} />
                      <Typography>{repo.forks_count}</Typography>
                    </Box>
                  </Tooltip>
                  <Tooltip title="issues">
                    <Box display={"flex"} alignItems={"start"}>
                      <ExclamationCircleIcon width={20} height={20} />
                      <Typography>{repo.open_issues_count}</Typography>
                    </Box>
                  </Tooltip>
                  <Tooltip title="stars">
                    <Box display={"flex"} alignItems={"start"}>
                      <StarIcon width={20} height={20} />
                      <Typography>{repo.stargazers_count}</Typography>
                    </Box>
                  </Tooltip>
                </CardActions>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <Typography>There&apos;s no public repos for this user</Typography>
      )}
    </Box>
  );
};

export default Repositories;
