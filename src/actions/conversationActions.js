import {
  ADD_CONVERSATION,
  ASSIGN_CURRENT_CONVERSATION,
  CLEAR_CURRENT_CONVERSATION
} from '../types/conversationTypes';
const short = require('short-uuid');

export const addConversation = ({
  user_1 = null,
  user_2 = null,
  isPrivate = false,
  categoryId = null
}) => {
  return {
    type: ADD_CONVERSATION,
    payload: {
      id: short.generate(),
      user_1,
      user_2,
      categoryId,
      isPrivate,
      time: new Date()
    }
  };
};

export const assignCurrentConversation = ({
  userId = null,
  categoryId = null,
  currentUserId = null
}) => {
  return {
    type: ASSIGN_CURRENT_CONVERSATION,
    payload: categoryId || { userId, currentUserId }
  };
};

export const clearCurrentConversation = () => {
  return {
    type: CLEAR_CURRENT_CONVERSATION
  };
};
