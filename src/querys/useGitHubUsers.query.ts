import { useQuery } from "@tanstack/react-query";
import gitHubUsersService from "../services/gitHubUsers.service";

export const useGetGithubUsers = (query?: string) =>
  useQuery({
    queryKey: ["gitHubUsers", query],
    queryFn: () => gitHubUsersService.getUsers(query),
  });
