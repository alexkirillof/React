import './Message.scss';

export const Message = (props)=>{
 return (
   <div>
     <header className="msghead">
         React App
       <h3>{props.message}</h3>
     </header>
     </div>
 );
}

