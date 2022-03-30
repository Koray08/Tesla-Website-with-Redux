import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../DataBase/firebase";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import Car from "./Car";
import MenuIcon from '@mui/icons-material/Menu';

function TeslaAccount() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [navStatus, setNavStatus] = useState(false)


  const logoutOfApp = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        navigate("/login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Account>
      <Header>
        <Logo>
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </Logo>

        <Links>
          <Link to="/teslaacount">Model S</Link>
          <Link to="/teslaacount">Model 3</Link>
          <Link to="/teslaacount">Model X</Link>
          <Link to="/teslaacount">Model Y</Link>
          <Link to="/teslaacount">Solar Roof</Link>
          <Link to="/teslaacount">Solar Panels</Link>
          <Link to="/teslaacount">Shop</Link>
          <Link to="/teslaacount">Tesla Account</Link>
          <Link to="/login" onClick={logoutOfApp}>
            Log out
          </Link>
        </Links>
        
        <RightMenu>
            <a href="#" >Shop</a>
            <Link to="/login">Account</Link>
            <a href="#" onClick={() => setNavStatus(true)}><Menu/></a>
        </RightMenu>
        

      </Header>

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


      <Info>
        <Person>
          <h4>{user?.displayName + "'s"} Account</h4>
        </Person>

        <InfoRight>
          <Link to="/">Home</Link>
          <Link to="/">Account</Link>
          <Link to="/">History</Link>
        </InfoRight>
      </Info>

      <CarModel>
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
          model="model s"
          testDrive
        />
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
          model="model x"
        />
      </CarModel>
    </Account>
  );
}

export default TeslaAccount;

const Account = styled.div``;

const Header = styled.div`
  padding: 7px 20px;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222222;
  color: white;
`;

const Logo = styled.div`
  a > img {
    object-fit: contain;
    width: 80px;
    filter: brightness(0) invert(1);
  }
`;

const Links = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 13px;
    z-index: 0;
  }
`;


const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 140px;
  padding-bottom: 30px;
`;

const Person = styled.div`
  h4 {
    margin-left: 140px;
    font-weight: 500;
    font-size: x-large;
  }
`;

const InfoRight = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 160px;

  a {
    text-decoration: none;
    color: #393c41;
    transition: all 0.2s;
    text-transform: capitalize;
  }

  &a:hover {
    color: black;
    font-weight: 500;
  }
`;

const CarModel = styled.div`
`;

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
  }

  a {
    font-weight: 600;
  }
`


const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`

const X = styled(CloseIcon)`
  margin-right: 10px;
  margin-top: 7px;
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

const Language = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: -2px;
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-size: 16px;
    font-weight: 400;
    flex-wrap: nowrap;
    color: white;
  }
`

const Menu = styled(MenuIcon)`
    filter: brightness(0) invert(1);
`