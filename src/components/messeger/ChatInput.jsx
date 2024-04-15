import { IconButton } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import emoji from '../../assets/emoji.svg';
import { postData } from '../../api/apiCalls';
import { useAppContext } from '../../context/AppContext';
import EmojiPicker from '../EmojiPicker/EmojiPicker';
const Container = styled.form`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #f1f1f2;
  position: relative;
`;
const InputContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 500px;
  align-items: center;
  gap: 0.5rem;
  background-color: ${props => props.theme.semi_gray};
  padding: 0.5rem;
  border-radius: 0.5rem;
`;
const Input = styled.input`
  flex: 1;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  border: none;
  background: transparent;
  outline: none;
  color: ${props => props.theme.text_primary};
`;
const Emoji = styled.img``;
const ChatInput = ({
  setChats,
  setMessage: roomMessage,
  receiverID,
  roomID,
  setShowPicker,
  showPicker,
}) => {
  const { token, socket } = useAppContext();
  const [message, setMessage] = useState('');
  const [typing, setTyping] = useState(false);
  const inputRef = useRef(null);

  const handleEmoji = emojiData => {
    setMessage(prev => prev + emojiData.emoji);
  };
  const handleOtherUserMesseges = messege => {
    if (messege?.roomID === roomID) {
      setChats(prev => [...prev, messege]);
      roomMessage(message);
      // console.log(messege);
    }
  };
  const handleOtherUserTyping = tempRoomID => {
    if (tempRoomID === roomID) {
      setTyping(true);
    }
  };
  const handleOtherUserStopedTyping = () => {
    setTyping(false);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await postData(
        `/messeges/${receiverID}`,
        { title: message, roomID },
        token
      );
      console.log(res);
      if (res.success) {
        setMessage('');
        socket?.emit('SEND_MESSEGE', res.message, receiverID);
        setChats(prev => [...prev, res.message]);
      }
    } catch (error) {}
  };
  useEffect(() => {
    socket?.on('RECEIVE_MESSEGE', handleOtherUserMesseges);
    // socket?.on('FRIEND_TYPING', handleOtherUserTyping);
    // socket?.on('FRIEND_STOPED_TYPING', handleOtherUserStopedTyping);
    return () => {
      socket?.off('RECEIVE_MESSEGE', handleOtherUserMesseges);
      // socket?.off('FRIEND_TYPING', handleOtherUserTyping);
      // socket?.off('FRIEND_STOPED_TYPING', handleOtherUserStopedTyping);
    };
  }, [socket]);
  // useEffect(() => {
  //     socket?.emit('TYPING', receiverID, roomID);
  // }, [message]);
  // useEffect(() => {
  //     socket?.emit('STOP_TYPING', receiverID, roomID);
  // }, [roomID, receiverID, socket]);
  return (
    <Container onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          value={message}
          onFocus={e => setShowPicker(false)}
          onChange={e => setMessage(e.target.value)}
          ref={inputRef}
          placeholder={` ${typing ? 'typing...' : 'Send a message...'} `}
        />
        <IconButton onClick={e => setShowPicker(prev => !prev)}>
          <Emoji src={emoji} />
        </IconButton>
        <EmojiPicker
          showPicker={showPicker}
          handleEmoji={handleEmoji}
        />
      </InputContainer>
    </Container>
  );
};

export default ChatInput;
