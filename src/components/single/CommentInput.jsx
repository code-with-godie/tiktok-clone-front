import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import emoji from '../../assets/emoji.svg';
const Container = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 0.5rem;
    @media screen and (min-width: 768px) {
        position: static;
    }
`;
const InputContainer = styled.form`
    flex: 1;
    padding: 0.8rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background-color: #f1f1f2;
    border-radius: 0.5rem;
`;
const Input = styled.input`
    font-size: 1rem;
    flex: 1;
    outline: none;
    border: none;
    background: transparent;
`;

const Image = styled.img`
    cursor: pointer;
`;
const Description = styled.p`
    font-weight: 600;
    color: #3a3a3a;
    font-size: 1.2rem;
`;
const Button = styled.button`
    font-weight: 500;
    color: #979797;
    cursor: pointer;
    color: #1f1f1f;
    font-size: 1rem;
    background: transparent;
    outline: none;
    border: none;
    :disabled {
        cursor: not-allowed;
        color: #c8c8c8;
    }
`;
const CommentInput = () => {
    const [comment, setComment] = useState('');
    const [disabled, setDisabled] = useState(true);

    const handleSumit = e => {
        e.preventDefault();
        if (!comment) return;
    };

    useEffect(() => {
        if (comment.length > 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [comment]);
    return (
        <Container>
            <InputContainer onSubmit={handleSumit}>
                <Input
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    placeholder='Add comment...'
                />
                <Description>@</Description>
                <Image src={emoji} />
            </InputContainer>
            <Button disabled={disabled}>Post</Button>
        </Container>
    );
};

export default CommentInput;
