import {
  ADD_CONVERSATION,
  ASSIGN_CURRENT_CONVERSATION,
  CLEAR_CURRENT_CONVERSATION
} from '../types/conversationTypes';
const short = require('short-uuid');

export const addConversation = ({
  users = null,
  isPrivate = false,
  categoryId = null
}) => {
  return {
    type: ADD_CONVERSATION,
    payload: {
      id: short.generate(),
      users,
      categoryId,
      isPrivate,
      time: new Date()
    }
  };
};

export const assignCurrentConversation = ({
  userId = null,
  categoryId = null
}) => {
  return {
    type: ASSIGN_CURRENT_CONVERSATION,
    payload: categoryId || userId
  };
};

export const clearCurrentConversation = () => {
  return {
    type: CLEAR_CURRENT_CONVERSATION
  };
};
