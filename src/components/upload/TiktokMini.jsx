import React from 'react';
import styled from 'styled-components';
import topNavUrl from '../../assets/topNav.png';
import bottomNavUrl from '../../assets/nav.png';
import iconsNavUrl from '../../assets/icons.png';
import { Avatar } from '@mui/material';
import { useAppContext } from '../../context/AppContext';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;
const TopContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const TopNav = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;
const Icons = styled(TopNav)`
    height: auto;
    width: auto;
`;
const VideoContainer = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Video = styled.video`
    max-height: 100px;
    width: 130px;
    @media screen and (min-width: 768px) {
        max-height: 270px;
        width: 270px;
    }
    object-fit: cover;
`;
const IconContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    right: 0;
    z-index: 2000;
    color: white;
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem;
`;
const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
const DescriptoionContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.3rem;
`;
const BottomContainer = styled.div``;
const TiktokMini = ({ url }) => {
    const {
        user: {
            profilePic: { photo: profile },
        },
        user
    } = useAppContext()
    return (
        <Container>
            <TopContainer>
                <TopNav src={topNavUrl} />
            </TopContainer>
            <VideoContainer>
                <Video src={url} />
                <IconContainer>
                    <DescriptoionContainer></DescriptoionContainer>
                    <IconWrapper>
                        <Avatar src={profile} />
                        <Avatar src={profile} />
                    </IconWrapper>
                </IconContainer>
            </VideoContainer>
            <BottomContainer>
                <TopNav src={bottomNavUrl} />
            </BottomContainer>
        </Container>
    );
};

export default TiktokMini;
