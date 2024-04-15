import { Avatar, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useFetch } from '../../api/useFetch';
import { MoreHoriz, PersonAddAlt1Outlined } from '@mui/icons-material';
import { TbShare3 } from 'react-icons/tb';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import EditProfile from './EditProfile';
import Model from '../../components/models/Model';
import MyProfileDescription from './MyProfileDescription';
import OthersProfileDescription from './OthersProfileDescription';
import UserOption from './UserOption';
import { postData } from '../../api/apiCalls';
import ProfileHeaderSkeleton from '../skeletons/ProfileHeaderSkeleton';
const Container = styled.div`
    min-height: 250px;
`;
const Top = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.5rem;
    .profile {
        width: 100px;
        height: 100px;
        cursor: pointer;
    }
    .icon {
        font-size: 1.5rem;
        color: ${props => props.theme.text_gray};
    }
`;
const ProfileDescription = styled.div`
    display: flex;
    flex: 1;
    max-width: 500px;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5em;
`;
const UsernameContainer = styled.div`
    display: flex;
    align-self: stretch;
    justify-content: space-between;
    .more {
        position: relative;
        color: ${props => props.theme.text_primary};
    }
`;
const IconContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;
const Username = styled.h1``;
const Name = styled.p``;
const Bottom = styled.div``;
const MessageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: center;
`;
const UnfollowButton = styled.button`
    background: ${props => props.theme.gray_semi_transparent};
    outline: none;
    padding: 0.3rem;
    height: 35px;
    border-radius: 0.2rem;
    display: grid;
    place-content: center;
    cursor: pointer;
    border: 1px solid gray;
    .icon {
        color: ${props => props.theme.text_gray_black};
    }
`;
const Follow = styled.button`
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    border: none;
    background: ${props => props.bg || 'transparent'};
    outline: none;
    border: ${props => props.border};
    height: 35px;
    color: ${props => props.color || '#000000b7'};
    font-size: 1rem;
    cursor: pointer;
    border-radius: 0.5rem !important ;
    font-weight: 400 !important;
`;
const ProfileHeader = ({ userID, mine }) => {
    const { loading, error, data } = useFetch(`/users/${userID}`);
    const {
        user: loggedInUser,
        follow,
        handleLoginModel,
        token,
        openToast,
    } = useAppContext();
    const [user, setUser] = useState(null);
    const [following, setFollowing] = useState(undefined);
    const [edit, setEdit] = useState(false);
    const [showMoreOption, setShowMore] = useState(false);
    const navigate = useNavigate();

    const handleMessage = async () => {
        if (!loggedInUser) {
            handleLoginModel();
            return;
        }
        try {
            const res = await postData('/rooms', { userID }, token);
            if (res.success) {
                navigate('/inbox');
            }
        } catch (error) {
            const message =
                error.response.data.toString() ||
                'Somwthing went wrong.Try again later!!!';
            openToast(message);
            console.log(error);
        }
    };

    useEffect(() => {
        if (data) {
            setUser(data?.user);
        }
    }, [data]);
    useEffect(() => {
        if (user) {
            setFollowing(loggedInUser?.followings?.includes(userID));
        }
    }, [user, loggedInUser, userID]);
    if (loading) {
        return <ProfileHeaderSkeleton />;
    }

    if (error) {
        return <h1>error</h1>;
    }
    return (
        <Container>
            <Top>
                <Avatar
                    className='profile'
                    alt={user?.username}
                    src={user?.profilePic?.photo}
                />
                <ProfileDescription>
                    <UsernameContainer>
                        <Username> {user?.username} </Username>
                        <IconContainer>
                            <IconButton>
                                <TbShare3 className='icon' />
                            </IconButton>
                            <div className='more'>
                                <IconButton
                                    onClick={e => setShowMore(prev => !prev)}
                                >
                                    <MoreHoriz className='icon' />
                                </IconButton>
                                {showMoreOption && (
                                    <UserOption userID={userID} />
                                )}
                            </div>
                        </IconContainer>
                    </UsernameContainer>
                    <Name> {user?.name} </Name>
                    {mine ? (
                        <Follow
                            border='1px solid #e4e4e4'
                            large
                            onClick={e => setEdit(true)}
                            color=' gray'
                        >
                            Edit profile
                        </Follow>
                    ) : following ? (
                        <MessageContainer>
                            <Follow
                                border='1px solid #FE496C'
                                large
                                onClick={handleMessage}
                                color='#FE496C'
                            >
                                Message
                            </Follow>
                            <UnfollowButton onClick={() => follow(userID)}>
                                <PersonAddAlt1Outlined className='icon' />
                            </UnfollowButton>
                        </MessageContainer>
                    ) : (
                        <Follow
                            bg='#FE496C'
                            large
                            onClick={() => follow(userID)}
                            color='white'
                        >
                            Follow
                        </Follow>
                    )}
                </ProfileDescription>
            </Top>
            <Bottom>
                {mine ? (
                    <MyProfileDescription
                        followers={user?.followers?.length}
                        following={user?.followings?.length}
                        likes={user?.likes?.length}
                        bio={user?.bio}
                    />
                ) : (
                    <OthersProfileDescription
                        followers={user?.followers?.length}
                        following={user?.followings?.length}
                        likes={user?.likes?.length}
                        bio={user?.bio}
                    />
                )}
            </Bottom>
            {edit && (
                <Model
                    bg=' rgba(0,0,0,.3)'
                    center
                    mW='768px'
                >
                    <EditProfile closeModel={setEdit} />
                </Model>
            )}
        </Container>
    );
};

export default ProfileHeader;
