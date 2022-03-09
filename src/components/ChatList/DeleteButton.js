import { remove, set } from "@firebase/database";
import { Button } from "@mui/material";
import { getChatsRefById } from "../../services/firebase";


const DeleteButton = ({id}) => {
    
  const handleDeleteChat = () => {
    // dispatch(deleteChat(id));
    // set(getChatsRefById(id), null);
    remove(getChatsRefById(id));
  };

    return <div onClick = { handleDeleteChat } > X </div>
};

export default DeleteButton;