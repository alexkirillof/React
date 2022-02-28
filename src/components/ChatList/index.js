import { List} from "@mui/material";
import { FormMui } from "../FormMui/FormMui";
import { addChat} from '../../store/chats/actions.js';
import { Outlet } from "react-router-dom";
import ChatItem from "./ChatItem.js";
import { useSelector, useDispatch } from 'react-redux';
import {selectChats}  from "../../store/chats/selectors.js";



export const ChatList = () => {
    const chats = useSelector(selectChats);
    const dispatch = useDispatch();
    
      const handleAddChat = (newChatName) =>{
        const newId = `chat-${Date.now()}`;
        dispatch(addChat(newId,newChatName));
     }
   
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