import axios from "axios";
import { Component, PureComponent } from "react";

class Item extends PureComponent{
    constructor(){
        super();
        this.state={Item:null}
        console.log("constructor")
    }  
    // shouldComponentUpdate(){
    //     console.log("shouldComponentUpdate")
    //     return true;
    // }
    componentDidUpdate(){
        console.log("componentDidUpdate")


    }
    // syntax sugar
    // state={name:"mobile"} 
    
    render(){
        const imgSrc="Images/1.jpg";
        if (!this.state.Item) return <div>Loadiiiing......</div>
        // const handleClick=()=>{};
        console.log("render")
        return <div>
            <img src={imgSrc}/>
            Hello ya {this.state.Item.title},{this.state.Item.completed?"Yes":"NO"}
        {/* onclick="alert()" */}
       
        <button  onClick={(e)=>{
            // this.setState((oldState)=>{return {Item:{...oldState.Item,sold:true}}})
            this.setState((oldState)=>({Item:{...oldState.Item,completed:true}}))

// this.setState({Item:{...this.state.Item,sold:true}})
            // this.state.sold=true;
            console.log(this.state.Item.completed)
        }}>done</button>
        </div>
    }
    componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => this.setState({Item:json}))
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then ((res)=>this.setState({Item:res.data}))
    
        console.log("componentDidMount")
    }
}

export default Item;