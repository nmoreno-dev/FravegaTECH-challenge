import { PropsWithChildren } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/router";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          {router.pathname !== "/" && (
            <IconButton onClick={handleBackClick}>
              <ArrowLeftIcon width={40} height={40} color="white" />
            </IconButton>
          )}
          <Typography variant="h3">GitHub Users API</Typography>
        </Toolbar>
      </AppBar>
      <Box height={"100%"}>{children}</Box>
      <Box
        component={"footer"}
        width={"100%"}
        textAlign={"center"}
        margin={"40px 0"}
      >
        <Typography>Made with love ❤️ by Nahuel Moreno</Typography>
      </Box>
    </>
  );
};

export default Layout;
