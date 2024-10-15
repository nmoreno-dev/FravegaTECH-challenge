import gitHubApi from "../config/gitHubAPI.config";
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
  }
}

async function searchUsers(query: string) {
  console.log("serachUsers");
  return [
    {
      login: "CAR",
      id: 313994,
      node_id: "MDQ6VXNlcjMxMzk5NA==",
      avatar_url: "https://avatars.githubusercontent.com/u/313994?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/CAR",
      html_url: "https://github.com/CAR",
      followers_url: "https://api.github.com/users/CAR/followers",
      following_url: "https://api.github.com/users/CAR/following{/other_user}",
      gists_url: "https://api.github.com/users/CAR/gists{/gist_id}",
      starred_url: "https://api.github.com/users/CAR/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/CAR/subscriptions",
      organizations_url: "https://api.github.com/users/CAR/orgs",
      repos_url: "https://api.github.com/users/CAR/repos",
      events_url: "https://api.github.com/users/CAR/events{/privacy}",
      received_events_url: "https://api.github.com/users/CAR/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "nicholascar",
      id: 7321872,
      node_id: "MDQ6VXNlcjczMjE4NzI=",
      avatar_url: "https://avatars.githubusercontent.com/u/7321872?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/nicholascar",
      html_url: "https://github.com/nicholascar",
      followers_url: "https://api.github.com/users/nicholascar/followers",
      following_url:
        "https://api.github.com/users/nicholascar/following{/other_user}",
      gists_url: "https://api.github.com/users/nicholascar/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/nicholascar/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/nicholascar/subscriptions",
      organizations_url: "https://api.github.com/users/nicholascar/orgs",
      repos_url: "https://api.github.com/users/nicholascar/repos",
      events_url: "https://api.github.com/users/nicholascar/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/nicholascar/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carpedm20",
      id: 3346407,
      node_id: "MDQ6VXNlcjMzNDY0MDc=",
      avatar_url: "https://avatars.githubusercontent.com/u/3346407?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carpedm20",
      html_url: "https://github.com/carpedm20",
      followers_url: "https://api.github.com/users/carpedm20/followers",
      following_url:
        "https://api.github.com/users/carpedm20/following{/other_user}",
      gists_url: "https://api.github.com/users/carpedm20/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carpedm20/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carpedm20/subscriptions",
      organizations_url: "https://api.github.com/users/carpedm20/orgs",
      repos_url: "https://api.github.com/users/carpedm20/repos",
      events_url: "https://api.github.com/users/carpedm20/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carpedm20/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlosazaustre",
      id: 650752,
      node_id: "MDQ6VXNlcjY1MDc1Mg==",
      avatar_url: "https://avatars.githubusercontent.com/u/650752?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlosazaustre",
      html_url: "https://github.com/carlosazaustre",
      followers_url: "https://api.github.com/users/carlosazaustre/followers",
      following_url:
        "https://api.github.com/users/carlosazaustre/following{/other_user}",
      gists_url: "https://api.github.com/users/carlosazaustre/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlosazaustre/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carlosazaustre/subscriptions",
      organizations_url: "https://api.github.com/users/carlosazaustre/orgs",
      repos_url: "https://api.github.com/users/carlosazaustre/repos",
      events_url:
        "https://api.github.com/users/carlosazaustre/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlosazaustre/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "CarGuo",
      id: 10770362,
      node_id: "MDQ6VXNlcjEwNzcwMzYy",
      avatar_url: "https://avatars.githubusercontent.com/u/10770362?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/CarGuo",
      html_url: "https://github.com/CarGuo",
      followers_url: "https://api.github.com/users/CarGuo/followers",
      following_url:
        "https://api.github.com/users/CarGuo/following{/other_user}",
      gists_url: "https://api.github.com/users/CarGuo/gists{/gist_id}",
      starred_url: "https://api.github.com/users/CarGuo/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/CarGuo/subscriptions",
      organizations_url: "https://api.github.com/users/CarGuo/orgs",
      repos_url: "https://api.github.com/users/CarGuo/repos",
      events_url: "https://api.github.com/users/CarGuo/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/CarGuo/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "renanmav",
      id: 43140758,
      node_id: "MDQ6VXNlcjQzMTQwNzU4",
      avatar_url: "https://avatars.githubusercontent.com/u/43140758?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/renanmav",
      html_url: "https://github.com/renanmav",
      followers_url: "https://api.github.com/users/renanmav/followers",
      following_url:
        "https://api.github.com/users/renanmav/following{/other_user}",
      gists_url: "https://api.github.com/users/renanmav/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/renanmav/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/renanmav/subscriptions",
      organizations_url: "https://api.github.com/users/renanmav/orgs",
      repos_url: "https://api.github.com/users/renanmav/repos",
      events_url: "https://api.github.com/users/renanmav/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/renanmav/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "LGUG2Z",
      id: 13164844,
      node_id: "MDQ6VXNlcjEzMTY0ODQ0",
      avatar_url: "https://avatars.githubusercontent.com/u/13164844?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/LGUG2Z",
      html_url: "https://github.com/LGUG2Z",
      followers_url: "https://api.github.com/users/LGUG2Z/followers",
      following_url:
        "https://api.github.com/users/LGUG2Z/following{/other_user}",
      gists_url: "https://api.github.com/users/LGUG2Z/gists{/gist_id}",
      starred_url: "https://api.github.com/users/LGUG2Z/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/LGUG2Z/subscriptions",
      organizations_url: "https://api.github.com/users/LGUG2Z/orgs",
      repos_url: "https://api.github.com/users/LGUG2Z/repos",
      events_url: "https://api.github.com/users/LGUG2Z/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/LGUG2Z/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlospolop",
      id: 17181413,
      node_id: "MDQ6VXNlcjE3MTgxNDEz",
      avatar_url: "https://avatars.githubusercontent.com/u/17181413?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlospolop",
      html_url: "https://github.com/carlospolop",
      followers_url: "https://api.github.com/users/carlospolop/followers",
      following_url:
        "https://api.github.com/users/carlospolop/following{/other_user}",
      gists_url: "https://api.github.com/users/carlospolop/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlospolop/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carlospolop/subscriptions",
      organizations_url: "https://api.github.com/users/carlospolop/orgs",
      repos_url: "https://api.github.com/users/carlospolop/repos",
      events_url: "https://api.github.com/users/carlospolop/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlospolop/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "Carreau",
      id: 335567,
      node_id: "MDQ6VXNlcjMzNTU2Nw==",
      avatar_url: "https://avatars.githubusercontent.com/u/335567?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Carreau",
      html_url: "https://github.com/Carreau",
      followers_url: "https://api.github.com/users/Carreau/followers",
      following_url:
        "https://api.github.com/users/Carreau/following{/other_user}",
      gists_url: "https://api.github.com/users/Carreau/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Carreau/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Carreau/subscriptions",
      organizations_url: "https://api.github.com/users/Carreau/orgs",
      repos_url: "https://api.github.com/users/Carreau/repos",
      events_url: "https://api.github.com/users/Carreau/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Carreau/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "jverkoey",
      id: 45670,
      node_id: "MDQ6VXNlcjQ1Njcw",
      avatar_url: "https://avatars.githubusercontent.com/u/45670?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jverkoey",
      html_url: "https://github.com/jverkoey",
      followers_url: "https://api.github.com/users/jverkoey/followers",
      following_url:
        "https://api.github.com/users/jverkoey/following{/other_user}",
      gists_url: "https://api.github.com/users/jverkoey/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/jverkoey/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/jverkoey/subscriptions",
      organizations_url: "https://api.github.com/users/jverkoey/orgs",
      repos_url: "https://api.github.com/users/jverkoey/repos",
      events_url: "https://api.github.com/users/jverkoey/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/jverkoey/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carllerche",
      id: 6180,
      node_id: "MDQ6VXNlcjYxODA=",
      avatar_url: "https://avatars.githubusercontent.com/u/6180?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carllerche",
      html_url: "https://github.com/carllerche",
      followers_url: "https://api.github.com/users/carllerche/followers",
      following_url:
        "https://api.github.com/users/carllerche/following{/other_user}",
      gists_url: "https://api.github.com/users/carllerche/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carllerche/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carllerche/subscriptions",
      organizations_url: "https://api.github.com/users/carllerche/orgs",
      repos_url: "https://api.github.com/users/carllerche/repos",
      events_url: "https://api.github.com/users/carllerche/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carllerche/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carols10cents",
      id: 193874,
      node_id: "MDQ6VXNlcjE5Mzg3NA==",
      avatar_url: "https://avatars.githubusercontent.com/u/193874?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carols10cents",
      html_url: "https://github.com/carols10cents",
      followers_url: "https://api.github.com/users/carols10cents/followers",
      following_url:
        "https://api.github.com/users/carols10cents/following{/other_user}",
      gists_url: "https://api.github.com/users/carols10cents/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carols10cents/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carols10cents/subscriptions",
      organizations_url: "https://api.github.com/users/carols10cents/orgs",
      repos_url: "https://api.github.com/users/carols10cents/repos",
      events_url: "https://api.github.com/users/carols10cents/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carols10cents/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlcastanas",
      id: 89068725,
      node_id: "MDQ6VXNlcjg5MDY4NzI1",
      avatar_url: "https://avatars.githubusercontent.com/u/89068725?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlcastanas",
      html_url: "https://github.com/carlcastanas",
      followers_url: "https://api.github.com/users/carlcastanas/followers",
      following_url:
        "https://api.github.com/users/carlcastanas/following{/other_user}",
      gists_url: "https://api.github.com/users/carlcastanas/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlcastanas/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carlcastanas/subscriptions",
      organizations_url: "https://api.github.com/users/carlcastanas/orgs",
      repos_url: "https://api.github.com/users/carlcastanas/repos",
      events_url: "https://api.github.com/users/carlcastanas/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlcastanas/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carr",
      id: 97653,
      node_id: "MDQ6VXNlcjk3NjUz",
      avatar_url: "https://avatars.githubusercontent.com/u/97653?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carr",
      html_url: "https://github.com/carr",
      followers_url: "https://api.github.com/users/carr/followers",
      following_url: "https://api.github.com/users/carr/following{/other_user}",
      gists_url: "https://api.github.com/users/carr/gists{/gist_id}",
      starred_url: "https://api.github.com/users/carr/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carr/subscriptions",
      organizations_url: "https://api.github.com/users/carr/orgs",
      repos_url: "https://api.github.com/users/carr/repos",
      events_url: "https://api.github.com/users/carr/events{/privacy}",
      received_events_url: "https://api.github.com/users/carr/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carabina",
      id: 3380677,
      node_id: "MDQ6VXNlcjMzODA2Nzc=",
      avatar_url: "https://avatars.githubusercontent.com/u/3380677?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carabina",
      html_url: "https://github.com/carabina",
      followers_url: "https://api.github.com/users/carabina/followers",
      following_url:
        "https://api.github.com/users/carabina/following{/other_user}",
      gists_url: "https://api.github.com/users/carabina/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carabina/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carabina/subscriptions",
      organizations_url: "https://api.github.com/users/carabina/orgs",
      repos_url: "https://api.github.com/users/carabina/repos",
      events_url: "https://api.github.com/users/carabina/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carabina/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carcagi",
      id: 7891882,
      node_id: "MDQ6VXNlcjc4OTE4ODI=",
      avatar_url: "https://avatars.githubusercontent.com/u/7891882?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carcagi",
      html_url: "https://github.com/carcagi",
      followers_url: "https://api.github.com/users/carcagi/followers",
      following_url:
        "https://api.github.com/users/carcagi/following{/other_user}",
      gists_url: "https://api.github.com/users/carcagi/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carcagi/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carcagi/subscriptions",
      organizations_url: "https://api.github.com/users/carcagi/orgs",
      repos_url: "https://api.github.com/users/carcagi/repos",
      events_url: "https://api.github.com/users/carcagi/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carcagi/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carltongibson",
      id: 64686,
      node_id: "MDQ6VXNlcjY0Njg2",
      avatar_url: "https://avatars.githubusercontent.com/u/64686?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carltongibson",
      html_url: "https://github.com/carltongibson",
      followers_url: "https://api.github.com/users/carltongibson/followers",
      following_url:
        "https://api.github.com/users/carltongibson/following{/other_user}",
      gists_url: "https://api.github.com/users/carltongibson/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carltongibson/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carltongibson/subscriptions",
      organizations_url: "https://api.github.com/users/carltongibson/orgs",
      repos_url: "https://api.github.com/users/carltongibson/repos",
      events_url: "https://api.github.com/users/carltongibson/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carltongibson/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "CarGDev",
      id: 40899337,
      node_id: "MDQ6VXNlcjQwODk5MzM3",
      avatar_url: "https://avatars.githubusercontent.com/u/40899337?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/CarGDev",
      html_url: "https://github.com/CarGDev",
      followers_url: "https://api.github.com/users/CarGDev/followers",
      following_url:
        "https://api.github.com/users/CarGDev/following{/other_user}",
      gists_url: "https://api.github.com/users/CarGDev/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/CarGDev/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/CarGDev/subscriptions",
      organizations_url: "https://api.github.com/users/CarGDev/orgs",
      repos_url: "https://api.github.com/users/CarGDev/repos",
      events_url: "https://api.github.com/users/CarGDev/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/CarGDev/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "hx-w",
      id: 32268783,
      node_id: "MDQ6VXNlcjMyMjY4Nzgz",
      avatar_url: "https://avatars.githubusercontent.com/u/32268783?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hx-w",
      html_url: "https://github.com/hx-w",
      followers_url: "https://api.github.com/users/hx-w/followers",
      following_url: "https://api.github.com/users/hx-w/following{/other_user}",
      gists_url: "https://api.github.com/users/hx-w/gists{/gist_id}",
      starred_url: "https://api.github.com/users/hx-w/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/hx-w/subscriptions",
      organizations_url: "https://api.github.com/users/hx-w/orgs",
      repos_url: "https://api.github.com/users/hx-w/repos",
      events_url: "https://api.github.com/users/hx-w/events{/privacy}",
      received_events_url: "https://api.github.com/users/hx-w/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlosrigoni",
      id: 59850567,
      node_id: "MDQ6VXNlcjU5ODUwNTY3",
      avatar_url: "https://avatars.githubusercontent.com/u/59850567?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlosrigoni",
      html_url: "https://github.com/carlosrigoni",
      followers_url: "https://api.github.com/users/carlosrigoni/followers",
      following_url:
        "https://api.github.com/users/carlosrigoni/following{/other_user}",
      gists_url: "https://api.github.com/users/carlosrigoni/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlosrigoni/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carlosrigoni/subscriptions",
      organizations_url: "https://api.github.com/users/carlosrigoni/orgs",
      repos_url: "https://api.github.com/users/carlosrigoni/repos",
      events_url: "https://api.github.com/users/carlosrigoni/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlosrigoni/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carnal0wnage",
      id: 735360,
      node_id: "MDQ6VXNlcjczNTM2MA==",
      avatar_url: "https://avatars.githubusercontent.com/u/735360?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carnal0wnage",
      html_url: "https://github.com/carnal0wnage",
      followers_url: "https://api.github.com/users/carnal0wnage/followers",
      following_url:
        "https://api.github.com/users/carnal0wnage/following{/other_user}",
      gists_url: "https://api.github.com/users/carnal0wnage/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carnal0wnage/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carnal0wnage/subscriptions",
      organizations_url: "https://api.github.com/users/carnal0wnage/orgs",
      repos_url: "https://api.github.com/users/carnal0wnage/repos",
      events_url: "https://api.github.com/users/carnal0wnage/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carnal0wnage/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carykh",
      id: 23752938,
      node_id: "MDQ6VXNlcjIzNzUyOTM4",
      avatar_url: "https://avatars.githubusercontent.com/u/23752938?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carykh",
      html_url: "https://github.com/carykh",
      followers_url: "https://api.github.com/users/carykh/followers",
      following_url:
        "https://api.github.com/users/carykh/following{/other_user}",
      gists_url: "https://api.github.com/users/carykh/gists{/gist_id}",
      starred_url: "https://api.github.com/users/carykh/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carykh/subscriptions",
      organizations_url: "https://api.github.com/users/carykh/orgs",
      repos_url: "https://api.github.com/users/carykh/repos",
      events_url: "https://api.github.com/users/carykh/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carykh/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "borancar",
      id: 1197229,
      node_id: "MDQ6VXNlcjExOTcyMjk=",
      avatar_url: "https://avatars.githubusercontent.com/u/1197229?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/borancar",
      html_url: "https://github.com/borancar",
      followers_url: "https://api.github.com/users/borancar/followers",
      following_url:
        "https://api.github.com/users/borancar/following{/other_user}",
      gists_url: "https://api.github.com/users/borancar/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/borancar/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/borancar/subscriptions",
      organizations_url: "https://api.github.com/users/borancar/orgs",
      repos_url: "https://api.github.com/users/borancar/repos",
      events_url: "https://api.github.com/users/borancar/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/borancar/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "CarlosAlexandre197",
      id: 113312099,
      node_id: "U_kgDOBsEBYw",
      avatar_url: "https://avatars.githubusercontent.com/u/113312099?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/CarlosAlexandre197",
      html_url: "https://github.com/CarlosAlexandre197",
      followers_url:
        "https://api.github.com/users/CarlosAlexandre197/followers",
      following_url:
        "https://api.github.com/users/CarlosAlexandre197/following{/other_user}",
      gists_url:
        "https://api.github.com/users/CarlosAlexandre197/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/CarlosAlexandre197/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/CarlosAlexandre197/subscriptions",
      organizations_url: "https://api.github.com/users/CarlosAlexandre197/orgs",
      repos_url: "https://api.github.com/users/CarlosAlexandre197/repos",
      events_url:
        "https://api.github.com/users/CarlosAlexandre197/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/CarlosAlexandre197/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "Carson-Ho",
      id: 18041645,
      node_id: "MDQ6VXNlcjE4MDQxNjQ1",
      avatar_url: "https://avatars.githubusercontent.com/u/18041645?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Carson-Ho",
      html_url: "https://github.com/Carson-Ho",
      followers_url: "https://api.github.com/users/Carson-Ho/followers",
      following_url:
        "https://api.github.com/users/Carson-Ho/following{/other_user}",
      gists_url: "https://api.github.com/users/Carson-Ho/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Carson-Ho/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Carson-Ho/subscriptions",
      organizations_url: "https://api.github.com/users/Carson-Ho/orgs",
      repos_url: "https://api.github.com/users/Carson-Ho/repos",
      events_url: "https://api.github.com/users/Carson-Ho/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Carson-Ho/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "C9999",
      id: 650150,
      node_id: "MDQ6VXNlcjY1MDE1MA==",
      avatar_url: "https://avatars.githubusercontent.com/u/650150?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/C9999",
      html_url: "https://github.com/C9999",
      followers_url: "https://api.github.com/users/C9999/followers",
      following_url:
        "https://api.github.com/users/C9999/following{/other_user}",
      gists_url: "https://api.github.com/users/C9999/gists{/gist_id}",
      starred_url: "https://api.github.com/users/C9999/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/C9999/subscriptions",
      organizations_url: "https://api.github.com/users/C9999/orgs",
      repos_url: "https://api.github.com/users/C9999/repos",
      events_url: "https://api.github.com/users/C9999/events{/privacy}",
      received_events_url: "https://api.github.com/users/C9999/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlogilmar",
      id: 17634377,
      node_id: "MDQ6VXNlcjE3NjM0Mzc3",
      avatar_url: "https://avatars.githubusercontent.com/u/17634377?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlogilmar",
      html_url: "https://github.com/carlogilmar",
      followers_url: "https://api.github.com/users/carlogilmar/followers",
      following_url:
        "https://api.github.com/users/carlogilmar/following{/other_user}",
      gists_url: "https://api.github.com/users/carlogilmar/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlogilmar/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carlogilmar/subscriptions",
      organizations_url: "https://api.github.com/users/carlogilmar/orgs",
      repos_url: "https://api.github.com/users/carlogilmar/repos",
      events_url: "https://api.github.com/users/carlogilmar/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlogilmar/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carquet",
      id: 18001693,
      node_id: "MDQ6VXNlcjE4MDAxNjkz",
      avatar_url: "https://avatars.githubusercontent.com/u/18001693?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carquet",
      html_url: "https://github.com/carquet",
      followers_url: "https://api.github.com/users/carquet/followers",
      following_url:
        "https://api.github.com/users/carquet/following{/other_user}",
      gists_url: "https://api.github.com/users/carquet/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carquet/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carquet/subscriptions",
      organizations_url: "https://api.github.com/users/carquet/orgs",
      repos_url: "https://api.github.com/users/carquet/repos",
      events_url: "https://api.github.com/users/carquet/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carquet/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carljm",
      id: 61586,
      node_id: "MDQ6VXNlcjYxNTg2",
      avatar_url: "https://avatars.githubusercontent.com/u/61586?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carljm",
      html_url: "https://github.com/carljm",
      followers_url: "https://api.github.com/users/carljm/followers",
      following_url:
        "https://api.github.com/users/carljm/following{/other_user}",
      gists_url: "https://api.github.com/users/carljm/gists{/gist_id}",
      starred_url: "https://api.github.com/users/carljm/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carljm/subscriptions",
      organizations_url: "https://api.github.com/users/carljm/orgs",
      repos_url: "https://api.github.com/users/carljm/repos",
      events_url: "https://api.github.com/users/carljm/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carljm/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlosfab",
      id: 20707349,
      node_id: "MDQ6VXNlcjIwNzA3MzQ5",
      avatar_url: "https://avatars.githubusercontent.com/u/20707349?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlosfab",
      html_url: "https://github.com/carlosfab",
      followers_url: "https://api.github.com/users/carlosfab/followers",
      following_url:
        "https://api.github.com/users/carlosfab/following{/other_user}",
      gists_url: "https://api.github.com/users/carlosfab/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlosfab/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carlosfab/subscriptions",
      organizations_url: "https://api.github.com/users/carlosfab/orgs",
      repos_url: "https://api.github.com/users/carlosfab/repos",
      events_url: "https://api.github.com/users/carlosfab/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlosfab/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "cart",
      id: 2694663,
      node_id: "MDQ6VXNlcjI2OTQ2NjM=",
      avatar_url: "https://avatars.githubusercontent.com/u/2694663?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/cart",
      html_url: "https://github.com/cart",
      followers_url: "https://api.github.com/users/cart/followers",
      following_url: "https://api.github.com/users/cart/following{/other_user}",
      gists_url: "https://api.github.com/users/cart/gists{/gist_id}",
      starred_url: "https://api.github.com/users/cart/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/cart/subscriptions",
      organizations_url: "https://api.github.com/users/cart/orgs",
      repos_url: "https://api.github.com/users/cart/repos",
      events_url: "https://api.github.com/users/cart/events{/privacy}",
      received_events_url: "https://api.github.com/users/cart/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carolinabentresca",
      id: 88462536,
      node_id: "MDQ6VXNlcjg4NDYyNTM2",
      avatar_url: "https://avatars.githubusercontent.com/u/88462536?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carolinabentresca",
      html_url: "https://github.com/carolinabentresca",
      followers_url: "https://api.github.com/users/carolinabentresca/followers",
      following_url:
        "https://api.github.com/users/carolinabentresca/following{/other_user}",
      gists_url:
        "https://api.github.com/users/carolinabentresca/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carolinabentresca/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carolinabentresca/subscriptions",
      organizations_url: "https://api.github.com/users/carolinabentresca/orgs",
      repos_url: "https://api.github.com/users/carolinabentresca/repos",
      events_url:
        "https://api.github.com/users/carolinabentresca/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carolinabentresca/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlosantoniodasilva",
      id: 26328,
      node_id: "MDQ6VXNlcjI2MzI4",
      avatar_url: "https://avatars.githubusercontent.com/u/26328?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlosantoniodasilva",
      html_url: "https://github.com/carlosantoniodasilva",
      followers_url:
        "https://api.github.com/users/carlosantoniodasilva/followers",
      following_url:
        "https://api.github.com/users/carlosantoniodasilva/following{/other_user}",
      gists_url:
        "https://api.github.com/users/carlosantoniodasilva/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlosantoniodasilva/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carlosantoniodasilva/subscriptions",
      organizations_url:
        "https://api.github.com/users/carlosantoniodasilva/orgs",
      repos_url: "https://api.github.com/users/carlosantoniodasilva/repos",
      events_url:
        "https://api.github.com/users/carlosantoniodasilva/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlosantoniodasilva/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carl-alberto",
      id: 5098765,
      node_id: "MDQ6VXNlcjUwOTg3NjU=",
      avatar_url: "https://avatars.githubusercontent.com/u/5098765?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carl-alberto",
      html_url: "https://github.com/carl-alberto",
      followers_url: "https://api.github.com/users/carl-alberto/followers",
      following_url:
        "https://api.github.com/users/carl-alberto/following{/other_user}",
      gists_url: "https://api.github.com/users/carl-alberto/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carl-alberto/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carl-alberto/subscriptions",
      organizations_url: "https://api.github.com/users/carl-alberto/orgs",
      repos_url: "https://api.github.com/users/carl-alberto/repos",
      events_url: "https://api.github.com/users/carl-alberto/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carl-alberto/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlosal1015",
      id: 21283014,
      node_id: "MDQ6VXNlcjIxMjgzMDE0",
      avatar_url: "https://avatars.githubusercontent.com/u/21283014?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlosal1015",
      html_url: "https://github.com/carlosal1015",
      followers_url: "https://api.github.com/users/carlosal1015/followers",
      following_url:
        "https://api.github.com/users/carlosal1015/following{/other_user}",
      gists_url: "https://api.github.com/users/carlosal1015/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlosal1015/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carlosal1015/subscriptions",
      organizations_url: "https://api.github.com/users/carlosal1015/orgs",
      repos_url: "https://api.github.com/users/carlosal1015/repos",
      events_url: "https://api.github.com/users/carlosal1015/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlosal1015/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "CarlosLevir",
      id: 40604081,
      node_id: "MDQ6VXNlcjQwNjA0MDgx",
      avatar_url: "https://avatars.githubusercontent.com/u/40604081?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/CarlosLevir",
      html_url: "https://github.com/CarlosLevir",
      followers_url: "https://api.github.com/users/CarlosLevir/followers",
      following_url:
        "https://api.github.com/users/CarlosLevir/following{/other_user}",
      gists_url: "https://api.github.com/users/CarlosLevir/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/CarlosLevir/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/CarlosLevir/subscriptions",
      organizations_url: "https://api.github.com/users/CarlosLevir/orgs",
      repos_url: "https://api.github.com/users/CarlosLevir/repos",
      events_url: "https://api.github.com/users/CarlosLevir/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/CarlosLevir/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carwale",
      id: 9958991,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjk5NTg5OTE=",
      avatar_url: "https://avatars.githubusercontent.com/u/9958991?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carwale",
      html_url: "https://github.com/carwale",
      followers_url: "https://api.github.com/users/carwale/followers",
      following_url:
        "https://api.github.com/users/carwale/following{/other_user}",
      gists_url: "https://api.github.com/users/carwale/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carwale/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carwale/subscriptions",
      organizations_url: "https://api.github.com/users/carwale/orgs",
      repos_url: "https://api.github.com/users/carwale/repos",
      events_url: "https://api.github.com/users/carwale/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carwale/received_events",
      type: "Organization",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carmocca",
      id: 11067892,
      node_id: "MDQ6VXNlcjExMDY3ODky",
      avatar_url: "https://avatars.githubusercontent.com/u/11067892?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carmocca",
      html_url: "https://github.com/carmocca",
      followers_url: "https://api.github.com/users/carmocca/followers",
      following_url:
        "https://api.github.com/users/carmocca/following{/other_user}",
      gists_url: "https://api.github.com/users/carmocca/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carmocca/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carmocca/subscriptions",
      organizations_url: "https://api.github.com/users/carmocca/orgs",
      repos_url: "https://api.github.com/users/carmocca/repos",
      events_url: "https://api.github.com/users/carmocca/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carmocca/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlini",
      id: 1269300,
      node_id: "MDQ6VXNlcjEyNjkzMDA=",
      avatar_url: "https://avatars.githubusercontent.com/u/1269300?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlini",
      html_url: "https://github.com/carlini",
      followers_url: "https://api.github.com/users/carlini/followers",
      following_url:
        "https://api.github.com/users/carlini/following{/other_user}",
      gists_url: "https://api.github.com/users/carlini/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlini/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carlini/subscriptions",
      organizations_url: "https://api.github.com/users/carlini/orgs",
      repos_url: "https://api.github.com/users/carlini/repos",
      events_url: "https://api.github.com/users/carlini/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlini/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlosbuenosvinos",
      id: 351553,
      node_id: "MDQ6VXNlcjM1MTU1Mw==",
      avatar_url: "https://avatars.githubusercontent.com/u/351553?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlosbuenosvinos",
      html_url: "https://github.com/carlosbuenosvinos",
      followers_url: "https://api.github.com/users/carlosbuenosvinos/followers",
      following_url:
        "https://api.github.com/users/carlosbuenosvinos/following{/other_user}",
      gists_url:
        "https://api.github.com/users/carlosbuenosvinos/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlosbuenosvinos/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carlosbuenosvinos/subscriptions",
      organizations_url: "https://api.github.com/users/carlosbuenosvinos/orgs",
      repos_url: "https://api.github.com/users/carlosbuenosvinos/repos",
      events_url:
        "https://api.github.com/users/carlosbuenosvinos/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlosbuenosvinos/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carmenansio",
      id: 15913811,
      node_id: "MDQ6VXNlcjE1OTEzODEx",
      avatar_url: "https://avatars.githubusercontent.com/u/15913811?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carmenansio",
      html_url: "https://github.com/carmenansio",
      followers_url: "https://api.github.com/users/carmenansio/followers",
      following_url:
        "https://api.github.com/users/carmenansio/following{/other_user}",
      gists_url: "https://api.github.com/users/carmenansio/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carmenansio/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carmenansio/subscriptions",
      organizations_url: "https://api.github.com/users/carmenansio/orgs",
      repos_url: "https://api.github.com/users/carmenansio/repos",
      events_url: "https://api.github.com/users/carmenansio/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carmenansio/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "blablacar",
      id: 2285402,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjIyODU0MDI=",
      avatar_url: "https://avatars.githubusercontent.com/u/2285402?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/blablacar",
      html_url: "https://github.com/blablacar",
      followers_url: "https://api.github.com/users/blablacar/followers",
      following_url:
        "https://api.github.com/users/blablacar/following{/other_user}",
      gists_url: "https://api.github.com/users/blablacar/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/blablacar/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/blablacar/subscriptions",
      organizations_url: "https://api.github.com/users/blablacar/orgs",
      repos_url: "https://api.github.com/users/blablacar/repos",
      events_url: "https://api.github.com/users/blablacar/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/blablacar/received_events",
      type: "Organization",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlossg",
      id: 23651,
      node_id: "MDQ6VXNlcjIzNjUx",
      avatar_url: "https://avatars.githubusercontent.com/u/23651?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlossg",
      html_url: "https://github.com/carlossg",
      followers_url: "https://api.github.com/users/carlossg/followers",
      following_url:
        "https://api.github.com/users/carlossg/following{/other_user}",
      gists_url: "https://api.github.com/users/carlossg/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlossg/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carlossg/subscriptions",
      organizations_url: "https://api.github.com/users/carlossg/orgs",
      repos_url: "https://api.github.com/users/carlossg/repos",
      events_url: "https://api.github.com/users/carlossg/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlossg/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carloscuesta",
      id: 7629661,
      node_id: "MDQ6VXNlcjc2Mjk2NjE=",
      avatar_url: "https://avatars.githubusercontent.com/u/7629661?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carloscuesta",
      html_url: "https://github.com/carloscuesta",
      followers_url: "https://api.github.com/users/carloscuesta/followers",
      following_url:
        "https://api.github.com/users/carloscuesta/following{/other_user}",
      gists_url: "https://api.github.com/users/carloscuesta/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carloscuesta/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carloscuesta/subscriptions",
      organizations_url: "https://api.github.com/users/carloscuesta/orgs",
      repos_url: "https://api.github.com/users/carloscuesta/repos",
      events_url: "https://api.github.com/users/carloscuesta/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carloscuesta/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carson-katri",
      id: 13581484,
      node_id: "MDQ6VXNlcjEzNTgxNDg0",
      avatar_url: "https://avatars.githubusercontent.com/u/13581484?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carson-katri",
      html_url: "https://github.com/carson-katri",
      followers_url: "https://api.github.com/users/carson-katri/followers",
      following_url:
        "https://api.github.com/users/carson-katri/following{/other_user}",
      gists_url: "https://api.github.com/users/carson-katri/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carson-katri/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carson-katri/subscriptions",
      organizations_url: "https://api.github.com/users/carson-katri/orgs",
      repos_url: "https://api.github.com/users/carson-katri/repos",
      events_url: "https://api.github.com/users/carson-katri/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carson-katri/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "cartermp",
      id: 6309070,
      node_id: "MDQ6VXNlcjYzMDkwNzA=",
      avatar_url: "https://avatars.githubusercontent.com/u/6309070?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/cartermp",
      html_url: "https://github.com/cartermp",
      followers_url: "https://api.github.com/users/cartermp/followers",
      following_url:
        "https://api.github.com/users/cartermp/following{/other_user}",
      gists_url: "https://api.github.com/users/cartermp/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/cartermp/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/cartermp/subscriptions",
      organizations_url: "https://api.github.com/users/cartermp/orgs",
      repos_url: "https://api.github.com/users/cartermp/repos",
      events_url: "https://api.github.com/users/cartermp/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/cartermp/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carolynvs",
      id: 1368985,
      node_id: "MDQ6VXNlcjEzNjg5ODU=",
      avatar_url: "https://avatars.githubusercontent.com/u/1368985?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carolynvs",
      html_url: "https://github.com/carolynvs",
      followers_url: "https://api.github.com/users/carolynvs/followers",
      following_url:
        "https://api.github.com/users/carolynvs/following{/other_user}",
      gists_url: "https://api.github.com/users/carolynvs/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carolynvs/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carolynvs/subscriptions",
      organizations_url: "https://api.github.com/users/carolynvs/orgs",
      repos_url: "https://api.github.com/users/carolynvs/repos",
      events_url: "https://api.github.com/users/carolynvs/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carolynvs/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carbon-design-system",
      id: 25179978,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjI1MTc5OTc4",
      avatar_url: "https://avatars.githubusercontent.com/u/25179978?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carbon-design-system",
      html_url: "https://github.com/carbon-design-system",
      followers_url:
        "https://api.github.com/users/carbon-design-system/followers",
      following_url:
        "https://api.github.com/users/carbon-design-system/following{/other_user}",
      gists_url:
        "https://api.github.com/users/carbon-design-system/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carbon-design-system/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carbon-design-system/subscriptions",
      organizations_url:
        "https://api.github.com/users/carbon-design-system/orgs",
      repos_url: "https://api.github.com/users/carbon-design-system/repos",
      events_url:
        "https://api.github.com/users/carbon-design-system/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carbon-design-system/received_events",
      type: "Organization",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlosfgti",
      id: 8958169,
      node_id: "MDQ6VXNlcjg5NTgxNjk=",
      avatar_url: "https://avatars.githubusercontent.com/u/8958169?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlosfgti",
      html_url: "https://github.com/carlosfgti",
      followers_url: "https://api.github.com/users/carlosfgti/followers",
      following_url:
        "https://api.github.com/users/carlosfgti/following{/other_user}",
      gists_url: "https://api.github.com/users/carlosfgti/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlosfgti/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carlosfgti/subscriptions",
      organizations_url: "https://api.github.com/users/carlosfgti/orgs",
      repos_url: "https://api.github.com/users/carlosfgti/repos",
      events_url: "https://api.github.com/users/carlosfgti/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlosfgti/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "cartant",
      id: 3878593,
      node_id: "MDQ6VXNlcjM4Nzg1OTM=",
      avatar_url: "https://avatars.githubusercontent.com/u/3878593?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/cartant",
      html_url: "https://github.com/cartant",
      followers_url: "https://api.github.com/users/cartant/followers",
      following_url:
        "https://api.github.com/users/cartant/following{/other_user}",
      gists_url: "https://api.github.com/users/cartant/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/cartant/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/cartant/subscriptions",
      organizations_url: "https://api.github.com/users/cartant/orgs",
      repos_url: "https://api.github.com/users/cartant/repos",
      events_url: "https://api.github.com/users/cartant/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/cartant/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "careermonk",
      id: 7352244,
      node_id: "MDQ6VXNlcjczNTIyNDQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/7352244?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/careermonk",
      html_url: "https://github.com/careermonk",
      followers_url: "https://api.github.com/users/careermonk/followers",
      following_url:
        "https://api.github.com/users/careermonk/following{/other_user}",
      gists_url: "https://api.github.com/users/careermonk/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/careermonk/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/careermonk/subscriptions",
      organizations_url: "https://api.github.com/users/careermonk/orgs",
      repos_url: "https://api.github.com/users/careermonk/repos",
      events_url: "https://api.github.com/users/careermonk/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/careermonk/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "caridy",
      id: 38969,
      node_id: "MDQ6VXNlcjM4OTY5",
      avatar_url: "https://avatars.githubusercontent.com/u/38969?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/caridy",
      html_url: "https://github.com/caridy",
      followers_url: "https://api.github.com/users/caridy/followers",
      following_url:
        "https://api.github.com/users/caridy/following{/other_user}",
      gists_url: "https://api.github.com/users/caridy/gists{/gist_id}",
      starred_url: "https://api.github.com/users/caridy/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/caridy/subscriptions",
      organizations_url: "https://api.github.com/users/caridy/orgs",
      repos_url: "https://api.github.com/users/caridy/repos",
      events_url: "https://api.github.com/users/caridy/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/caridy/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carsonoid",
      id: 2973513,
      node_id: "MDQ6VXNlcjI5NzM1MTM=",
      avatar_url: "https://avatars.githubusercontent.com/u/2973513?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carsonoid",
      html_url: "https://github.com/carsonoid",
      followers_url: "https://api.github.com/users/carsonoid/followers",
      following_url:
        "https://api.github.com/users/carsonoid/following{/other_user}",
      gists_url: "https://api.github.com/users/carsonoid/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carsonoid/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carsonoid/subscriptions",
      organizations_url: "https://api.github.com/users/carsonoid/orgs",
      repos_url: "https://api.github.com/users/carsonoid/repos",
      events_url: "https://api.github.com/users/carsonoid/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carsonoid/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlisia",
      id: 16508,
      node_id: "MDQ6VXNlcjE2NTA4",
      avatar_url: "https://avatars.githubusercontent.com/u/16508?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlisia",
      html_url: "https://github.com/carlisia",
      followers_url: "https://api.github.com/users/carlisia/followers",
      following_url:
        "https://api.github.com/users/carlisia/following{/other_user}",
      gists_url: "https://api.github.com/users/carlisia/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlisia/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carlisia/subscriptions",
      organizations_url: "https://api.github.com/users/carlisia/orgs",
      repos_url: "https://api.github.com/users/carlisia/repos",
      events_url: "https://api.github.com/users/carlisia/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlisia/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "cartazio",
      id: 4290,
      node_id: "MDQ6VXNlcjQyOTA=",
      avatar_url: "https://avatars.githubusercontent.com/u/4290?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/cartazio",
      html_url: "https://github.com/cartazio",
      followers_url: "https://api.github.com/users/cartazio/followers",
      following_url:
        "https://api.github.com/users/cartazio/following{/other_user}",
      gists_url: "https://api.github.com/users/cartazio/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/cartazio/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/cartazio/subscriptions",
      organizations_url: "https://api.github.com/users/cartazio/orgs",
      repos_url: "https://api.github.com/users/cartazio/repos",
      events_url: "https://api.github.com/users/cartazio/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/cartazio/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "danielsz",
      id: 859131,
      node_id: "MDQ6VXNlcjg1OTEzMQ==",
      avatar_url: "https://avatars.githubusercontent.com/u/859131?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/danielsz",
      html_url: "https://github.com/danielsz",
      followers_url: "https://api.github.com/users/danielsz/followers",
      following_url:
        "https://api.github.com/users/danielsz/following{/other_user}",
      gists_url: "https://api.github.com/users/danielsz/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/danielsz/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/danielsz/subscriptions",
      organizations_url: "https://api.github.com/users/danielsz/orgs",
      repos_url: "https://api.github.com/users/danielsz/repos",
      events_url: "https://api.github.com/users/danielsz/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/danielsz/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "CarlosZoft",
      id: 62192072,
      node_id: "MDQ6VXNlcjYyMTkyMDcy",
      avatar_url: "https://avatars.githubusercontent.com/u/62192072?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/CarlosZoft",
      html_url: "https://github.com/CarlosZoft",
      followers_url: "https://api.github.com/users/CarlosZoft/followers",
      following_url:
        "https://api.github.com/users/CarlosZoft/following{/other_user}",
      gists_url: "https://api.github.com/users/CarlosZoft/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/CarlosZoft/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/CarlosZoft/subscriptions",
      organizations_url: "https://api.github.com/users/CarlosZoft/orgs",
      repos_url: "https://api.github.com/users/CarlosZoft/repos",
      events_url: "https://api.github.com/users/CarlosZoft/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/CarlosZoft/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carolsoaressantos",
      id: 28942335,
      node_id: "MDQ6VXNlcjI4OTQyMzM1",
      avatar_url: "https://avatars.githubusercontent.com/u/28942335?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carolsoaressantos",
      html_url: "https://github.com/carolsoaressantos",
      followers_url: "https://api.github.com/users/carolsoaressantos/followers",
      following_url:
        "https://api.github.com/users/carolsoaressantos/following{/other_user}",
      gists_url:
        "https://api.github.com/users/carolsoaressantos/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carolsoaressantos/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carolsoaressantos/subscriptions",
      organizations_url: "https://api.github.com/users/carolsoaressantos/orgs",
      repos_url: "https://api.github.com/users/carolsoaressantos/repos",
      events_url:
        "https://api.github.com/users/carolsoaressantos/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carolsoaressantos/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "CarJem",
      id: 18092668,
      node_id: "MDQ6VXNlcjE4MDkyNjY4",
      avatar_url: "https://avatars.githubusercontent.com/u/18092668?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/CarJem",
      html_url: "https://github.com/CarJem",
      followers_url: "https://api.github.com/users/CarJem/followers",
      following_url:
        "https://api.github.com/users/CarJem/following{/other_user}",
      gists_url: "https://api.github.com/users/CarJem/gists{/gist_id}",
      starred_url: "https://api.github.com/users/CarJem/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/CarJem/subscriptions",
      organizations_url: "https://api.github.com/users/CarJem/orgs",
      repos_url: "https://api.github.com/users/CarJem/repos",
      events_url: "https://api.github.com/users/CarJem/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/CarJem/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "cardano-foundation",
      id: 37078161,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjM3MDc4MTYx",
      avatar_url: "https://avatars.githubusercontent.com/u/37078161?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/cardano-foundation",
      html_url: "https://github.com/cardano-foundation",
      followers_url:
        "https://api.github.com/users/cardano-foundation/followers",
      following_url:
        "https://api.github.com/users/cardano-foundation/following{/other_user}",
      gists_url:
        "https://api.github.com/users/cardano-foundation/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/cardano-foundation/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/cardano-foundation/subscriptions",
      organizations_url: "https://api.github.com/users/cardano-foundation/orgs",
      repos_url: "https://api.github.com/users/cardano-foundation/repos",
      events_url:
        "https://api.github.com/users/cardano-foundation/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/cardano-foundation/received_events",
      type: "Organization",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlosedp",
      id: 20382,
      node_id: "MDQ6VXNlcjIwMzgy",
      avatar_url: "https://avatars.githubusercontent.com/u/20382?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlosedp",
      html_url: "https://github.com/carlosedp",
      followers_url: "https://api.github.com/users/carlosedp/followers",
      following_url:
        "https://api.github.com/users/carlosedp/following{/other_user}",
      gists_url: "https://api.github.com/users/carlosedp/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlosedp/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carlosedp/subscriptions",
      organizations_url: "https://api.github.com/users/carlosedp/orgs",
      repos_url: "https://api.github.com/users/carlosedp/repos",
      events_url: "https://api.github.com/users/carlosedp/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlosedp/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "gallifreyCar",
      id: 29010376,
      node_id: "MDQ6VXNlcjI5MDEwMzc2",
      avatar_url: "https://avatars.githubusercontent.com/u/29010376?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/gallifreyCar",
      html_url: "https://github.com/gallifreyCar",
      followers_url: "https://api.github.com/users/gallifreyCar/followers",
      following_url:
        "https://api.github.com/users/gallifreyCar/following{/other_user}",
      gists_url: "https://api.github.com/users/gallifreyCar/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/gallifreyCar/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/gallifreyCar/subscriptions",
      organizations_url: "https://api.github.com/users/gallifreyCar/orgs",
      repos_url: "https://api.github.com/users/gallifreyCar/repos",
      events_url: "https://api.github.com/users/gallifreyCar/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/gallifreyCar/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "mutaimwiti",
      id: 8180548,
      node_id: "MDQ6VXNlcjgxODA1NDg=",
      avatar_url: "https://avatars.githubusercontent.com/u/8180548?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/mutaimwiti",
      html_url: "https://github.com/mutaimwiti",
      followers_url: "https://api.github.com/users/mutaimwiti/followers",
      following_url:
        "https://api.github.com/users/mutaimwiti/following{/other_user}",
      gists_url: "https://api.github.com/users/mutaimwiti/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/mutaimwiti/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/mutaimwiti/subscriptions",
      organizations_url: "https://api.github.com/users/mutaimwiti/orgs",
      repos_url: "https://api.github.com/users/mutaimwiti/repos",
      events_url: "https://api.github.com/users/mutaimwiti/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/mutaimwiti/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlosportella16",
      id: 66968264,
      node_id: "MDQ6VXNlcjY2OTY4MjY0",
      avatar_url: "https://avatars.githubusercontent.com/u/66968264?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlosportella16",
      html_url: "https://github.com/carlosportella16",
      followers_url: "https://api.github.com/users/carlosportella16/followers",
      following_url:
        "https://api.github.com/users/carlosportella16/following{/other_user}",
      gists_url:
        "https://api.github.com/users/carlosportella16/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlosportella16/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carlosportella16/subscriptions",
      organizations_url: "https://api.github.com/users/carlosportella16/orgs",
      repos_url: "https://api.github.com/users/carlosportella16/repos",
      events_url:
        "https://api.github.com/users/carlosportella16/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlosportella16/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlos8f",
      id: 106763,
      node_id: "MDQ6VXNlcjEwNjc2Mw==",
      avatar_url: "https://avatars.githubusercontent.com/u/106763?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlos8f",
      html_url: "https://github.com/carlos8f",
      followers_url: "https://api.github.com/users/carlos8f/followers",
      following_url:
        "https://api.github.com/users/carlos8f/following{/other_user}",
      gists_url: "https://api.github.com/users/carlos8f/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlos8f/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carlos8f/subscriptions",
      organizations_url: "https://api.github.com/users/carlos8f/orgs",
      repos_url: "https://api.github.com/users/carlos8f/repos",
      events_url: "https://api.github.com/users/carlos8f/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlos8f/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "jonjoncardoso",
      id: 896254,
      node_id: "MDQ6VXNlcjg5NjI1NA==",
      avatar_url: "https://avatars.githubusercontent.com/u/896254?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jonjoncardoso",
      html_url: "https://github.com/jonjoncardoso",
      followers_url: "https://api.github.com/users/jonjoncardoso/followers",
      following_url:
        "https://api.github.com/users/jonjoncardoso/following{/other_user}",
      gists_url: "https://api.github.com/users/jonjoncardoso/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/jonjoncardoso/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/jonjoncardoso/subscriptions",
      organizations_url: "https://api.github.com/users/jonjoncardoso/orgs",
      repos_url: "https://api.github.com/users/jonjoncardoso/repos",
      events_url: "https://api.github.com/users/jonjoncardoso/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/jonjoncardoso/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlthome",
      id: 1595907,
      node_id: "MDQ6VXNlcjE1OTU5MDc=",
      avatar_url: "https://avatars.githubusercontent.com/u/1595907?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlthome",
      html_url: "https://github.com/carlthome",
      followers_url: "https://api.github.com/users/carlthome/followers",
      following_url:
        "https://api.github.com/users/carlthome/following{/other_user}",
      gists_url: "https://api.github.com/users/carlthome/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlthome/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carlthome/subscriptions",
      organizations_url: "https://api.github.com/users/carlthome/orgs",
      repos_url: "https://api.github.com/users/carlthome/repos",
      events_url: "https://api.github.com/users/carlthome/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlthome/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carefree0910",
      id: 15677328,
      node_id: "MDQ6VXNlcjE1Njc3MzI4",
      avatar_url: "https://avatars.githubusercontent.com/u/15677328?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carefree0910",
      html_url: "https://github.com/carefree0910",
      followers_url: "https://api.github.com/users/carefree0910/followers",
      following_url:
        "https://api.github.com/users/carefree0910/following{/other_user}",
      gists_url: "https://api.github.com/users/carefree0910/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carefree0910/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carefree0910/subscriptions",
      organizations_url: "https://api.github.com/users/carefree0910/orgs",
      repos_url: "https://api.github.com/users/carefree0910/repos",
      events_url: "https://api.github.com/users/carefree0910/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carefree0910/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carolbarbosa101",
      id: 44561610,
      node_id: "MDQ6VXNlcjQ0NTYxNjEw",
      avatar_url: "https://avatars.githubusercontent.com/u/44561610?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carolbarbosa101",
      html_url: "https://github.com/carolbarbosa101",
      followers_url: "https://api.github.com/users/carolbarbosa101/followers",
      following_url:
        "https://api.github.com/users/carolbarbosa101/following{/other_user}",
      gists_url: "https://api.github.com/users/carolbarbosa101/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carolbarbosa101/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carolbarbosa101/subscriptions",
      organizations_url: "https://api.github.com/users/carolbarbosa101/orgs",
      repos_url: "https://api.github.com/users/carolbarbosa101/repos",
      events_url:
        "https://api.github.com/users/carolbarbosa101/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carolbarbosa101/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "cardoso",
      id: 5606812,
      node_id: "MDQ6VXNlcjU2MDY4MTI=",
      avatar_url: "https://avatars.githubusercontent.com/u/5606812?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/cardoso",
      html_url: "https://github.com/cardoso",
      followers_url: "https://api.github.com/users/cardoso/followers",
      following_url:
        "https://api.github.com/users/cardoso/following{/other_user}",
      gists_url: "https://api.github.com/users/cardoso/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/cardoso/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/cardoso/subscriptions",
      organizations_url: "https://api.github.com/users/cardoso/orgs",
      repos_url: "https://api.github.com/users/cardoso/repos",
      events_url: "https://api.github.com/users/cardoso/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/cardoso/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "CartoDB",
      id: 1799254,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjE3OTkyNTQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/1799254?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/CartoDB",
      html_url: "https://github.com/CartoDB",
      followers_url: "https://api.github.com/users/CartoDB/followers",
      following_url:
        "https://api.github.com/users/CartoDB/following{/other_user}",
      gists_url: "https://api.github.com/users/CartoDB/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/CartoDB/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/CartoDB/subscriptions",
      organizations_url: "https://api.github.com/users/CartoDB/orgs",
      repos_url: "https://api.github.com/users/CartoDB/repos",
      events_url: "https://api.github.com/users/CartoDB/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/CartoDB/received_events",
      type: "Organization",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carnellj",
      id: 487013,
      node_id: "MDQ6VXNlcjQ4NzAxMw==",
      avatar_url: "https://avatars.githubusercontent.com/u/487013?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carnellj",
      html_url: "https://github.com/carnellj",
      followers_url: "https://api.github.com/users/carnellj/followers",
      following_url:
        "https://api.github.com/users/carnellj/following{/other_user}",
      gists_url: "https://api.github.com/users/carnellj/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carnellj/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carnellj/subscriptions",
      organizations_url: "https://api.github.com/users/carnellj/orgs",
      repos_url: "https://api.github.com/users/carnellj/repos",
      events_url: "https://api.github.com/users/carnellj/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carnellj/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carbon-language",
      id: 63681715,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjYzNjgxNzE1",
      avatar_url: "https://avatars.githubusercontent.com/u/63681715?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carbon-language",
      html_url: "https://github.com/carbon-language",
      followers_url: "https://api.github.com/users/carbon-language/followers",
      following_url:
        "https://api.github.com/users/carbon-language/following{/other_user}",
      gists_url: "https://api.github.com/users/carbon-language/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carbon-language/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carbon-language/subscriptions",
      organizations_url: "https://api.github.com/users/carbon-language/orgs",
      repos_url: "https://api.github.com/users/carbon-language/repos",
      events_url:
        "https://api.github.com/users/carbon-language/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carbon-language/received_events",
      type: "Organization",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carolinan",
      id: 7422055,
      node_id: "MDQ6VXNlcjc0MjIwNTU=",
      avatar_url: "https://avatars.githubusercontent.com/u/7422055?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carolinan",
      html_url: "https://github.com/carolinan",
      followers_url: "https://api.github.com/users/carolinan/followers",
      following_url:
        "https://api.github.com/users/carolinan/following{/other_user}",
      gists_url: "https://api.github.com/users/carolinan/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carolinan/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carolinan/subscriptions",
      organizations_url: "https://api.github.com/users/carolinan/orgs",
      repos_url: "https://api.github.com/users/carolinan/repos",
      events_url: "https://api.github.com/users/carolinan/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carolinan/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "rcmaehl",
      id: 716581,
      node_id: "MDQ6VXNlcjcxNjU4MQ==",
      avatar_url: "https://avatars.githubusercontent.com/u/716581?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/rcmaehl",
      html_url: "https://github.com/rcmaehl",
      followers_url: "https://api.github.com/users/rcmaehl/followers",
      following_url:
        "https://api.github.com/users/rcmaehl/following{/other_user}",
      gists_url: "https://api.github.com/users/rcmaehl/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/rcmaehl/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/rcmaehl/subscriptions",
      organizations_url: "https://api.github.com/users/rcmaehl/orgs",
      repos_url: "https://api.github.com/users/rcmaehl/repos",
      events_url: "https://api.github.com/users/rcmaehl/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/rcmaehl/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carstenbauer",
      id: 187980,
      node_id: "MDQ6VXNlcjE4Nzk4MA==",
      avatar_url: "https://avatars.githubusercontent.com/u/187980?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carstenbauer",
      html_url: "https://github.com/carstenbauer",
      followers_url: "https://api.github.com/users/carstenbauer/followers",
      following_url:
        "https://api.github.com/users/carstenbauer/following{/other_user}",
      gists_url: "https://api.github.com/users/carstenbauer/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carstenbauer/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carstenbauer/subscriptions",
      organizations_url: "https://api.github.com/users/carstenbauer/orgs",
      repos_url: "https://api.github.com/users/carstenbauer/repos",
      events_url: "https://api.github.com/users/carstenbauer/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carstenbauer/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "conich10",
      id: 117925025,
      node_id: "U_kgDOBwdkoQ",
      avatar_url: "https://avatars.githubusercontent.com/u/117925025?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/conich10",
      html_url: "https://github.com/conich10",
      followers_url: "https://api.github.com/users/conich10/followers",
      following_url:
        "https://api.github.com/users/conich10/following{/other_user}",
      gists_url: "https://api.github.com/users/conich10/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/conich10/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/conich10/subscriptions",
      organizations_url: "https://api.github.com/users/conich10/orgs",
      repos_url: "https://api.github.com/users/conich10/repos",
      events_url: "https://api.github.com/users/conich10/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/conich10/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carla-simulator",
      id: 33029185,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjMzMDI5MTg1",
      avatar_url: "https://avatars.githubusercontent.com/u/33029185?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carla-simulator",
      html_url: "https://github.com/carla-simulator",
      followers_url: "https://api.github.com/users/carla-simulator/followers",
      following_url:
        "https://api.github.com/users/carla-simulator/following{/other_user}",
      gists_url: "https://api.github.com/users/carla-simulator/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carla-simulator/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carla-simulator/subscriptions",
      organizations_url: "https://api.github.com/users/carla-simulator/orgs",
      repos_url: "https://api.github.com/users/carla-simulator/repos",
      events_url:
        "https://api.github.com/users/carla-simulator/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carla-simulator/received_events",
      type: "Organization",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlosbrando",
      id: 2035,
      node_id: "MDQ6VXNlcjIwMzU=",
      avatar_url: "https://avatars.githubusercontent.com/u/2035?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlosbrando",
      html_url: "https://github.com/carlosbrando",
      followers_url: "https://api.github.com/users/carlosbrando/followers",
      following_url:
        "https://api.github.com/users/carlosbrando/following{/other_user}",
      gists_url: "https://api.github.com/users/carlosbrando/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlosbrando/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carlosbrando/subscriptions",
      organizations_url: "https://api.github.com/users/carlosbrando/orgs",
      repos_url: "https://api.github.com/users/carlosbrando/repos",
      events_url: "https://api.github.com/users/carlosbrando/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlosbrando/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "IlliniSolarCar",
      id: 13973166,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjEzOTczMTY2",
      avatar_url: "https://avatars.githubusercontent.com/u/13973166?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/IlliniSolarCar",
      html_url: "https://github.com/IlliniSolarCar",
      followers_url: "https://api.github.com/users/IlliniSolarCar/followers",
      following_url:
        "https://api.github.com/users/IlliniSolarCar/following{/other_user}",
      gists_url: "https://api.github.com/users/IlliniSolarCar/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/IlliniSolarCar/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/IlliniSolarCar/subscriptions",
      organizations_url: "https://api.github.com/users/IlliniSolarCar/orgs",
      repos_url: "https://api.github.com/users/IlliniSolarCar/repos",
      events_url:
        "https://api.github.com/users/IlliniSolarCar/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/IlliniSolarCar/received_events",
      type: "Organization",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carsonmcdonald",
      id: 76552,
      node_id: "MDQ6VXNlcjc2NTUy",
      avatar_url: "https://avatars.githubusercontent.com/u/76552?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carsonmcdonald",
      html_url: "https://github.com/carsonmcdonald",
      followers_url: "https://api.github.com/users/carsonmcdonald/followers",
      following_url:
        "https://api.github.com/users/carsonmcdonald/following{/other_user}",
      gists_url: "https://api.github.com/users/carsonmcdonald/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carsonmcdonald/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carsonmcdonald/subscriptions",
      organizations_url: "https://api.github.com/users/carsonmcdonald/orgs",
      repos_url: "https://api.github.com/users/carsonmcdonald/repos",
      events_url:
        "https://api.github.com/users/carsonmcdonald/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carsonmcdonald/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "caroso1222",
      id: 3689856,
      node_id: "MDQ6VXNlcjM2ODk4NTY=",
      avatar_url: "https://avatars.githubusercontent.com/u/3689856?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/caroso1222",
      html_url: "https://github.com/caroso1222",
      followers_url: "https://api.github.com/users/caroso1222/followers",
      following_url:
        "https://api.github.com/users/caroso1222/following{/other_user}",
      gists_url: "https://api.github.com/users/caroso1222/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/caroso1222/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/caroso1222/subscriptions",
      organizations_url: "https://api.github.com/users/caroso1222/orgs",
      repos_url: "https://api.github.com/users/caroso1222/repos",
      events_url: "https://api.github.com/users/caroso1222/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/caroso1222/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carolineschnapp",
      id: 143817,
      node_id: "MDQ6VXNlcjE0MzgxNw==",
      avatar_url: "https://avatars.githubusercontent.com/u/143817?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carolineschnapp",
      html_url: "https://github.com/carolineschnapp",
      followers_url: "https://api.github.com/users/carolineschnapp/followers",
      following_url:
        "https://api.github.com/users/carolineschnapp/following{/other_user}",
      gists_url: "https://api.github.com/users/carolineschnapp/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carolineschnapp/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carolineschnapp/subscriptions",
      organizations_url: "https://api.github.com/users/carolineschnapp/orgs",
      repos_url: "https://api.github.com/users/carolineschnapp/repos",
      events_url:
        "https://api.github.com/users/carolineschnapp/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carolineschnapp/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carinebatista",
      id: 18583716,
      node_id: "MDQ6VXNlcjE4NTgzNzE2",
      avatar_url: "https://avatars.githubusercontent.com/u/18583716?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carinebatista",
      html_url: "https://github.com/carinebatista",
      followers_url: "https://api.github.com/users/carinebatista/followers",
      following_url:
        "https://api.github.com/users/carinebatista/following{/other_user}",
      gists_url: "https://api.github.com/users/carinebatista/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carinebatista/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carinebatista/subscriptions",
      organizations_url: "https://api.github.com/users/carinebatista/orgs",
      repos_url: "https://api.github.com/users/carinebatista/repos",
      events_url: "https://api.github.com/users/carinebatista/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carinebatista/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carpicoder",
      id: 111482652,
      node_id: "U_kgDOBqUXHA",
      avatar_url: "https://avatars.githubusercontent.com/u/111482652?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carpicoder",
      html_url: "https://github.com/carpicoder",
      followers_url: "https://api.github.com/users/carpicoder/followers",
      following_url:
        "https://api.github.com/users/carpicoder/following{/other_user}",
      gists_url: "https://api.github.com/users/carpicoder/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carpicoder/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carpicoder/subscriptions",
      organizations_url: "https://api.github.com/users/carpicoder/orgs",
      repos_url: "https://api.github.com/users/carpicoder/repos",
      events_url: "https://api.github.com/users/carpicoder/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carpicoder/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "davro",
      id: 252873,
      node_id: "MDQ6VXNlcjI1Mjg3Mw==",
      avatar_url: "https://avatars.githubusercontent.com/u/252873?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/davro",
      html_url: "https://github.com/davro",
      followers_url: "https://api.github.com/users/davro/followers",
      following_url:
        "https://api.github.com/users/davro/following{/other_user}",
      gists_url: "https://api.github.com/users/davro/gists{/gist_id}",
      starred_url: "https://api.github.com/users/davro/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/davro/subscriptions",
      organizations_url: "https://api.github.com/users/davro/orgs",
      repos_url: "https://api.github.com/users/davro/repos",
      events_url: "https://api.github.com/users/davro/events{/privacy}",
      received_events_url: "https://api.github.com/users/davro/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "CarlosDevBr",
      id: 63330641,
      node_id: "MDQ6VXNlcjYzMzMwNjQx",
      avatar_url: "https://avatars.githubusercontent.com/u/63330641?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/CarlosDevBr",
      html_url: "https://github.com/CarlosDevBr",
      followers_url: "https://api.github.com/users/CarlosDevBr/followers",
      following_url:
        "https://api.github.com/users/CarlosDevBr/following{/other_user}",
      gists_url: "https://api.github.com/users/CarlosDevBr/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/CarlosDevBr/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/CarlosDevBr/subscriptions",
      organizations_url: "https://api.github.com/users/CarlosDevBr/orgs",
      repos_url: "https://api.github.com/users/CarlosDevBr/repos",
      events_url: "https://api.github.com/users/CarlosDevBr/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/CarlosDevBr/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlalexander",
      id: 654684,
      node_id: "MDQ6VXNlcjY1NDY4NA==",
      avatar_url: "https://avatars.githubusercontent.com/u/654684?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlalexander",
      html_url: "https://github.com/carlalexander",
      followers_url: "https://api.github.com/users/carlalexander/followers",
      following_url:
        "https://api.github.com/users/carlalexander/following{/other_user}",
      gists_url: "https://api.github.com/users/carlalexander/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlalexander/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carlalexander/subscriptions",
      organizations_url: "https://api.github.com/users/carlalexander/orgs",
      repos_url: "https://api.github.com/users/carlalexander/repos",
      events_url: "https://api.github.com/users/carlalexander/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlalexander/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carloscds",
      id: 1697221,
      node_id: "MDQ6VXNlcjE2OTcyMjE=",
      avatar_url: "https://avatars.githubusercontent.com/u/1697221?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carloscds",
      html_url: "https://github.com/carloscds",
      followers_url: "https://api.github.com/users/carloscds/followers",
      following_url:
        "https://api.github.com/users/carloscds/following{/other_user}",
      gists_url: "https://api.github.com/users/carloscds/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carloscds/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carloscds/subscriptions",
      organizations_url: "https://api.github.com/users/carloscds/orgs",
      repos_url: "https://api.github.com/users/carloscds/repos",
      events_url: "https://api.github.com/users/carloscds/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carloscds/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carlfranklin",
      id: 1486348,
      node_id: "MDQ6VXNlcjE0ODYzNDg=",
      avatar_url: "https://avatars.githubusercontent.com/u/1486348?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carlfranklin",
      html_url: "https://github.com/carlfranklin",
      followers_url: "https://api.github.com/users/carlfranklin/followers",
      following_url:
        "https://api.github.com/users/carlfranklin/following{/other_user}",
      gists_url: "https://api.github.com/users/carlfranklin/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carlfranklin/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carlfranklin/subscriptions",
      organizations_url: "https://api.github.com/users/carlfranklin/orgs",
      repos_url: "https://api.github.com/users/carlfranklin/repos",
      events_url: "https://api.github.com/users/carlfranklin/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carlfranklin/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "CarpenterLee",
      id: 18542108,
      node_id: "MDQ6VXNlcjE4NTQyMTA4",
      avatar_url: "https://avatars.githubusercontent.com/u/18542108?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/CarpenterLee",
      html_url: "https://github.com/CarpenterLee",
      followers_url: "https://api.github.com/users/CarpenterLee/followers",
      following_url:
        "https://api.github.com/users/CarpenterLee/following{/other_user}",
      gists_url: "https://api.github.com/users/CarpenterLee/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/CarpenterLee/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/CarpenterLee/subscriptions",
      organizations_url: "https://api.github.com/users/CarpenterLee/orgs",
      repos_url: "https://api.github.com/users/CarpenterLee/repos",
      events_url: "https://api.github.com/users/CarpenterLee/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/CarpenterLee/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "ugurcanlacin",
      id: 6627185,
      node_id: "MDQ6VXNlcjY2MjcxODU=",
      avatar_url: "https://avatars.githubusercontent.com/u/6627185?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/ugurcanlacin",
      html_url: "https://github.com/ugurcanlacin",
      followers_url: "https://api.github.com/users/ugurcanlacin/followers",
      following_url:
        "https://api.github.com/users/ugurcanlacin/following{/other_user}",
      gists_url: "https://api.github.com/users/ugurcanlacin/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/ugurcanlacin/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/ugurcanlacin/subscriptions",
      organizations_url: "https://api.github.com/users/ugurcanlacin/orgs",
      repos_url: "https://api.github.com/users/ugurcanlacin/repos",
      events_url: "https://api.github.com/users/ugurcanlacin/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/ugurcanlacin/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "CarlosZiegler",
      id: 38855507,
      node_id: "MDQ6VXNlcjM4ODU1NTA3",
      avatar_url: "https://avatars.githubusercontent.com/u/38855507?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/CarlosZiegler",
      html_url: "https://github.com/CarlosZiegler",
      followers_url: "https://api.github.com/users/CarlosZiegler/followers",
      following_url:
        "https://api.github.com/users/CarlosZiegler/following{/other_user}",
      gists_url: "https://api.github.com/users/CarlosZiegler/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/CarlosZiegler/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/CarlosZiegler/subscriptions",
      organizations_url: "https://api.github.com/users/CarlosZiegler/orgs",
      repos_url: "https://api.github.com/users/CarlosZiegler/repos",
      events_url: "https://api.github.com/users/CarlosZiegler/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/CarlosZiegler/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "crsten",
      id: 7532696,
      node_id: "MDQ6VXNlcjc1MzI2OTY=",
      avatar_url: "https://avatars.githubusercontent.com/u/7532696?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/crsten",
      html_url: "https://github.com/crsten",
      followers_url: "https://api.github.com/users/crsten/followers",
      following_url:
        "https://api.github.com/users/crsten/following{/other_user}",
      gists_url: "https://api.github.com/users/crsten/gists{/gist_id}",
      starred_url: "https://api.github.com/users/crsten/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/crsten/subscriptions",
      organizations_url: "https://api.github.com/users/crsten/orgs",
      repos_url: "https://api.github.com/users/crsten/repos",
      events_url: "https://api.github.com/users/crsten/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/crsten/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "ayushmankumar7",
      id: 41910134,
      node_id: "MDQ6VXNlcjQxOTEwMTM0",
      avatar_url: "https://avatars.githubusercontent.com/u/41910134?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/ayushmankumar7",
      html_url: "https://github.com/ayushmankumar7",
      followers_url: "https://api.github.com/users/ayushmankumar7/followers",
      following_url:
        "https://api.github.com/users/ayushmankumar7/following{/other_user}",
      gists_url: "https://api.github.com/users/ayushmankumar7/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/ayushmankumar7/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/ayushmankumar7/subscriptions",
      organizations_url: "https://api.github.com/users/ayushmankumar7/orgs",
      repos_url: "https://api.github.com/users/ayushmankumar7/repos",
      events_url:
        "https://api.github.com/users/ayushmankumar7/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/ayushmankumar7/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "Carol42",
      id: 63017741,
      node_id: "MDQ6VXNlcjYzMDE3NzQx",
      avatar_url: "https://avatars.githubusercontent.com/u/63017741?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Carol42",
      html_url: "https://github.com/Carol42",
      followers_url: "https://api.github.com/users/Carol42/followers",
      following_url:
        "https://api.github.com/users/Carol42/following{/other_user}",
      gists_url: "https://api.github.com/users/Carol42/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Carol42/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Carol42/subscriptions",
      organizations_url: "https://api.github.com/users/Carol42/orgs",
      repos_url: "https://api.github.com/users/Carol42/repos",
      events_url: "https://api.github.com/users/Carol42/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Carol42/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "bl5200",
      id: 4438397,
      node_id: "MDQ6VXNlcjQ0MzgzOTc=",
      avatar_url: "https://avatars.githubusercontent.com/u/4438397?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/bl5200",
      html_url: "https://github.com/bl5200",
      followers_url: "https://api.github.com/users/bl5200/followers",
      following_url:
        "https://api.github.com/users/bl5200/following{/other_user}",
      gists_url: "https://api.github.com/users/bl5200/gists{/gist_id}",
      starred_url: "https://api.github.com/users/bl5200/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/bl5200/subscriptions",
      organizations_url: "https://api.github.com/users/bl5200/orgs",
      repos_url: "https://api.github.com/users/bl5200/repos",
      events_url: "https://api.github.com/users/bl5200/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/bl5200/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carrycooldude",
      id: 41143496,
      node_id: "MDQ6VXNlcjQxMTQzNDk2",
      avatar_url: "https://avatars.githubusercontent.com/u/41143496?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carrycooldude",
      html_url: "https://github.com/carrycooldude",
      followers_url: "https://api.github.com/users/carrycooldude/followers",
      following_url:
        "https://api.github.com/users/carrycooldude/following{/other_user}",
      gists_url: "https://api.github.com/users/carrycooldude/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carrycooldude/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/carrycooldude/subscriptions",
      organizations_url: "https://api.github.com/users/carrycooldude/orgs",
      repos_url: "https://api.github.com/users/carrycooldude/repos",
      events_url: "https://api.github.com/users/carrycooldude/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carrycooldude/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carver",
      id: 205327,
      node_id: "MDQ6VXNlcjIwNTMyNw==",
      avatar_url: "https://avatars.githubusercontent.com/u/205327?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carver",
      html_url: "https://github.com/carver",
      followers_url: "https://api.github.com/users/carver/followers",
      following_url:
        "https://api.github.com/users/carver/following{/other_user}",
      gists_url: "https://api.github.com/users/carver/gists{/gist_id}",
      starred_url: "https://api.github.com/users/carver/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carver/subscriptions",
      organizations_url: "https://api.github.com/users/carver/orgs",
      repos_url: "https://api.github.com/users/carver/repos",
      events_url: "https://api.github.com/users/carver/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carver/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "carhartl",
      id: 21918,
      node_id: "MDQ6VXNlcjIxOTE4",
      avatar_url: "https://avatars.githubusercontent.com/u/21918?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/carhartl",
      html_url: "https://github.com/carhartl",
      followers_url: "https://api.github.com/users/carhartl/followers",
      following_url:
        "https://api.github.com/users/carhartl/following{/other_user}",
      gists_url: "https://api.github.com/users/carhartl/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/carhartl/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/carhartl/subscriptions",
      organizations_url: "https://api.github.com/users/carhartl/orgs",
      repos_url: "https://api.github.com/users/carhartl/repos",
      events_url: "https://api.github.com/users/carhartl/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/carhartl/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    },
  ];
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
