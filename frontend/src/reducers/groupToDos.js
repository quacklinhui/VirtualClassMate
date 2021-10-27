export default (GroupToDoList = [], action) =>{
    switch(action.type){
        case 'DELETE_GROUP':
            return GroupToDoList.filter((item) => item._id !== action.payload);
        case 'UPDATE_GROUP':
            return GroupToDoList.map((item)=> item._id === action.payload._id? action.payload : item);
        case 'FETCH_GROUP':
            return action.payload;    
        case 'CREATE_GROUP':
            return [...GroupToDoList, action.payload];
        default:
            return GroupToDoList;
    }
}