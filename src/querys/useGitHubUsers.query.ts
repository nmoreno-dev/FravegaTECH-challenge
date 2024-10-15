import { useQuery } from "@tanstack/react-query";
import gitHubUsersService from "../services/gitHubUsers.service";

export const useListGithubUsers = (options?: { enabled?: boolean }) =>
  useQuery({
    queryKey: ["gitHubUsers"],
    queryFn: () => gitHubUsersService.listUsers(),
    enabled: options?.enabled,
    staleTime: Infinity,
  });

export const useSearchGithubUsers = (query?: string) =>
  useQuery({
    queryKey: ["gitHubUsers"],
    queryFn: () => gitHubUsersService.searchUsers(query!),
    enabled: !!query,
  });

export const useGetUserByUserName = (userName: string) =>
  useQuery({
    queryKey: ["gitHubUsers"],
    queryFn: () => gitHubUsersService.getUserByUserName(userName!),
  });
