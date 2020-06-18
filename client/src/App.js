import React, {useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from 'axios'
import homepage from './components/pages/home';
import login from './components/auth/Login';
import register from './components/auth/register';
import Header from './components/layout/header';
import userprofile from './components/user/userprofile';
import BugsHome from './components/bugs/bugshome'
import {NewBug} from './components/bugs/newbug';
import viewbugs from './components/bugs/viewbugs';
import { GlobalBugProvider } from './context/GlobalState';
import UserContext from './context/UserContext';

import "./style/style.css"

import './App.css';

function App() {
  const [userData,setUserData] = useState({
    token: undefined, 
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () =>{
      let token = localStorage.getItem("auth-token");
      if(token === null){
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post('/users/tokenIsValid'
      ,null
      , {headers: {"x-auth-token": token}}
      );
      console.log(tokenRes.data);
      if(tokenRes.data) {
        const userRes = await axios.get('/users/', 
        {headers: {"x-auth-token": token},
      });
      setUserData({
        token,
        user: userRes.data,
      });
      }

    }
    checkLoggedIn();
  }, [])

  return (
    <>
    <GlobalBugProvider>

    <BrowserRouter>
    <UserContext.Provider value ={{userData, setUserData}}>
      
    <Header/>
      <Switch>
        <Route exact path='/' component={homepage}/>
        <Route path='/login' component={login}/>
        <Route path='/register' component={register}/>
        <Route path='/user' component={userprofile}/>
        <Route path='/bugs' component={BugsHome}/>
        <Route path='/newbugs' component={NewBug}/>
        <Route path='/viewbugs' component={viewbugs}/>


        
      </Switch>
      </UserContext.Provider>

    </BrowserRouter>
    </GlobalBugProvider>

    </>
  );
}

export default App;
