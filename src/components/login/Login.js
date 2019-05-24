import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';
import Background from './bg-01.jpg';

export default class Login extends React.Component {
    render() {
        return (
            <div style={{backgroundImage:`url(${Background})`}}>
                <div className="container-login100">
                    <div className="wrap-login100 ">
				        <span className="login100-form-title pb-3">
					        Account Login
				        </span>
                        <form className="login100-form">
                            <div className="wrap-input100">
                                <input className="input100" type="text" name="username" placeholder="User name"/>
                            </div>
                            <div className="wrap-input100">
                                <input className="input100" type="password" name="pass" placeholder="Password"/>
                            </div>
                            <div className="container-login100-form-btn py-2">
                                <button className="login100-form-btn">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}