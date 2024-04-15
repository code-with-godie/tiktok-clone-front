import React, { useEffect } from 'react';
import styled from 'styled-components';
import Notification from './Notification';
import { useAppContext } from '../../context/AppContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  overflow: auto;
`;
const NotificationList = () => {
  const { notifications } = useAppContext();

  useEffect(() => {
    console.log(notifications);
  }, [notifications]);
  // console.log(notifications);
  return (
    <Container>
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
    </Container>
  );
};

export default NotificationList;
