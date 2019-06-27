import React, { Component } from 'react';
import CardMessage from './CardMessage';
import CardMessageSlide from './CardMessageSlide';
import Arrow from './Arrow';
import styled from 'styled-components';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const SliderContainer = styled.div`
    position: relative;
    border: 3px solid black;
    height: 388px;
    width: 20rem;
    overflow: hidden;
`;

class Slider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data,
            currentCardIndex: 0
        };
    }

    previousCard = () => {
        const newIndex = this.state.currentCardIndex - 1;
        this.setState({ currentCardIndex: newIndex });
    }

    nextCard = () => {
        const newIndex = this.state.currentCardIndex + 1;
        this.setState({ currentCardIndex: newIndex });
    }
    render() {
        return (
            <SliderContainer className="overflow-hidden">
                <Arrow
                    className='position-absolute'
                    direction='left'
                >
                    <button onClick={this.previousCard} className="btn btn-primary" disabled={this.state.currentCardIndex === 0}>
                        <FaArrowLeft />
                    </button>
                </Arrow>
                <Arrow
                    className='position-absolute'
                    direction='right'
                >
                    <button onClick={this.nextCard} className="btn btn-primary" disabled={this.state.currentCardIndex === this.state.data.content.length - 1}>
                        <FaArrowRight />
                    </button>
                </Arrow>
                <CardMessageSlide currentCardIndex={this.state.currentCardIndex} cardsItem={this.state.data.content.length} className="d-flex flex-row">
                    {this.state.data.content.map((card) => {
                        return (
                            <CardMessage key={card.title} className="card mx-3">
                                <img src={card.imageUrl} className="card-img-top" alt="img" />
                                <div className="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.subtitle}</p>
                                    <a href="#" className="btn btn-primary">{card.button}</a>
                                </div>
                            </CardMessage>
                        )
                    })}
                </CardMessageSlide>
            </SliderContainer>
        );
    }
}

export default Slider;