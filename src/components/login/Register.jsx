import React from 'react';
import styled from 'styled-components';
import google from '../../assets/google.png';
import twitter from '../../assets/twitter.png';
import { IconButton } from '@mui/material';
import { PersonOutlineOutlined } from '@mui/icons-material';

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
    .icon {
        font-size: 1.7rem;
    }
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

const Register = ({ loginWithGoogle, setIndex }) => {
    return (
        <InputContainer>
            <Input onClick={e => setIndex(2)}>
                {' '}
                <IconButton>
                    <PersonOutlineOutlined className='icon' />
                </IconButton>
                <Description>use phone or email</Description>{' '}
            </Input>
            <Input>
                {' '}
                <Logo
                    src={google}
                    large
                />{' '}
                <Description>Continue with Facebook</Description>{' '}
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
                <Logo src={twitter} />{' '}
                <Description>Continue with Twitter</Description>{' '}
            </Input>
        </InputContainer>
    );
};

export default Register;
