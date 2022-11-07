import io from 'socket.io-client';
const dotenv = require("dotenv");
dotenv.config()
const URL = process.env.SOCKET_API;
const socket = io(URL);
var mySocketId;
socket.on("createNewGame", statusUpdate => {
    console.log("A new game has been created! Username: " + statusUpdate.userName + ", Game id: " + statusUpdate.gameId + " Socket id: " + statusUpdate.mySocketId);
    mySocketId = statusUpdate.mySocketId;
});
export {
    socket,
    mySocketId
};