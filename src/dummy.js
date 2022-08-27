import React, { useEffect } from "react";
import {
  Box,
  FilledInput,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  OutlinedInput,
} from "@mui/material";
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
        setImgList(imgList.concat(...e.data.root.children));
      });
  };

  useEffect(() => {
    if (searchValue !== "") {
      console.log(imgList?.length);
      console.log(imgList);
      setTimeout(() => {
        getList();
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationIndex]);

  return (
    <>
    {/* <InputBase
          // value={searchValue}
          fullWidth
          placeholder="Search"
          id="searchBar"
          sx={{background:"white", borderRadius:10 , p:1}}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              setImgList([]);
              setPaginationIndex(() => 0);
              setSearchValue(e.target.value);
            }

          }}
          // onChange={(e) => {
          //   setSearchValue(e.currentTarget.value);            
          // }}
          size="large"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                // aria-label="toggle password visibility"
                onClick={() => {
                  setImgList([]);
                  setPaginationIndex(() => 0);
                  setSearchValue(document.getElementById("searchBar").value);
                }}
                edge="end"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        /> */}

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
            // paddingLeft: 3,
            m:1,
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              console.log(document.getElementById("searchBar").value);
              setImgList([]);
              setPaginationIndex(() => 0);
              setSearchValue(document.getElementById("searchBar").value);
            }
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
