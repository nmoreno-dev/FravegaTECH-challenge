import React, { PropsWithChildren } from "react";
import { Box } from "@mui/material";

const SearchResults: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box overflow={"hidden"}>
      <Box
        boxSizing={"border-box"}
        position={"absolute"}
        width={"100%"}
        top={56}
        zIndex={99}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={"10px"}
        padding={"20px"}
        bgcolor={"primary.main"}
        maxHeight={"500px"}
        sx={{
          boxShadow: 6,
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SearchResults;
