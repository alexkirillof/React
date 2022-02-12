import React from "react";
import "./Message.scss";
export const Message = ({ text, athuor }) => {
  return (
    <div>
     <h4 className="msghead" >
        {athuor + ":"+" "} {text}
      </h4>
    </div>
  );
};


