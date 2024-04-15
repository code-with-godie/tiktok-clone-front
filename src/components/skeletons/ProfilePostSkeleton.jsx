import { Skeleton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppContext';

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
const ProfilePostSkeleton = () => {
    const { darkMode } = useAppContext();
    const COUNTER = 10;
    return (
        <Container>
            {Array(COUNTER).fill(
                <Skeleton
                    sx={{
                        bgcolor: `${darkMode && 'white'}`,
                    }}
                    animation='wave'
                    variant='rounded'
                    height={'100%'}
                />
            )}
        </Container>
    );
};

export default ProfilePostSkeleton;
