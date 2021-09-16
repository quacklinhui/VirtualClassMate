import React from 'react';
import {useState} from 'react';
import HomePage from './HomeComponents/HomePage';
import CreateRoomPopUp from './HomeComponents/CreateRoomPopUp/CreateRoomPopUp';

function App() {
  const {CreateRoomPopUp, setCreateRoomPopUp} = useState(false); //set the default state to false
  return (
    <div>
      <HomePage />

    </div>
  );
}

export default App;
