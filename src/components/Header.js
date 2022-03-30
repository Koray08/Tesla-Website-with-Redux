import React, {useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import {Link} from 'react-router-dom'

function Header() {
  const [navStatus, setNavStatus] = useState(false)
  return (

    <Container>
        <Link to="/">
          <img src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'alt="logo"/>
        </Link>

        <Menu>
            <Link to='/models'>Model S</Link>
            <Link to='/model3'>Model 3</Link>
            <Link to='/modelx'>Model X</Link>
            <Link to='/modely'>Model Y</Link>
            <Link to='/solarroof'>Solar Roof</Link>
            <Link to='/solarpanels'>Solar Panels</Link>
        </Menu>

        <RightMenu>
            <a href="#" >Shop</a>
            <Link to="/login">Account</Link>
            <a href="#" onClick={() => setNavStatus(true)}>Menu</a>
        </RightMenu>
        <Nav show={navStatus}>
          <CloseWrapper>
            <X onClick={() => setNavStatus(false)}/>
          </CloseWrapper>
          <BoxMenu>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade-in</a></li>
          <li><a href="#">Test Drive</a></li>
          <li><a href="#">Cybertruck</a></li>
          <li><a href="#">Roadster</a></li>
          <li><a href="#">Semi</a></li>
          <li><a href="#">Charging</a></li>
          <li><a href="#">Powerwall</a></li>
          <li><a href="#">Commercial Energy</a></li>
          <li><a href="#">Utilities</a></li>
          <li><a href="#">Find Us</a></li>
          <li><a href="#">Support</a></li>
          {/* <li><a to='/models'>Investor Relations</a></li> */}
          <Language>
            <LanguageIcon/>
            <li><a href='/models'>United States</a></li>
          </Language>
  
          </BoxMenu>
        </Nav>

    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 45px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  margin-left: 50px;
  a {
    font-weight: 550;
    flex-wrap: nowrap;
    
  }

  @media (max-width:1200px) {
    display:none;
  }

`

const RightMenu = styled.div`
  display: flex;
  a {
    font-weight: 550;
    flex-wrap: nowrap;
  }
  margin-left: -15px;
  margin-right: -20px;

`

const Nav = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;

  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s ease-in-out;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2)
  }

  a {
    font-weight: 600;
  }
`

// const CustomX = styled(x)``

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  margin-bottom: 80px;
`

const BoxMenu = styled.div`
position: fixed;
overflow-y: scroll;
  margin-left: 20px;
  margin-top: 60px;


  li a {
    font-weight: 400;
  }
`

const X = styled(CloseIcon)`
  margin-right: 25px;
  margin-top: 7px;
`

const Language = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: -2px;
`
