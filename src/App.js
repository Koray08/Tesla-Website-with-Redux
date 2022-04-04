import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import Error from './Error/Error'
import Header from './components/Header'  
import Home from './components/Home'
import Footer from './components/Footer'
import {login, logout, selectUser} from './features/userSlice'
import TeslaAccount from './components/TeslaAccount';
import { auth } from './DataBase/firebase';
import { useDispatch,useSelector } from 'react-redux';


function App() {
  const user = useSelector(selectUser)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()


  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
      <Router>
          <Routes>

            <Route exact path="/" element={<><Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/><Home/></>}/>

            <Route 
              exact path="/login" element={<> {user ? <Navigate to='/teslaaccount'/> : <Login/>} </>}>
            </Route>

            <Route 
              exact path="/signup" element={<SignUp/>}>
            </Route>

            <Route exact path='/teslaaccount' element={<> {!user ? <Navigate to='/login'/> : <TeslaAccount/>} </>}></Route>

            <Route path="*" element={<><Header/><Error/><Footer/></>}/>
          </Routes>
      </Router>
  );
}

export default App;
