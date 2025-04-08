import React from 'react';

const ChatIframePage = () => {
  // Set the chat URL to the path of the HTML file in the public directory
  const chatUrl = "/chatbot.html"; 

  return (
    <div 
      className="chat-iframe-container" 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        zIndex: 9999
      }}
    > 
      <iframe
        src={chatUrl}
        title="Chat Assistant"
        style={{
          width: '100%',
          height: '100%',
          border: 'none', // Remove border for seamless look
          display: 'block', // Prevent potential extra space below iframe
          margin: 0,
          padding: 0
        }}
        allow="microphone; camera" // Add permissions if needed by the chat application
      />
    </div>
  );
};

export default ChatIframePage; 