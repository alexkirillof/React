import { List} from "@mui/material";
import { FormMui } from "../FormMui/FormMui"
import { Outlet } from "react-router-dom";
import ChatItem from "./ChatItem.js"



export const ChatList = ({chats, onAddChat,onDeleteChat}) => (
  <>
    <List>
      {chats.map((chat) => (
      <ChatItem chat={chat} onDeleteChat={onDeleteChat}/>
      ))}
    </List>
    <FormMui onSubmit={onAddChat}/>
    <Outlet />
  </>
);