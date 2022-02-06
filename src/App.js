import { useState, useEffect,useRef } from "react";
import "./App.css";
import { Message } from "./components/Message/Message.js";
// import { Form } from "./components/Form/Form";
import { FormMui } from "./components/FormMui/FormMui.js";


const chats = [
  { name: "Chat1", id: "1" },
  { name: "Chat2", id: "2" },
];

function App() {
  const [messageList, setMessageList] = useState([]);
  const messagesEnd = useRef();


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
  messagesEnd.current?.scrollIntoView();
  if(messageList[messageList.length-1]?.author === "Me") {
    setTimeout(()=>{
      sendMessage("Hi, it`s just a robot","Robot")
      },1000)
    }
  }
 
, [messageList]);

  useEffect(() => {
    console.log(messagesEnd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
        
          <div className="App-header">
            <ul>
              {chats.map((chat) => (
                <li key={chat.id}>{chat.name}</li>
              ))}
            </ul>
            <div className="App-wrapper">
                <div className="App-content">
                {messageList.map((message)=>(
                <Message text={message.text}
                          author={message.author}
                          key={message.id}
                />))}
                  <div ref={messagesEnd} />
                </div>
            <FormMui onSubmit={handleMessage}/>
            </div>
         </div>
      </div>
  );
}

export default App;