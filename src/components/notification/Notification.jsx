import React from 'react';
import styled from 'styled-components';
import { Avatar, IconButton } from '@mui/material';
import Button from '../../components/styled/Button';
const Container = styled.div`
    display: flex;
    align-items: center;
    padding-right: 0.5rem;
`;
const ProfileContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    .profile {
        width: 50px;
        height: 50px;
    }
`;
const ProfileDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
`;
const Username = styled.h4`
    /* color: #000000da; */
`;
const Activity = styled.p`
    color: ${props => props.theme.text_gray};

    font-weight: 100;
    font-size: 0.9rem;
`;
const Notification = () => {
    return (
        <Container>
            <ProfileContainer>
                <IconButton>
                    <Avatar className='profile' />
                </IconButton>
                <ProfileDescriptionContainer>
                    <Username>Erisol 254</Username>
                    <Activity>follows you</Activity>
                </ProfileDescriptionContainer>
            </ProfileContainer>
            <Button
                bg='#FE496C'
                color='white'
                rounded='.5rem'
            >
                follow back
            </Button>
        </Container>
    );
};

export default Notification;
