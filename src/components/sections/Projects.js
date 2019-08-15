import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import ItemCard from "./ItemCard";
import {getAllProjects, getImage} from "../../utils/APIUtils";

export default class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
        };
    }

    componentDidMount() {
        getAllProjects()
            .then((result) => {
                let i = 0;
                let cards = result.map((item) =>
                    <ItemCard key={i++} title={item.name} text={item.description}
                              image={getImage(item.name)} url={item.url} buttonText={"See project"}/>
                );
                this.setState({cards: cards});
            });

    }

    render() {
        return (
            <div>
                <div className={'mx-4 my-3'}>
                    <p className={'topic text-center'}>Projects</p>
                </div>
                <CardDeck>
                    {this.state.cards}
                </CardDeck>
            </div>
        )
    }
}