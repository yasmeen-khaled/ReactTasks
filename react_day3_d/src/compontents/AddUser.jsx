import React, { useState } from 'react';
import classes from "../styles/addUser.module.css"
const AddUser = ({addUser}) => {
    // console.log(props)
    // const {addUser} =props;
    const [userData,setUserData]=useState({name:"Aya",age:5});
    const handleSubmit=(event)=>{
       event.preventDefault();
       addUser(userData);
       setUserData({name:'',age:""})

    }

const handleChange=(e)=>{
    const {name,value}=e.target;
    setUserData({...userData,[name]:value})  //computedproperty
// console.log(e.target.name)
}


//     const handleChangeName=(e)=>{
//         setUserData({...userData,name:e.target.value})
// // console.log(e.target.value)
//     }

//     const handleChangeAge=(e)=>{
//         setUserData({...userData,age:e.target.value})

//         console.log(e)
//             }
    return (
       <form onSubmit={handleSubmit}>
            <label>Name : </label><input name='name' type='text' value={userData.name} onChange={handleChange}></input>
            <br></br>
            <label>Age : </label><input name='age' type='number' value={userData.age} onChange={handleChange}></input>
            <br/>
            <input className={classes.btn} type='submit'></input>
       
       </form>
    );
};

export default AddUser;