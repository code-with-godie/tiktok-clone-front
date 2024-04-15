import React from 'react';
import Model from '../../components/models/Model';
import styled from 'styled-components';
import Button from '../styled/Button';
import { useAppContext } from '../../context/AppContext';
const Container = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: ${props => props.theme.bg_primary};
`;
const Title = styled.h1`
  font-size: 1.5rem;
  text-transform: capitalize;
  text-align: center;
  color: ${props => props.theme.text_primary};
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;
const LogoutModel = ({ showModel }) => {
  const { darkMode, logout: mainLogout } = useAppContext();
  const logout = () => {
    mainLogout();
    showModel(false);
  };
  return (
    <Model
      center
      bg='rgba(0, 0, 0, 0.383)'
    >
      <Container>
        <Title>are you sure you want to logout?</Title>
        <ButtonWrapper>
          <Button
            handleclick={() => showModel(false)}
            border='1px solid #d4d4d5'
            color={
              darkMode
                ? 'white'
                : `${props => props.theme.gray_semi_transparent}`
            }
          >
            cancel
          </Button>
          <Button
            handleclick={logout}
            border='1px solid #FE496C'
            color='#FE496C'
          >
            logout
          </Button>
        </ButtonWrapper>
      </Container>
    </Model>
  );
};

export default LogoutModel;
