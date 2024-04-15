import React from 'react';
import styled from 'styled-components';
import Topnav from '../../components/upload/Topnav';
import Sidenav from '../../components/upload/Sidenav';
import Posts from '../../components/upload/Posts';
const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.bg_primary};
    color: ${props => props.theme.text_primary};
`;
const Container = styled.main`
    display: flex;
    flex: 1;
    overflow: auto;
`;
const Mypost = () => {
    return (
        <Wrapper>
            <Topnav />
            <Container>
                <Sidenav />
                <Posts />
            </Container>
        </Wrapper>
    );
};

export default Mypost;
