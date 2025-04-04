import React, { useState } from 'react';
import axios from 'axios';

const ChatDialog = () => {
  const [userPrompt, setUserPrompt] = useState('');
  const [conversation, setConversation] = useState([]);

  const isEnvironmentRelated = (prompt) => {
    const keywords = ['environment', 'climate', 'sustainability', 'conservation', 'ecology', 'green', 'nature'];
    return keywords.some((keyword) => prompt.toLowerCase().includes(keyword));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setConversation([...conversation, { user: userPrompt }]);
    setUserPrompt('');

    if (!isEnvironmentRelated(userPrompt)) {
      setConversation([...conversation, { bot: "Sorry, I can only assist with environment-related questions." }]);
      return;
    }

    try {
      const response = await axios.post(
        'https://api.gemini.com/v1/completions',
        {
          model: 'gemini-1.5-flash',
          prompt: `The following is a conversation with an AI assistant named Flauna. Flauna is an expert in environmental topics and is trained to provide information and guidance related to the EcoVision website, which focuses on promoting environmental awareness and sustainable practices.

User: ${userPrompt}
Flauna:`,
          max_tokens: 100,
          n: 1,
          stop: null,
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer AIzaSyBkkONYCZrcq4B6RaothE7IxIDPqIbPnII',
          },
        }
      );

      const botResponse = response.data.choices[0].text.trim();
      setConversation([...conversation, { bot: botResponse }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="chat-dialog">
      <div className="chat-messages">
        {conversation.map((message, index) => (
          <div key={index} className={`message ${message.user ? 'user-message' : 'bot-message'}`}>
            {message.user || message.bot}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          placeholder="Type your message..."
          className="chat-input"
        />
        <button type="submit" className="chat-send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatDialog; 