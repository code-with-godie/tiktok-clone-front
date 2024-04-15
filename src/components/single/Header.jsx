import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Button from '../../components/styled/Button';
import { MusicNote } from '@mui/icons-material';
import Share from './Share';
import Copy from './Copy';
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
`;

const TopContainer = styled.div`
    background-color: #f7f7f8;
    padding: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
const ProfileContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
`;
const DescriptionContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;
const Username = styled.h4``;
const Description = styled.p`
    display: flex;
    align-items: center;
    gap: 0.4rem;
`;
const Sound = styled.p`
    display: flex;
    align-items: center;
    gap: 0.3rem;
`;
const Dot = styled.p`
    padding: 0.1rem;
    border-radius: 0.5rem;
    background-color: #b3b0b0;
`;
const Header = () => {
    return (
        <Wrapper>
            <TopContainer>
                <ProfileContainer>
                    <IconButton>
                        <Avatar />
                    </IconButton>
                    <DescriptionContainer>
                        <Username>@code_with_godie</Username>
                        <Description>
                            godfrey maina <Dot /> 4d ago
                        </Description>
                    </DescriptionContainer>
                    <Button
                        large
                        bg='#fe2c55'
                        color='white'
                        rounded='.2rem'
                    >
                        follow
                    </Button>
                </ProfileContainer>
                <Description>
                    Im just trying to vibe om my way to work
                </Description>
                <Sound>
                    <MusicNote />
                    original sound - code_with_godie
                </Sound>
            </TopContainer>
            <Share />
            <Copy />
        </Wrapper>
    );
};

export default Header;
