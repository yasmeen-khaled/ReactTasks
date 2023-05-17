import { Component } from "react";

class Movie extends Component{
    
    constructor(props){
        super();
        this.state={name:"mobile"}
        this.props = props
        console.log("child Movie comp" , this.props)
    } 
    render(){
        return <div style={{backgroundColor:"violet", width:"70%",margin:"10px auto" }}>
            <div>id : {this.props.id}</div>
            <div>name : {this.props.name}</div>
            <div>producerName : {this.props.producerName}</div> 
            <div>rating : {this.props.rating}</div> 
            <div>genre : {this.props.genre}</div> 
        </div>
    }
}
export default Movie;