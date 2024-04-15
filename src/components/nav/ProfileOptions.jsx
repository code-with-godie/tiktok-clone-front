import {
  Bookmark,
  DarkModeOutlined,
  HelpCenter,
  Keyboard,
  Logout,
  PersonOutline,
  Settings,
} from '@mui/icons-material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppContext';
import { Switch } from '@mui/material';

const Container = styled.div`
  position: absolute;
  box-shadow: 0 0 5px 2px #e4e2e253;
  top: 60px;
  background: ${props => props.theme.bg_primary};
  right: 5px;
  width: 100vw;
  max-width: 250px;
  z-index: 1000;
  /* padding: 0.5rem; */
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 0.5rem;
  color: ${props => props.theme.text_primary};
  gap: 0.5rem;
  cursor: pointer;
  :hover {
    background-color: #d0cdcd2e;
    /* color: ${props => props.theme.bg_primary}; */
  }
`;
const Options = styled.p`
  font-size: 1rem;

  /* color: #000000ef; */
  padding: 0.5rem;
`;
const ModeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const ProfileOptions = ({ open, showLogoutModel }) => {
  const navigate = useNavigate();
  const { user, darkMode, updateDarkmode } = useAppContext();
  const gotoProfileFavourites = () => {
    navigate(`/profile/@${user?.username}`, {
      state: { userID: user?._id, slug: 'favourite' },
    });
    close();
  };
  const gotoProfile = () => {
    close();
    navigate(`/profile/@${user?.username}`, {
      state: { userID: user?._id },
    });
  };
  const close = () => {
    open(false);
  };
  const gotoSettings = () => {
    close();
    console.log('dark mode');
  };
  const handleDarkMode = () => {
    // close();
    updateDarkmode();
  };
  const logout = () => {
    close();
    showLogoutModel(true);
  };
  return (
    <Container>
      <OptionsContainer onClick={gotoProfile}>
        <PersonOutline />
        <Options>View profile</Options>
      </OptionsContainer>
      <OptionsContainer onClick={gotoProfileFavourites}>
        <Bookmark />
        <Options>Favourites</Options>
      </OptionsContainer>
      <OptionsContainer onClick={gotoSettings}>
        <Settings />
        <Options>Settings</Options>
      </OptionsContainer>
      <OptionsContainer>
        <HelpCenter />
        <Options>Feedback and help</Options>
      </OptionsContainer>
      <OptionsContainer>
        <Keyboard />
        <Options>Keyboard shortcuts</Options>
      </OptionsContainer>
      <OptionsContainer>
        <DarkModeOutlined />
        <ModeContainer>
          <Options>Dark mode</Options>
          <Switch
            checked={darkMode}
            onChange={handleDarkMode}
          />
        </ModeContainer>
      </OptionsContainer>
      <OptionsContainer onClick={logout}>
        <Logout />
        <Options>Logout</Options>
      </OptionsContainer>
    </Container>
  );
};

export default ProfileOptions;
