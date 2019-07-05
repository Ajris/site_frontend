import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import '../../App.css';

const simplePhoto = require('../../assets/xD.png');

export default class Technologies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            technologies: [],
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then((result) => {
                let technologies = result.map((item) =>
                        <Image src={simplePhoto} roundedCircle  style={{margin:'10px'}}/>
                    )
                ;
                this.setState({technologies: technologies});
            });

    }

    render() {
        return (
            <div>
                <div className={'mx-4 my-3'}>
                    <p className={'topic text-center'}>Technologies</p>
                </div>
                <Container>
                    <Row className="justify-content-md-center">
                        {this.state.technologies}
                    </Row>
                </Container>
            </div>
        )
    }
}
