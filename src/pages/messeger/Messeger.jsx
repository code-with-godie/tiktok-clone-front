import React, { useState } from 'react';
import styled from 'styled-components';
import Topnav from '../../components/nav/Topnav';
import ChatRooms from '../../components/messeger/ChatRooms';
import Conversation from '../../components/messeger/Conversation';
const Container = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.bg_primary};
    color: ${props => props.theme.text_primary};
`;
const Content = styled.section`
    flex: 1;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.semi_gray_black};
    /* background-color: #f8f8f8; */
    overflow: auto;
    padding: 0.5rem;
`;
const Messeger = () => {
    const [currentConversation, setCurrentConversation] = useState(null);
    return (
        <Container>
            <Topnav />
            <Content>
                <ChatRooms setCurrentConversation={setCurrentConversation} />
                <Conversation currentConversation={currentConversation} />
            </Content>
        </Container>
    );
};

export default Messeger;
