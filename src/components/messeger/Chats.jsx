import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChatHeader from './ChatHeader';
import ChatList from './ChatList';
import ChatInput from './ChatInput';
import { useFetch } from '../../api/useFetch';
import LoadingAnimation from '../loading/LoadingAnimation';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Chats = ({
  currentConversation: {
    profile,
    username,
    receiverID,
    roomID,
    online,
    setMessage,
  },
}) => {
  const [chats, setChats] = useState([]);
  const [showPicker, setShowPicker] = useState(false);

  const { loading, data, error } = useFetch(`/messeges/${roomID}`);
  useEffect(() => {
    if (data) {
      setChats(data?.messeges);
    }
  }, [data]);

  useEffect(() => {
    setMessage(chats[chats.length - 1]);
    // console.log(chats[chats.length - 1]);
  }, [chats]);
  return (
    <Container>
      <ChatHeader
        username={username}
        profile={profile}
        receiverID={receiverID}
      />

      {loading ? (
        <Container>
          <LoadingAnimation />
        </Container>
      ) : error ? (
        <Container>
          <h1>could not load the chats</h1>
        </Container>
      ) : (
        <ChatList
          profile={profile}
          setShowPicker={setShowPicker}
          chats={chats}
        />
      )}
      <ChatInput
        setMessage={setMessage}
        receiverID={receiverID}
        roomID={roomID}
        showPicker={showPicker}
        setShowPicker={setShowPicker}
        setChats={setChats}
      />
    </Container>
  );
};

export default Chats;
