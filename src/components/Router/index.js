import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addChat, deleteChat } from '../../store/chats/actions.js';
import { useState} from "react";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import Profile from "../Profile/index.js";
import "./Router.scss";

const Home = ()=><h2>Home page</h2>

const initialChats = [
  {
    name: "Chat 1",
    id: "chat1",
  },
  {
    name: "Chat 2",
    id: "chat2",
  },
  {
    name: "Chat 3",
    id: "chat3",
  },
];

const initialMessages =  initialChats.reduce((acc,el) =>{
   acc[el.id]=[];
  return acc;
},{})

export const Router =()=>{
    
  // const [chatList,setChatList] = useState(initialChats);
  const [messages,setMessages] = useState(initialMessages);

  const chatList = useSelector(state=>state.chats);
  const dispatch = useDispatch();

  const handleAddMessage = (chatId,newMsg)=>{
    setMessages((prevMessageList) => ({
      ...prevMessageList,
      [chatId]: [...prevMessageList[chatId], newMsg],
    }));
  }

  const handleAddChat = (newChatName) =>{
     const newId = `chat-${Date.now()}`;
     
     const newChat = {
        id:newId,
        name:newChatName
     }
     dispatch(addChat(newId,newChatName));
    //  setChatList((prevChatList)=>[...prevChatList,newChat]);
     setMessages((prevMessages)=>({
       ...prevMessages,
       [newId]:[]
     }))
  }

  const handleDeleteChat = (idToDelete)=>{
    dispatch(deleteChat(idToDelete));

    setMessages((prevMessages)=>{
       const newMSgs = {...prevMessages};
       delete newMSgs[idToDelete];

       return newMSgs;
  })
  }


    return( 
        <BrowserRouter>
        <div className='App_wrapper'>
             <div className="Navigate">
                <NavLink to="/" className="link">
                Home 
                </NavLink>
                <NavLink to="/chats"  className="link">
                    Chats
                </NavLink>
                <NavLink to="/profile"  className="link" >
                    Profile
                </NavLink>
             </div>
          <Routes>
          <Route path="" element={<Home/>} />
            <Route path="chats" element={<ChatList onAddChat={handleAddChat} 
                                                   onDeleteChat={handleDeleteChat} 
                                                   chats={chatList}/>}>
              <Route path=":chatId" element={<Chat messages={messages} addMessage={handleAddMessage}/>} />
            </Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route element={<h2>404</h2>} />
          </Routes>
          </div>
      </BrowserRouter>
 
    )
};

export default Router;

