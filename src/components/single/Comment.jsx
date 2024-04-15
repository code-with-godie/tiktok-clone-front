import React, { useState } from 'react';
import styled from 'styled-components';
import { Avatar, IconButton } from '@mui/material';
import { FavoriteBorderOutlined, FavoriteOutlined } from '@mui/icons-material';
const Container = styled.div`
    display: flex;
    gap: 0.5rem;
    color: #000000bd;
    .icon {
        color: #aeadadbb;
        font-size: 1.3rem;
    }
`;
const ProfileContainer = styled.div``;
const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    flex: 1;
`;
const Username = styled.h4``;
const Title = styled.p``;
const LikeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ControlContainer = styled.div`
    display: flex;
    gap: 1rem;
`;
const Reply = styled.p`
    color: #6c6c6cb8;
    text-transform: capitalize;
    cursor: pointer;
`;
const Time = styled.p`
    color: #6c6c6cb8;
`;
const Comment = () => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(25);

    const handleLike = () => {
        setLikes(prev => (liked ? prev - 1 : prev + 1));
        setLiked(prev => !prev);
    };
    return (
        <Container>
            <ProfileContainer>
                <IconButton>
                    <Avatar />
                </IconButton>
            </ProfileContainer>
            <CommentContainer>
                <Username>@code_with_godie</Username>
                <Title>
                    Lorem ipsum dolor sit amet consectetur adipisicing eli
                </Title>
                <ControlContainer>
                    <Time>2d ago</Time>
                    <Reply>reply</Reply>
                </ControlContainer>
            </CommentContainer>
            <LikeContainer>
                {liked ? (
                    <IconButton onClick={handleLike}>
                        <FavoriteOutlined className='icon' />
                    </IconButton>
                ) : (
                    <IconButton onClick={handleLike}>
                        <FavoriteBorderOutlined className='icon' />
                    </IconButton>
                )}
                <Reply> {likes} </Reply>
            </LikeContainer>
        </Container>
    );
};

export default Comment;
