import { onChildAdded, onChildRemoved, onValue, set } from "@firebase/database";
import { List} from "@mui/material";
import { useEffect, useState } from "react";
import { FormMui } from "../FormMui/FormMui";
import { addChat, initChatsTracking } from '../../store/chats/actions.js';
import { Outlet } from "react-router-dom";
import ChatItem from "./ChatItem.js";
import {
  chatsRef,
  getChatsRefById,
  getMessageRefById,
  getMessagesRefByChatId,
} from "../../services/firebase";
import { useSelector, useDispatch } from 'react-redux';
import {selectChats}  from "../../store/chats/selectors.js";



export const ChatList = () => {
    const chats = useSelector(selectChats);
    const dispatch = useDispatch();
    
      const handleAddChat = (newChatName) =>{
        const newId = `chat-${Date.now()}`;
        // dispatch(addChat(newId,newChatName));
        set(getChatsRefById(newId), { id: newId, name: newChatName });
        set(getMessagesRefByChatId(newId), { empty: true });
     }
   
     useEffect(() => {
      dispatch(initChatsTracking());
    }, []);
    return(
        <>
          <List>
            {chats.map((chat) => (
            <ChatItem key={chat.id} chat={chat}/>
            ))}
          </List>
          <FormMui onSubmit={handleAddChat}/>
          <Outlet />
        </>
      );
}