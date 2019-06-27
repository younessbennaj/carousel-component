import React from 'react';
import styled from 'styled-components';

const CardMessageSlide = styled.div`
    position: absolute;
    transform: translateX(${props => {
        return props.currentCardIndex * -(100 / props.cardsItem);
    }}%);
    transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

export default CardMessageSlide;