// client/src/pages/home/index.js

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ username, setUsername, friend, setFriend, socket }) => {
  const navigate = useNavigate();
  const joinRoom = () => {
    if (friend !== "" && username !== "") {
      handleReconnect();
      socket.emit("join", { username });
      navigate(`/chat/${friend}`);
    } else alert("Fill all fields");
  };
  const handleReconnect = () => {
    socket.connect();
  };
  // console.log("socket connected or not", socket);
  return (
    <div className={"container"}>
      <div className={"formContainer"}>
        <h1>{`<>DevRooms</>`}</h1>
        <input
          className={"input"}
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        />

        <select className={"input"} onChange={(e) => setFriend(e.target.value)}>
          <option>-- Select friend --</option>
          <option value="Shahbaz">Shahbaz</option>
          <option value="Shafay">Shafay</option>
          <option value="Adil">Adil</option>
          <option value="Muneeb">Muneeb</option>
          <option value="Usama">Usama</option>
        </select>

        <button
          onClick={joinRoom}
          className="btn btn-secondary"
          style={{ width: "100%" }}
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Home;
