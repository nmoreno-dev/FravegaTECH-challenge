import gitHubApi from "../config/gitHubAPI.config";
import { GitHubUser } from "../interfaces/gitHubUser.interface";

async function getUsers(query?: string) {
  try {
    const queryParams = query ? `q=${query}` : "";

    const response = await gitHubApi.get<GitHubUser[]>(
      `/users?per_page=100&page=4&${queryParams}`
    );

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
