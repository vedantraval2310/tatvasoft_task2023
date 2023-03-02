import React from "react";
import Home32 from "./Home32";

class Title3 extends Home32{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            
            <h1>Title is {this.props.Title} and description is {this.props.Description}</h1>
        );
    }
}
export default Title3;