import React, { useEffect } from "react";
import { Box, FilledInput, Grid, IconButton } from "@mui/material";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Imgbox from "./Imgbox";
import SearchIcon from "@mui/icons-material/Search";
import { FadeLoader } from "react-spinners";

const InfiniteGrid = () => {
  const [imgList, setImgList] = React.useState([]);
  const [paginationIndex, setPaginationIndex] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState("");

  const getList = async () => {
    await axios
      .get(
        `https://api.infinitestockphotos.com/search?prompt=${searchValue}&offset=${paginationIndex}`
      )
      .then((e) => {
        console.log(e.data.root.children);
        setImgList(imgList.concat(...e.data.root.children));
      });
  };

  useEffect(() => {
    if (searchValue !== "") {
      setTimeout(() => {
        getList();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationIndex, searchValue]);

  console.log(imgList?.length);
  console.log(imgList);

  return (
    <>
      <Box sx={{ background: "white", borderRadius: 10 }}>
        <FilledInput
          placeholder="search"
          fullWidth
          id="searchBar"
          disableUnderline={true}          
          disableTouchRipple={true}
          disableRipple
          // focusRipple={false}
          sx={{
            paddingLeft: 3,
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
            console.log("000",e)
            console.log(document.getElementById("searchBar").value);
                setImgList([]);
                setPaginationIndex(() => 0);
                setSearchValue(document.getElementById("searchBar").value);}
          }}
          endAdornment={
            <IconButton
              type="submit"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={(e) => {
                console.log(document.getElementById("searchBar").value);
                setImgList([]);
                setPaginationIndex(() => 0);
                setSearchValue(document.getElementById("searchBar").value);
              }}
            >
              <SearchIcon />
            </IconButton>
          }
        />
      </Box>
      {imgList?.length === 0 && searchValue !== "" && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <FadeLoader
            color="#ffffff"
            cssOverride={{ top: "0px", marginTop: "35px" }}
          />
        </Box>
      )}
      {imgList?.length !== 0 && (
        <InfiniteScroll
          dataLength={imgList?.length}
          next={() => {
            setPaginationIndex(paginationIndex + 1);
          }}
          hasMore={true}
          loader={
            imgList?.length && (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <FadeLoader
                  color="#ffffff"
                  cssOverride={{ top: "0px", marginTop: "35px" }}
                />
              </Box>
            )
          }
        >
          <Grid container spacing={2}>
            {imgList.map((val, index) => (
              <Imgbox data={val} key={index} />
            ))}
          </Grid>
        </InfiniteScroll>
      )}
    </>
  );
};

export default InfiniteGrid;
