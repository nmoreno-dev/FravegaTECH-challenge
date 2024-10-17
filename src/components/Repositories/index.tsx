import {
  Box,
  Card,
  CardActions,
  CardHeader,
  Grid2,
  Skeleton,
  Stack,
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

const Repositories = ({
  repos,
  isError,
  isLoading = true,
}: RepositoriesProps) => {
  return (
    <Box
      sx={{ p: 1 }}
      display={"flex"}
      flexWrap={"wrap"}
      gap={4}
      justifyContent={"space-between"}
      data-testid="user-repositories"
    >
      {isError ? (
        <Typography role="alert">Error getting repositories</Typography>
      ) : isLoading ? (
        // MARK: repo skeleton
        <Grid2 container size={12}>
          {new Array(4).fill("").map((_, i) => (
            <Grid2
              key={i}
              size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
              component="article"
            >
              <Stack sx={{ m: 1 }}>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="rectangular" height={40} />
              </Stack>
            </Grid2>
          ))}
        </Grid2>
      ) : repos ? (
        <Grid2 container size={12}>
          {repos.map((repo) => (
            // MARK: repo
            <Grid2
              key={repo.id}
              size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
              component="article"
            >
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
                  <Tooltip
                    title="Forks"
                    aria-label={`${repo.forks_count} forks`}
                  >
                    <Box display={"flex"} alignItems={"start"}>
                      <ShareIcon
                        width={20}
                        height={20}
                        aria-hidden="true"
                        color="limeGreen"
                      />
                      <Typography>{repo.forks_count}</Typography>
                    </Box>
                  </Tooltip>
                  <Tooltip
                    title="Issues"
                    aria-label={`${repo.open_issues_count} open issues`}
                  >
                    <Box display={"flex"} alignItems={"start"}>
                      <ExclamationCircleIcon
                        width={20}
                        height={20}
                        aria-hidden="true"
                        color="skyBlue"
                      />
                      <Typography>{repo.open_issues_count}</Typography>
                    </Box>
                  </Tooltip>
                  <Tooltip
                    title="Stars"
                    aria-label={`${repo.stargazers_count} stars`}
                  >
                    <Box display={"flex"} alignItems={"start"}>
                      <StarIcon
                        width={20}
                        height={20}
                        aria-hidden="true"
                        color="gold"
                      />
                      <Typography>{repo.stargazers_count}</Typography>
                    </Box>
                  </Tooltip>
                </CardActions>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <Typography>No public repositories for this user</Typography>
      )}
    </Box>
  );
};

export default Repositories;
