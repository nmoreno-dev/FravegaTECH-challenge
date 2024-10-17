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
    queryKey: ["gitHubFilteredUsers", query],
    queryFn: () => gitHubUsersService.searchUsers(query!),
    enabled: !!query && options?.enabled,
  });

export const useGetUserByUserName = (userName: string) =>
  useQuery({
    queryKey: ["gitHubUser", userName],
    queryFn: () => gitHubUsersService.getUserByUserName(userName!),
    enabled: !!userName,
  });

export const useGetUserReposByUserName = (userName?: string) =>
  useQuery({
    queryKey: ["userRepos", userName],
    queryFn: () => gitHubUsersService.fetchUserRespositories(userName!),
    enabled: !!userName,
  });
