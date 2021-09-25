import ToDoItem from '../models/toDoItem.js';

export const getTodo = async(req,res)=>{
    try{
        const toDoItem = await ToDoItem.find();

        console.log(toDoItem);

        res.status(200).json(toDoItem);

    } catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createTodo = async (req, res) => {
    const body = req.body;
    const newTodo = new Room(body);
    try {
        await newTodo.save();

        res.status(201).json(newTodo);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}