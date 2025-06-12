import React from "react";
import './App.css';
import ChatEntry from './components/ChatEntry';
import chat from './data/messages.json';


const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry sender = {chat[0].sender} body= {chat[0].body} timeStamp= {chat[0].timeStamp} ></ChatEntry>
      </main>
    </div>
  );
};

export default App;
