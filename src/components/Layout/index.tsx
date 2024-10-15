import { PropsWithChildren } from "react";
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
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
