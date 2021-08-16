import React from 'react';
import './App.css';
import Home from './Components/home.component';
import Nav from './Components/nav.component';
import Login from './signup/login.component';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './signup/register.component';
import { Forgot } from './Components/forgot.component';
import LOGO_IMG from './images/hunter.png'
import { Reset } from './signup/reset.component';



function App() {

  
  return (
    <BrowserRouter>
    <div className="App">
     <Nav/>
  
  
     <div className="auth-wrapper">
       <img src={LOGO_IMG} alt="LOGO_IMG" />
        <div className="auth-inner">

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register} />
            <Route exact path="/forgot" component={Forgot}/>
            <Route exact path="/reset/:id" component={Reset}/>
          </Switch>

        </div>
      </div> 
    </div>
    </BrowserRouter> 
  
  );
}

export default App;

      