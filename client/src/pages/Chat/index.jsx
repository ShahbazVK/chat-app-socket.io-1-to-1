import { useParams } from "react-router-dom";
import Disconnect from "./Disconnect";
import MessagesReceived from "./Messages";
import SendMessage from "./SendMessage";

const Chat = ({ socket, username }) => {
  const { friend } = useParams();
  return (
    <div className={"chatContainer"}>
      <h2>{username}</h2>
      <div>
        <MessagesReceived socket={socket} friend={friend} username={username} />
        <SendMessage socket={socket} friend={friend} username={username} />
        <Disconnect socket={socket} username={username} />
      </div>
    </div>
  );
};

export default Chat;
