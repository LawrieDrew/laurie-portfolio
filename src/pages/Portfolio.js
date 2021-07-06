import React, { Component } from "react";
import Projects from "../projects.json";

class Portfolio extends Component {
    state = {
        projects: Projects,
    }

    componentDidMount(){
        console.log(this.state.projects);
    }
    render(){
        return (
            <h1>My Body of Work</h1>
        )
    }
}

export default Portfolio;