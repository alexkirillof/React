import { useState, useEffect } from "react";
import "./App.css";
import { Message } from "./components/Message/Message.js";
import { Form } from "./components/Form/Form";


function App() {
  const [messageList, setMessageList] = useState([]);

  const handleMessage = (text) =>{
    const MyMsg = {
      text,
      author: "Me"
    }
    setMessageList((prevMessageList)=>[...prevMessageList,MyMsg])
  }

useEffect(() => {
  if(messageList[messageList.length-1]?.author === "Me") {
    setTimeout(()=>{
        const MyMsg = {
          text:"Hi, it`s just a robot",
          author: "Robot"
        }
      setMessageList((prevMessageList)=>[...prevMessageList,MyMsg])
      },1000)
    }
  }
 
, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
       {messageList.map((message)=>(
       <Message text={message.text}
                author={message.author}
       />))}
        <Form onSubmit={handleMessage} name="Send"></Form>
      </header>
    </div>
  );
}

export default App;