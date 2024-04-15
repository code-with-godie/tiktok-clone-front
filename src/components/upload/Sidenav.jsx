import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../styled/Button';
import { Link } from 'react-router-dom';
import {
    BarChart,
    HomeOutlined,
    KeyboardArrowDown,
    KeyboardArrowUp,
    StartSharp,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
const Container = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
        border-right: 1px solid #f1f1f2;
        display: flex;
        overflow: auto;
        flex-direction: column;
        flex: 1;
    }
`;
const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-bottom: 1px solid #f1f1f2;
`;
const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    flex: 1;
    border-bottom: 1px solid #f1f1f2;
    gap: 0.7rem;
    .link {
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
        text-transform: capitalize;
        font-weight: 400;
        font-size: 1.2rem;
        gap: 0.5rem;
        padding: 0.5rem;
        .icon {
            font-size: 1.7rem;
        }
    }
    .link.small {
        font-size: 1rem;
    }
    .link.bold {
        font-weight: 600;
        padding-top: 2rem;
        font-size: 0.9rem;
    }
`;
const AnalyticContainer = styled.div`
    flex: 1;
    border-bottom: 1px solid #f1f1f2;
    .icon {
        font-size: 1.7rem;
        cursor: pointer;
        color: ${props => props.theme.text_gray};
    }
`;
const AnalyticLinkHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const AnalyticLinkHeaderContainer = styled.div`
    flex: 1;
    align-items: center;
    display: flex;
    gap: 0.5rem;
`;
const AnalyticsTitle = styled.h3`
    text-transform: capitalize;
    /* color: #000000ea; */
    font-weight: 400;
`;
const AnalyticLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem 0.5rem 0.5rem 2rem;
    @media screen and (min-width: 768px) {
        padding: 0.5rem 0.5rem 0.5rem 4rem;
    }
`;
const FooterDescription = styled.p`
    font-size: 0.9rem;
    color: gray;
`;
const Analyatics = () => {
    const [down, setDown] = useState(true);
    return (
        <AnalyticContainer>
            <AnalyticLinkHeaderWrapper>
                <AnalyticLinkHeaderContainer>
                    <BarChart />
                    <AnalyticsTitle>analytics</AnalyticsTitle>
                </AnalyticLinkHeaderContainer>
                {down ? (
                    <IconButton onClick={e => setDown(false)}>
                        <KeyboardArrowDown className='icon' />
                    </IconButton>
                ) : (
                    <IconButton onClick={e => setDown(true)}>
                        <KeyboardArrowUp className='icon' />
                    </IconButton>
                )}
            </AnalyticLinkHeaderWrapper>
            {!down && (
                <AnalyticLinkContainer>
                    <Link
                        to='/'
                        className='link small'
                    >
                        Key metrics
                    </Link>{' '}
                    <Link
                        to='/'
                        className='link small'
                    >
                        Content
                    </Link>{' '}
                    <Link
                        to='/'
                        className='link small'
                    >
                        Followers
                    </Link>
                </AnalyticLinkContainer>
            )}
            <Link className='link'>
                <HomeOutlined className='icon' />
                feedback
            </Link>
            <Link
                to='/'
                className='link bold'
            >
                back to tiktok
            </Link>
        </AnalyticContainer>
    );
};
const Sidenav = ({ upload }) => {
    return (
        <Container>
            <UploadContainer>
                <Button
                    rounded='.2rem'
                    large
                    bg={upload ? '#FE496C' : '#d9d9d9'}
                    color={upload ? 'white' : '#9c9c9c'}
                >
                    upload
                </Button>
            </UploadContainer>
            <LinkContainer>
                <Link
                    to='/upload'
                    className='link'
                >
                    <HomeOutlined className='icon' />
                    Home
                </Link>
                <Link
                    to='/posts'
                    className='link'
                >
                    <StartSharp className='icon' />
                    posts
                </Link>
                <Analyatics />
                <FooterDescription>Teams of Service</FooterDescription>
                <FooterDescription>Privacy policy</FooterDescription>
            </LinkContainer>
        </Container>
    );
};

export default Sidenav;
