import React from 'react';
import {Container, Image, Row} from "react-bootstrap";
import '../../App.css';

const simplePhoto = require('../../assets/simpleRhomb.png');

export default class Technologies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            technologies: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/technology")
            .then(res => res.json())
            .then((result) => {
                let i = 0;
                let technologies = result.map((item) =>
                        <Image key={i++} src={simplePhoto} roundedCircle  style={{margin:'30px', width:'200px'}}/>
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
