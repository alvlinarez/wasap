import {
  ADD_CONVERSATION,
  ASSIGN_CURRENT_CONVERSATION,
  CLEAR_CURRENT_CONVERSATION
} from '../types/conversationTypes';

const initialState = {
  currentConversation: {},
  conversations: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONVERSATION:
      return {
        ...state,
        conversations: [...state.conversations, action.payload]
      };
    case ASSIGN_CURRENT_CONVERSATION:
      return {
        ...state,
        currentConversation:
          state.conversations.find((c) => c.categoryId === action.payload) ||
          state.conversations.find(
            (c) =>
              (c.user_2 === action.payload.userId &&
                c.user_1 === action.payload.currentUserId) ||
              (c.user_1 === action.payload.userId &&
                c.user_2 === action.payload.currentUserId)
          )
      };
    case CLEAR_CURRENT_CONVERSATION:
      return {
        ...state,
        currentConversation: {}
      };
    default:
      return state;
  }
};
