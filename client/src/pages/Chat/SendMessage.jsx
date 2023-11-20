import React, { useState } from "react";

const SendMessage = ({ socket, friend }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message !== "") {
      socket.emit("private_message", {
        friend,
        message,
      });
      setMessage("");
    }
  };

  return (
    <div className="sendMessageContainer">
      <input
        className="messageInput"
        placeholder="Message..."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button className="btn btn-primary" onClick={sendMessage}>
        Send Message
      </button>
    </div>
  );
};

export default SendMessage;
