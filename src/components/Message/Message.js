import './Message.scss';

export const Message = ({message})=>{
 return (
   <div>
     <header className="msghead">
         React App
       <h3>{message}</h3>
     </header>
     </div>
 );
}

