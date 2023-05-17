import { useState } from "react";
import {v4 as uuid} from 'uuid';
import Movie from "./Movie"

const Movies = () => {
    const [movieArr]=useState([
        {id:uuid(), name:"film1",genre:"action" , producerName:"producer1" ,rating:1},
        {id:uuid(), name:"film2",genre:"comedy" , producerName:"producer2" ,rating:2},
        {id:uuid(), name:"film3",genre:"documentary" , producerName:"producer3" ,rating:3},
        {id:uuid(), name:"film4",genre:"comedy" , producerName:"producer4" ,rating:4},
        {id:uuid(), name:"film5",genre:"comdey" , producerName:"producer5" ,rating:5},


    ]);
    console.log(movieArr);
    return (
        // <>
        // </>
        <div>{movieArr.map((u)=><Movie key={u.id} {...u}></Movie>)}</div>
        
    );
};

export default Movies;