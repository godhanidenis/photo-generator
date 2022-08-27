import axios from "axios";

export const getSearchData = (props) => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/search?prompt=${props.searchData}&offset=${props.paginationIndex}`
  );
};
