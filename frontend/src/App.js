import React from 'react';
import {useState} from 'react';
import HomePage from './HomeComponents/HomePage';
import CreateRoomPopUp from './HomeComponents/CreateRoomPopUp/CreateRoomPopUp';
import {BrowserRouter as Router, Route, Switch, useHistory, Redirect} from "react-router-dom";
import RoomPage from './MainRoomComponents/RoomPage';
function App() {
  return (
    <Router>
      <Switch>
      <Route
                exact
                path="/"
                render={() => {
                    return (
                      <Redirect to="/home" /> 
                    )
                }}
              />
        <Route exact path = "/home" component={HomePage}/>
        <Route exact path = "/room" component={RoomPage}/>
      </Switch>
    </Router>
  );
}

export default App;
