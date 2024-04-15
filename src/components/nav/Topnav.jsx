import React, { useState } from 'react';
import styled from 'styled-components';
import { Avatar, IconButton, Tooltip } from '@mui/material';
import { Add, MoreVert, Search } from '@mui/icons-material';
import Button from '../styled/Button';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { BsFillSendFill } from 'react-icons/bs';
import { BiMessageAltMinus } from 'react-icons/bi';
import ProfileOptions from './ProfileOptions';
import Notifications from '../notification/Notifications';
import LogoutModel from './LogoutModel';
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem;
  border-bottom: 1px solid #f1f1f2;
  justify-content: space-between;
  color: ${props => props.theme.gray_base};
  @media screen and (min-width: 768px) {
    padding: 0.5rem;
    gap: 1rem;
  }
`;
const LogoContainer = styled.div``;
const SearchContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const ControlContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  @media screen and (min-width: 768px) {
    gap: 1rem;
  }
  .icon {
    font-size: 1.7rem;
    color: ${props => props.theme.gray_base};
  }
  .profile {
    cursor: pointer;
  }
  .link {
    text-decoration: none;
    color: inherit;
  }
  .profile-container {
    position: relative;
  }
`;
const Logo = styled.img`
  max-width: 90px;
  @media screen and (min-width: 768px) {
    max-width: 100px;
  }
  height: auto;
`;
const InputContainer = styled.div`
  flex: 1;
  max-width: 500px;
  background-color: ${props => props.theme.semi_gray};
  display: flex;
  border-radius: 2rem;
  padding: 0.5rem;
  .icon {
    color: #808080ce;
    font-size: 1.8rem;
    font-weight: 300;
    cursor: pointer;
  }
`;
const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  border-right: 1px solid #c8c8c8;
  font-weight: 400;
  color: ${props => props.theme.text_primary};
  font-size: 1rem;
  font-family: 'Poppins', sans-serif !important;
  ::placeholder {
    color: gray;
  }
`;
const Topnav = () => {
  const { user, handleLoginModel, darkMode } = useAppContext();
  const [showProfile, setShowProfile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleUpload = () => {
    if (!user) {
      handleLoginModel();
      return;
    }
    navigate('/upload');
  };
  return (
    <Container>
      <LogoContainer>
        <Link to='/'>
          {darkMode ? <Logo src={logo3} /> : <Logo src={logo2} />}
        </Link>
      </LogoContainer>
      <SearchContainer>
        <InputContainer>
          <Input placeholder='Seach' />
          <Search className='icon' />
        </InputContainer>
      </SearchContainer>
      <ControlContainer>
        <Button
          border='1px solid #d4d4d5'
          color={
            darkMode ? 'white' : `${props => props.theme.gray_semi_transparent}`
          }
          handleclick={handleUpload}
        >
          <Add /> Upload
        </Button>
        {user ? (
          <>
            <Link to='/inbox'>
              <Tooltip
                title='inbox'
                arrow
              >
                <IconButton>
                  <BsFillSendFill className='icon' />
                </IconButton>
              </Tooltip>
            </Link>
            <Tooltip
              title='notifications'
              arrow
            >
              <IconButton onClick={e => setShowNotification(prev => !prev)}>
                <BiMessageAltMinus className='icon' />
              </IconButton>
            </Tooltip>
            <div className='profile-container'>
              <Avatar
                src={user?.profilePic?.photo}
                alt={user?.username}
                className='profile'
                onClick={e => setShowProfile(prev => !prev)}
              />
              {showProfile && (
                <ProfileOptions
                  showLogoutModel={setShowLogout}
                  open={setShowProfile}
                />
              )}
            </div>
          </>
        ) : (
          <>
            <Button
              bg='#FE496C'
              color='white'
              handleclick={handleLoginModel}
            >
              Login in
            </Button>
            <IconButton>
              {' '}
              <MoreVert />{' '}
            </IconButton>
          </>
        )}
      </ControlContainer>
      <Notifications show={showNotification} />
      {showLogout && <LogoutModel showModel={setShowLogout} />}
    </Container>
  );
};

export default Topnav;
