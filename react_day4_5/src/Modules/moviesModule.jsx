import {lazy} from 'react';
import {Routes,Route} from "react-router-dom"
import MoviesContextProvider from '../contexts/moviesContextProvider';
const MoviesPage=lazy(()=>import("../pages/MoviesPage"))
// const DetailsPage=lazy(()=>import("../pages/DetailsPage"))
const AddMoviePage=lazy(()=>import("../pages/AddMoviePage"))
const NotFound=lazy(()=>import("../pages/NotFound"))

const UsersModule = () => {//TODO:change Name
    return (
       <MoviesContextProvider>
        <Routes>
        <Route index element={<MoviesPage  ></MoviesPage>}></Route>
        <Route path="add" element={<AddMoviePage  ></AddMoviePage>}></Route>
      {/*<Route path=":id" element={<DetailsPage ></DetailsPage>}></Route> */}
      <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      </MoviesContextProvider>
    );
};

export default UsersModule;