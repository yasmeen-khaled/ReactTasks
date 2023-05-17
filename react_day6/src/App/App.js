import { BrowserRouter ,Routes,Route} from "react-router-dom";
import NavBar from "../compontents/NavBar";
import { Suspense, lazy } from "react";
import MoviesModule from "../Modules/moviesModule";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { store } from "../redux/store";
const Home=lazy(()=>import("../pages/Home"))

const NotFound=lazy(()=>import("../pages/NotFound"))

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Suspense fallback={<div>Loading........</div>}>
     <BrowserRouter>
     <NavBar></NavBar>
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>

      <Route path="movies/*" element={<MoviesModule></MoviesModule>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>

     
     </Routes>
     </BrowserRouter>
     </Suspense>
   </div>
   </Provider>
  );
}

export default App;
