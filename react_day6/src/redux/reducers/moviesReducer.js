import { v4 as uuid } from "uuid";
import { ADD_MOVIE, DELETE_MOVIE, GET_ALL_MOVIES } from "../actionTypes";

const initialSate=
[
        {id:uuid(), title:"t1" , popularity:1 ,release_date:Date()
            ,vote_count:5,vote_average:3.5,overview:"o1"},
        {id:uuid(), title:"t2" , popularity:1 ,release_date:Date()
            ,vote_count:5,vote_average:3.5,overview:"o2"},
        {id:uuid(), title:"t3" , popularity:1 ,release_date:Date()
            ,vote_count:5,vote_average:3.5,overview:"o3"},
];
//action = {type ==> string ,payload}
export const moviesReducer=(state=initialSate,{type,payload})=>{
    console.log("action" , {type,payload})
    switch(type){
        case GET_ALL_MOVIES:
            console.log("state" , state)
            return payload;
        case DELETE_MOVIE:
            state = state.filter(object => {
                return object.id !== payload;
              });
        case ADD_MOVIE:
            state.push(payload)
        default:
            return state;
    }
    // // logic
    // return state;
}