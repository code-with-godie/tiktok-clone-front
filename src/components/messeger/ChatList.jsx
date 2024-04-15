import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Message from './Message';
const Container = styled.div`
    flex: 1;
    overflow: auto;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
const ChatList = ({ chats, profile, setShowPicker }) => {
    const messegeRef = useRef(null);
    useEffect(() => {
        messegeRef.current?.scrollIntoView();
    }, [chats]);
    return (
        <Container onClick={e => setShowPicker(false)}>
            {chats.map(message => (
                <Message
                    messegeRef={messegeRef}
                    key={message._id}
                    {...message}
                    profile={profile}
                />
            ))}
        </Container>
    );
};

export default ChatList;
