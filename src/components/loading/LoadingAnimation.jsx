import React from 'react'
import loading from '../../assets/loading.gif'
import styled from 'styled-components'
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding:.5rem;
`
const Container = styled.div`
    width: 1rem;
    &.large{
      width: 3rem;
    }
`
const Image = styled.img`
    width: 100%;
    height: auto;

`
const LoadingAnimation = ({large}) => {
  return (
    <Wrapper>
    <Container className={large && 'large'} >
        <Image src={loading}/>
    </Container>
    </Wrapper>
  )
}

export default LoadingAnimation