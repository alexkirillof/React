import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import App from "../../App";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import  Profile  from "../Profile/index.js"
import "./Router.scss"

const Home = ()=><h2>Home page</h2>


export const Router =()=>{
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
                <Route path="chats">
                    <Route index element={<ChatList/>}/>
                    <Route path=":chatId" element={<Chat/>}/>
                 </Route>
                 <Route path="profile" element={<Profile />}></Route>
            </Routes>
            </div>
        </BrowserRouter>
    )
}