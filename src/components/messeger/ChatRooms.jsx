import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Settings } from '@mui/icons-material';
import Room from './Room';
import MessegerSettings from './MessegerSettings';
import Model from '../../components/models/Model';
import { useFetch } from '../../api/useFetch';
import LoadingAnimation from '../../components/loading/LoadingAnimation';
import { useAppContext } from '../../context/AppContext';
const Container = styled.div`
  height: 90%;
  /* border: 1px solid ${props => props.theme.text_primary}; */
  box-shadow: 0 0 5px 3px ${props => !props.darkMode && '#c4c4c44a'};
  border-radius: 0.5rem;
  background: ${props => props.theme.bg_primary};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: auto;
  @media screen and (min-width: 768px) {
    flex: 1;
    max-width: 400px;
  }
`;
const HeaderContainer = styled.div`
  display: none;
  padding: 0.5rem;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .icon {
    color: ${props => props.theme.text_primary};
    font-size: 1.7rem;
    transition: 500ms;
  }
  .icon.rotate {
    transform: rotate(60deg);
  }
`;
const RoomsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: auto;
  flex: 1;
`;
const Title = styled.h2``;
const ChatRooms = ({ setCurrentConversation }) => {
  const { darkMode } = useAppContext();
  const [showSetting, setShowSetting] = useState(false);
  const [rooms, setRooms] = useState([]);
  const { data, loading, error } = useFetch('/rooms');

  useEffect(() => {
    if (data) {
      setRooms(data.rooms);
    }
  }, [data]);
  if (loading) {
    return (
      <Container>
        <LoadingAnimation />
      </Container>
    );
  }
  if (error) {
    return (
      <Container darkMode={darkMode}>
        <h1>an error occured...</h1>
      </Container>
    );
  }
  if (rooms.length === 0) {
    return (
      <Container>
        <h1>there are no rooms yet</h1>
      </Container>
    );
  }
  return (
    <Container>
      <HeaderContainer>
        <Title>Messages</Title>
        <IconButton
          onClick={e => setShowSetting(true)}
          className={`${showSetting ? 'icon rotate' : 'icon'}`}
        >
          <Settings />
        </IconButton>
      </HeaderContainer>
      <RoomsContainer>
        {rooms.map(room => (
          <Room
            key={room._id}
            {...room}
            setCurrentConversation={setCurrentConversation}
          />
        ))}
      </RoomsContainer>
      {showSetting && (
        <Model
          center
          bg='rgba(0, 0, 0, 0.17)'
        >
          <MessegerSettings close={setShowSetting} />
        </Model>
      )}
    </Container>
  );
};

export default ChatRooms;
