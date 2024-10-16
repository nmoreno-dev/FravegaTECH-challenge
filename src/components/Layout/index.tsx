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
import Head from "next/head";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>GitHub Users API - User Search and Favorites</title>
        <meta
          name="description"
          content="Find and favorite GitHub users using the GitHub Users API."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="GitHub Users API" />
        <meta
          property="og:description"
          content="Search for and favorite GitHub users."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://tu-dominio.com${router.pathname}`}
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          {router.pathname !== "/" && (
            <IconButton onClick={handleBackClick} aria-label="Back">
              <ArrowLeftIcon width={40} height={40} color="white" />
            </IconButton>
          )}
          <Typography variant="h3" component="h1">
            GitHub Users API
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" height="100%">
        {children}
      </Box>
      <Box
        component={"footer"}
        width={"100%"}
        textAlign={"center"}
        margin={"40px 0"}
      >
        <Typography component="p">
          Made with love ❤️ by Nahuel Moreno
        </Typography>
      </Box>
    </>
  );
};

export default Layout;
