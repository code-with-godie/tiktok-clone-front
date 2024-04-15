import React from 'react';
import styled from 'styled-components';
const Container = styled.button`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  border: none;
  background: ${props => props.bg || 'transparent'};
  outline: none;
  border: ${props => props.border};
  border-left: ${props => props.borderLeft};
  border-right: ${props => props.borderRight};
  border-radius: ${props => props.rounded};
  height: 35px;
  color: ${props => props.color || '#000000b7'};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  &.large {
    padding: 0.5rem 2rem;
  }
  &.small {
    padding: 0.3rem;
  }
`;
const Button = ({
  children,
  rounded,
  disabled,
  border,
  borderRight,
  borderLeft,
  bg,
  color,
  handleclick,
  large,
  small,
}) => {
  return (
    <Container
      border={border}
      bg={bg}
      rounded={rounded}
      borderLeft={borderLeft}
      borderRight={borderRight}
      color={color}
      disabled={disabled}
      onClick={handleclick}
      className={`${large && 'large'} ${small && 'small'}  `}
    >
      {children}
    </Container>
  );
};

export default Button;
