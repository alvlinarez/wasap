import { ADD_MESSAGE, DELETE_MESSAGE } from '../types/messageTypes';
const short = require('short-uuid');

export const addMessage = ({
  senderId,
  conversationId,
  text,
  deleted = false
}) => {
  return {
    type: ADD_MESSAGE,
    payload: {
      id: short.generate(),
      senderId,
      conversationId,
      text,
      deleted,
      time: new Date()
    }
  };
};

export const deleteMessage = (id) => {
  return {
    type: DELETE_MESSAGE,
    payload: id
  };
};
