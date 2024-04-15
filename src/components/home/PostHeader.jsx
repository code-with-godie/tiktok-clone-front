import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../styled/Button';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const Container = styled.div`
    display: flex;
    gap: 0.5rem;
`;
const Left = styled.div`
    display: flex;
    gap: 0.5rem;
    flex: 1;
`;
const Right = styled.div``;
const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
const UserInfo = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`;
const UserName = styled.h3`
    cursor: pointer;
    :hover {
        text-decoration: underline;
    }
`;
const Name = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
`;
const Caption = styled.p`
    font-family: 'Poppins', sans-serif;
`;
const Follow = styled(Button)`
    .following {
        border: 1px solid #000000b7;
        color: #000000b7;
    }
`;
const PostHeader = ({ username, caption, userID, name, followings }) => {
    const navigate = useNavigate();
    const { follow, user } = useAppContext();
    const mine = userID === user?._id;
    // const [follows, setFollows] = useState(true);
    const [follows, setFollows] = useState(user?.followings?.includes(userID));
    // const [friends, setFriends] = useState(true);
    const [friends, setFriends] = useState(followings?.includes(user?._id));

    const handleNavigation = () => {
        navigate(`/profile/@${username}`, { state: { userID } });
    };
    useEffect(() => {
        setFollows(user?.followings?.includes(userID));
        setFriends(followings?.includes(user?._id));
    }, [user?.followings]);
    return (
        <Container>
            <Left>
                <DescriptionContainer>
                    <UserInfo>
                        <UserName onClick={handleNavigation}>
                            {' '}
                            {username}{' '}
                        </UserName>
                        <Name> @{name} </Name>
                    </UserInfo>
                    <Caption>
                        {' '}
                        {caption?.length > 105
                            ? `${caption?.substring(0, 105)}...`
                            : caption}{' '}
                    </Caption>
                </DescriptionContainer>
            </Left>
            <Right>
                {!mine && (
                    <Button
                        handleclick={() => follow(userID)}
                        following
                        border={
                            follows ? '1px solid #dedede' : '1px solid #FE496C'
                        }
                        color={follows ? '#858585' : '#FE496C'}
                    >
                        {follows ? 'Following' : 'Follow'}
                    </Button>
                )}
            </Right>
        </Container>
    );
};

export default PostHeader;
