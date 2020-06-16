import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import homepage from './components/pages/home';
import login from './components/auth/Login';
import register from './components/auth/register';
import Header from './components/layout/header';
import userprofile from './components/user/userprofile';

import "./style/style.css"

import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path='/' component={homepage}/>
        <Route path='/login' component={login}/>
        <Route path='/register' component={register}/>
        <Route path='/user' component={userprofile}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
