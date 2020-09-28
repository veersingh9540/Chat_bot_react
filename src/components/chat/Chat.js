import { TextField } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
//  Import action
import { userMessage, sendMessage } from "../../actions/watson";



const Chat = ({ chat, userMessage, sendMessage }) => {
  // Handle Users Message
  const [message, setMessage] = useState("");
  const endOfMessages = useRef(null);

  const scrollToBottom = () => {
    endOfMessages.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [chat]);

  //  Function that handles user submission
  const handleClick = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      console.log(message);
      userMessage(message);
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="chat">
      <h1>Neurth ChatBot </h1>
      {/* Handle Messages */}
      <div class="historyContainer">
        {chat.length === 0
          ? ""
          : chat.map((msg) => <div className={msg.type}>{msg.message}</div>)}
        <div ref={endOfMessages}></div>
      </div>
      {/* Input Box */}
      <TextField
      className="text_input" 
      id="filled-basic" 
      label="Send message" 
      variant="filled"
      placeholder="Type Your Message to ChatBot"
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={handleClick}
      value={message}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  chat: state.watson.messages,
});

export default connect(mapStateToProps, { userMessage, sendMessage })(Chat);