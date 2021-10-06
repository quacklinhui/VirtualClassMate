export default (friends = [], action) =>{
    switch(action.type){
        case 'DELETE':
            return friends.filter((item) => item._id !== action.payload);
        case 'UPDATE':
            return friends.map((friend)=> friend._id === action.payload._id? action.payload : friend);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...friends,action.payload];
        default:
            return friends;
    }
}