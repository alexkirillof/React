import { useEffect, useState} from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {Chat} from "../Chat";
import {ChatList} from "../ChatList";
import {Books} from "../Books/Books.js";
import {Home} from "../Home/Home.js";
import {PublicRoute} from "../PublicRoute/PublicRoute.js";
import {PrivateRoute} from "../PrivateRoute/PrivateRoute.js";
import Profile from "../Profile/index.js";
import { auth } from "../../services/firebase";
import "./Router.scss";


export const Router =()=>{
  const [authed, setAuthed] = useState(false);

  const unauthorize = () => {
    setAuthed(false);
  };
    
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });

    return unsubscribe;
  }, []);
  
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
            <Route path="/" element={<PublicRoute authed={authed}/>}>
                 <Route path="" element={<Home/>} />
                 <Route path="/signup" element={<Home isSignUp />} />
            </Route>
            <Route path="/books" element={<Books/>} />
            <Route path="chats" element={<ChatList/>}>
                 <Route path=":chatId" element={<Chat/>} />
            </Route>
            <Route path="/profile" element={<PrivateRoute authed={authed}/>}>
                 <Route path="" element={<Profile onLogout={unauthorize}/>}/>
             </Route>
            <Route element={<h2>404</h2>} />
          </Routes>
          </div>
      </BrowserRouter>
 
    )
};

export default Router;

