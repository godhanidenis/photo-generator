import React from "react";
import { Box, CardMedia, Grid } from "@mui/material";
import "../App.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TelegramIcon from "@mui/icons-material/Telegram";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  imgbox: {
    position: "relative",
    "&:hover $imgdiscription": {
      visibility: "visible",
      opacity: 1,
    },
  },
  imgdiscription: {
    padding: "10px",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    visibility: "hidden",
    opacity: 0,
    margin: 0,
    transition: "opacity 0.2s, visibility 0.2s",
  },
}));

function Imgbox(props) {
  const classes = useStyles();
  return (
    <>
      <Grid item lg={4} md={6} sm={6} xs={12}>
        <Box className={classes.imgbox}>
          <CardMedia
            component="img"
            image={props.data.fields.image_file_name}
            alt="green iguana"
          />

          <Box className={classes.imgdiscription}>
            This is description for Image
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 2,
              }}
            >
              <Box>
                <FavoriteBorderIcon />
                <TelegramIcon />
              </Box>
              <StarBorderIcon />
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default Imgbox;
