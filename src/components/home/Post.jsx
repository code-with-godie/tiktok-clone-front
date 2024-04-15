import React, { useState } from 'react';
import styled from 'styled-components';
import PostHeader from './PostHeader';
import VideoPlayer from './VideoPlayer';
import { Avatar } from '@mui/material';

const Wrapper = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #f1f1f2;
  display: flex;
`;
const AvatorContainer = styled.div`
  padding: 0 0.5rem 0 0.5rem;
  display: flex;
  align-items: flex-start;
  .profile {
    cursor: pointer;
    width: 50px;
    height: 50px;
  }
`;
const Container = styled.div`
  flex: 1;
`;
const Post = ({
  user: { profilePic, username, name, _id: userID, followings },
  id,
  observer,
  setCurrentPlaying,
  muted,
  setMuted,
  caption,
  url,
  bookmarks,
  likes,
  shares,
  _id: postID,
}) => {
  return (
    <Wrapper>
      <AvatorContainer>
        <Avatar
          className='profile'
          alt={username}
          src={profilePic?.photo}
        />
      </AvatorContainer>
      <Container>
        <PostHeader
          caption={caption}
          name={name}
          username={username}
          userID={userID}
          followings={followings}
        />
        <VideoPlayer
          id={id}
          url={url?.postUrl}
          bookmarks={bookmarks}
          likes={likes}
          userID={userID}
          shares={shares}
          postID={postID}
          observer={observer}
          muted={muted}
          username={username}
          setMuted={setMuted}
          setCurrentPlaying={setCurrentPlaying}
        />
      </Container>
    </Wrapper>
  );
};

export default Post;
