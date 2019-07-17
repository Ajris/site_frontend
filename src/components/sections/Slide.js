import React from "react";
import {Carousel} from "react-bootstrap";
import '../../App.css';
import Image from "react-bootstrap/Image";

export default class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:props.name,
            image:props.image,
        };
    }

    render() {
        return (
            <div>
                <Image className="d-block w-100 img-fluid slide-img" src={this.state.image} alt={"0"} fluid/>
                <Carousel.Caption>
                    <h3>{this.state.name}</h3>
                </Carousel.Caption>
            </div>
        )
    }
}