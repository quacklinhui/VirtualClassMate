import React from 'react';
import {useState} from 'react';
import HomePage from './HomeComponents/HomePage';
import CreateRoomPopUp from './HomeComponents/CreateRoomPopUp/CreateRoomPopUp';
import {BrowserRouter as Router, Route, Switch, useHistory, Redirect} from "react-router-dom";
import RoomPage from './MainRoomComponents/RoomPage';
import Login from './LoginComponents/Login';
import Register from './LoginComponents/Register';
import CustomAva from './HomeComponents/AvatarBar/CustomAva';

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
        <Route exact path = "/custom" component={CustomAva}/>
      </Switch>
    </Router>
  );
}

export default App;
