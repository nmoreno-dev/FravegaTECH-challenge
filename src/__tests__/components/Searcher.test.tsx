import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSearchGithubUsers } from "../../querys/useGitHubUsers.query";
import { ReactNode } from "react";
import Searcher from "../../components/Searcher";

jest.mock("../../querys/useGitHubUsers.query", () => ({
  useSearchGithubUsers: jest.fn(),
}));

describe("Searcher Component", () => {
  const renderWithClient = (ui: ReactNode) => {
    const queryClient = new QueryClient();
    return render(
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders input field and clear button", () => {
    (useSearchGithubUsers as jest.Mock).mockImplementation(() => ({
      data: undefined,
      isLoading: false,
      isError: false,
      refetch: jest.fn(),
    }));

    renderWithClient(<Searcher />);

    const inputField = screen.getByTestId("search-input");
    const clearButton = screen.getByTestId("clear-button");

    expect(inputField).toBeInTheDocument();
    expect(clearButton).toBeInTheDocument();
  });

  it("calls useSearchGithubUsers hook when typing in the input", async () => {
    (useSearchGithubUsers as jest.Mock).mockImplementation(() => ({
      data: undefined,
      isLoading: false,
      isError: false,
      refetch: jest.fn(),
    }));

    renderWithClient(<Searcher />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "user" },
    });

    await waitFor(() => {
      expect(useSearchGithubUsers).toHaveBeenCalledWith("user", {
        enabled: false,
      });
    });
  });

  it("renders loading skeletons when data is loading", () => {
    (useSearchGithubUsers as jest.Mock).mockImplementation(() => ({
      data: undefined,
      isLoading: true,
      isError: false,
      refetch: jest.fn(),
    }));

    renderWithClient(<Searcher />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "user" },
    });
    const skeletons = screen.getAllByTestId("user-card-grid");
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it("renders error message when there is an error", () => {
    (useSearchGithubUsers as jest.Mock).mockImplementation(() => ({
      data: undefined,
      isLoading: false,
      isError: true,
      refetch: jest.fn(),
    }));

    renderWithClient(<Searcher />);

    const searchResults = screen.queryByTestId("search-results");
    expect(searchResults).not.toBeInTheDocument();
  });

  it("renders user cards when data is available", () => {
    const mockUserData = [
      { id: 1, login: "user1", avatar_url: "https://via.placeholder.com/150" },
      { id: 2, login: "user2", avatar_url: "https://via.placeholder.com/150" },
    ];

    (useSearchGithubUsers as jest.Mock).mockImplementation(() => ({
      data: mockUserData,
      isLoading: false,
      isError: false,
      refetch: jest.fn(),
    }));

    renderWithClient(<Searcher />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "user" },
    });

    const userCards = screen.getAllByTestId("user-card-grid");
    expect(userCards.length).toBe(2);
  });

  it("clears the input field and removes results when clear button is clicked", () => {
    const queryClient = new QueryClient();
    const removeQueriesSpy = jest.spyOn(queryClient, "removeQueries");

    render(
      <QueryClientProvider client={queryClient}>
        <Searcher />
      </QueryClientProvider>
    );

    const inputField = screen.getByRole("textbox");
    const clearButton = screen.getByTestId("clear-button");

    fireEvent.change(inputField, { target: { value: "user" } });
    fireEvent.click(clearButton);

    expect(inputField).toHaveValue("");
    expect(removeQueriesSpy).toHaveBeenCalledWith({
      queryKey: ["gitHubFilteredUsers"],
    });
  });
});
