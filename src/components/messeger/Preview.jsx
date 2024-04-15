import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    height: 100%;
`;
const Logo = styled.img`
    width: auto;
    object-fit: contain;
    max-height: 300px;
    animation: animate 4000ms ease-in-out infinite alternate;
`;
const Description = styled.p`
    max-width: 100%;
    height: auto;
    object-fit: contain;
    font-size: large.9rem;
    color: gray;
    text-align: center;
    line-height: 1.5;
`;
const Preview = () => {
    return (
        <Container>
            <Logo src={logo} />
            <Description>
                Connect with friends here on tiktok messeger
            </Description>
            <Description>Open a conversion to start a conversation</Description>
        </Container>
    );
};

export default Preview;
