import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import './App.css';
import Loginscreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';


function App() {




  const user = useSelector(selectUser);




  const dispatch = useDispatch();
  useEffect(() => {

    const unsuscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged in
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else {
        dispatch(logout());
      }
    });

    return unsuscribe;

  },[dispatch])

  return (
    <div className="App">
      <BrowserRouter >
      {


!user ? (
       <Loginscreen/>
            ) : (

              <Routes>              
              
              <Route exact path="/profile" element={<ProfileScreen/>}/>
              <Route exact path="/" element={<HomeScreen />}/>
          
          </Routes>
            
            )}
           
       
      </BrowserRouter>

    </div >
  
  );
            }

export default App;
