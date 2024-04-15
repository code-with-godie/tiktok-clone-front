import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;
const Title = styled.p`
    color: gray;
`;
const StrongTitle = styled.strong`
    color: rgba(0, 0, 0, 0.899);
`;
const Bio = styled.p`
    max-width: 500px;
`;
const OthersProfileDescription = ({ followers, following, likes, bio }) => {
    return (
        <Wrapper>
            <Container>
                <Title>
                    <StrongTitle>{following || 0} </StrongTitle>{' '}
                    {following === 1 ? 'Following' : 'Followings'}
                </Title>
                <Title>
                    <StrongTitle>{followers || 0}</StrongTitle>{' '}
                    {followers === 1 ? 'Follower' : 'Followers'}
                </Title>
                <Title>
                    <StrongTitle>{likes || 0}</StrongTitle>{' '}
                    {likes === 1 ? 'Like' : 'Likes'}
                </Title>
            </Container>
            <Bio>{bio || 'No bio yet.'}</Bio>
        </Wrapper>
    );
};

export default OthersProfileDescription;
