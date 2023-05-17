import { Component } from "react";

const imgPath = "https://image.tmdb.org/t/p/w500/";


class Movie extends Component{
    
    constructor(props){
        super();
        this.state={name:"mobile"}
        this.props = props
        // console.log("child Movie comp" , this.props)
    } 
    render(){
        return <div className="alert alert-primary" 
            style={{width:"50%",margin:"10px auto" }}
        >
            {/* <div>id : {this.props.id}</div> */}
            <div>title : {this.props.title}</div>
            <div>popularity : {this.props.popularity}</div>
            <div>release_date : {this.props.release_date}</div>
            <div>vote_count : {this.props.vote_count}</div>
            <div>vote_average : {this.props.vote_average}</div>
            <div className="alert alert-info">overview : {this.props.overview}</div>
            <div>
                <img src={imgPath+this.props.poster_path}/>
            </div>
        </div>
    }
}
export default Movie;