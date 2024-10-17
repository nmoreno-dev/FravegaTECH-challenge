"use client";

import React, { PropsWithChildren, useState } from "react";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { createTheme, ThemeProvider } from "@mui/material";
import { toast, Toaster } from "sonner";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#dc143c",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error) => {
            toast.error(error.message);
          },
        }),
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "crimson",
            },
          }}
        />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
