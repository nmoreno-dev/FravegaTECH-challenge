import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import User from "../pages/users/[userName]";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactNode } from "react";
import { useRouter } from "next/router";

jest.mock("@tanstack/react-query", () => {
  const originalModule = jest.requireActual("@tanstack/react-query");
  return {
    ...originalModule,
    useQuery: jest.fn(),
  };
});

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("User Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWithClient = (ui: ReactNode) => {
    const queryClient = new QueryClient();
    return render(
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    );
  };

  it("renders loading skeletons when user data is loading", () => {
    (useRouter as jest.Mock).mockReturnValue({ query: { userName: "user1" } });

    (useQuery as jest.Mock).mockImplementation(() => ({
      data: undefined,
      isLoading: true,
      isError: false,
      isSuccess: false,
      isFetching: true,
      refetch: jest.fn(),
    }));

    renderWithClient(<User />);

    const skeletons = screen.getByTestId("user-loading-skeleton");
    expect(skeletons).toBeInTheDocument();
  });

  it("renders error message when there is an error loading user data", () => {
    (useRouter as jest.Mock).mockReturnValue({ query: { userName: "user1" } });

    (useQuery as jest.Mock).mockImplementation(() => ({
      data: undefined,
      isLoading: false,
      isError: true,
      isSuccess: false,
      isFetching: false,
      refetch: jest.fn(),
    }));

    renderWithClient(<User />);

    expect(screen.queryByTestId("user-page-container")).not.toBeInTheDocument();
  });

  it("renders user data when data is available", () => {
    (useRouter as jest.Mock).mockReturnValue({ query: { userName: "user1" } });

    const mockUserData = {
      id: 1,
      login: "user1",
      name: "User One",
      avatar_url: "https://via.placeholder.com/150",
      location: "Somewhere",
      created_at: "2021-01-01T00:00:00Z",
      followers: 10,
      following: 5,
      bio: "This is a user bio.",
    };

    (useQuery as jest.Mock).mockImplementation(({ queryKey }) => {
      if (queryKey[0] === "gitHubUser") {
        return {
          data: mockUserData,
          isLoading: false,
          isError: false,
          isSuccess: true,
          isFetching: false,
          refetch: jest.fn(),
        };
      }
      return { data: undefined, isLoading: false, isError: false };
    });

    renderWithClient(<User />);

    expect(screen.getByTestId("user-avatar")).toBeInTheDocument();
    expect(screen.getByTestId("user-name")).toHaveTextContent("User One");
    expect(screen.getByTestId("user-login")).toHaveTextContent("user1");
    expect(screen.getByTestId("user-location")).toHaveTextContent("Somewhere");
    expect(screen.getByTestId("user-followers")).toHaveTextContent("10");
    expect(screen.getByTestId("user-following")).toHaveTextContent("5");
    expect(screen.getByTestId("user-bio")).toHaveTextContent(
      "This is a user bio."
    );
  });

  it("renders repositories when user repos data is available", () => {
    (useRouter as jest.Mock).mockReturnValue({ query: { userName: "user1" } });

    const mockUserData = {
      id: 1,
      login: "user1",
      name: "User One",
      avatar_url: "https://via.placeholder.com/150",
      location: "Somewhere",
      created_at: "2021-01-01T00:00:00Z",
      followers: 10,
      following: 5,
      bio: "This is a user bio.",
    };
    const mockUserRepos = [
      { id: 1, name: "repo1", html_url: "https://github.com/user1/repo1" },
      { id: 2, name: "repo2", html_url: "https://github.com/user1/repo2" },
    ];

    (useQuery as jest.Mock).mockImplementation(({ queryKey }) => {
      if (queryKey[0] === "gitHubUser") {
        return {
          data: mockUserData,
          isLoading: false,
          isError: false,
          isSuccess: true,
          isFetching: false,
          refetch: jest.fn(),
        };
      } else if (queryKey[0] === "userRepos") {
        return {
          data: mockUserRepos,
          isLoading: false,
          isError: false,
          isSuccess: true,
          isFetching: false,
          refetch: jest.fn(),
        };
      }
      return { data: undefined, isLoading: false, isError: false };
    });

    renderWithClient(<User />);

    const repositoriesTitle = screen.getByTestId("repositories-title");
    expect(repositoriesTitle).toHaveTextContent("Repositories");
    expect(screen.getByTestId("user-repositories")).toBeInTheDocument();
  });
});
