import { useContext, useState } from "react";
import axios from "axios";
import {v4 as uuid} from 'uuid';
import Movie from "./Movie"
import AddMovie from "./AddMovie";
import { moviesContext } from "../contexts/moviesContextProvider";

const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;

function Movies() {

    const{moviesArr,DeleteMovie} 
        = useContext(moviesContext)
    return ( 
        <>
        {/* <AddMovie addMovie={addM}></AddMovie> */}
        <div className="alert alert-primary">{moviesArr.map((u)=><Movie key={u.id} 
        id={u.id} title={u.title} vote_average={u.vote_average} 
        overview={u.overview}
        DeleteMovie={DeleteMovie} ></Movie>)}</div>
        </>
     );
}

export default Movies;