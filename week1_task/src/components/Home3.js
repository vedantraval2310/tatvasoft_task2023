import React, {Component} from "react";

class Home3 extends Component
{
    constructor()
    {
        super()
            this.state ={
                Title: "Week 1 day 3 state",
                Description:"Created state in home for title and description."
            }
        }
        
    render(){

        return(
            <h1> {this.state.Title}  {this.state.Description}</h1> 
                    )
    }
}
export default Home3;