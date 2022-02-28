import { Button } from "@mui/material";
import { useDispatch } from 'react-redux';
import { deleteChat} from '../../store/chats/actions.js';

const DeleteButton = ({ id}) => {
    const dispatch = useDispatch();
    const handleDeleteChat = ()=>{
        dispatch(deleteChat(id));
      }

    return <Button onClick = { handleDeleteChat } > X </Button>
};

export default DeleteButton;