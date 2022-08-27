import { Box, Grid, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InfiniteGrid from "./InfiniteGrid";
import "./App.css";
import React from "react";

function App() {
  return (
    <Box sx={{ width: "100%", background: "#272727" }}>
      <Box
        sx={{
          backgroundColor: "#D9D9D9",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          height: "50px",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>HEADER</Typography>
      </Box>
      <Grid container sx={{ display: "flex", justifyContent: "center" , marginTop:4}}>
        <Grid item lg={8} md={8} sm={8} xs={11}>
          <Stack
            direction={"column"}
            spacing={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {/* <Box
              sx={{
                backgroundColor: "#D9D9D9",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                height: "50px",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>HEADER</Typography>
            </Box> */}

            <InfiniteGrid />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
