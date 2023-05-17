import Types from "prop-types";
import { memo } from "react";

const User=(props)=>{
    // console.log({id , title , popularity ,release_date 
    //     ,vote_count,vote_average,overview})
    const{id , title , popularity ,release_date 
        ,vote_count,vote_average,overview} = props
    console.log({id , title , popularity ,release_date 
        ,vote_count,vote_average,overview})
        if(id)
    return <div className="alert alert-danger">
        {
            <div>
                <div>title : {title}</div>
                {/* <div>popularity : {popularity}</div>
                <div>release_date : {release_date}</div>
                <div>vote_count : {vote_count}</div> */}
                <div>vote_average : {vote_average}</div>
                <div >overview : {overview}</div>
            </div>    
        }
       
    </div>
}

// User.propTypes={
// id:Types.string.isRequired,
// name:Types.string.isRequired,
// age:Types.number
// }

// User.defaultProps={
//     age:21
// }
export default memo(User);