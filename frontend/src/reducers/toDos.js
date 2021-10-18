import { bindActionCreators } from "redux"

export default (toDoList = [], action) =>{
    switch(action.type){
        case 'DELETE':
            return toDoList.filter((item) => item._id !== action.payload);
        case 'UPDATE':
            return toDoList.map((item)=> item._id === action.payload._id? action.payload : item);
        case 'FETCH_USER':
            return action.payload;
        case 'FETCH_GROUP':
            return action.payload;    
        case 'CREATE':
            return [...toDoList,action.payload];
        default:
            return toDoList;
    }
}