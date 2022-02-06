import { useState, useEffect } from "react";
import "./App.css";
import { Message } from "./components/Message/Message.js";
import { Form } from "./components/Form/Form";
import { FormMui } from "./components/FormMui/FormMui.js";


function App() {
  const [messageList, setMessageList] = useState([]);

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
      id: `msg-${Date.now()}`,
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
  };

  const handleMessage = (text) =>{
    sendMessage(text,"Me")
  }
      
useEffect(() => {
  if(messageList[messageList.length-1]?.author === "Me") {
    setTimeout(()=>{
      sendMessage("Hi, it`s just a robot","Robot")
      },1000)
    }
  }
 
, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
       {messageList.map((message)=>(
       <Message text={message.text}
                author={message.authar}
                key={message.id}
       />))}
        <FormMui onSubmit={handleMessage}></FormMui>
      </header>
    </div>
  );
}

export default App;