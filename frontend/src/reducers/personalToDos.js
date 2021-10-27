export default (PersonalToDoList = [], action) =>{
    switch(action.type){
        case 'DELETE':
            return PersonalToDoList.filter((item) => item._id !== action.payload);
        case 'UPDATE':
            return PersonalToDoList.map((item)=> item._id === action.payload._id? action.payload : item);
        case 'FETCH_USER':
            return action.payload;  
        case 'CREATE':
            return [...PersonalToDoList, action.payload];
        default:
            return PersonalToDoList;
    }
}