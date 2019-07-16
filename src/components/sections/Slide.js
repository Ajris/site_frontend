import React from "react";
import {Carousel} from "react-bootstrap";
import '../../App.css';

export default class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:props.name,
        };
    }

    render() {
        return (
            <div>
                <img className="d-block img-fluid slide-img" src={require("../login/bg-01.jpg")} alt={"0"}/>
                <Carousel.Caption>
                    <h3>{this.state.name}</h3>
                </Carousel.Caption>
            </div>
        )
    }
}