import React from "react";
import TopBarElement from "./TopBarElement";
import logo from './logo.PNG';
import TopBarLoginElement from "./TopBarLoginElement";

class TopBarComputer extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark indigo navbar-expand fixed-top sticky-top"
                 style={{backgroundColor: '#393E46'}}>
                <div>
                    <img src={logo} alt={"logo"} style={{width: '100px', height: '100px'}} className={"mx-auto"}/>
                </div>
                <div className="navbar-brand justify-content-between ml-4">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <TopBarElement name="Home"/>
                        </li>
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
                <div className="navbar-brand justify-content-between ml-auto">
                     <ul>
                        <li className="nav navbar-nav">
                            <TopBarLoginElement name="Login"/>
                        </li>
                    </ul>
                </div>
            </nav>)
    }
}

export default TopBarComputer;