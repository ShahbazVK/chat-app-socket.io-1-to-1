import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import TheChat from "./pages/Chat";

const App = () => {
  const [username, setUsername] = useState("");
  const [friend, setFriend] = useState("");
  const [socket, setsocket] = useState();
  useEffect(() => {
    if (socket) {
      socket.disconnect();
    }
    let conn = io.connect("http://localhost:3000", {
      auth: { token: username },
    });
    setsocket(conn);
  }, [username]);

  // console.log("socket");
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
            path="/chat/:friend"
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
