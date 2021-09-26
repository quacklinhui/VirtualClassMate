import mongoose from 'mongoose';

const toDoItemSchema = mongoose.Schema({
    name: String,
    deadline: Date,
    description: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    status: {
        type: String,
        enum: ['inProgress', 'completed', 'overdue'],
        default: 'inProgress'
    }
});

const ToDoItem = mongoose.model('ToDoItem', toDoItemSchema);
export default ToDoItem;