import React from 'react';
import styled from 'styled-components';
import ReactDom from 'react-dom';
import { IconButton } from '@mui/material';
const Wrapper = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 666;
  background: ${props => props.bg};
  padding: 1rem;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: ${props => props.mh || '300px'};
  max-width: ${props => props.mW || '500px'};
  background-color: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 1rem;
  transition: all 500ms;
`;
const CloseButton = styled.div`
  display: flex;
  align-items: center;
  .icon {
    font-size: 1.5rem;
  }
`;
const Model = ({ children, bg }) => {
  return ReactDom.createPortal(
    <Wrapper bg={bg}>{children}</Wrapper>,
    document.getElementById('model')
  );
};

export default Model;
