import React, { useContext } from "react";
// import Cam from "../img/cam.png";
// import Add from "../img/add.png";
// import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
            <div className="chatInfo">
          {Object.keys(data.user).length !== 0 && (
            <span>{data.user.displayName}</span>
          )}
          <div className="chatIcons">
            {/* Add your icons here */}
          </div>
        </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;