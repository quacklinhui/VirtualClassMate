import Room from '../models/room.js'
import User from '../models/user.js'
import Chat from '../models/chat.js';
import mongoose from 'mongoose';

// Get all rooms in the database (only for testing)
export const getRooms = async (req, res) => {

    try {
        const rooms = await Room.find();

        res.status(200).json(rooms);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

// Get data of a particular room
export const getRoom = async (req, res) => {
    const { id } = req.params;

    try {
        const room = await Room.findById(id);
        res.status(200).json(room);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


export const checkFriendToAdd = async (req, res) => {
    try {
            // Get current room info
            var roomID = req.query.rid; // current room id 
            const roomData = await Room.findById(roomID); // get all member id in the room
            // res.status(200).json(roomData);
            // console.log(roomData.members)

             // Get user info
             var userData = req.query.uid; // user obj ( the person currently using the app )
             var currentUserData = await User.findById(userData);
            //  res.status(200).json(currentUserData);
             var friendData = currentUserData.friends // not implement yet but will call from user to get friend list of current user.

            //get list of userid that is not in the room and is the friend of the current user
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

             res.status(200).json(listofObjects);

    }  catch (error) {
        res.status(404).json({message: error.message});
    }
}

// Admin add member to the room
export const addMember = async (req, res) => {
    const newMemberID = req.body.newMemberID;
    const roomID = req.params.id;
    const adderID = req.body.adderID;

    try {
        // Find Room
        const room = await Room.findById(roomID);

        // Get new member
        const newMember = await User.findById(newMemberID);
  
        // Get admin of room
        const admin = room.admin;
        // Check if person adding is the admin
        if (admin.toString() !== adderID) {
            res.status(401).json({message: "Unauthorized: No admin privileges"});
            return;
        }

        // Authorized to add member
        // Check if new member to add is already an existing member
        var isMember = false;
        const newMemberRooms = newMember.rooms;
        for (const index in newMemberRooms) {
            if (newMemberRooms[index].equals(room._id)) {
                isMember = true;
            }
        }

        
        if (isMember) {
            res.status(409).json({message: "User is already a member"});
        } else {
            // Update user
            await User.findByIdAndUpdate(newMemberID, {
                $push: { rooms: room._id }
            });

            // Update room
            const updatedRoom = await Room.findByIdAndUpdate(roomID, {
                $push: { members: newMember._id },
                $pull: { requestList: newMember._id }
            }, {
                new: true
            })
            res.status(200).json(updatedRoom);
        }

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// export const addMember = async (req, res) => {
//     const roomID = req.body.room
//     const userID = req.body.uid

//     try {
//         const roomData = await Room.findByIdAndUpdate(roomID, {
//             $addToSet: {members: userID}          
//         })

//         roomData.save()

//         const friendData = await User.findByIdAndUpdate(userID, {
//             $addToSet: {rooms: roomID}          
//         })

//         friendData.save()
//         res.status(201).json(friendData);

//     }

//     catch {
//         res.status(400).send(err)
//     }
// }

// Create a room, user who created will be admin
export const createRoom = async (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const admin = mongoose.Types.ObjectId(req.body.admin);
    try {
        // Create new room object
        const newRoom = new Room({ name: name, description: description, admin: admin });
        await newRoom.save();

        // Get the admin user and add the new room to user's room array
        const user =  await User.findById(req.body.admin);
        var userRooms = user.rooms;
        userRooms.push(newRoom._id);
        await User.updateOne(
            { _id: user._id },
            { $set: { rooms: userRooms }}
        );

        res.status(201).json(newRoom);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

// May not be needed
export const checkRoomUsers = async (req, res) => {
    const { id } = req.params;

    try {
        const roomData = await Room.findById(id);
        res.status(200).json(roomData.members);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


export const checkMessage = async (req,res) => {
    const { id } = req.params;
    try {
        // Get current room info   
        const roomID = id; // current room id 
        const roomData = await Room.findById(id)
        const roomChatData = roomData.chat
        // console.log(roomChatData)
        var listOfChatObjects = []
        for (const key in roomChatData) {
            const messageInfo = await Chat.findById(roomChatData[key])
            listOfChatObjects.push(messageInfo)
        }
        // const allChatFromRoom = await Chat.findById(roomChatData)
        res.status(200).json(listOfChatObjects)
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}


export const createMessage = async (req,res) => {
    const body = req.body.messageInfo
    const roomid = req.body.roomID
    const newMessage = new Chat(body)
    try {
        await newMessage.save()
        const saveMessageToRoom = await Room.findByIdAndUpdate(roomid, {
            $addToSet: {
                chat : newMessage._id
            }
        })
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

// User make a request to join room
export const requestToJoinRoom = async (req, res) => {
    try {
        const userID = req.body.userID;
        const { id } = req.params;

        // Find room
        const room = await Room.findById(id);

        // Get user
        const user = await User.findById(userID);

        // Check if user is already a member
        var rooms = user.rooms;
        for (const index in rooms) {
            if (rooms[index].equals(room._id)){
                res.status(409).json({message: "User in already a member of the room"});
                return;
            }
        }

        // Check if user is already in the request list
        var requestList = room.requestList;
        for (const index in requestList) {
            if (requestList[index].equals(user._id)){
                res.status(409).json({message: "User in already in the request list"});
                return;
            }
        }

        // Add user into the request list
        const updatedRoom = await Room.findByIdAndUpdate(id, {
            $push: { requestList: user._id }
        }, {
            new: true
        });

        res.status(200).json(updatedRoom);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}


// Admin accepts request to join room
export const acceptRequest = async (req, res) => {
    try {
        const requesterID = req.body.requesterID;
        const accepterID = req.body.accepterID;
        const { id } = req.params;

        // Find room
        const room = await Room.findById(id);

        // Get user
        const user = await User.findById(requesterID);

        // Get admin of the room
        const admin = room.admin;
        // If user accepting the request is not the admin, then disallow accepting 
        if (admin.toString() !== accepterID) {
            res.status(401).json({message: "Unauthorized: No admin privileges"});
            return;
        }

        // Authorized to accept
        // Check if user is in the request list and accept if he is
        var inRequestList = false;
        var requestList = room.requestList;
        for (const index in requestList) {
            if (requestList[index].equals(user._id)) {
                inRequestList = true;
            }
        }

        // Add user if in request list
        if (inRequestList) {
            // Update room
            const updatedRoom = await Room.findByIdAndUpdate(id, {
                $push: { members: user._id },
                $pull: { requestList: user._id }
            }, {
                new: true
            })

            // Update user
            await User.findByIdAndUpdate(requesterID, {
                $push: { rooms: room._id }
            });

            res.status(200).json(updatedRoom);
        } else {
            res.status(409).json({message: "User not in request list"});
        }
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}