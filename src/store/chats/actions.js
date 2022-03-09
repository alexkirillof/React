import { onChildAdded, onChildRemoved } from "@firebase/database";
import { chatsRef } from "../../services/firebase";

export const ADD_CHAT = "CHAT::ADD_CHAT";
export const DELETE_CHAT = "CHAT::DELETE_CHAT";

export const deleteChat =(id)=>({
   type:DELETE_CHAT,
   payload: id
})

export const addChat =(id,name)=>({
type:ADD_CHAT,
payload:{
    id,
    name
}
})


export const initChatsTracking = () => (dispatch) => {
    onChildAdded(chatsRef, (snapshot) => {
      console.log(snapshot.val());
      dispatch(addChat(snapshot.val().id, snapshot.val().name));
    });
  
    onChildRemoved(chatsRef, (snapshot) => {
      dispatch(deleteChat(snapshot.val().id));
    });
  };