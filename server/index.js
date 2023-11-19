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

io.on("connection", (socket) => {
  socket.on("join", (data) => {
    const { username } = data;
    socket.username = username;
    allUsers.push({ id: socket.id, username });
  });
  socket.on("private_message", (data) => {
    recipient = allUsers.find((user) => user.username === data.friend);
    io.to(recipient.id).emit("receive_message", {
      sender: socket.username,
      message: data.message,
      createdTime: new Date().toLocaleTimeString(),
    }); // Send to all users in friend, including sender
    // db
    socket.emit("receive_message", {
      ...data,
      createdTime: new Date().toLocaleTimeString(),
    });
  });
});

server.listen(3000, () => console.log("Server is running on port 3000"));
