import React, {Component} from "react";
import {Link} from "react-router-dom";

const Layout = require('antd/lib/index').Layout;
const Header = Layout;

class TopBarMobile extends Component {
    render() {
        return (<Header>
            <nav className="navbar navbar-dark bg-dark sticky-top">
                <Link className="nav-link text-white" to="/">Home</Link>
                <button type="button" className="navbar-toggler collapsed" data-toggle="collapse"
                        data-target=".toggle-content" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation ">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="navbar-collapse collapse toggle-content">
                    <ul className="navbar-nav mx-auto">
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

export default TopBarMobile;