import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  width: 100%;
`;
const Description = styled.p`
  display: none;
  font-weight: 200;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  @media screen and (min-width: 1200px) {
    display: inline;
    font-size: 0.9rem;
    color: #c6c6c6;
    text-transform: capitalize;
  }
`;
const CopyRight = styled.p`
  display: inline;
`;
const NavFooter = () => {
  return (
    <Container>
      <Description>about</Description>
      <Description>newsroom</Description>
      <Description>contact</Description>
      <Description>career</Description>
      <Description>tiktok for good</Description>
      <Description>advertise</Description>
      <Description>developers</Description>
      <Description>transparency</Description>
      <Description>tiktok reward</Description>
      <Description>tiktok embed</Description>
      <Description>help</Description>
      <Description>safety</Description>
      <Description>terms</Description>
      <Description>privacy</Description>
      <Description>creator portal</Description>
      <Description>community guideline</Description>
      <Description>&copy; {new Date().getFullYear()} TIKTOK-godie</Description>
    </Container>
  );
};

export default NavFooter;
