import { v4 as uuid } from "uuid";
import { ADD_MOVIE, GET_ALL_MOVIES, DELETE_MOVIE } from "../../actionTypes";
import { fetchMovies } from "../../../Api/movies";

export const getAllMovies=()=>(dispatch)=>{
    fetchMovies().then((res)=>{
        console.log("res in  movies action" , res.data.results)
        dispatch({
        type:GET_ALL_MOVIES,
        payload:res.data.results
        })});
    }

export const deleteMovie=(movieId)=>({
    type:DELETE_MOVIE,
    payload:movieId
    })

export const addMovie=(movieData)=>(
    {
    type:ADD_MOVIE,
    payload:{...movieData,id:uuid()}
                                            //TODO:check addition
    })