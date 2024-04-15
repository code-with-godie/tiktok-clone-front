import styled from 'styled-components';
import React from 'react';
import url from '../../assets/lock.png';
const Container = styled.div`
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
`;
const Image = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: contain;
    padding-bottom: 1rem;
`;
const Description = styled.p`
    max-width: 100%;
    height: auto;
    object-fit: contain;
    font-size: large.9rem;
    color: gray;
    text-align: center;
    line-height: 1.5;

    &.bold {
        font-size: 1.2rem;
        color: black;
        font-weight: 600;
        @media screen and (min-width: 768px) {
            font-size: 1.5rem;
        }
    }
`;
const PrivacyMessage = ({ username }) => {
    return (
        <Container>
            <Image src={url} />
            <Description className='bold'>
                This user liked videos are private
            </Description>
            <Description>
                videos liked by {username} are currently hidden{' '}
            </Description>
        </Container>
    );
};

export default PrivacyMessage;
