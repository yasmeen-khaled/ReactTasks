import { useContext, useState } from "react";
import axios from "axios";
import {v4 as uuid} from 'uuid';
import Movie from "./Movie"
import AddMovie from "./AddMovie";
// import { moviesContext } from "../contexts/moviesContextProvider";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';

// const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
// const url = "https://api.themoviedb.org/3";
// const path = "/discover/movie?sort_by=popularity.desc";
// const apiUrl = url + path + apiKey;

const Movies = () => {
    const [t,i18n]=useTranslation();

    // const x = useSelector((state)=>console.log("x in movies comp" ,state))
    
    const moviesArr=useSelector((state)=>state.movies)
    
    console.log("moviesArr in movies comp" ,moviesArr)

    // const{DeleteMovie} 
    //     = useContext(moviesContext)
    return ( 
        <>
        {/* <AddMovie addMovie={addM}></AddMovie> */}
        {i18n.language ==="en" && <input type='button' value="AR" onClick={()=>{i18n.changeLanguage("ar")}}></input>}
        {i18n.language ==="ar" &&  <input type='button' value="En" onClick={()=>{i18n.changeLanguage("en")}}></input>}
       
        <div className="alert alert-primary">{moviesArr.map((u)=><Movie key={u.id} 
        id={u.id} movie = {u}
         ></Movie>)}</div>
        </>
     );
}

export default Movies;