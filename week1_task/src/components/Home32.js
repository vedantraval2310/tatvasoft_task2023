import React, {Component} from "react";
import Title3 from "./Title3";

class Home32 extends Component
{
    constructor(props)
    {
        super(props)
            this.state ={
                Title: "Week 3 state",
                Description:"Created state in home for title and description."
            }
        }
        
    render(){

        return(
            <Title3 Title={this.state.Title} Description={this.state.Description}/> 
            
        )
    }
}
export default Home32;

