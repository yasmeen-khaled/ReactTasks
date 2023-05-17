import Types from "prop-types";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../redux/reducers/actionCreators/MoviesActions";
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
let imgPath = "https://image.tmdb.org/t/p/w500/";

const User=(props)=>{
    const [t,i18n]=useTranslation();
    const dispatch=useDispatch();
    let imgSrc = "Images/1.jpg";

    const handleClick=()=>{
        console.log("delete" , id)
        // DeleteMovie(id)
        dispatch(deleteMovie(id))
    }
    // console.log({id , title , popularity ,release_date 
    //     ,vote_count,vote_average,overview})
    const{id , movie} = props
    if(movie.poster_path){
        imgSrc = imgPath + movie.poster_path
    }
    console.log({id , movie})
    useEffect(()=>{
        // if(movie.poster_path==null)
        // {
        //     movie.poster_path = "/img/1.jpg"
        //     imgPath = process.env.PUBLIC_URL 
        //     console.log("if" , movie.poster_path)
        // }
        // else{
        //     movie.poster_path = imgPath + movie.poster_path
        //     console.log("else" , movie.poster_path)
        // }
      } , [])
    if(id)  
    return <div className="alert alert-danger">
        {
            <div>
                <button className="btn btn-danger"
                        onClick={handleClick}
                        >
                    {t("Delete")}
                </button>
                <div>{t("title")} : {movie.title}</div>
                <div>{t("popularity")} : {movie.popularity}</div>
                <div>{t("release_date")} : {movie.release_date}</div>
                <div>{t("vote_count")} : {movie.vote_count}</div>
                <div>{t("vote_average")} : {movie.vote_average}</div>
                <div className="alert alert-info">{t("overview")} : {movie.overview}</div>
                <div>
                    {/* {if(movie.poster_path == "1.jpg")imgPath=null;  } */}
                    <img src={imgSrc}/>
                </div>
            </div>    
        }
       
    </div>
}

// User.propTypes={
// id:Types.string.isRequired,
// name:Types.string.isRequired,
// age:Types.number
// }

// User.defaultProps={
//     age:21
// }
export default memo(User);