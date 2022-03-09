
import {useEffect,useRef,useState } from "react";
import "../../App.css";
import { MessageList } from "../MessageList/index.js";
import {FormMui} from "../FormMui/FormMui.js";
import { Navigate,  useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import {onChildAdded, onChildRemoved, onValue, push,set} from "@firebase/database";
import {getMessageListRefByChatId, getMessageRefById, getMessagesRefByChatId} from "../../services/firebase";



export function Chat() {
  const params = useParams();
  const { chatId } = params;

  const [messages, setMessages] = useState([]);
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
    // dispatch(addMessageWithThunk(chatId,newMsg))
    set(getMessageRefById(chatId, newMsg.id), newMsg);
  };

      
  useEffect(() => {
    const unsubscribe = onValue(getMessagesRefByChatId(chatId), (snapshot) => {
      if (!snapshot.val()?.empty) {
        setMessages(null);
      }
    });

    return unsubscribe;
  }, [chatId]);
  useEffect(() => {
    const unsubscribe = onChildAdded(
      getMessageListRefByChatId(chatId),
      (snapshot) => {
        console.log(snapshot.val());
        setMessages((prevMessages) => [...prevMessages, snapshot.val()]);
      }
    );
    return unsubscribe;
  }, [chatId]);

  useEffect(() => {
    const unsubscribe = onChildRemoved(
      getMessageListRefByChatId(chatId),
      (snapshot) => {
        console.log(snapshot.val());
        setMessages((prevMessages) =>
          prevMessages.filter(({ id }) => id !== snapshot.val()?.id)
        );
      }
    );

    return unsubscribe;
  }, [chatId]);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();
  }, [messages]);

  if (!messages) {
    return <Navigate to="/chats" replace />;
  }


  return (
    <div className="App">
    <div className="App-header">
      <div className="App-wrapper">
          <div className="App-content">
            <MessageList messages={messages} />
          </div>
      <FormMui onSubmit={handleMessage}/>
      </div>
   </div>
</div>
  );
}


