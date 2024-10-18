import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactNode } from "react";

jest.mock("@tanstack/react-query", () => {
  const originalModule = jest.requireActual("@tanstack/react-query");
  return {
    ...originalModule,
    useQuery: jest.fn(),
  };
});

describe("Home Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWithClient = (ui: ReactNode) => {
    const queryClient = new QueryClient();
    return render(
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    );
  };

  it("renders loading skeletons when data is loading", () => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      data: undefined,
      isLoading: true,
      isError: false,
      isSuccess: false,
      isFetching: true,
      refetch: jest.fn(),
    }));

    renderWithClient(<Home />);

    const skeletons = screen.getAllByTestId("loading-skeleton-avatar");
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it("renders error message when there is an error", () => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      data: undefined,
      isLoading: false,
      isError: true,
      isSuccess: false,
      isFetching: false,
      refetch: jest.fn(),
    }));

    renderWithClient(<Home />);

    expect(screen.getByTestId("error-message")).toBeInTheDocument();
  });

  it("renders user data when data is available", () => {
    const mockUserData = [
      { id: 1, login: "user1", avatar_url: "https://via.placeholder.com/150" },
      { id: 2, login: "user2", avatar_url: "https://via.placeholder.com/150" },
    ];

    (useQuery as jest.Mock).mockImplementation(() => ({
      data: mockUserData,
      isLoading: false,
      isError: false,
      isSuccess: true,
      isFetching: false,
      refetch: jest.fn(),
    }));

    renderWithClient(<Home />);

    const userCards = screen.getAllByTestId("user-card");
    expect(userCards.length).toBe(2);
  });
});
