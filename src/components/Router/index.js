import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import{Books} from "../Books/Books.js"
import Profile from "../Profile/index.js";
import "./Router.scss";

const Home = ()=><h2>Home page</h2>

export const Router =()=>{
    
  
    return( 
        <BrowserRouter>
        <div className='App_wrapper'>
             <div className="Navigate">
                <NavLink to="/" className="link">
                Home 
                </NavLink>
                <NavLink to="/books" className="link">
                Books 
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
            <Route path="/books" element={<Books/>} />  
            <Route path="chats" element={<ChatList/>}>
               <Route path=":chatId" element={<Chat/>} />
            </Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route element={<h2>404</h2>} />
          </Routes>
          </div>
      </BrowserRouter>
 
    )
};

export default Router;

