import MessagesReceived from "./Messages";
import SendMessage from "./SendMessage";

const Chat = ({ username, friend, socket }) => {
  return (
    <div className={"chatContainer"}>
      <div>
        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} username={username} friend={friend} />
      </div>
    </div>
  );
};

export default Chat;
