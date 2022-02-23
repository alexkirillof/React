
import { useState, useEffect,useRef } from "react";
import "../../App.css";
import { MessageList } from "../MessageList/index.js";
import {FormMui} from "../FormMui/FormMui.js";
import { Navigate,  useParams } from "react-router";


export function Chat({messages,addMessage}) {
  const params = useParams();
  const { chatId } = params;
  // const [messageList, setMessageList] = useState({
  //   chat1: [],
  //   chat2: [],
  //   chat3: [],
  // });
  const messagesEnd = useRef();

  const handleMessage = (text) =>{
    sendMessage(text,'me')
  }

  const sendMessage = (text, athuor) => {
    const newMsg = {
      text,
      athuor,
      id: `msg-${Date.now()}`,
    };
    addMessage(chatId,newMsg)
  };

      
  useEffect(() => {
    messagesEnd.current?.scrollIntoView();

    let timeout;
    if (
      messages[chatId]?.[messages[chatId]?.length - 1]?.athuor === 'me'
    ) {
      timeout = setTimeout(() => {
        sendMessage("Hi, it`s just a robot","Robot", "Robot");
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [messages]);



  if (!messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }


  return (
    <div className="App">
    <div className="App-header">
      <div className="App-wrapper">
          <div className="App-content">
            <MessageList messages={messages[chatId]} />
          </div>
      <FormMui onSubmit={handleMessage}/>
      </div>
   </div>
</div>
  );
}


