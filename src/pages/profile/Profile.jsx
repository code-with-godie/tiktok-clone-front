import React, { useEffect } from 'react';
import styled from 'styled-components';
import Topnav from '../../components/nav/Topnav';
import Sidenav from '../../components/nav/Sidenav';
import { useLocation } from 'react-router-dom';
import UserProfile from '../../components/profile/UserProfile';

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
    overflow: auto;
`;
const Profile = () => {
    const location = useLocation();
    const { userID, slug } = location.state;
    return (
        <Container>
            <Topnav />
            <Content>
                <Sidenav />
                <UserProfile
                    tempSlug={slug}
                    userID={userID}
                />
            </Content>
        </Container>
    );
};

export default Profile;
