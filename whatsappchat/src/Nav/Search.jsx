import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./search.css"; 
// import { IoFilterOutline } from "react-icons/io5";
const Search = ({settext}) => {
  return (
    <>
    <div className="container">
      <FaMagnifyingGlass className="icon"  />
      <input type="text" placeholder="Search or new chat" className="input"  onChange={(e)=>settext(e.target.value)}/>
      
    </div>
    {/* <div>
    <IoFilterOutline />
    </div> */}
    </>
  );
};

export default Search;