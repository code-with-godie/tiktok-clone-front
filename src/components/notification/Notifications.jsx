import React from 'react';
import styled from 'styled-components';
import NotificationActivities from './NotificationActivities';
import NotificationList from './NotificationList';

const Container = styled.div`
    width: 100vw;
    max-width: 400px;
    max-height: 0vh;
    background: ${props => props.theme.bg_primary};
    color: ${props => props.theme.text_primary};
    border: 1px solid #f2f2f2;
    border-radius: 0.5rem;
    position: absolute;
    top: 70px;
    right: 10px;
    z-index: 10000;
    display: none;
    transition: 300ms;
    padding: 0.5rem;
    &.show {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        max-height: 85vh;
    }
`;
const Header = styled.h2`
    text-transform: capitalize;
    /* color: #000000d8; */
`;
const Notifications = ({ show }) => {
    return (
        <Container className={`${show && 'show'}`}>
            <Header>notifications</Header>
            <NotificationActivities />
            <NotificationList />
        </Container>
    );
};

export default Notifications;
