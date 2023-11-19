import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import io from "socket.io-client";
import TheChat from "./pages/Chat";

const App = () => {
  const [username, setUsername] = useState("");
  const [friend, setFriend] = useState("");
  const socket = io.connect("http://localhost:3000");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                username={username}
                setUsername={setUsername}
                friend={friend}
                setFriend={setFriend}
                socket={socket}
              />
            }
          />
          <Route
            path="/chat"
            element={
              <TheChat username={username} friend={friend} socket={socket} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
