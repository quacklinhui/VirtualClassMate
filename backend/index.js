import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// Import routes
import roomRoutes from './routes/room.js';
import toDoRoutes from './routes/todo.js';

const app = express();

app.use(express.json({limit: "30mb", extended: true})); // replace bodyParser
app.use(express.urlencoded({limit: "30mb", extended: true})); // replace bodyParser
app.use(cors());

// Connect routes
app.use('/room', roomRoutes);
app.use('/toTo', roomRoutes);

const CONNECTION_URL = 'mongodb+srv://virtualclassmate:virtualclassmate@cluster.dnmqc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// Connect Mongoose to DB
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) // When connection is successful
    .catch((error) => console.log(error.message)); // When connection is not successful
