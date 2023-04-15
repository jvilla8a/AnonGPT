import "./Chat.scss";

function Chat({ message }) {
  return (
    <div className="chat">
      <div className="chat-question">
        {message.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
