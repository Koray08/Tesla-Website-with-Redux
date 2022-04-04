import React from 'react'
import styled from '@emotion/styled'

function Error() {
  return (
      <Wrap>
        <Number>404</Number>
        <Heading>Page not found</Heading>
      </Wrap>
  )
}

export default Error

const Wrap = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 13rem;
  line-height: 4rem;
  margin-bottom: 25%;
`
const Number = styled.h1`
  font-size:4rem;
  font-weight: 300;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

const Heading = styled.a`
  font-size: 2rem;
  font-weight: 100;
  margin-left: 1.5rem;
`