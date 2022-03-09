import { ListItem} from "@mui/material";
import { Link} from "react-router-dom";
import DeleteButton from "./DeleteButton.js";

const ChatItem = ({chat, onDeleteChat})=>(
    <ListItem key={chat.id}>
    <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
    <DeleteButton id={chat.id} />
  </ListItem>

);

export default ChatItem;
 
