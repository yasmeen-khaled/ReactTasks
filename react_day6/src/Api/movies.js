import axios from "axios"
const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;

export const fetchMovies=()=> {
    console.log("api fetch")
    return axios.get(apiUrl)
}