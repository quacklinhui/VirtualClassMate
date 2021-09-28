import Room from '../models/room.js'
import User from '../models/user.js'
// import Chat from '../models/chat.js'

export const getRoom = async (req, res) => {
    const { id } = req.params;

    try {
        const room = await Room.findById(id);
        console.log(room);
        res.status(200).json(room);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getRooms = async (req, res) => {

    try {
        const rooms = await Room.find();

        res.status(200).json(rooms);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createRoom = async (req, res) => {
    const body = req.body;
    const newRoom = new Room(body);
    try {
        await newRoom.save();

        res.status(201).json(newRoom);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const manageAccess = async (req, res) => {
    
}

export const addMember = async (req, res) => {
    const { id } = req.params;
    try {
            // Get current room info
            var roomID = id; // current room id 
            const roomData = await Room.findbyID(roomID); // get all member id in the room

            // Get user info
            var userData = ' '; // user obj ( the person currently using the app )
            var currentUserData = await User.findbyID(userData);
            var friendData = currentUserData.friends; // not implement yet but will call from user to get friend list of current user.

            // get list of userid that is not in the room and is the friend of the current user
            var listofObjects = [];

            for (const key in friendData) {
                var inRoom = false
                for (const key1 in roomData.members) {
                    if (JSON.stringify(friendData[key]) === JSON.stringify(roomData.members[key1])) {
                        inRoom = true
                    }
                }
                if (inRoom == false) {
                    listofObjects.push(friendData[key]) // list of friends that the user can add to the room
                }
                
            }

            const newMember = req.body.User; // get the member selection from client side
            
            // import JoinRoom from User then use it (waiting for runtao)

    } catch{
        res.status(400).send(err);
    }
}

export const checkRoomUsers = async (req, res) => {
    const { id } = req.params;
    try {
        // Get current room info
        var roomID = id; // current room id 
        const roomData = await Room.findbyID(roomID); // get all member id in the room
        console.log(roomData.members)
    }
    catch {
        res.status(400).send(err)
    }
}

export const checkOtherToDo = async (req, res) => {
    const { id } = req.params;
    try {
        // Get current room info   
        var roomID = id; // current room id 
        const roomData = await Room.findbyID(roomID); // get all member id in the room
        console.log(roomData.members) // for frontend to select one member to-do list to view

        const selectedMember = req.body // frontend selection

        // Import Read to do from To-do controller to extract to-do info for that 'Selected Member'

    } catch {
        res.status(400).send(err)
    }
}

export const checkMessage = async (req,res) => {
    const { id } = req.params;
    try {
        // Get current room info   
        var roomID = id; // current room id 
        var roomData = await Room.findbyID(roomID)
        var roomChatData = roomData.Chat // id of each chat log containing all the details in chat schema
    } catch {
        res.status(400).send(err)
    }
}