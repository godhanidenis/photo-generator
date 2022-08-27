
import axios from "axios";

export const getSearchData=(props)=>{
    axios
    .get(
      `https://api.infinitestockphotos.com/search?prompt=${
        props.searchData
      }&offset=${props.paginationIndex}`
    )
    .then((e) => {    
      console.log("data",e.data.root.children);
      props.addDataFun((pre)=>({ ...pre,...e.data.root.children}))
      
    });
}