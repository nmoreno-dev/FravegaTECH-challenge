import gitHubApi from "../config/gitHubAPI.config";
import { Repository } from "../interfaces/gitHubRepository.interface";
import {
  GitHubUser,
  GitHubUserListItem,
  SearchResponse,
} from "../interfaces/gitHubUser.interface";

async function listUsers() {
  try {
    const response = await gitHubApi.get<GitHubUserListItem[]>(
      "/users?per_page=100"
    );

    if (response && response.data) {
      return response.data;
    }

    return [];
  } catch (error) {
    console.error(error);
    throw new Error("Error fetchign list of users.");
  }
}

async function searchUsers(query: string) {
  console.log("serachUsers");
  try {
    const response = await gitHubApi.get<SearchResponse<GitHubUserListItem>>(
      `/search/users?per_page=100&q=${query}`
    );

    if (response && response.data) {
      return response.data.items;
    }

    return [];
  } catch (error) {
    console.error(error);
    throw new Error("Error fetchign search results.");
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
    throw new Error("Error fetchign user data.");
  }
}

async function fetchUserRespositories(userName: string) {
  try {
    const response = await gitHubApi.get<Repository[]>(
      `/users/${userName}/repos`
    );

    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error fetchign user repos.");
  }
}

export default {
  listUsers,
  searchUsers,
  getUserByUserName,
  fetchUserRespositories,
};
