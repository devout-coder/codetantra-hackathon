import React from "react";
import "./ChatWindow.css";
import { Close } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { getAuth } from "firebase/auth";

const ChatWindow = ({ which, closeChatWindow }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const type =
    which === "adoption" ? "adoption_messages" : "volunteers_messages";

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(user, value);
    setValue("");
  };

  async function sendMessage(user, text) {
    try {
      await addDoc(collection(db, type), {
        uid: user.uid,
        displayName: user.displayName,
        text: text.trim(),
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error(error);
    }
  }

  function getMessages(callback) {
    return onSnapshot(
      query(collection(db, type), orderBy("timestamp", "asc")),
      (querySnapshot) => {
        const messages = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        callback(messages);
      }
    );
  }

  function useMessages() {
    const [messages, setMessages] = React.useState([]);

    React.useEffect(() => {
      const unsubscribe = getMessages(setMessages);
      return unsubscribe;
    }, []);

    return messages;
  }

  const containerRef = React.useRef(null);
  const messages = useMessages();

  React.useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  });

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
        <div className="message-list-container" ref={containerRef}>
          <ul className="message-list">
            {messages.map((x) => (
              <Message
                key={x.id}
                message={x}
                isOwnMessage={x.uid === user.uid}
              />
            ))}
          </ul>
        </div>
        <div className="messageCont">
          <form onSubmit={handleSubmit} className="message-input-container">
            <input
              type="text"
              placeholder="Enter a message"
              value={value}
              onChange={handleChange}
              className="message-input"
              required
              minLength={1}
            />
            <button type="submit" disabled={value < 1} className="send-message">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

function Message({ message, isOwnMessage }) {
  const { displayName, text } = message;
  return (
    <li className={["message", isOwnMessage && "own-message"].join(" ")}>
      <h4 className="sender">{isOwnMessage ? "You" : displayName}</h4>
      <div>{text}</div>
    </li>
  );
}

export default ChatWindow;
