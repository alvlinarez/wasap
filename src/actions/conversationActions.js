import {
  ADD_CONVERSATION,
  ASSIGN_CURRENT_CONVERSATION
} from '../types/conversationTypes';
const short = require('short-uuid');

export const addConversation = ({
  users = [],
  isPrivate,
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
  idUser = null,
  idCategory = null
}) => {
  return {
    type: ASSIGN_CURRENT_CONVERSATION,
    payload: idUser || idCategory
  };
};
