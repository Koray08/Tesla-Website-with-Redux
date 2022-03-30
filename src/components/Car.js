import React from 'react'
import styled from 'styled-components'
import ButttonSecondary from '../Login/ButtonSecondary'
import ButttonPrimary from '../Login/ButtonPrimary'

function Car({imgSrc, model, testDrive}) {
  return (
    <CarMenu>
        <Image>
            <img src={imgSrc} alt={model} />
        </Image>
        <Model>{model}</Model>
        <Actions>
          <ButttonPrimary name='order'/>
          {testDrive && <ButttonSecondary name='test drive'/>}
        </Actions>
        <Info>
          <span>Request a Call</span> to speak with a product specialist, value
        your trade-in or apply for leasing
        </Info>
    </CarMenu>
  )
}

export default Car

const CarMenu = styled.div`
  display: grid;
  place-items: center;
  margin-top: 20px;
  border-top: 1px solid #d0d1d2;
`

const Image = styled.div`
  img {
    object-fit: contain;
    height: 500px;
  }
`

const Model = styled.h2`
  font-weight: 500;
  font-size: xx-large;
  margin-top: -180px;
  text-transform: capitalize;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: -40px;

  button {
    width: 230px;
    margin-bottom: 30px;
  }
`
const Info = styled.div`
  max-width: 350px;
  text-align: center;
  font-size: smaller;
  line-height: 1.5s;
  font-weight: 500;
  color: #393c41;

  span {
    color: #3e6be2;

  }
`

