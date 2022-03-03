export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (chatId, newMsg) => ({
    type: ADD_MESSAGE,
    payload: {
      chatId,
      newMsg,
    },
  });



  
let timeout;
  export const addMessageWithThunk = (chatId, newMsg) => (dispatch, getState) => {
    dispatch(addMessage(chatId, newMsg));
  
    if (newMsg.author !== "Robot") {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const msgFromRobot = {
          text: "Hi, it`s just a robot",
          athuor: "Robot",
          id: `msg-${Date.now()}`,
        };
        dispatch(addMessage(chatId, msgFromRobot));
      }, 1000);
    }
  };


  // export const AUTHORS = {
  //   ME: "me",
  //   BOT: "bot",
  // };