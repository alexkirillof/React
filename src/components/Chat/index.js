
import {useEffect,useRef } from "react";
import "../../App.css";
import { MessageList } from "../MessageList/index.js";
import {FormMui} from "../FormMui/FormMui.js";
import { Navigate,  useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import {selectMessages}  from "../../store/messages/selectors.js";
import {addMessageWithThunk} from "../../store/messages/actions.js"


export function Chat() {
  const params = useParams();
  const { chatId } = params;

  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

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
    dispatch(addMessageWithThunk(chatId,newMsg))
  };

      
  useEffect(() => {
    messagesEnd.current?.scrollIntoView();
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


