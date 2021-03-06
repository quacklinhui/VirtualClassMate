import React from 'react';
import {useState} from 'react';
import HomePage from './HomeComponents/HomePage';
import CreateRoomPopUp from './HomeComponents/CreateRoomPopUp/CreateRoomPopUp';
import {BrowserRouter as Router, Route, Switch, useHistory, Redirect} from "react-router-dom";
import RoomPage from './MainRoomComponents/RoomPage';
import Login from './LoginComponents/Login';
import Register from './LoginComponents/Register';
import NewCustom from './HomeComponents/AvatarBar/NewCustom';

function App() {
  
  return (
    <Router>
      <Switch>
      <Route
                exact
                path="/"
                render={() => {
                    return (
                      <Redirect to="/login" /> 
                    )
                }}
              />
        <Route exact path = "/home" component={HomePage}/>
        <Route exact path = "/room" component={RoomPage}/>
        <Route exact path = "/login" component={Login}/>
        <Route exact path = "/register" component={Register}/>
        <Route exact path = "/newcust" component={NewCustom}/>
      </Switch>
    </Router>
  );
}

export default App;
