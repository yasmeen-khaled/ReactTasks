import React, { useState } from 'react';

const Search = ({getSearchWord}) => {
    const [SearchWord,setSearchWord]=useState("");
    const handleChange=(event)=>{
        setSearchWord(event.target.value);
        getSearchWord(event.target.value)
    }
    return (
      <input type='text' value={SearchWord} onChange={handleChange}/>
    );
};

export default Search;