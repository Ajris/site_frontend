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
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((result) => {
                let slides = result.map((item) =>
                    <Carousel.Item className='home-slide-carousel-item'>
                        <Slide title={item.name} text={item.email}/>
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
                        <Carousel className='home-slide-carousel' activeIndex={index} direction={direction}
                                  onSelect={this.handleSelect}>
                            {this.state.slides}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        );
    }
}