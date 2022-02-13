import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Button from '@mui/material/Button/Button';
// import App from "../../App";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import {Profile} from "../Profile/index";
import "./Router.scss";

const Home = ()=><h2>Home page</h2>


export const Router =()=>{
    return(
        <div className="App">
        <div className='App__body'>
        <BrowserRouter>
        <div className='App__wrapper'>
          <ul className='Nav'>
            <li>
              <NavLink to="/" className='Nav__link'>
                <Button className='Nav__btn' size='large'>Home</Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className='Nav__link'>
                <Button className='Nav__btn' size='large'>My profile</Button>
              </NavLink>
            </li>
          </ul>
          </div>
          <div className='App__wrapper'>
          <Routes>
            <Route path="/" element={<ChatList />} />
            <Route path="chats" element={<ChatList />}>
              <Route path=":chatId" element={<Chat />} />
            </Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route element={<h2>404</h2>} />
          </Routes>
          </div>
      </BrowserRouter>
        </div>
    </div>
    )
}