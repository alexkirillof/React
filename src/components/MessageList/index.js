import { Message } from "../Message/Message.js";

export const MessageList = ({ messages }) => {
  return messages.map((message) => (
    <div key={message.id}>
      <Message text={message.text} athuor={message.athuor} />
    </div>
  ));
};


