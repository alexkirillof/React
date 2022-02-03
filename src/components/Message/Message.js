import React from "react";
import "./Message.scss";
export class Message extends React.Component {
  render() {
    const { text,author } = this.props;
    return (
      <h4 className="msghead">
        {author + ":"+" "} {text}
      </h4>
    );
  }
}


