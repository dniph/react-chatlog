import React, { useState } from "react";
import './App.css';
import ChatLog from './components/ChatLog';
import chat from './data/messages.json';

const App = () => {
  const [chatMessages, setChatMessages] = useState(chat);

  const toggleLike = (id) => {
    const updatedMessages = chatMessages.map((entry) => {
      if (entry.id === id) {
        return { ...entry, liked: !entry.liked };
      } else {
        return entry;
      }
    });
    setChatMessages(updatedMessages);
  };

  const totalLikes = chatMessages.filter((entry) => entry.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <p>{totalLikes} ❤️s</p>
      </header>
      <main>
        <ChatLog entries={chatMessages} onLikeToggle={toggleLike} />
      </main>
    </div>
  );
};

export default App;
