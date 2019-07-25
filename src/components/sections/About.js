import React from 'react';
import '../../App.css';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import Slide from "./Slide";

export default class About extends React.Component {
    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
            slides: [],
        };
    }

    componentDidMount() {
        fetch("http://ajris.backend.com:8081/project")
            .then(res => res.json())
            .then((result) => {
                let i = 0;
                let slides = result.map((item) =>
                    <Carousel.Item key={i++} className='home-slide-carousel-item'>
                        <Slide name={item.name} image={require("../../assets/projects/" + item.name + ".png")}/>
                    </Carousel.Item>
                );
                this.setState({slides:slides});
            });
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    render() {
        const {index, direction} = this.state;

        return (
            <Container>
                <Row className="justify-content-center">
                    <Col>
                        <Carousel className='home-slide-carousel' activeIndex={index} direction={direction} controls={false}
                                  onSelect={this.handleSelect}>
                            {this.state.slides}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        );
    }
}