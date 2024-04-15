import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import styled from 'styled-components';
import { postData } from '../../api/apiCalls';
import { useAppContext } from '../../context/AppContext';
import LoadingAnimation from '../../components/loading/LoadingAnimation';
const Container = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 2rem;
`;
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;
const InputContainer = styled.div`
    background: #f1f1f2;
    padding: 0.5rem;
    border: 1px solid #dbdbdb;
    display: flex;
    align-items: center;
    .icon {
        color: gray;
        font-size: 1.3rem;
    }
`;
const InputControl = styled.input`
    border: none;
    outline: none;
    background: transparent;
    padding: 0.5rem;
    font-size: 1rem;
    flex: 1;
    font-weight: 100;
`;
const CaptionContainer = styled.div`
    display: flex;
    display: flex;
    justify-content: space-between;
`;
const Description = styled.p`
    font-weight: 600;
    color: #000000d4;
    :hover {
        text-decoration: underline;
    }
`;
const ButtonContainer = styled(InputContainer)`
    padding: 0;
    display: flex;
`;
const Button = styled.button`
    flex: 1;
    padding: 1rem;
    font-size: 1rem;
    text-transform: capitalize;
    font-weight: 500;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    :disabled {
        color: gray;
        cursor: not-allowed;
    }
`;

const ForgetPassword = styled(Description)`
    padding: 1rem 0;
    cursor: pointer;
`;
const LoginEmailAndPassWord = () => {
    const [user, setUser] = useState({ email: '', password: '' });
    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const { openToast, login } = useAppContext();
    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await postData('/users/auth/login', user);
            if (res.success) {
                const { token, user } = res;
                login({ user, token });
            }
        } catch (error) {
            const messege =
                error?.response?.data?.message || 'Something went wrong';
            openToast(messege);
        } finally {
            setLoading(false);
        }
    };
    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        if (user.email && user.password.length >= 8) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [user]);
    return (
        <Container onSubmit={handleSubmit}>
            <InputWrapper>
                <CaptionContainer>
                    <Description>Email or username</Description>
                    <Description>login with phone</Description>
                </CaptionContainer>
                <InputContainer>
                    <InputControl
                        type='text'
                        value={user.email}
                        onChange={handleChange}
                        name='email'
                        placeholder='Email or username'
                    />
                </InputContainer>
            </InputWrapper>
            <InputContainer>
                <InputControl
                    type='password'
                    value={user.password}
                    onChange={handleChange}
                    name='password'
                    placeholder='Password'
                />
                <FaEye className='icon' />
            </InputContainer>
            <ForgetPassword>Forget password?</ForgetPassword>
            <ButtonContainer>
                <Button disabled={disabled}>
                    {' '}
                    {loading ? <LoadingAnimation /> : 'log in'}{' '}
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default LoginEmailAndPassWord;
