import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0.5rem;
    width: 100%;
    position: absolute;
    top: 2rem;
    z-index: 100000000000;
    display: flex;
    justify-content: center;
`;
const Container = styled.p`
    padding: 0.5rem;
    width: 90%;
    max-width: 400px;
    text-align: center;
    border-radius: 0.3rem;
    background-color: ${props => (props.success ? 'green' : 'tomato')};
    color: #000000da;
    color: white;
    font-family: 'Poppins', sans-serif;
`;
const Toast = ({ messege, handleToast, success }) => {
    useEffect(() => {
        setTimeout(handleToast, 2000);
    }, []);
    return ReactDom.createPortal(
        <Wrapper>
            <Container success={success}> {messege} </Container>
        </Wrapper>,
        document.getElementById('model')
    );
};

export default Toast;
