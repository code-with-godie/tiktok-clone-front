import React from 'react';
import styled from 'styled-components';
import ProfileHeader from './ProfileHeader';
import UsersPosts from './UsersPosts';
import { useAppContext } from '../../context/AppContext';

const Container = styled.div`
    flex: 4;
`;
const UserProfile = ({ userID, tempSlug }) => {
    const { user } = useAppContext();
    const mine = userID === user?._id;

    return (
        <Container>
            <ProfileHeader
                mine={mine}
                userID={userID}
            />
            <UsersPosts
                tempSlug={tempSlug}
                mine={mine}
                userID={userID}
            />
        </Container>
    );
};

export default UserProfile;
