import React,{ Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    increment(){
        this.setState(
            {
            count:this.state.count + 1
            }
        )
       
        
    }

    render(){
        return(
            <><h1>Day 4 Events</h1><h3>Count - {this.state.count} </h3><button onClick={() => this.increment()}>Increment</button></>
        )
    }
}
export default Counter;