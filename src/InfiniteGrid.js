import React from "react";
import { Grid, IconButton, Input, InputAdornment } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchIcon from "@mui/icons-material/Search";
import Imgbox from "./Components/Imgbox";
import { getSearchData } from "./service";
import Loading from "./Components/Loading";
import { Box } from "@mui/system";

const InfiniteGrid = () => {
  const [imgList, setImgList] = React.useState([]);
  const [paginationIndex, setPaginationIndex] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState("");
  const [hasMore, setHasMore] = React.useState(true);

  const appendNextData = (pageIndex) => {
    setPaginationIndex(pageIndex);
    if (searchValue !== "") {
      setTimeout(() => {
        getSearchData({
          paginationIndex: pageIndex,
          searchData: searchValue,
        }).then((res) => {
          setHasMore(res?.data?.root?.children ? "true" : "false");
          res.data.root.children &&
            setImgList(imgList.concat(...res.data.root.children));
          return res.data.root.children;
        });
      }, 500);
    }
  };
  console.log(hasMore);
  return (
    <>
      <Input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.currentTarget.value);
        }}
        sx={{ background: "white", borderRadius: 10, pl: 2, height: "45px" }}
        placeholder="search"
        disableUnderline={true}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            setImgList([]);
            appendNextData(0);
          }
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              type="submit"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={() => {
                setImgList([]);
                appendNextData(0);
              }}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />

      {imgList?.length === 0 && paginationIndex === 0 && hasMore === true && (
        <Loading />
      )}
      {imgList?.length !== 0 && (
        <InfiniteScroll
          dataLength={imgList?.length}
          next={() => appendNextData(paginationIndex + 1)}
          hasMore={hasMore}
          loader={imgList?.length && <Loading />}
        >
          <Grid container spacing={2}>
            {imgList.map((val, index) => (
              <Imgbox data={val} key={index} />
            ))}
          </Grid>
        </InfiniteScroll>
      )}
      {hasMore === false && (
        <Box sx={{ color: "white", display: "flex", justifyContent: "center" }}>
          No More Result
        </Box>
      )}
    </>
  );
};

export default InfiniteGrid;
