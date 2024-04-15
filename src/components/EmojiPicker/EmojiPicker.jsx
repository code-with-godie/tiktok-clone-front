import React from 'react';
import styled from 'styled-components';
import Picker from 'emoji-picker-react';
import { useAppContext } from '../../context/AppContext';
const Container = styled.div`
    background-color: #ffffff;
    box-shadow: 0 0 5px 2px #fdfdfd;
    position: absolute;
    width: 100vw;
    height: 100vh;
    max-width: 300px;
    max-height: 0px;
    border-radius: 0.5rem;
    z-index: 100;
    bottom: 80px;
    display: none;
    right: 100px;
    transition: 200ms;
    overflow: auto;
    ::-webkit-scrollbar {
        height: 5px;
    }
    &.show {
        max-height: 350px;
        display: block;
    }
    .picker {
        width: 100%;
        height: 100%;
    }
`;
const EmojiPicker = ({ showPicker, handleEmoji }) => {
    const { darkMode } = useAppContext();

    return (
        <Container className={`${showPicker && 'show'}`}>
            <Picker
                onEmojiClick={handleEmoji}
                className='picker'
                theme={darkMode ? 'dark' : 'light'}
                searchDisabled
            />
        </Container>
    );
};

export default EmojiPicker;
