import {lazy} from 'react';
import {Routes,Route} from "react-router-dom"
import MoviesContextProvider from '../contexts/moviesContextProvider';
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from 'react';
import { getAllMovies } from '../redux/reducers/actionCreators/MoviesActions';

const MoviesPage=lazy(()=>import("../pages/MoviesPage"))
// const DetailsPage=lazy(()=>import("../pages/DetailsPage"))
const AddMoviePage=lazy(()=>import("../pages/AddMoviePage"))
const NotFound=lazy(()=>import("../pages/NotFound"))


const UsersModule = () => {//TODO:change Name

    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getAllMovies());
      console.log("inside moviesModule 's useEffect")
    } , [dispatch])
    
    const x = useSelector((state)=>state)
    console.log("x in moviesModule comp" , x)
  
    return (
      // <MoviesContextProvider>
        <Routes>
        <Route index element={<MoviesPage  ></MoviesPage>}></Route>
        <Route path="add" element={<AddMoviePage  ></AddMoviePage>}></Route>
      {/*<Route path=":id" element={<DetailsPage ></DetailsPage>}></Route> */}
      <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      // </MoviesContextProvider>
    );
};

export default UsersModule;