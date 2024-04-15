import { Switch } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapperr = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
const Top = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;
const Title = styled.h3`
    font-weight: 500;
    text-transform: capitalize;
`;
const PostControls = () => {
    const [schedule, setSchedule] = useState(false);
    const [content, setContent] = useState(false);
    const [copyright, setcopyRight] = useState(false);
    return (
        <Wrapperr>
            <Container>
                <Top>
                    <Title>Schedule Video</Title>
                    <Switch
                        value={content}
                        onChange={e => setSchedule(e.target.checked)}
                        size='medium'
                        color={schedule ? 'error' : 'default'}
                    />
                </Top>
            </Container>
            <Container>
                <Top>
                    <Title>disclose post content</Title>
                    <Switch
                        value={content}
                        onChange={e => setContent(e.target.checked)}
                        size='medium'
                        color={content ? 'error' : 'default'}
                    />
                </Top>
            </Container>
            <Container>
                <Top>
                    <Title>run a copyright check</Title>
                    <Switch
                        onChange={e => setcopyRight(e.target.checked)}
                        color={copyright ? 'error' : 'default'}
                        size='medium'
                    />
                </Top>
            </Container>
        </Wrapperr>
    );
};

export default PostControls;
