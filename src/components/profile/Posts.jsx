import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Post from './Post';
import { PersonOutlineOutlined } from '@mui/icons-material';
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: 250px;
    gap: 0.5rem;
    padding: 0.5rem;
    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-auto-rows: 300px;
    }
`;
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
const VideoWrapper = styled.div`
    background-color: black;
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
`;
const Caption = styled.p`
    padding: 0.5rem;
    font-family: 'Poppins', sans-serif;
    color: #696969d0;
`;
const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem;
    .icon {
        font-size: 5rem;
        color: #212121;
    }
`;
const DescriptionTitle = styled.p`
    font-weight: 100;
    font-size: 0.8rem;
    color: gray;
    &.bold {
        font-weight: 600;
        font-size: 1.2rem;
        color: black;
    }
`;
const Posts = ({ videos, slug }) => {
    if (videos.length === 0) {
        return (
            <Description>
                <PersonOutlineOutlined className='icon' />
                {slug === 'videos' && (
                    <>
                        <DescriptionTitle className='bold'>
                            No Videos yet
                        </DescriptionTitle>
                        <DescriptionTitle>
                            your video will appear here
                        </DescriptionTitle>
                    </>
                )}
                {slug === 'favourite' && (
                    <>
                        <DescriptionTitle className='bold'>
                            no favourite videos
                        </DescriptionTitle>
                        <DescriptionTitle>
                            favourite video will appear here
                        </DescriptionTitle>
                    </>
                )}
                {slug === 'liked' && (
                    <>
                        <DescriptionTitle className='bold'>
                            no liked videos
                        </DescriptionTitle>
                        <DescriptionTitle>
                            if you like a video it will appear here
                        </DescriptionTitle>
                    </>
                )}
            </Description>
        );
    }
    return (
        <Container>
            {videos?.map(post => (
                <Post
                    key={post._id}
                    {...post}
                />
            ))}
        </Container>
    );
};

export default Posts;
