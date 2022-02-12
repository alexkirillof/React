
import { useState, useEffect,useRef } from "react";
import "../../App.css";
// import { Message } from "../Message/Message.js";
// import { Form } from "./components/Form/Form";
import { MessageList } from "../MessageList/index.js";
import {FormMui} from "../FormMui/FormMui.js";
import {ChatList} from "../ChatList";
import { Navigate, useNavigate, useParams } from "react-router";




export function Chat() {
  const params = useParams();
  const navigate = useNavigate();
  const { chatId } = params;
  const [messageList, setMessageList] = useState({
    chat1: [],
    chat2: [],
    chat3: [],
  });
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
    setMessageList((prevMessageList) => ({
      ...prevMessageList,
      [chatId]: [...prevMessageList[chatId], newMsg],
    }));
  };

  
      
  useEffect(() => {
    messagesEnd.current?.scrollIntoView();

    let timeout;
    if (
      messageList[chatId]?.[messageList[chatId]?.length - 1]?.athuor === 'me'
    ) {
      timeout = setTimeout(() => {
        sendMessage("Hi, it`s just a robot","Robot", "Robot");
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [messageList]);

  useEffect(() => {
    console.log(messagesEnd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!messageList[chatId]) {
    return <Navigate to="/chats" replace />;
  }


  return (
    <div className="App">
    <div className="App-header">
     <ChatList/>
      <div className="App-wrapper">
          <div className="App-content">
            <MessageList messages={messageList[chatId]} />
          </div>
      <FormMui onSubmit={handleMessage}/>
      </div>
   </div>
</div>
  );
}


