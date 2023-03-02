import React from "react";
import { Component } from "react";
import { UserConsumer } from "./UserContext";
class ComponentF extends Component {
    render() {
        return(
            <UserConsumer>
            {username => {
                return <h3>Context Consumer calls {username}</h3>
            }}
            </UserConsumer>
            
        )
    }
}
export default ComponentF