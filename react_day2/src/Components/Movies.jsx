import axios from "axios";
import { PureComponent } from "react";
// import {v4 as uuid} from 'uuid';
import Movie from "./Movie"

const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;

class Item extends PureComponent{
    constructor(){
        super();
        this.state={Items:null , flag:true , index:1}
        console.log("constructor")
    }  
    // shouldComponentUpdate(){
    //     console.log("shouldComponentUpdate")
    //     return true;
    // }
    componentDidUpdate(){
        console.log("componentDidUpdate")


    }
    
    render(){
        const imgSrc="Images/";
        if (!this.state.Items) return <div>Loadiiiing......</div>
        const handleClick=()=>{};
        console.log("render")
        return <>

            <div className="alert alert-warning w-50" style={{margin:"10px auto" }}>
                <button 
                    onClick={(e)=>{
                        if( this.state.index === 1)
                            this.setState({index:4})
                        else
                            this.setState({index:(this.state.index -1)})
                        var path = imgSrc+ this.state.index + ".jpg"
                        console.log(path)
                        document.getElementById("img").setAttribute("src" , path)
                    }}
                    className="btn btn-outline-primary">prev</button>
                <img id="img" alt="xxx" src={imgSrc+this.state.index + ".jpg"} style={{width:"50%"}}/>
                {/* <br></br> */}
                <button 
                    onClick={(e)=>{
                        if( this.state.index === 4)
                            this.setState({index:1})
                        else
                            this.setState({index:(this.state.index +1)})
                        var path = imgSrc+ this.state.index + ".jpg"
                        console.log(path)
                        document.getElementById("img").setAttribute("src" , path)
                    }}
                    className="btn btn-outline-primary">next</button>
            </div>

            <div>{this.state.Items.map((u)=><Movie key={u.id} {...u}></Movie>)}</div>
       
        </>
    }
    componentDidMount(){
        axios.get(apiUrl)
        .then ((res)=>{
            console.log(`res.data:` , res.data.results)
            return this.setState({Items:res.data.results})
        })
        .then (()=>{console.log("this.state" ,this.state)})

        console.log("componentDidMount")
    }
}

export default Item;