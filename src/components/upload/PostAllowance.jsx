import { Checkbox } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;
const Item = styled.div`
    display: flex;
    gap: 0.2rem;
    align-items: center;
`;
const ItemLablel = styled.p`
    font-size: 1.2rem;
    text-transform: capitalize;
`;
const PostAllowance = () => {
    const [comment, setComment] = useState(false);
    const [duet, setDuet] = useState(false);
    const [stitch, setStitch] = useState(false);
    return (
        <Container>
            <Item>
                <Checkbox
                    value={comment}
                    onChange={e => setComment(e.target.checked)}
                    color={comment ? 'error' : 'default'}
                />
                <ItemLablel>comment</ItemLablel>
            </Item>
            <Item>
                <Checkbox
                    value={duet}
                    onChange={e => setDuet(e.target.checked)}
                    color={duet ? 'error' : 'default'}
                />
                <ItemLablel>duet</ItemLablel>
            </Item>
            <Item>
                <Checkbox
                    value={stitch}
                    onChange={e => setStitch(e.target.checked)}
                    color={stitch ? 'error' : 'default'}
                />
                <ItemLablel>stitch</ItemLablel>
            </Item>
        </Container>
    );
};

export default PostAllowance;
