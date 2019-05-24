import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from "./components/login/Login";
import TopBar from "./components/topbar/TopBar";

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.register();