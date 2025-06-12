import React from "react";
import './App.css';
import ChatEntry from './components/ChatEntry';
import chat from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries= {chat}></ChatLog>
      </main>
    </div>
  );
};

export default App;
