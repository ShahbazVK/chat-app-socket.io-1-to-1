import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Disconnect = ({ socket }) => {
  const navigate = useNavigate();
  const handleDisconnect = () => {
    socket.disconnect();
    navigate("/");
  };

  return <button onClick={handleDisconnect}>Disconnect</button>;
};

export default Disconnect;
