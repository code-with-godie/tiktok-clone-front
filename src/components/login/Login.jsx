import React, { useEffect } from 'react';
import styled from 'styled-components';
import LoginDashBoard from './LoginDashBoard';
import { IconButton } from '@mui/material';
import { Close, KeyboardArrowLeft } from '@mui/icons-material';
import { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import Register from './Register';
import { useGoogleLogin } from '@react-oauth/google';
import { getData, postData } from '../../api/apiCalls';
import LoginEmailAndPassword from './LoginEmailAndPassWord';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    max-width: 450px;
    border-radius: 0.5rem;
    max-height: 90vh;
  }
`;
const CloseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  .icon-btn {
    background: #80808031;
    align-self: flex-end;
  }
  .icon {
    font-size: 1.7rem;
    color: #000000e4;
  }
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  :only-child {
    justify-content: flex-end;
  }
`;
const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #000000d1;
`;
const LinkContainer = styled.div`
  padding: 2rem 0.5rem 0.5rem 0.5rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: center;
  border-top: 1px solid #f1f1f2;
  .link {
    text-decoration: none;
    color: #fe496c;
  }
`;

const Link = styled.p`
  font-weight: 600;
  color: #fe496c;
  display: inline;
  cursor: pointer;
`;
const LinkText = styled.p`
  display: inline;
  font-weight: 200;
  color: #808080ac;
`;
const Login = () => {
  const [title, setTitle] = useState('Login to Tiktok');
  const [description, setDescription] = useState(` Dont have an account?`);
  const [link, setLink] = useState(`Signup`);
  const [index, setIndex] = useState(0);
  const { handleLoginModel, login } = useAppContext();

  const googleLoginSuccess = async res => {
    try {
      const token = res?.access_token;
      const data = await getData(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`
      );
      let user = {
        name: data?.name,
        username: data?.given_name,
        profilePic: data?.picture,
        email: data?.email,
        isVerified: data?.email_verified,
        password: '',
        location: '',
        bio: '',
      };
      console.log(user);
      const newRes = await postData(`/users/auth`, user);
      const { user: tempUser, token: tempToken } = newRes;
      login({ token: tempToken, user: tempUser });
    } catch (error) {
      console.log(error);
    }
  };
  const googleLoginFailure = res => {
    console.log('login failure', res);
  };
  const loginWithGoogle = useGoogleLogin({
    onError: res => googleLoginFailure(res),
    onSuccess: res => googleLoginSuccess(res),
  });

  useEffect(() => {
    switch (index) {
      case 0:
        setTitle('Login into Tiktok');
        setDescription('Dont have an account?');
        setLink('Signup');
        break;
      case 1:
        setTitle('Signup to Tiktok');
        setDescription('Already have an account?');
        setLink('Login');
        break;
      default:
        break;
    }
  }, [index]);

  return (
    <Container>
      <CloseContainer>
        <IconContainer>
          {index !== 0 && (
            <IconButton
              className='icon-btn'
              onClick={e => setIndex(prev => (prev === 2 ? 1 : 0))}
            >
              <KeyboardArrowLeft className='icon' />
            </IconButton>
          )}
          <IconButton
            className='icon-btn'
            onClick={handleLoginModel}
          >
            <Close className='icon' />
          </IconButton>
        </IconContainer>
        <Title>{title}</Title>
      </CloseContainer>
      {index === 0 && (
        <LoginDashBoard
          setIndex={setIndex}
          loginWithGoogle={loginWithGoogle}
        />
      )}
      {index === 1 && (
        <Register
          setIndex={setIndex}
          loginWithGoogle={loginWithGoogle}
        />
      )}
      {index === 2 && <LoginEmailAndPassword />}
      {/* {index === 1 && <LoginDashBoard  />}
        {index === 2 && <LoginEmailAndPassword />} */}
      <LinkContainer>
        <LinkText>
          {description}{' '}
          <Link onClick={e => setIndex(prev => (prev === 0 ? 1 : 0))}>
            {' '}
            {link}{' '}
          </Link>
        </LinkText>
      </LinkContainer>
    </Container>
  );
};

export default Login;
