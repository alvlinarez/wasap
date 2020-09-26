import { ADD_CONVERSATION } from '../types/conversationTypes';
const short = require('short-uuid');

export const addConversation = ({ conversation, users = [], isPrivate }) => {
  return {
    type: ADD_CONVERSATION,
    payload: {
      id: short.generate(),
      conversation,
      users,
      isPrivate,
      time: new Date()
    }
  };
};
