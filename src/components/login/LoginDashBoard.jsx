import { QrCode } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import google from '../../assets/google.png';
import twitter from '../../assets/twitter.png';
import apple from '../../assets/apple.png';

const InputContainer = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  align-items: center;
`;
const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  border: 1px solid #f1f1f2;
  max-width: 350px;
  padding: 0.5rem;
  cursor: pointer;
`;
const Description = styled.p`
  flex: 1;
  text-align: center;
`;
const Logo = styled.img`
  width: ${props => (props.large ? '50px' : '30px')};
  height: auto;
  object-fit: contain;
`;

const LoginDashBoard = ({ loginWithGoogle, setIndex }) => {
  return (
    <InputContainer>
      <Input>
        {' '}
        <QrCode /> <Description>Use QR code</Description>{' '}
      </Input>
      <Input onClick={e => setIndex(2)}>
        {' '}
        <QrCode /> <Description>use phone/email/username</Description>{' '}
      </Input>
      <Input>
        {' '}
        <QrCode /> <Description>Continue with Facebook</Description>{' '}
      </Input>
      <Input onClick={loginWithGoogle}>
        {' '}
        <Logo
          src={google}
          large
        />{' '}
        <Description>Continue with Google</Description>{' '}
      </Input>
      <Input>
        {' '}
        <Logo src={twitter} /> <Description>Continue with Twitter</Description>{' '}
      </Input>
      <Input>
        {' '}
        <Logo src={apple} /> <Description>Continue with Apple</Description>{' '}
      </Input>
      <Input>
        {' '}
        <QrCode /> <Description>Use QR code</Description>{' '}
      </Input>
    </InputContainer>
  );
};

export default LoginDashBoard;
