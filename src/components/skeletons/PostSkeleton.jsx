import React from 'react';
import { Skeleton } from '@mui/material';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppContext';
const Wrapper = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow: auto;
`;
const Container = styled.div`
    padding: 0.5rem;
    display: flex;
    gap: 0.5rem;
    .profile {
        width: 50px;
        height: 50px;
    }
    @media screen and (min-width: 768px) {
        .profile {
            width: 70px;
            height: 70px;
        }
    }
`;
const PostContainer = styled.div`
    width: 100%;
    max-width: 350px;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    .description {
        height: 50px;
    }
`;

const PostWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;
    .post {
        flex: 1;
        height: 400px;
    }
    .controls {
        width: 40px;
        height: 300px;
    }
    @media screen and (min-width: 768px) {
        .post {
            height: 500px;
        }
        .controls {
            width: 50px;
            height: 350px;
        }
    }
`;
const PostSkeleton = ({ counter }) => {
    const { darkMode } = useAppContext();
    return (
        <Wrapper>
            {Array(counter).fill(
                <Container>
                    <Skeleton
                        sx={{
                            bgcolor: `${darkMode && 'white'}`,
                        }}
                        className='profile'
                        variant='circular'
                        animation='wave'
                    />
                    <PostContainer>
                        <Skeleton
                            sx={{
                                bgcolor: `${darkMode && 'white'}`,
                            }}
                            className='description'
                            variant='rectangular'
                            animation='wave'
                        />
                        <PostWrapper>
                            <Skeleton
                                sx={{
                                    bgcolor: `${darkMode && 'white'}`,
                                }}
                                className='post'
                                variant='rounded'
                                animation='wave'
                            />
                            <Skeleton
                                sx={{
                                    bgcolor: `${darkMode && 'white'}`,
                                }}
                                className='controls'
                                variant='rectangular'
                                animation='wave'
                            />
                        </PostWrapper>
                    </PostContainer>
                </Container>
            )}
        </Wrapper>
    );
};

export default PostSkeleton;
