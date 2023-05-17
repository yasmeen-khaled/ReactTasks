import React, { useState ,useRef, useEffect, useContext} from 'react';
// import { moviesContext } from '../contexts/moviesContextProvider';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addMovie } from '../redux/reducers/actionCreators/MoviesActions';

function AddMovie() {
    // const {addMovie,disable}=useContext(moviesContext)
    const [movieData,setMovieData]
        =useState({title:"newT",vote_average:1.5 , vote_count :5 ,
        release_date :"2023-04-12" , popularity :5
        ,overview:"cc",backdrop_path:""
    });
    const dispatch = useDispatch()
    
    const inpRef=useRef(null);
    console.log("inpRef.current" , inpRef.current);
    const navigate=useNavigate();

    const handleSubmit=(event)=>{
        console.log("myForm" , movieData)
        movieData.backdrop_path = "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg"

        event.preventDefault();
        // addMovie(movieData);
        dispatch(addMovie(movieData))
        console.log("myForm1" , movieData)
        setMovieData({title:'',vote_average:'' , overview:''})
        
        navigate("/movies")
     }
     const handleChange=(e)=>{
        const {name,value}=e.target;
        setMovieData({...movieData,[name]:value})  //computedproperty
     console.log(name,value)
     console.log(movieData)
    }
    useEffect(()=>{
        inpRef.current.focus();
    },[])

    return ( 
        <form className="alert alert-warning form"
            onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Title:</label>
                <input ref={inpRef}
                 name='title' type='text' value={movieData.title} 
                 onChange={handleChange}
                ></input>
            </div>
            <div className="form-group">
                <label>vote_average :</label>
                <input ref={inpRef}
                 name='vote_average' type='text' value={movieData.vote_average } 
                 onChange={handleChange}
                ></input>
            </div>
            <div className="form-group">
                <label>overview :</label>
                <input ref={inpRef}
                 name='overview' type='text' value={movieData.overview } 
                 onChange={handleChange}
                ></input>
            </div>
            <input  className="btn btn-primary" type='submit'></input>
        </form>
     );
}

export default AddMovie;