import React from "react";
import {Carousel} from "react-bootstrap";
import '../../App.css';

const CURRENT_LOGIN = require('../login/bg-01.jpg');

export default class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            text: props.text,
        };
    }

    render() {
        return (
            <div>
                <img className="d-block img-fluid slide-img" src={CURRENT_LOGIN} alt={this.state.title}/>
                <Carousel.Caption>
                    <h3>{this.state.title}</h3>
                    <p>{this.state.text}</p>
                </Carousel.Caption>
            </div>
        )
    }
}