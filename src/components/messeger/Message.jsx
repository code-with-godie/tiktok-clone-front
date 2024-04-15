import { Avatar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppContext';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.2rem;
  max-width: 60%;
  align-self: ${props => props.mine && 'flex-end'};
  .profile {
    width: 25px;
    height: 25px;
  }
`;
const Title = styled.p`
  color: ${props => (props.mine ? 'black' : 'white')};
  background-color: ${props => (props.mine ? ' #f0f2f5' : '#1b74e4')};
  border-radius: 1rem;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: 100;
`;

const Message = ({ title, sender, profile, messegeRef }) => {
  const {
    user: { _id: userID },
  } = useAppContext();
  const mine = sender === userID;
  return (
    <Container
      mine={mine}
      ref={messegeRef}
    >
      {!mine && (
        <Avatar
          className='profile'
          src={profile?.photo}
        />
      )}
      <Title mine={mine}> {title} </Title>
    </Container>
  );
};

export default Message;
