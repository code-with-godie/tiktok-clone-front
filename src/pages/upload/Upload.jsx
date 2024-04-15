import React from 'react';
import styled from 'styled-components';
import Create from '../../components/upload/Create';
import Sidenav from '../../components/upload/Sidenav';
import Topnav from '../../components/upload/Topnav';
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
`;
const Upload = () => {
    return (
        <Wrapper>
            <Topnav />
            <Container>
                <Sidenav />
                <Create />
            </Container>
        </Wrapper>
    );
};

export default Upload;
