import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// Import routes
import roomRoutes from './routes/room.js';
import toDoRoutes from './routes/todo.js';
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.js";

const app = express();

app.use(express.json({limit: "30mb", extended: true})); // replace bodyParser
app.use(express.urlencoded({limit: "30mb", extended: true})); // replace bodyParser
app.use(cors());

// Connect routes
app.use('/room', roomRoutes);
app.use('/toDo', toDoRoutes);
app.use("/user", userRoutes);
app.use("/chat", chatRoutes)

const CONNECTION_URL = 'mongodb+srv://alwinguo:hello123@cluster0.1fxs7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//const CONNECTION_URL = 'mongodb+srv://virtualclassmate:virtualclassmate@cluster.dnmqc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;


// Connect Mongoose to DB
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) // When connection is successful
    .catch((error) => console.log(error.message)); // When connection is not successful


//socketio

// import { createRequire } from 'module';
// import Chat from './models/chat.js';
// const require = createRequire(import.meta.url);
// const io = require('socket.io')(3000)

// io.on('connection', (socket) => {
//     console.log('a user connected!')
//     socket.emit('message', ' Hello world')
//     socket.on('disconnect', () => {
//         console.log('user disconnected')
//     })
//     socket.on('chatmessage', msg => {
//         const message = new Chat(msg)
//         message.save().then(() => {
//             io.emit('message', msg)
//     })
//     })
// })

// import { Server } from "socket.io";

// const io = new Server(6000);

// io.on("connect", (socket) => {
//   console.log(`connect ${socket.id}`);

//   socket.on("ping", (cb) => {
//     console.log("ping");
//     cb();
//   });

//   socket.on("disconnect", () => {
//     console.log(`disconnect ${socket.id}`);
//   });
// });
