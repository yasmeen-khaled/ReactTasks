import {createContext,useMemo} from 'react';
import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";

// -createcontext
export const moviesContext=createContext();

const MoviesContextProvider = ({children}) => {
    const [moviesArr, setMovies] =useState([
        {id:uuid(), title:"t1" , popularity:1 ,release_date:Date()
            ,vote_count:5,vote_average:3.5,overview:"o1"},
        {id:uuid(), title:"t2" , popularity:1 ,release_date:Date()
            ,vote_count:5,vote_average:3.5,overview:"o2"},
        {id:uuid(), title:"t3" , popularity:1 ,release_date:Date()
            ,vote_count:5,vote_average:3.5,overview:"o3"},
    ]);
      const [counter, setCounter] = useState(0);
      const [disable, setDisable] = useState(false);
    

      const addMovie = useCallback((data) => {
        if (counter < 2) {
          setCounter((prevCount) => prevCount + 1);
        } else setDisable(true);
        console.log(counter);
        setMovies((oldMovies) => [
          ...oldMovies,
          { ...data, id: uuid(), age: +data.age },
        ]);
        console.log("addMovie in context" , moviesArr);
      },[counter,moviesArr]);

      const DeleteMovie = useCallback((movieId) => {
        setMovies((oldMovies) =>
        oldMovies.filter(object => {
          return object.id !== movieId;
        })
        );
      },[])
      
    const valuee=useMemo(()=>({moviesArr,counter,disable,addMovie,DeleteMovie})
      ,[moviesArr,counter,disable,addMovie,DeleteMovie]);
    return (
     <moviesContext.Provider  value={valuee}>
        {children}
     </moviesContext.Provider>
    );
};

export default MoviesContextProvider;