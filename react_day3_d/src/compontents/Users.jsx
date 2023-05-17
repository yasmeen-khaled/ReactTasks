import { useState } from "react";
import User from "./user";
import {v4 as uuid} from 'uuid';
import AddUser from "./AddUser";
const Users = () => {
    const [usersArr,setUsers]=useState([
        {id:uuid(), name:"Mariam",age:22},
        {id:uuid(), name:"Ahmed",age:26},
        {id:uuid(), name:"Sara",age:27},
        {id:uuid(), name:"Ganna",age:12},
        {id:uuid(), name:"Ayman",age:29},


    ]);
    // console.log(usersArr);]
    const addU=(data)=>{
        // console.log(data)
        //add user in arra
        // mutate
        // usersArr.push(data)
        //casting===> parseInt , Number , +
        setUsers((oldUsers)=>[...oldUsers,{...data,id:uuid(),age:+(data.age)}])
        console.log(usersArr)
    }
    const IncAge=(userId)=>{
        setUsers((oldUsers)=>oldUsers.map((user)=>user.id===userId?{...user,age:user.age+1}:{...user}))

        // const userInx= usersArr.findIndex((u)=>u.id===userId)
        // usersArr[userInx]={...usersArr[userInx],age:usersArr[userInx].age+1}
        // setUsers([...usersArr])

        // console.log(usersArr[userInx])

// console.log(userId)
    }
    return (
        // <>
        // <User></User>
        // <User></User>
        // </>
        // children Props
        // <div>{usersArr.map((u)=><User key={u.id} id={u.id} name={u.name} age={0}><button>done</button><button>delete</button></User>)}</div>
       <>
        <AddUser addUser={addU}></AddUser>
        <div>{usersArr.map((u)=><User key={u.id} id={u.id} name={u.name} age={u.age} IncrementAge={IncAge}></User>)}</div>
        </>
    );
};

export default Users;
