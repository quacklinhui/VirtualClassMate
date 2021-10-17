import mongoose  from 'mongoose';
import ToDoItem from '../models/toDoItem.js';

export const getTodo = async(req,res)=>{
    const {referenceID} = req.params;
    try{
        const toDoItem = await ToDoItem.find({referenceID:referenceID});

        console.log(toDoItem);

        res.status(200).json(toDoItem);

    } catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createTodo = async (req, res) => {
    const body = req.body;
    const {referenceID} = req.params.referenceID;
    const newTodo = new ToDoItem(body);
    try {
        await newTodo.save(referenceID);
        
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updateTodo = async (req, res) => {
    const{id: _id} = req.params;

    const toDo = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    
    const updatedToDo = await ToDoItem.findByIdAndUpdate(_id, {...toDo, _id}, {new: true} );

    res.json(updatedToDo);
}

export const deleteTodo = async (req, res) => {
    const{id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await ToDoItem.findByIdAndRemove(id);

    res.json({message:'Post deleted succesfully'});
}