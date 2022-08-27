import { Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import InfiniteGrid from "../InfiniteGrid";

const SearchPage = () => {
  return (
    <>
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
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}
      >
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
    </>
  );
};

export default SearchPage;
