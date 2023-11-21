const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

let allUsers = [];
let recipient = {};

io.use((socket, next) => {
  socket.id = socket.handshake.auth.token;
  next();
});

io.on("connection", (socket) => {
  socket.on("join", (data) => {
    // console.log(socket.handshake.auth.token);
    allUsers.push({ id: socket.id });
    console.log(allUsers);
  });
  socket.on("private_message", (data) => {
    recipient = allUsers.find((user) => user.id === data.friend);
    if (recipient) {
      io.to(recipient.id).emit("receive_message", {
        sender: socket.id,
        message: data.message,
        createdTime: new Date().toLocaleTimeString(),
      }); // Send to all users in friend, including sender
    } else console.log("save msg to db");
    // db
    socket.emit("receive_message", {
      ...data,
      createdTime: new Date().toLocaleTimeString(),
    });
  });
  socket.on("disconnect", () => {
    console.log("disconnected", socket.id);
    allUsers = allUsers.filter((user) => user.id !== socket.id);
  });
});

server.listen(3000, () => console.log("Server is running on port 3000"));
