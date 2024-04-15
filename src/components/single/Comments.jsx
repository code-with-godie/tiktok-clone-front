import React, { useState } from 'react';
import styled from 'styled-components';
import Comment from './Comment';

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media screen and (min-width: 768px) {
        overflow: auto;
    }
`;
const Comments = () => {
    const [comments, setComments] = useState([1, 2, 3, 4, 5]);
    return (
        <Container>
            {comments.map(comment => (
                <Comment />
            ))}
        </Container>
    );
};

export default Comments;
