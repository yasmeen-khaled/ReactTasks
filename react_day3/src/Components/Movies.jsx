import { useState } from "react";
import axios from "axios";
import {v4 as uuid} from 'uuid';
import Movie from "./Movie"
import AddMovie from "./AddMovie";

const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;

function Movies() {

    const [moviesArr,setMovies]=useState([
        {id:uuid(), title:"t1" , popularity:1 ,release_date:Date()
            ,vote_count:5,vote_average:3.5,overview:"o1"},
        {id:uuid(), title:"t2" , popularity:1 ,release_date:Date()
            ,vote_count:5,vote_average:3.5,overview:"o2"},
        {id:uuid(), title:"t3" , popularity:1 ,release_date:Date()
            ,vote_count:5,vote_average:3.5,overview:"o3"},


    ]);
    // console.log(usersArr);]
    const addM=(data)=>{
        console.log("data[0]",data[0])
        // console.log(data)
        //add user in arra
        // mutate
        // usersArr.push(data)
        //casting===> parseInt , Number , +
        setMovies((oldMovies)=>[...oldMovies,
            {...data,id:uuid(),vote_average:+(data.vote_average)}])
        console.log(moviesArr)
    }

    return ( 
        <>
        <AddMovie addMovie={addM}></AddMovie>
        <div className="alert alert-primary">{moviesArr.map((u)=><Movie key={u.id} 
        id={u.id} title={u.title} vote_average={u.vote_average} 
        overview={u.overview} ></Movie>)}</div>
        </>
     );
}

export default Movies;