import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
// import App from "../../App";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";

const Home = ()=><h2>Home page</h2>


export const Router =()=>{
    return(
        <BrowserRouter>
            <div>
                <NavLink to="/"
                 style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}
                >
                    home
                </NavLink>
            </div>
            <div>
                <NavLink to="/chats"
                style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}
                >
                    chats
                </NavLink>
            </div>
            <Routes>
                <Route path="" element={<Home></Home>} />
                <Route path="chats">
                    <Route index element={<ChatList/>}/>
                    <Route path=":chatId" element={<Chat/>}/>
                 </Route>
            </Routes>
        </BrowserRouter>
    )
}