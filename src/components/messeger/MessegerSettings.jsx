import { Close } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Button from '../../components/styled/Button'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius:.5rem;
    width: 100%;
    max-width: 700px;
    height: 400px;
`
const Header = styled.div`
display: flex;
align-items: center;
padding:1rem;
gap:.5rem;
border-bottom: 1px solid #F1F1F2;
.icon{
    color: black;
    font-size: 1.7rem;
}
`
const Body = styled.div`
display: flex;
flex-direction: column;
gap:.5rem;
padding:.5rem;
flex: 1;
`
const Footer = styled.div`
display: flex;
justify-content: flex-end;
padding:1rem;
border-top: 1px solid #F1F1F2;
gap: 1rem;
padding-right: 2rem;
`
const Title = styled.h2`
flex: 1;
`
const MessegerSettings = ({close}) => {
  return (
    <Container>
        <Header>
            <Title>Message Settings</Title>
            <IconButton className='icon' onClick={ e => close(false)} > <Close/> </IconButton>
        </Header>
        <Body>

        </Body>
        <Footer>
            <Button border='1px solid #dedede' large >Cancel</Button>
            <Button border='1px solid #dedede' large >Save</Button>
        </Footer>

    </Container>
  )
}

export default MessegerSettings