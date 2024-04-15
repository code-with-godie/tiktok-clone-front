import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppContext';

const Container = styled.main`
    height: 100vh;
`;
const Protected = () => {
    const { user } = useAppContext();

    return <Container>{user ? <Outlet /> : <Navigate to='/' />}</Container>;
};

export default Protected;
