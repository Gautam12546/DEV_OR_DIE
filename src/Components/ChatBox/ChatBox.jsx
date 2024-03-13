import { useState } from 'react';
import './ChatBox.css';

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      addMessage(inputValue, 'user');
      setInputValue('');
      // You can add logic here for handling replies or other actions from the "chatbot"
    }
  };

  const addMessage = (messageText, sender) => {
    setMessages([...messages, { text: messageText, sender }]);
  };

  return (
    <div className="chat-box">
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}-message`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBox;
