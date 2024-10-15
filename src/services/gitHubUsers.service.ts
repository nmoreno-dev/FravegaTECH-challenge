import gitHubApi from "../config/gitHubAPI.config";
import {
  GitHubUser,
  GitHubUserItemList,
  SearchResponse,
} from "../interfaces/gitHubUser.interface";

async function listUsers() {
  try {
    const response = await gitHubApi.get<GitHubUserItemList[]>(
      "/users?per_page=100"
    );

    if (response && response.data) {
      return response.data;
    }

    return [];
  } catch (error) {
    console.error(error);
  }
}

async function searchUsers(query: string) {
  try {
    const response = await gitHubApi.get<SearchResponse<GitHubUserItemList>>(
      `/search/users?per_page=100&q=${query}`
    );

    if (response && response.data) {
      return response.data.items;
    }

    return [];
  } catch (error) {
    console.error(error);
  }
}

async function getUserByUserName(userName: string) {
  try {
    const response = await gitHubApi.get<GitHubUser>(`/users/${userName}`);

    if (response && response.data) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
}

export default {
  listUsers,
  searchUsers,
  getUserByUserName,
};
