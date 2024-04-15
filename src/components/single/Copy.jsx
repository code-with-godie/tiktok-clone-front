import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #f7f7f8;
    padding: 0.5rem;
    border-radius: 0.5rem;
`;
const Description = styled.p``;
const Copy = () => {
    return (
        <Container>
            <Description>http:localhost:3000/code_with_godie</Description>
        </Container>
    );
};

export default Copy;
