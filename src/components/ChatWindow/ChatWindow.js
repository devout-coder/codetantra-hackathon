import React from "react";
import "./ChatWindow.css";
import { Close } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const ChatWindow = ({ closeChatWindow }) => {
  function close() {
    //this new class removeModal will be added which has a cool slideback animation attached to it
    document.getElementsByClassName("chat")[0].classList.add("removeChat");
    setTimeout(() => {
      closeChatWindow();
    }, 800);
  }
  return (
    <div className="chatBackground">
      <div className="chat">
        <text>chat window</text>
        <IconButton onClick={close}>
          <Close />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatWindow;
