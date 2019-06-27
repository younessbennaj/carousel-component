import styled from 'styled-components';

const Arrow = styled.div`
    top: 50%;
    z-index: 1;
    left: ${props => {
        if (props.direction === 'left') {
            return 0;
        }
    }};
    right: ${props => {
        if (props.direction === 'right') {
            return 0;
        }
    }};
`;

export default Arrow;