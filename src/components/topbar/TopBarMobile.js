import React, {Component} from "react";
import {Link} from "react-router-dom";
import TopBarElement from "./TopBarElement";

const Layout = require('antd/lib/index').Layout;

class TopBarMobile extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark sticky-top">
                <ul className="navbar-nav">
                    <TopBarElement name="Home"/>
                </ul>
                <button type="button" className="navbar-toggler collapsed" data-toggle="collapse"
                        data-target=".toggle-content" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation ">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="navbar-brand navbar-collapse collapse toggle-content">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <TopBarElement name="Experience"/>
                        </li>
                        <li className="nav-item">
                            <TopBarElement name="Projects"/>
                        </li>
                        <li className="nav-item">
                            <TopBarElement name="Technologies"/>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default TopBarMobile;