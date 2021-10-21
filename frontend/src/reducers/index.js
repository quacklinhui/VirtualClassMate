import { combineReducers } from "redux";

import PersonalToDoList from './personalToDos';
import GroupToDoList from './groupToDos';
export default combineReducers({PersonalToDoList,GroupToDoList})
