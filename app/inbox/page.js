'use client'
import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: 'User 1', text: 'Hey, have you finished the project report?' },
    { sender: 'User 2', text: 'Not yet. I’m still working on the data analysis part. What about you?' },
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { sender: 'You', text: inputValue }]);
      setInputValue('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
            <div className={`chat-message You `}>
            <strong>{'devashish'}:</strong>'Not yet. I’m still working on the data analysis part. What about you?'
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;