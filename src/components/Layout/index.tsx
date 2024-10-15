import { PropsWithChildren } from "react";
import styles from "./styles.module.css";
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
      <Box>{children}</Box>
      <footer className={styles.footer}>
        <p>Made with love ❤️ by Nahuel Moreno</p>
      </footer>
    </>
  );
};

export default Layout;
