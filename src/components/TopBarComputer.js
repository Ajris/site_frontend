import React, {Component} from "react";
import {Link} from "react-router-dom";

const Layout = require('antd').Layout;
const Header = Layout;

class TopBarComputer extends Component {
    render() {
        return (<Header>
            <nav className="navbar navbar-expand-sm bg-dark sticky-top">
                <div className="navbar-collapse collapse justify-content-between py-2">
                    <ul className="navbar-nav">
                        <li className="nav-item ml-3" style={{fontSize: 25}}>
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto mr-2">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/projects">Personal
                                Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/experience">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/technologies">Technologies</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Header>)
    }
}

export default TopBarComputer;