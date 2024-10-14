import gitHubApi from "../config/gitHubAPI.config";
import { GitHubUser } from "../interfaces/gitHubUser.interface";

async function getUsers(query?: string) {
  try {
    const queryParams = query ? `q=${query}` : "";

    const response = await gitHubApi.get<GitHubUser[]>(`/users?${queryParams}`);

    if (response && response.data) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
}

export default {
  getUsers,
};
