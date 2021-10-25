const io = require("socket.io")(8900, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
    }
});

let users = [];

// User joins room
const joinRoom = (socketId, userId, roomId) => {
    const user = { socketId, userId, roomId };
    users.push(user);
    return user;
}

// Get room users
const getRoomUsers = (room) => {
    return users.filter(user => user.roomId === room);
}

// Get current user
const getUser = (id) => {
    return users.find((user) => user.socketId === id);
};

// User leaves room
const leaveRoom = (socketId) => {
    const index = users.findIndex(user => user.socketId === socketId);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
};

io.on("connection", (socket) => {

    // User joined a room chat
    socket.on('joinRoom', ({ userId, roomId }) => {
        console.log(userId + " has joined the room " + roomId);

        const user = joinRoom(socket.id, userId, roomId);

        socket.join(user.roomId);

        // Broadcast when user joins the chat
        socket.broadcast.to(user.roomId).emit('joinMessage', user.userId);

        // Send user and room info
        io.to(user.roomId).emit('roomUsers', {
            room: user.roomId,
            users: getRoomUsers(user.roomId)
        });
    });

    // Listen for a chat message
    socket.on('sendMessage', message => {
        const user = getUser(socket.id);

        io.to(user.roomId).emit('getMessage', { user: user.userId, room: user.roomId, message: message});
    })

    // User disconnects from a room
    socket.on('disconnect', () => {
        const user = leaveRoom(socket.id);
    
        if (user) {
          io.to(user.roomId).emit('leaveMessage', user.userId);
          console.log(user.userId + " has left the room " + user.roomId);
    
          // Send users and room info
          io.to(user.roomId).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.roomId)
          });
        }
      });
})