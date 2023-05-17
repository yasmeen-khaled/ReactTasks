// JSX
// import { Fragment } from "react";s
import Item from "../compontents/Item";
import Users from "../compontents/Users";
import Root from "../compontents/componentsInteraction/Root";
import User from "../compontents/user";
import "./App.css";
// const name = "Mobile";
// const styleObj=
function App() {
  return (
    <>
    {/* <ErrorBoundry  fallback=""> */}
    <div className="App">
      {/* <Root></Root> */}
    {/* <Item></Item> */}
    <Users></Users> 
    </div>
   
    {/* <Users></Users> */}
    {/* </ErrorBoundry> */}
    </>
    //   syntax sugar 
    // <>
    // <label htmlFor="n">Name: </label>
    // <input id="n"></input>
    //   <div style={{backgroundColor:"red",color:"white"}} >Hello , {name.toUpperCase()}</div>
    //   <div className="App">Hello , {name.toUpperCase()}</div>
    // </>
  );
}

export default App;
