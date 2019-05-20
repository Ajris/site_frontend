import React, {Component} from 'react';
import linkedIn from "../assets/icons/linkedin_icon.png";
import github from "../assets/icons/github_icon.png";
import youtube from "../assets/icons/youtube_icon.png";
import twitter from "../assets/icons/twitter_icon.png";
import mail from "../assets/icons/mail_icon.png";

const Layout = require('antd').Layout;
const Footer = Layout;

class FooterLinks extends Component {
    render() {
        return (
            <Footer>
                <nav className="navbar navbar-expand-sm bg-dark" style={{width: '100%'}}>
                    <div className="align-items-center mx-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item py-2 px-3">
                                <a target="_blank" href="https://linkedin.com/">
                                    <img src={linkedIn} alt="LinkedIn" height={25}/>
                                </a>
                            </li>
                            <li className="nav-item py-2 px-3">
                                <a target="_blank" href="https://github.com/">
                                    <img src={github} alt="Github" height={25}/>
                                </a>
                            </li>
                            <li className="nav-item py-2 px-3">
                                <a target="_blank" href="https://youtube.com/">
                                    <img src={youtube} alt="YouTube" height={25}/>
                                </a>
                            </li>
                            <li className="nav-item py-2 px-3">
                                <a target="_blank" href="https://twitter.com/">
                                    <img src={twitter} alt="Twitter" height={25}/>
                                </a>
                            </li>
                            <li className="nav-item py-2 px-3">
                                <a target="_blank" href="https://gmail.com/">
                                    <img src={mail} alt="Mail" height={25}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Footer>
        )
    }
}

export default FooterLinks;