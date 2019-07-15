import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import ItemCard from "./ItemCard";


export default class Projects extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/project")
            .then(res => res.json())
            .then((result) => {
                let i = 0;
                let cards = result.map((item) =>
                    <ItemCard key={i++} title={item.name} text={item.description} image={require("../../assets/projects/site.png")} url={item.url}/>
                );
                this.setState({cards:cards});
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