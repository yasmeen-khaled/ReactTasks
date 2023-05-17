import React, { useState } from 'react';
function AddMovie({addMovie}) {
    const [movieData,setMovieData]
        =useState({title:"newT",vote_average:1.5
        ,overview:"cc"});
    
    const handleSubmit=(event)=>{
        console.log("myForm" , movieData)
        event.preventDefault();
        addMovie(movieData);
        setMovieData({title:'',vote_average:3})
 
     }
     const handleChange=(e)=>{
        const {name,value}=e.target;
        setMovieData({...movieData,[name]:value})  //computedproperty
    // console.log(e.target.title)
    }

    return ( 
        <form className="alert alert-warning form"
            onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Title:</label>
                <input
                 name='title' type='text' value={movieData.title} 
                 onChange={handleChange}
                ></input>
            </div>
            <input className="btn btn-primary" type='submit'></input>
        </form>
     );
}

export default AddMovie;