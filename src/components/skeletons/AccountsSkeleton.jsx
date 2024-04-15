import { Skeleton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppContext';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex: 1;
    gap: 0.5rem;
    padding: 0.5rem;
`;
const Container = styled.div`
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
    align-items: center;
`;
const DescriptionContainer = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
    }
`;
const AccountsSkeleton = () => {
    const { darkMode } = useAppContext();
    const COUNTER = 5;
    return (
        <Wrapper>
            {Array(COUNTER).fill(
                <Container>
                    <Skeleton
                        sx={{
                            bgcolor: `${darkMode && 'white'}`,
                        }}
                        variant='circular'
                        width={50}
                        height={50}
                    />
                    <DescriptionContainer>
                        <Skeleton
                            variant='rectangular'
                            height={20}
                        />
                        <Skeleton
                            variant='rectangular'
                            height={20}
                        />
                    </DescriptionContainer>
                </Container>
            )}
        </Wrapper>
    );
};

export default AccountsSkeleton;
