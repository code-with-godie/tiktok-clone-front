import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdFavorite } from 'react-icons/md';
import { AiFillMessage } from 'react-icons/ai';
import { IoIosShareAlt } from 'react-icons/io';
import { BsBookmarkFill } from 'react-icons/bs';
import { IconButton } from '@mui/material';
import { useAppContext } from '../../context/AppContext';
import { updateData } from '../../api/apiCalls';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-end;
  .icon {
    font-size: 1.5rem;
    color: black;
    background-color: #ededed;
    :hover {
      background-color: #ededed75;
    }
  }
`;
const Control = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  justify-content: center;
  align-items: center;
  .fill {
    color: #fe496c;
  }
`;
const ControlLabel = styled.p``;
const VideoControls = ({
  likes,
  bookmarks,
  shares,
  username,
  userID,
  postID,
  url,
}) => {
  const {
    user,
    handleLoginModel,
    token,
    socket,
    openToast,
    handleCommentModel,
  } = useAppContext();
  const [postLikes, setPostLikes] = useState(likes.length);
  const [isLiked, setIsLiked] = useState(likes.includes(user?._id));
  const [postbookmark, setPostBookmark] = useState(bookmarks.length);
  const [bookmarked, setBookmarked] = useState(bookmarks.includes(user?._id));

  const navigate = useNavigate();

  const handleBookmark = async () => {
    try {
      if (!user) {
        handleLoginModel();
        return;
      }
      const res = await updateData(`/posts/bookmark/${postID}`, {}, token);
      if (res.success) {
        setPostBookmark(prev => (res.bookmarked ? prev + 1 : prev - 1));
        setBookmarked(() => (res.bookmarked ? true : false));
      }
    } catch (error) {
      const message =
        error.response.data.message || 'Something went wrong.Try again later';
      openToast(message);
      console.log(error);
    }
  };
  const handleLike = async () => {
    try {
      if (!user) {
        handleLoginModel();
        return;
      }
      const res = await updateData(`/posts/like/${postID}`, {}, token);
      if (res.success) {
        if (res.liked) {
          setPostLikes(prev => prev + 1);
          setIsLiked(true);
          userID !== user?._id &&
            socket?.emit(
              'ADD_NOTIFICATION',
              postID,
              user?.username,
              1,
              user?._id,
              userID
            );
        } else {
          setPostLikes(prev => prev - 1);
          setIsLiked(false);
        }
      }
    } catch (error) {
      const message =
        error.response.data.message || 'Something went wrong.Try again later';
      openToast(message);
      console.log(error);
    }
  };
  const handleShare = async () => {
    try {
      if (!user) {
        handleLoginModel();
        return;
      }
      console.log('sharing');
    } catch (error) {}
  };
  const gotoPost = () => {
    navigate(`/${username}/video/${postID}`, { state: url });
  };

  return (
    <Container>
      <Control>
        <IconButton
          className={isLiked ? 'icon fill' : 'icon'}
          onClick={e => handleLike()}
        >
          <MdFavorite />
        </IconButton>
        <ControlLabel> {postLikes} </ControlLabel>
      </Control>
      <Control>
        <IconButton
          className='icon'
          onClick={gotoPost}
        >
          <AiFillMessage />
        </IconButton>
        <ControlLabel> 0 </ControlLabel>
      </Control>
      <Control>
        <IconButton
          className={bookmarked ? 'icon fill' : 'icon'}
          onClick={handleBookmark}
        >
          <BsBookmarkFill />
        </IconButton>
        <ControlLabel>{postbookmark}</ControlLabel>
      </Control>
      <Control>
        <IconButton
          className='icon'
          onClick={handleShare}
        >
          <IoIosShareAlt />
        </IconButton>
        <ControlLabel>{shares.length}</ControlLabel>
      </Control>
    </Container>
  );
};

export default VideoControls;
