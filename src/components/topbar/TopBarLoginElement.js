import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../login/Login"

class TopBarLoginElement extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }

    render(){
        return(
            <Router>
                <Link className="nav-link" to={"./login"}>{this.state.name}</Link>
                <Route path={"./login"} component={this.state.name}/>
            </Router>

        )
    }
}

export default TopBarLoginElement;