import React, {useState} from 'react'
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import LanguageIcon from "@mui/icons-material/Language";
import ButtonPrimary from '../Login/ButtonPrimary';
import ButtonSecondary from '../Login/ButtonSecondary';
import { auth } from '../DataBase/firebase';
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth"
import { login } from '../features/userSlice'


function SignUp() {
    const [email, setemail] = useState(" ");
    const [password, setpassword] = useState("");
    const [Name, setName] = useState("");
    const [LName, setLName] = useState("");
    const dispatch = useDispatch()
    const history = useNavigate()

    const signUp = (e) => {
      e.preventDefault()

      if (!Name) {
        return alert('Please enter a first name!')
      }

      if (!LName) {
        return alert('Please enter a last name!')
      }

      createUserWithEmailAndPassword(auth, email, password).then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: Name
        }).then(() => {
          dispatch(login({
            email:userAuth.user.email,
            uid:userAuth.user.uid,
            displayName: Name,
          }))
          history.push('/teslaaccount')
        })
      }).catch((error) => alert(error.message))
    }

  return (
    <div>
        <Box>
        <Header>
          <Logo>
            <Link to="/">
              <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"></img>
            </Link>
          </Logo>

          <Language>
            <LanguageIcon />
            <span>en-US</span>
          </Language>
        </Header>

        <LoginInfo>
          <h1>Create account</h1>
          <Form>
          <label htmlFor="fName">First Name</label>
            <input
              type="text"
              id="fName"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label htmlFor="LName">Last Name</label>
            <input
              type="text"
              id="LName"
              value={LName}
              onChange={(e) => setLName(e.target.value)}
            ></input>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            ></input>
            <label htmlFor="email">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            ></input>
            <ButtonPrimary name="Create Account" type="submit" onClick={signUp} />
          </Form>

          <Divider>
            <hr /> <span>OR</span> <hr />
          </Divider>
          <Link to="../login">
            <ButtonSecondary name="Sign in" />
          </Link>
        </LoginInfo>
      </Box>
    </div>
  )
}

export default SignUp

const Box = styled.div`
  padding: 25px;
  padding-top: 15px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding-bottom: 5px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;

const Logo = styled.div`
  object-fit: contain;
  width: 90px;
`;

const Language = styled.div`
  margin-top: -10px;
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 15px;
  transition: all 0.2s;

  &:hover {
    background-color: hsla(0, 0%, 50.2%, 0.125);
  }

  span {
    font-weight: 500;
  }
`;

const LoginInfo = styled.div`
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 330px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-weight: 500;
    font-size: 40px;
    margin-left: -60px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: #5c5e62;
    font-weight: 500;
    font-size: 15px;
    padding-left: 20px;
  }

  input {
    margin-bottom: 30px;
    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
    outline: none;
    border-radius: 50px;
    padding: 12px 20px;
    color: #393c41;
    font-weight: 600;
  }

  input:focus {
    border: 1px solid #d6d6d6;
    transition: all 0.2s;
  }
`;

const Divider = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  hr {
    width: 40%;
    height: 0;
    opacity: 0.3;
  }

  span {
    font-weight: 500;
    color: #5c5e62;
  }
`;
