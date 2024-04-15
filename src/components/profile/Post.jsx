import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { CiPause1, CiPlay1 } from 'react-icons/ci';
import { useAppContext } from '../../context/AppContext';
import { MdFavorite } from 'react-icons/md';
const PostContainer = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    position: relative;
`;
const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 100%;
`;
const Overlay = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    color: white;
    .icon {
        color: white;
    }
    .fill {
        color: #fe496c;
    }
`;
const Caption = styled.p`
    padding: 0.5rem;
    font-family: 'Poppins', sans-serif;
    color: #696969d0;
`;
const Likes = styled(Caption)`
    color: #ffffff;
    flex: 1;
`;
const Post = ({ url, caption, likes }) => {
    const { user } = useAppContext();
    const [paused, setPaused] = useState(true);
    const [postLikes, setPostLikes] = useState(likes?.length);
    const [liked, setLiked] = useState(likes?.includes(user?._id));
    const videoRef = useRef(null);
    const playBtnRef = useRef(null);
    const handlePlayAndPause = () => {
        setPaused(prev => !prev);
    };
    // const handleMuteAndUnmute = () => {
    //     setMuted(prev => !prev);
    // };
    const togglePlay = () => {
        videoRef.current?.paused
            ? videoRef.current.play()
            : videoRef.current.pause();
    };
    useEffect(() => {
        playBtnRef.current?.addEventListener('click', togglePlay);
        videoRef.current?.addEventListener('mouseenter', togglePlay);
        videoRef.current?.addEventListener('mouseleave', togglePlay);
        videoRef.current?.addEventListener('play', handlePlayAndPause);
        videoRef.current?.addEventListener('pause', handlePlayAndPause);
        return () => {
            videoRef.current?.removeEventListener('mouseleave', togglePlay);
            videoRef.current?.removeEventListener('mouseEnter', togglePlay);
            playBtnRef.current?.removeEventListener('click', togglePlay);
            videoRef.current?.removeEventListener('play', handlePlayAndPause);
            videoRef.current?.removeEventListener('pause', handlePlayAndPause);
        };
    }, [videoRef]);
    return (
        <PostContainer>
            <Video
                src={url?.postUrl}
                ref={videoRef}
                loop
            />
            <Caption>
                {' '}
                {caption?.length > 25
                    ? `${caption?.substring(0, 25)}...`
                    : caption}{' '}
            </Caption>
            <Overlay>
                <IconButton
                    ref={playBtnRef}
                    className='icon'
                >
                    {' '}
                    {paused ? <CiPlay1 /> : <CiPause1 />}{' '}
                </IconButton>
                <Likes> {postLikes} </Likes>
                <IconButton className='icon'>
                    {<MdFavorite className={liked ? 'icon fill' : 'fill'} />}
                </IconButton>
            </Overlay>
        </PostContainer>
    );
};

export default Post;
