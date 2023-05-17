import React, { useState } from 'react';
import Search from './Search';
import Students from './Students';

const Root = () => {
    const [stds]=useState([
        {id:1,name:"Ahmed"},
        {id:2,name:"Sara"},
        {id:3,name:"Yousef"},
        {id:4,name:"Ali"},
        {id:5,name:"Yomna"},
    ])
    const [filteredArry,setFilteredArr]=useState(stds);
    const getSearchWord=(searchData)=>{
       setFilteredArr(()=>stds.filter((std)=>std.name.toLowerCase().includes(searchData.toLowerCase())))
// searchData


    }
    return (
        <div>
            <Search getSearchWord={getSearchWord}></Search>
            <Students students={filteredArry}></Students>
        </div>
    );
};

export default Root;