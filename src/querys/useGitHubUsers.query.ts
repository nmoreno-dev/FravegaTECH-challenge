import { useQuery } from "@tanstack/react-query";
import gitHubUsersService from "../services/gitHubUsers.service";

export const useListGithubUsers = (options?: { enabled?: boolean }) =>
  useQuery({
    queryKey: ["gitHubUsersList"],
    queryFn: () => gitHubUsersService.listUsers(),
    enabled: options?.enabled,
    staleTime: Infinity,
  });

export const useSearchGithubUsers = (
  query?: string,
  options?: { enabled?: boolean }
) =>
  useQuery({
    queryKey: ["gitHubFilteredUsers"],
    queryFn: () => gitHubUsersService.searchUsers(query!),
    enabled: !!query && options?.enabled,
  });

export const useGetUserByUserName = (userName: string) =>
  useQuery({
    queryKey: ["gitHubUser"],
    queryFn: () => gitHubUsersService.getUserByUserName(userName!),
  });
