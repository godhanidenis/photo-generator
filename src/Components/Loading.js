import { Box } from "@mui/system";
import React from "react";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <FadeLoader
        color="#ffffff"
        cssOverride={{ top: "0px", marginTop: "35px" }}
      />
    </Box>
  );
};

export default Loading;
