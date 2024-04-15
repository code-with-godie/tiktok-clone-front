import { Skeleton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppContext';

const Wrapper = styled.div`
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
`;
const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;
const DescriptionContainer = styled.div`
    display: flex;
    flex: 1;
`;
const ProfileHeaderSkeleton = () => {
    const { darkMode } = useAppContext();
    return (
        <Wrapper>
            <ProfileContainer>
                <Skeleton
                    sx={{
                        bgcolor: `${darkMode && 'white'}`,
                    }}
                    variant='circular'
                    width={'70px'}
                    height={'70px'}
                />
                <DescriptionContainer>
                    <Skeleton
                        sx={{
                            bgcolor: `${darkMode && 'white'}`,
                        }}
                        variant='rectangular'
                        width={'100%'}
                        height={100}
                    />
                </DescriptionContainer>
            </ProfileContainer>
            <DescriptionContainer>
                <Skeleton
                    sx={{
                        bgcolor: `${darkMode && 'white'}`,
                    }}
                    variant='rectangular'
                    width={'100%'}
                    height={150}
                />
            </DescriptionContainer>
        </Wrapper>
    );
};

export default ProfileHeaderSkeleton;
