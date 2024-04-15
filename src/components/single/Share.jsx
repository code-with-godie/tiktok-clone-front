import { BookmarkOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { AiFillMessage } from 'react-icons/ai';
import source from '../../assets/share.png';
const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;
const IconContainer = styled.div`
    display: flex;
    gap: 1rem;
    .btn {
        background-color: #f1f1f2;
    }
    .icon {
        color: black;
    }
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;
const IconLabel = styled.p``;
const Image = styled.img`
    max-height: 100%;
    width: auto;
    object-fit: contain;
`;
const Share = () => {
    return (
        <Container>
            <IconContainer>
                <IconWrapper>
                    <IconButton className='btn'>
                        <FavoriteBorderOutlined className='icon' />
                    </IconButton>
                    <IconLabel>56</IconLabel>
                </IconWrapper>
                <IconWrapper>
                    <IconButton className='btn'>
                        <BookmarkOutlined className='icon' />
                    </IconButton>
                    <IconLabel>56</IconLabel>
                </IconWrapper>
                <IconWrapper>
                    <IconButton className='btn'>
                        <AiFillMessage className='icon' />
                    </IconButton>
                    <IconLabel>56</IconLabel>
                </IconWrapper>
            </IconContainer>
            <Image src={source} />
        </Container>
    );
};

export default Share;
