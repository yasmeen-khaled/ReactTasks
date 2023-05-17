import Types from "prop-types";
import classes from "../styles/user.module.css"
import "../styles/user.css"
import { memo } from "react";
const User=(props)=>{
    // console.log(props)
    const {id,name,age,children,IncrementAge}=props;
    console.log(props)
    const handleClick=()=>{
        IncrementAge(id);
    }
    return <div className={classes.user}>
        <div id="id">id : {id}</div>
        <div>name : {name}</div>
        {/* <div>age : {age?age:"18"}</div> */}
        {/* <div>age : {age||"12"}</div> */}
       {/* conditional Rwnder */}
       {age>0 && <div>age : {age}</div>}
       {/* <div>{children}</div> */}
       <button className={classes.btn} onClick={handleClick}>IncAge</button>

       
    </div>
}
User.propTypes={
id:Types.string.isRequired,
name:Types.string.isRequired,
age:Types.number
}
// User.defaultProps={
//     age:21
// }
export default memo(User);