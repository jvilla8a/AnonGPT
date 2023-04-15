import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Chat from "./components/Chat";
import ChatInput from "./components/ChatInput";

function App() {
  const [message, setMessage] = useState([]);

  const handlerMessage = (text) => {
    setMessage([...message, text]);
  };

  return (
    <div>
      <Chat message={message} />
      <ChatInput setMessage={handlerMessage} />
    </div>
  );
}

export default App;
