import { useState } from "react";
import "./Chat.scss";

function ChatInput({ setMessage }) {
  const [text, setText] = useState("");
  const handlerMessage = (e) => {
    e.preventDefault();
    setMessage(text);
  };

  return (
    <div className="input">
      <form onSubmit={handlerMessage}>
        <div className="text-container">
          <input type="text" onChange={(e) => setText(e.target.value)} />
        </div>
      </form>
    </div>
  );
}

export default ChatInput;
