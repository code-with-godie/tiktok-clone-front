import { Avatar, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppContext';

const Container = styled.div`
    padding: 1rem;
    display: flex;
    gap: 0.5rem;
    border-bottom: 1px solid #f1f1f2;
    .profile {
        position: relative;
    }
`;
const ProfileDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;
const Username = styled.h3`
    font-size: 1rem;
    /* color: #000000d4; */
`;
const LastMessage = styled.p`
    font-size: 0.9rem;
    /* color: #000000b0; */
    font-family: 'Poppins', sans-serif;
`;
const Online = styled.div`
    border-radius: 50%;
    padding: 0.4rem;
    background-color: #1ce21c;
    position: absolute;
    top: 4px;
    right: 8px;
    z-index: 100;
    transition: 100ms;
    visibility: hidden;
    &.show {
        visibility: visible;
    }
`;
const ChatHeader = ({ username, profile, receiverID }) => {
    const { onlineUsers } = useAppContext();
    const [online, setOnline] = useState(
        onlineUsers?.some(users => users.id === receiverID)
    );
    useEffect(() => {
        setOnline(onlineUsers?.some(users => users.id === receiverID));
    }, [onlineUsers,receiverID]);
    return (
        <Container>
            <IconButton className='profile'>
                <Avatar src={profile?.photo} />{' '}
                <Online className={`${online && 'show'}`} />
            </IconButton>
            <ProfileDescription>
                <Username> {username} </Username>
                <LastMessage> {`@ ${username}`} </LastMessage>
            </ProfileDescription>
        </Container>
    );
};

export default ChatHeader;
