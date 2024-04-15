import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import Button from '../styled/Button';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-bottom: 1px solid #f1f1f2;
`;
const Logo = styled.img`
  max-width: 100px;
  height: auto;
`;
const Topnav = () => {
  const { darkMode } = useAppContext();
  return (
    <Container>
      <Link to='/'>
        <Logo
          src={darkMode ? logo3 : logo}
          alt='tiktok logo'
        />
      </Link>
      <Button
        color='white'
        bg='#0b0b0b'
        borderRight='2px solid #FE496C'
        borderLeft='2px solid #25f4ee'
        rounded='.3rem'
      >
        creator center
      </Button>
      <Button
        color='white'
        bg='#FE496C'
        rounded='.3rem'
        small
      >
        beta
      </Button>
    </Container>
  );
};

export default Topnav;
