import { bindActionCreators } from "redux"

export default (toDoList = [], action) =>{
    switch(action.type){
        case 'DELETE':
            return toDoList.filter((item) => item._id !== action.payload);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...toDoList,action.payload];
        default:
            return toDoList;
    }
}